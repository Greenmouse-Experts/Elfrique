<template>
  <title>
    Trivia Management System | Elfrique – Complete Event Management System
  </title>

        <template v-if="isLoading">
    <LoaderVue loaderImage center /> 
  </template>

  <template v-else>

  <elfrique-header />

  <section class="voting-content trivia-content">
    <div class="container header-cont">
      <div class="row">
        <div class="col-md-4">
          <div class="img-area">
            <img :src="trivia.image" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="text-title-area">
            <h1>{{ trivia.title }}</h1>
            <small
              >Organised by :
              <span
                >{{ trivia.adminuser.profile.firstname }}
                {{ trivia.adminuser.profile.lastname }}</span
              ></small
            >
            <div class="details-header">
              <h5>Price</h5>
              <p><i class="bi bi-credit-card-fill"></i> : {{ trivia.type }}</p>
              <h5>Duration</h5>
              <p><i class="bi bi-alarm"></i> : {{ trivia.duration }} Minutes</p>
            </div>
            <div class="details-social">
              <h5>Share on:</h5>
              <ShareNetwork
                network="facebook"
                :url="currentUrl"
                :title="trivia.title"
                :description="trivia.details"
                :quote="trivia.title"
                :hashtags="'Elfrique, Trivia, Quiz,' + trivia.title"
              >
                <img src="@/assets/images/share-facebook.png" />
              </ShareNetwork>
              <ShareNetwork
                network="whatsapp"
                :url="currentUrl"
                :title="trivia.title"
                :description="trivia.details"
              >
                <img src="@/assets/images/share-whatsapp.png" />
              </ShareNetwork>
              <ShareNetwork
                network="telegram"
                :url="currentUrl"
                :title="trivia.title"
                :description="trivia.details"
              >
                <img src="@/assets/images/share-telegram.png" />
              </ShareNetwork>
              <ShareNetwork
                network="twitter"
                :url="currentUrl"
                :title="trivia.title"
                twitter-user="@elfrique"
                :hashtags="'Elfrique, Trivia, Quiz,' + trivia.title"
              >
                <img src="@/assets/images/share-twitter.png" />
              </ShareNetwork>
              <ShareNetwork
                network="email"
                :url="currentUrl"
                :title="trivia.title"
                :description="trivia.details"
              >
                <img src="@/assets/images/share-email.png" />
              </ShareNetwork>
            </div>
          </div>
        </div>
        <div class="col-md-2 justify-content-center text-center">
          <div class="counter-div">
            <div class="icon">
              <i class="bi bi-alarm-fill"></i>
            </div>
            <!-- <div class="boxes days">
                  <span class="title">Days</span> <br>
                  <span id="days"></span>
              </div>
              <div class="boxes hours">
                  <span class="title">Hours</span> <br>
                  <span id="hours"></span>
              </div> -->
            <div class="boxes minutes">
              <span class="title">Min</span> <br />
              <span>{{ countdown.minutes }}</span>
            </div>
            <div class="boxes seconds">
              <span class="title">Sec</span> <br />
              <span>{{ countdown.seconds }}</span>
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-12 mt-3 quiz-box">
          <span style="color: red; text-align: center">{{ errMessage }}</span>
          <form>
            <div class="question mb-4">
              <div v-for="(question, index) in questions" :key="question.id">
                <div v-show="index === questionIndex">
                  <h1>{{ question.question }}</h1>
                  <div
                    v-for="opt in question.questionOptions"
                    :key="opt.id"
                    class="p-2"
                  >
                    <input
                      v-model="check"
                      @change="selectOption(opt)"
                      type="radio"
                      v-bind:name="index"
                      :value="opt"
                    />
                    <span>{{ opt.option }}</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div>
            <button
              v-if="questionIndex > 0"
              @click="prev"
              :disabled="disableBtn"
            >
              Previous
            </button>

            <button
              style="margin-left: 20px"
              v-if="questionIndex < questions.length - 1"
              @click="next"
              :disabled="disableBtn"
            >
              Next
            </button>
            <button
              v-if="questionIndex === questions.length - 1"
              style="margin-left: 30px"
              @click="submitQuiz"
              type="submit"
              :disabled="disableBtn"
            >
              Submit Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <elfrique-footer />
  </template>
</template>

