<template>
  <title>
    Trivia Management System | Elfrique – Complete Event Management System
  </title>
  <elfrique-header />

  <!--Service Header-->
  <section class="service-header">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <h1>Trivia Management System</h1>
          <p>
            Our trivia system allows event organisers to create custom quiz
            questions, riddles, puzzles or normal question & answer sessions for
            their event. This trivia system helps event organisers engage their
            audience better as their event progresses.
          </p>
        </div>
        <div class="col-md-5 text-center">
          <div class="img-area">
            <img src="@/assets/images/service-trivia-img.png" />
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-lg-11 mb-5 search-section text-center">
          <form>
            <input
              class="searchbox-input input"
              type="text"
              placeholder="Search trivia here ..."
            />
            <input
              class="search-input input"
              type="submit"
              value="Search &#128269;"
            />
          </form>
        </div>
      </div>
    </div>
  </section>
  <!--Service Header Ends-->

  <!--Service Trivia System-->
  <section class="event-form-content">
    <div class="container">
      <div class="row">
        <div class="col-md-3 py-2" v-for="con in triviaContent" :key="con.id">
          <div class="card">
            <img :src="con.image" class="card-img-top" />
            <div class="card-body">
              <p class="card-text main-text">
                <i class="bi bi-patch-question-fill"></i> : {{ con.title }}
              </p>
              <p class="card-text card-text-after">
                <i class="bi bi-credit-card-fill"></i> : {{ con.type }}
              </p>
              <router-link :to="'/trivia-content/' + con.id" class="routers"
                ><a class="btn-view">Play Quiz</a></router-link
              >
            </div>
          </div>
        </div>

        <div class="p-5 mb-5" v-if="isLoading">
          <LoaderVue />
        </div>
        <!-- <div class="col-md-3 py-2">
                    <div class="card">
                        <img src="@/assets/images/trivia-listimg2.jpg" class="card-img-top">
                        <div class="card-body">
                            <p class="card-text main-text"><i class="bi bi-patch-question-fill"></i> : TIFF 6.0 FAMILY GAME SHOW</p>
                            <p class="card-text card-text-after"><i class="bi bi-credit-card-fill"></i> : 100</p>
                            <router-link to="#" class="routers"><a class="btn-view">Play Quiz</a></router-link>
                        </div>
                    </div>
                </div> -->
      </div>
    </div>
  </section>

  <elfrique-newsletter />
  <elfrique-footer />
</template>

<script>
  import Newsletter from "./elfrique-newsletter.vue";
  import Header from "./elfrique-header.vue";
  import Footer from "./elfrique-footer.vue";
  import TriviaService from "../service/trivia.service";
  import LoaderVue from "./components/Loader.vue";

  export default {
    name: "Elfrique",
    components: {
      "elfrique-header": Header,
      "elfrique-newsletter": Newsletter,
      "elfrique-footer": Footer,
      LoaderVue,
    },
    data() {
      return {
        triviaContent: "",
        isLoading: true,
      };
    },
    created() {
      TriviaService.getAllTrivias().then((response) => {
        this.triviaContent = response.data.trivias;
        this.isLoading = false;
        console.log(this.triviaContent);
      });
    },

    methods: {
      format_date(value) {
        if (value) {
          return moment(String(value)).format("MM/DD/YYYY hh:mm");
        }
      },

      getTrivia(contest) {
        this.$store.dispatch("vote/getSingleTrivia", contest).then(() => {
          //console.log(this.$store.state.vote.voteContent)
          /* this.$router.push('/voting-content'); */
        });
      },
    },
    mounted() {
      window.scrollTo(0, 0);
    },
  };
</script>
