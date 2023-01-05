<template>
  <title>Update Trivia | Elfrique</title>
  <dash-header />

  <!--------Main Content--------->
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Update Trivia</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/organiser/dashboard" class="routers"
              ><a>Home</a></router-link
            >
          </li>
          <li class="breadcrumb-item active">Trivia</li>
          <li class="breadcrumb-item active">Update Trivia</li>
        </ol>
      </nav>
    </div>
    <!-- End Page Title -->

    <div class="container start-voting-div">
      <div class="row justify-content-center">
        <div class="col-lg-11 start-voting-inner-div">
          <div
            v-if="error"
            class="alert-danger alert alert-dismissible fade show"
            role="alert"
          >
            {{ error }}
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
            .... Add Questions your trivia.
            <router-link to="/organiser/add-Question" class="routers"
              ><strong>Click Here!</strong></router-link
            >
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>

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
                <button type="submit" value="proceed">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="container start-voting-div create-event-div" v-if="display">
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <div
            class="start-vote-details alert alert-dismissible fade show"
            role="alert"
          >
            <span class="text-danger text-lg"><strong>NOTE*</strong></span>
            <br />
            <li class="bg-light py-2 px-2 text-dark mt-2">
              Trivia title is the title for the trivia you want to setup, which
              will also serve as identifier for this trivia
            </li>
            <li class="bg-light py-2 px-2 text-dark">
              Trivia details are the necessary details the user answering should
              see when he/she navigates to the trivia page
            </li>
            <li class="bg-light py-2 px-2 text-dark">
              Instruction(s) are the necessary steps or guideline the user is
              shown before he starts answering the questions
            </li>
            <li class="bg-light py-2 px-2 text-dark">
              Duration is how long the user is allowed to answer the questions
              after which it is automatically submitted if the time elapses and
              the user has not clicked the submit button, it is to be provided
              in minutes
            </li>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <form name="form" @submit.prevent="createTrivia">
          <div class="row justify-content-center">
            <div class="col-lg-11 start-voting-inner-div">
              <div class="row">
                <!--Trivia Title-->
                <div class="col-lg-12 mt-2">
                  <label for="trivia title">Trivia Title</label>
                  <input
                    v-model="triviaContent.title"
                    class="input"
                    type="text"
                    placeholder="Enter trivia title"
                  />
                </div>
                <!--Trivia Image-->
                <div class="col-lg-12 mt-4">
                  <label for="trivia image">Trivia Image</label>
                  <input
                    class="input"
                    type="file"
                    ref="file"
                    accept=".jpg, .jpeg, .png, .jfif"
                    v-on:change="handleFileUpload()"
                  />
                  <small class="text-danger font-weight-bold"
                    >(only .jpg, .jpeg, .png, .jfif or .webp format)</small
                  >
                </div>
                <!--Form Type-->
                <div class="col-lg-12 mt-4">
                  <label for="trivia type">Trivia Type</label>
                  <input
                    v-model="triviaContent.type"
                    class="radio"
                    type="radio"
                    name="trivia"
                    value="paid"
                    id="paid"
                  />
                  <span>Paid</span>
                  <input
                    v-model="triviaContent.type"
                    class="radio"
                    type="radio"
                    name="trivia"
                    value="free"
                    id="free"
                  />
                  <span>Free</span>
                </div>

                <div class="col-lg-12 mt-4" v-if="triviaContent.type == 'paid'">
                  <label for="trivia type">Price</label>
                  <input
                    v-model="triviaContent.amount"
                    class="input"
                    type="number"
                    name="trivia"
                    id="paid"
                  />
                </div>

                <div class="col-lg-12 mt-4" v-if="triviaContent.type == 'paid'">
                  <label for="trivia type">Payment Method</label>
                  <select v-model="triviaContent.method" id="" class="input">
                    <option value="paystack">Paystack</option>
                    <option value="flutterwave">Flutterwave</option>
                    <option value="aimstoget">AimsToGet</option>
                    <option value="interswitch">Interswitch</option>
                  </select>
                </div>
                <!--Trivia Details-->
                <div class="col-lg-12 mt-4">
                  <label for="trivia details">Trivia Details</label>
                  <textarea
                    v-model="triviaContent.details"
                    class="input"
                    cols="30"
                    rows="4"
                    placeholder="Enter details here..."
                  ></textarea>
                </div>
                <!--Instruction-->
                <div class="col-lg-12 mt-4">
                  <label for="instruction">Instruction(s)</label>
                  <textarea
                    v-model="triviaContent.instruction"
                    class="input"
                    cols="30"
                    rows="4"
                    placeholder="Type instruction..."
                  ></textarea>
                </div>
                <!--Duration-->
                <div class="col-lg-12 mt-4">
                  <label for="duration">Duration (in minutes)</label>
                  <input
                    v-model="triviaContent.duration"
                    class="input"
                    type="number"
                  />
                </div>
                <!--Number of Times-->
                <div class="col-lg-12 mt-4">
                  <label for="number of times"
                    >Number of Times User Can Answer</label
                  >
                  <input
                    v-model="triviaContent.numberoftimes"
                    class="radio"
                    type="radio"
                    name="times"
                    value="once"
                    id="once"
                  />
                  <span>Once</span>
                  <input
                    v-model="triviaContent.numberoftimes"
                    class="radio"
                    type="radio"
                    name="times"
                    value="unlimited"
                    id="unlimited"
                  />
                  <span>Unlimited</span>
                </div>
              </div>
            </div>

            <!--Submit Trivia Button-->
            <div class="col-lg-11 mt-4">
              <button type="submit" class="btn btn-success" :disabled="loading">
                Create Trivia<span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
                ></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>

  <dash-footer />