<script>
  import Header from "./elfrique-header.vue";
  import Footer from "./elfrique-footer.vue";
  import moment from "moment";
  import TriviaService from "../service/trivia.service";
  import Swal from "sweetalert2";
  import LoaderVue from './components/Loader.vue';
  import { error } from "jquery";

  export default {
    name: "Elfrique",
    components: {
      "elfrique-header": Header,
      "elfrique-footer": Footer,
      LoaderVue,
      Swal,
    },
    data() {
      return {
        trivia: "",
        loading: false,
        isLoading: true,
        questions: "",
        answer: {
          playerEmail: "",
          trivia_answer: [],
        },
        questionIndex: 0,
        check: "",
        errMessage: "",
        ended: false,
        endDate: "",
        countdown: {
          minutes: 0,
          seconds: 0,
        },
        disableBtn: false,
        timeUpMessage: "",
      };
    },
    computed: {
      player() {
        return this.$store.state.vote.player;
      },
      currentUrl() {
        return window.location.href;
      },
    },
    created() {
      const trivia = JSON.parse(window.localStorage.getItem("triviaPlayer"));
      this.answer.playerEmail = trivia.email;

      TriviaService.getSingleTrivia(this.$route.params.id)
        .then((response) => {
          this.trivia = response.data.trivia;
          this.questions = response.data.trivia.questions;
          this.getCountDown();
          this.isLoading = false;
        })
        .then(() => {
          if (this.player.id == null) {
            // this.$router.push("/trivia-content/" + this.trivia.id);
          }
        });
    },
    methods: {
      startQuiz() {
        this.$router.push("/trivia-content-quiz/" + this.trivia.id);
      },
      next() {
        this.questionIndex++;
      },
      // Go to previous question
      prev() {
        this.questionIndex--;
      },
      selectOption(index) {
        const elementIndex = this.answer.trivia_answer.findIndex(
          (obj) => obj.questionId === index.questionId
        );
        if (elementIndex == -1) {
          this.answer.trivia_answer.push({
            questionId: index.questionId,
            answer: index.option,
          });
        } else {
          this.answer.trivia_answer[elementIndex].answer = index.option;
        }
      },
      submitQuiz() {
        this.loading = true;
        if (this.check === "") {
          Swal.fire({
            icon: "error",
            text: `You have already attempted this Trivia, please enter another email to continue`,
            confirmButtonText: "Ok",
          });
        } else {
          TriviaService.answerTrivia(this.trivia.id, this.answer).then(
            (res) => {
              this.loading = false;
              let data = res.data.data;
              localStorage.setItem("TriviaResult", JSON.stringify(data));
              this.$router.push({ name: "TriviaResult" });
            }
          );
        }
      },
      getCountDown() {
        const currentDate = new Date();
        const oldDateObj = currentDate.toISOString();

        var newDateObj = moment(oldDateObj).add(Number(this.trivia.duration), "m").format();

        var current = moment().format();

        // make it a moment object End
        var event = moment(newDateObj);

        // get current time/date
        var current = moment().format();

        if (current >= newDateObj) {
          this.ended = true;
          this.countdown.minutes = 0;
          this.countdown.seconds = 1;
        } else {
          this.ended = false;
          // get difference between event and current
          var diffTime = event.diff(current);

          // let moment.js make the duration out of the timestamp
          var duration = moment.duration(diffTime, "milliseconds", true);

          // Interval
          var interval = 1000;
          setInterval(() => {
            duration = moment.duration(duration - interval, "milliseconds");

            if (duration.minutes() >= 0 && duration.seconds() >= 0) {
              this.countdown.minutes = duration.minutes();
              this.countdown.seconds = duration.seconds();
            }

            if (duration.minutes() === 0 && duration.seconds() === 0) {
              this.countdown.minutes = 0;
              this.countdown.seconds = 0;
              TriviaService.answerTrivia(this.trivia.id, this.answer).then(
                (res) => {
                  this.loading = false;
                  let data = res.data.data;
                  localStorage.setItem("TriviaResult", JSON.stringify(data));
                  this.$router.push({ name: "TriviaResult" });
                }
              )
              this.disableBtn = true;
              Swal.fire({
                icon: "error",
                text: `Time is up, Submitting trivia...`,
                timer: 2000,
                showCancelButton: false,
                showConfirmButton: false
              });
            }
          }, interval);
        }
      },
    },
    mounted() {
      window.scrollTo(0, 0);
    },
  };
</script>
