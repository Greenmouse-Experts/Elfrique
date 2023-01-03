<template>
  <title>Result Setting | Elfrique</title>
  <dash-header />

  <!--------Main Content--------->
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Result Setting</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/organiser/dashboard" class="routers"
              ><a>Home</a></router-link
            >
          </li>
          <li class="breadcrumb-item active">Voting</li>
          <li class="breadcrumb-item active">Result Setting</li>
        </ol>
      </nav>
    </div>
    <!-- End Page Title -->

    <div class="container start-voting-div">
      <div class="row justify-content-center">
        <div class="col-lg-10 start-voting-inner-div">
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
              @click="message = null"
            ></button>
          </div>

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
              @click="error = null"
            ></button>
          </div>

          <form @submit.prevent="display = true">
            <div class="row">
              <div class="col-lg-12 mt-4">
                <select name="gateway" id="gateway" v-model="voteContent">
                  <option value="select vote option" disabled>
                    Select Your Vote Option
                  </option>
                  <option
                    :value="con.title"
                    v-for="con in content"
                    :key="con.id"
                  >
                    {{ con.title }}
                  </option>
                </select>
              </div>
              <div class="col-lg-12 mt-4">
                <button type="submit" :disabled="display">Submit</button>
              </div>
            </div>
          </form>

          <div class="row justify-content-center" v-if="display">
            <div
              class="col-lg-10 mt-5 d-flex flex-column justify-content-center"
            >
              <label
                for="category selection mb-3"
                style="text-align: center; font-weight: bold"
                >Settings for {{ voteContent }}</label
              >
              <div class="col-lg-12 d-flex justify-content-center mt-3">
                <div class="col-lg-4 mb-1">
                  <input
                    class="radio mt-1"
                    type="checkbox"
                    name="category"
                    id="pageant"
                    :value="payload.number_result_display"
                    v-model="payload.number_result_display"
                    style="width: 15px; height: 15px"
                  />
                  <span class="mx-2 -my-1">Result Number Display</span>
                </div>
                <div class="col-lg-4 mr-2">
                  <input
                    class="radio mt-1"
                    type="checkbox"
                    name="category"
                    id="pageant"
                    :value="payload.percentage_result_display"
                    v-model="payload.percentage_result_display"
                    style="width: 15px; height: 15px"
                  />
                  <span class="mx-2">Percentage Display</span>
                </div>
                <div class="col-lg-4">
                  <input
                    class="radio mt-1"
                    type="checkbox"
                    name="category"
                    id="pageant"
                    :value="payload.progress_result_display"
                    v-model="payload.progress_result_display"
                    style="width: 15px; height: 15px"
                  />
                  <span class="mx-2">Progress Bar Display</span>
                </div>
              </div>
              <div
                class="mt-3 col-lg-12 start-voting"
                style="text-align: center"
              >
                <form @submit.prevent="updateSettings">
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
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

  export default {
    name: "Elfrique",
    components: {
      "dash-header": Header,
      "dash-footer": Footer,
    },
    data() {
      return {
        content: [],
        voteContent: "",
        display: false,
        payload: {
          number_result_display: false,
          progress_result_display: false,
          percentage_result_display: false,
        },
        message: null,
        error: null,
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

      VoteService.getContests().then((response) => {
        this.content = response.data.voteContest;
      });
    },

    methods: {
      updateSettings() {
        let id = "";
        this.content.filter((value) => {
          if (value.title === this.voteContent) {
            id = value.id;
          }
        });

        VoteService.resultSetting(id, this.payload)
          .then((response) => {
            this.message = response.data.message;
            this.voteContent = "";
            this.payload.number_result_display = false;
            this.payload.progress_result_display = false;
            this.payload.percentage_result_display = false;
            window.scrollTo(0, 0);
          })
          .catch((err) => {
            this.error = err.response.data.message;
            window.scrollTo(0, 0);
          });
      },
    },

    mounted() {
      window.scrollTo(0, 0);
    },
  };
</script>
