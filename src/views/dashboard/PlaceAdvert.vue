<template>
  <title>Place Advert | Elfrique</title>
  <dash-header />

  <!--------Main Content--------->
  <main id="main" class="main">
    <div class="pagetitle">
      <h1 class="create">Place Advert Event</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/organiser/dashboard" class="routers"
              ><a>Home</a></router-link
            >
          </li>
          <li class="breadcrumb-item active">Vendor</li>
          <li class="breadcrumb-item active">Place Advert</li>
        </ol>
      </nav>
    </div>
    <!-- End Page Title -->

    <div class="container start-voting-div create-event-div">
      <div class="row justify-content-center">
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
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
        <form name="form" @submit.prevent="createAds">
          <div class="row justify-content-center">
            <div class="col-lg-12 start-voting-inner-div">
              <div class="row">
                <!--Advert Ttile-->
                <div class="col-lg-6 mt-4">
                  <label>Advert Title</label>
                  <input
                    v-model="advert.title"
                    class="input"
                    type="text"
                    placeholder="e.g Event Decorator"
                  />
                </div>
                <!--Duration-->
                <div class="col-lg-6 mt-4">
                  <label>Duration<small>(days)</small></label>
                  <input
                    v-model="advert.duration"
                    class="input"
                    type="number"
                  />
                </div>
                <!--Link-->
                <div class="col-lg-6 mt-4">
                  <label>Advert Link</label>
                  <input v-model="advert.ref_link" class="input" type="url" />
                </div>

                <div class="col-lg-6 mt-4">
                  <label>Position</label>
                  <select v-model="advert.position" id="">
                    <option value="">Select Position</option>
                    <option value="leaderboad">Leaderboard</option>
                    <option value="sideboard">Sideboard</option>
                  </select>
                </div>
                <!--Advert Image-->
                <div class="col-lg-6 mt-4">
                  <label for="event image">Upload Advert Picture</label>
                  <input
                    class="input"
                    type="file"
                    ref="file"
                    accept=".jpg, .jpeg, .png, .jfif,.gif"
                    v-on:change="handleFileUpload()"
                    required
                  />
                  <small class="text-danger font-weight-bold"
                    >(only .jpg, .jpeg, .png, .gif)</small
                  >
                </div>
              </div>
            </div>
            <div class="col-lg-11 mt-4">
              <button type="submit" :disabled="loading">
                Submit Advert<span
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
import VendorService from "../../service/vendor.service";
export default {
  name: "Elfrique",
  components: {
    "dash-header": Header,
    "dash-footer": Footer,
  },
  data() {
    return {
      content: "",
      message: "",
      error: "",
      file: "",
      loading: false,
      successful: false,
      advert: {
        ref_link: "",
        title: "",
        duration: "",
        position: "",
      },
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
  },

  methods: {
    createAds() {
      this.loading = true;

      let formData = new FormData();
      formData.append("image", this.file);
      formData.append("title", this.advert.title);
      formData.append("duration", this.advert.duration);
      formData.append("ref_link", this.advert.ref_link);
      formData.append("position", this.advert.position);

      VendorService.createAdvert(formData).then(
        (response) => {
          this.message = `Your ads has been added Successfully`;
          this.loading = false;
          window.scrollTo(0, 0);
        },
        (error) => {
          console.log(error);
          this.error = error.response.data.message;
          console.log(error.response.data);

          this.loading = false;
          window.scrollTo(0, 0);
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
