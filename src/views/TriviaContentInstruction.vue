<template>
  <title>
    Trivia Management System | Elfrique – Complete Event Management System
  </title>
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
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-12 instructions">
          <h1>Testing for Wipe Out Naija - Trivia</h1>
          <p>
            Hello {{ player.name }}, thank you for showing interest in
            participating in {{ trivia.title }}).
          </p>
          <p>
            Please before you start, take your time to go through the
            instruction(s) below. Your time starts as soon as you click the
            start button, so please ensure that you are ready to take it befor
            you click.
          </p>
          <h1 class="mt-4">Instruction(s)</h1>
          <p>{{ trivia.instruction }}</p>
          <form>
            <button type="button" v-on:click="startQuiz">Start Quiz</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <elfrique-footer />
</template>

<script>
import Header from "./elfrique-header.vue";
import Footer from "./elfrique-footer.vue";
import TriviaService from "../service/trivia.service";
export default {
  name: "Elfrique",
  components: {
    "elfrique-header": Header,
    "elfrique-footer": Footer,
  },
  data() {
    return {
      trivia: "",
      loading: false,
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
    TriviaService.getSingleTrivia(this.$route.params.id)
      .then((response) => {
        this.trivia = response.data.trivia;
        console.log(this.trivia);
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
  },

  mounted() {
    console.log(this.player);
    window.scrollTo(0, 0);
  },
};
</script>