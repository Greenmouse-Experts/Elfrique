<template>
  <title>Create Trivia | Elfrique</title>
  <dash-header />

  <!--------Main Content--------->
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Create Trivia</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/organiser/dashboard" class="routers"
              ><a>Home</a></router-link
            >
          </li>
          <li class="breadcrumb-item active">Trivia</li>
          <li class="breadcrumb-item active">Create Trivia</li>
          <li class="breadcrumb-item active">Add Questions</li>
        </ol>
      </nav>
    </div>
    <!-- End Page Title -->
    <div class="container start-voting-div create-event-div">
      <div class="row justify-content-center">
        <div class="col-lg-11 start-voting-inner-div">
          <div
            class="start-vote-details alert alert-dismissible fade show"
            role="alert"
          >
            Select the trivia name to continue.
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div
            v-if="error"
            class="alert-danger alert alert-dismissible fade show"
            role="alert"
          >
            {{ error }}}}
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div
            v-if="message"
            class="alert-success alert alert-dismissible fade show"
            role="alert"
          >
            {{ message }}
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <form name="form" ref="form" @submit.prevent="createQuestions">
            <div class="row">
              <div class="col-lg-12 mt-4">
                <label for="vote option">Trivia Name</label>
                <select
                  v-model="triviaId"
                  name="gateway"
                  id="gateway"
                  aria-placeholder="Select your event name"
                  required
                >
                  <option value="select vote option" disabled>
                    Select Your Vote Option
                  </option>
                  <option :value="con.id" v-for="con in content" :key="con.id">
                    {{ con.title }}
                  </option>
                </select>
              </div>
              <!--Question DIV-->
              <div v-if="triviaId" class="col-lg-11 start-voting-inner-div">
                <div class="col-lg-11 event-details-header mt-3 text-center">
                  Question(s)
                </div>
                <div v-for="(con, idx) in questionForm" :key="idx" class="row">
                  <!--Question-->
                  <div class="col-lg-12 mt-4">
                    <label for="question">Question</label>
                    <textarea
                      v-model="con.questionDetails.question"
                      class="input"
                      cols="30"
                      rows="4"
                      placeholder="Type question here..."
                    ></textarea>
                  </div>
                  <!--Question Image-->
                  <div class="col-lg-12 mt-4">
                    <label for="question image"
                      >Question Image (optional)</label
                    >
                    <input
                      class="input"
                      type="file"
                      accept=".jpg, .jpeg, .png, .jfif"
                      v-on:change="handleFileUpload(idx)"
                    />
                    <small class="text-danger font-weight-bold"
                      >(only .jpg, .jpeg, .png, .jfif or .webp format)</small
                    >
                  </div>
                  <!--Nature of Question-->
                  <div class="col-lg-12 mt-4">
                    <label for="nature of question">Nature of Question</label>
                    <input
                      v-model="con.questionDetails.nature"
                      class="radio"
                      type="radio"
                      name="question"
                      value="multichoice"
                    />
                    <span>Multichoice</span>
                    <input
                      v-model="con.questionDetails.nature"
                      class="radio"
                      type="radio"
                      name="question"
                      value="theory"
                    />
                    <span>Theory</span>
                  </div>
                  <!--Option-->
                  <div
                    v-if="con.questionDetails.nature === 'multichoice'"
                    >
                  <div
                    v-for="(n, index) in 4"
                    :key="index"
                    class="
                      col-lg-12
                      alert
                      mt-2
                      alert-dismissible
                      optionDivQuestion
                    "
                  >
                    <label for="option">Option</label>
                    <input
                      v-model="con.options[index]"
                      class="input"
                      type="text"
                    />
                    <a
                      type="button"
                      class="btn btn-sm btn-danger"
                      v-on:click="removeOption"
                      >Remove</a
                    >
                    
                  </div>
                  <div class="col-lg-12 mt-3">
                    <label for="option">Answer</label>
                     <input
                      v-model="con.questionDetails.answer"
                      class="input"
                      type="text"
                    />
                </div>
                  <!--Add Option-->
                  <div class="col-lg-12">
                    <a
                      type="button"
                      class="btn-success btn-sm"
                      v-on:click="addOption"
                      >Add Option</a
                    >
                  </div>
                  </div>
                  <!--Add New Question-->
                  <div class="col-lg-12 mt-4">
                    <a
                      type="button"
                      class="btn-primary btn-lg"
                      v-on:click="addQuestion"
                      >Add New Question <i class="bi bi-plus-circle-fill"></i
                    ></a>
                  </div>
                </div>
              </div>
              <!--Submit Trivia Button-->
              <div class="col-lg-11 mt-4">
                <button
                  type="submit"
                  class="btn btn-success"
                  :disabled="loading"
                >
                  Submit Question(s)<span
                    v-show="loading"
                    class="spinner-border spinner-border-sm"
                  ></span>
                </button>
              </div>
            </div>
          </form>
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
import TriviaService from "../../service/trivia.service";
export default {
  name: "Elfrique",
  components: {
    "dash-header": Header,
    "dash-footer": Footer,
  },
  data() {
    return {
      content: "",
      triviaId: "",
      numberOFOption: 0,
      numberOfQuestion: 1,
      file: "",
      error: "",
      loading: false,
      message: "",
      questionForm: [{
        questionDetails: {
            question: "",
            nature: "",
            answer: "",
          },
          options: [],
          file: "",
      }]
    };
  },

  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    /*questionForm: function () {
      let questionForm = [];
      for (let i = 0; i < this.numberOfQuestion; i++) {
        questionForm.push({
          questionDetails: {
            question: "",
            nature: "multichoice",
            answer: "",
          },
          options: [],
          file: "",
        });
      }

      return questionForm; 
    }, */
  },
  created() {
    if (!this.loggedIn) {
      this.$router.push("/login");
    }

    TriviaService.getTrivias().then((response) => {
      this.content = response.data.trivia;
    });
  },

  methods: {
    createQuestions() {
      this.loading = true;
      console.log(this.questionForm);

      if (this.questionForm) {
        for (let i = 0; i < this.numberOfQuestion; i++) {
          let formData = new FormData();
          formData.append("image", this.questionForm[i].file);
          formData.append(
            "questionDetails[question]",
            this.questionForm[i].questionDetails.question
          );
          formData.append(
            "questionDetails[nature]",
            this.questionForm[i].questionDetails.nature
          );
          formData.append(
            "questionDetails[answer]",
            this.questionForm[i].questionDetails.answer
          );
          for (let j = 0; j < this.questionForm[i].options.length; j++) {
            formData.append(
              "options[" + j + "]",
              this.questionForm[i].options[j]
            );
          }

          TriviaService.addQuestion(formData, this.triviaId).then(
            (response) => {
              console.log(response);
              this.message = "Question(s) added successfully";
              this.loading = false;
              this.$refs.form.reset();
              window.scrollTo(0, 0);
            },

            (error) => {
              this.error = error.response.data.message;
              this.loading = false;
              console.log(error);
              window.scrollTo(0, 0);
            }
          );
        }
      }
    },

    handleFileUpload(n) {
      this.questionForm[parseInt(n)].file = this.$refs.file[n].files[0];
    },
    addOption() {
      this.numberOFOption++;
    },
    removeOption() {
      this.numberOFOption--;
    },

    addQuestion() {
      this.numberOfQuestion++;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>