</template>
<style scoped src="@/assets/css/dashStyle.css"></style>
<script>
  import Header from "./dash-header.vue";
  import Footer from "./dash-footer.vue";
  import triviaService from "../../service/trivia.service";

  export default {
    name: "Elfrique",
    components: {
      "dash-header": Header,
      "dash-footer": Footer,
    },

    data() {
      return {
        trivias: [],
        triviaId: "",
        ticketBooked: [],
        message: "",
        error: "",
        loading: false,
        display: false,
        triviaContent: {
          title: "",
          details: "",
          instruction: "",
          duration: "",
          type: "",
          numberoftimes: "",
          amount: 0,
          method: "paystack",
        },
        file: "",
      };
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
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
      getTrivia() {
        triviaService.getSingleTrivia(this.triviaId).then((response) => {
          this.triviaContent.title = response.data.trivia.title;
          this.triviaContent.details = response.data.trivia.details;
          this.triviaContent.instruction = response.data.trivia.instruction;
          this.triviaContent.duration = response.data.trivia.duration;
          this.triviaContent.type = response.data.trivia.type;
          this.triviaContent.numberoftimes = response.data.trivia.numberoftimes;
          this.triviaContent.amount = response.data.trivia.amount;
          this.triviaContent.method = response.data.trivia.paymentgateway;

          this.display = true;
        });
      },

      createTrivia() {
        this.loading = true;

        let formData = new FormData();
        formData.append("image", this.file);
        formData.append("title", this.triviaContent.title);
        formData.append("details", this.triviaContent.details);
        formData.append("instruction", this.triviaContent.instruction);
        formData.append("duration", this.triviaContent.duration);
        formData.append("type", this.triviaContent.type);
        formData.append("amount", this.triviaContent.amount);
        formData.append("paymentgateway", this.triviaContent.method);
        formData.append("numberoftimes", this.triviaContent.numberoftimes);

        triviaService.updateTrivia(this.triviaId, formData).then(
          (response) => {
            this.message = "Trivia Created Successfully";
            this.loading = false;
            window.scrollTo(0, 0);
            this.display = false;
          },
          (error) => {
            console.log(error);
            this.error = error.response.data.message;
            console.log(error.response.data);
            window.scrollTo(0, 0);

            this.loading = false;
          }
        );
      },

      handleFileUpload() {
        this.file = this.$refs.file.files[0];
      },
    },

    mounted() {
      window.scrollTo(0, 0);
    },
  };
</script>
