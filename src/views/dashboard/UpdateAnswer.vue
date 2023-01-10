<template>
  <title>Update Answer | Elfrique</title>
  <dash-header />

  <!--------Main Content--------->
  <main id="main" class="main">
    <div class="pagetitle">
      <h1 class="create">Update Answer</h1>
      <nav>
        <!-- HAMZAT UPDATE ON REGISTRATION -->
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/organiser/dashboard" class="routers"
              ><a>Home</a></router-link
            >
          </li>
          <li class="breadcrumb-item active">Trivia</li>
          <li class="breadcrumb-item active">Update Answer</li>
        </ol>
      </nav>
    </div>
    <!-- End Page Title -->

    <!-- HAMZAT UPDATE ON REGISTRATION ENDS HERE -->

    <div class="container create-refer-div">
      <div class="row justify-content-center">
        <div class="col-lg-12 start-voting-inner-div">
          <form @submit.prevent="getTrivia">
            <div class="row">
              <div class="col-lg-12 mt-2">
                <label for="number of contestants">Trivia Option</label>
                <select v-model="triviaId" id="gateway" required>
                  <option v-for="item in trivias" :key="item" :value="item.id">
                    {{ item.title }}
                  </option>
                </select>
              </div>
              <div class="col-lg-12 mt-4">
                <button
                  type="submit"
                  value="proceed"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl container">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              <b>Update Answers</b>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-12">
                <div class="row">
                  <form @submit.prevent="updateAnswers">
                    <div class="col-md-12">
                      <div class="connet" v-for="(q, i) in questions" :key="i">
                        <div class="row">
                          <div class="col-md-12 mb-1 input">
                            {{ q.question }}
                          </div>
                        </div>
                        <div class="row mb-3">
                          <input
                            class="searchbox-input input"
                            type="text"
                            v-model="q.answer"
                            placeholder="Search trivia here ..."
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="connet">
                        <button type="submit">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </main>

  <dash-footer />
</template>
<style scoped src="@/assets/css/dashStyle.css"></style>
<script>
  import Header from "./dash-header.vue";
  import Footer from "./dash-footer.vue";
  import VoteService from "../../service/vote.service";
  import triviaService from "../../service/trivia.service";
  import Swal from "sweetalert2";

  export default {
    name: "Elfrique",
    components: {
      "dash-header": Header,
      "dash-footer": Footer,
      Swal,
    },
    data() {
      return {
        content: "",
        contestId: "",
        NumberOfCategories: "",
        message: "",
        error: "",
        loading: false,
        loading: false,
        trivias: [],
        questions: [],
        triviaId: "",
      };
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      },
      categoryForm: function () {
        let categoryForm = [];
        for (let i = 0; i < this.NumberOfCategories; i++) {
          categoryForm.push({
            name: "",
            description: "",
          });
        }
        return categoryForm;
      },
    },

    created() {
      if (!this.loggedIn) {
        this.$router.push("/login");
      }

      triviaService.getAllTrivias().then((response) => {
        this.trivias = response.data.trivias;
      });
    },

    methods: {
      addCategory() {
        this.loading = true;

        if (this.categoryForm) {
          for (let i = 0; i < this.NumberOfCategories; i++) {
            let formData = new FormData();
            formData.append("name", this.categoryForm[i].name);
            formData.append("description", this.categoryForm[i].description);

            VoteService.addCategory(this.categoryForm[i], this.contestId).then(
              (response) => {
                console.log(response);
                this.$store.dispatch(
                  "vote/getMessage",
                  "Contest created successfully"
                );
                this.message = "categories created successfully";
                this.loading = false;
              },

              (error) => {
                this.error = error.response.data.message;
                this.loading = false;
                console.log(error);
              }
            );
          }
        }
      },

      getTrivia() {
        triviaService.getSingleTrivia(this.triviaId).then((response) => {
          this.questions = response.data.trivia.questions;
          console.log(response.data.trivia);
        });
      },
    },
    mounted() {
      window.scrollTo(0, 0);
    },
  };
</script>
