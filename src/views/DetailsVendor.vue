<template>
  <title>
    Event Vendor Management System | Elfrique – Complete Event Management System
  </title>
  <elfrique-header />

  <!--Service Header-->
  <section class="service-header detailsVendorHeader">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-11 text-center">
          <h1>{{ Content.job_type }} Needed</h1>
        </div>
      </div>
    </div>
  </section>
  <!--Service Header Ends-->

  <div class="container header-cont voting-content detailsHead">
    <div class="row">
      <div class="col-md-5">
        <div class="img-area">
          <img :src="Content.event.image" ondragstart="return false;" />
        </div>
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-6">
        <div class="text-title-area">
          <h1>{{ Content.job_type }} Needed</h1>
          <div class="details-header">
            <p><i class="bi bi-archive"></i> :{{ Content.event.title }}</p>
            <p>
              <i class="bi bi-calendar3"></i> :
              {{ format_date(Content.event.startdate) }}
            </p>
            <p><i class="bi bi-geo-alt"></i> : {{ Content.location }}</p>
            <p class="bidPrice">
              <i class="bi bi-cash-coin"></i> : Starts at N {{ Content.budget }}
            </p>
          </div>
          <div class="details-social">
            <h5>Share on:</h5>
            <ShareNetwork
              network="facebook"
              :url="currentUrl"
              :title="Content.job_type"
              :description="Content.job_description"
              :quote="Content.job_type"
              :hashtags="'Elfrique, Event, Job,' + Content.job_type"
            >
              <img src="@/assets/images/share-facebook.png" />
            </ShareNetwork>
            <ShareNetwork
              network="whatsapp"
              :url="currentUrl"
              :title="Content.job_type"
              :description="Content.job_description"
            >
              <img src="@/assets/images/share-whatsapp.png" />
            </ShareNetwork>
            <ShareNetwork
              network="telegram"
              :url="currentUrl"
              :title="Content.job_type"
              :description="Content.job_description"
            >
              <img src="@/assets/images/share-telegram.png" />
            </ShareNetwork>
            <ShareNetwork
              network="twitter"
              :url="currentUrl"
              :title="Content.job_type"
              twitter-user="@elfrique"
              :hashtags="'Elfrique, Event, Job,' + Content.job_type"
            >
              <img src="@/assets/images/share-twitter.png" />
            </ShareNetwork>
            <ShareNetwork
              network="email"
              :url="currentUrl"
              :title="Content.job_type"
              :description="Content.job_description"
            >
              <img src="@/assets/images/share-email.png" />
            </ShareNetwork>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container contentDetailsVendor">
    <div class="row">
      <div class="col-lg-7">
        <div class="detailsVendor">
          <ul class="nav nav-pills mb-4 mt-2" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active tabs-button"
                id="pills-des-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-des"
                type="button"
                role="tab"
                aria-controls="pills-des"
                aria-selected="true"
              >
                Job Description
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link tabs-button"
                id="pills-photo-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-photo"
                type="button"
                role="tab"
                aria-controls="pills-photo"
                aria-selected="false"
              >
                Photos
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <!--Job Description-->
            <div
              class="tab-pane fade show active"
              id="pills-des"
              role="tabpanel"
              aria-labelledby="pills-des-tab"
            >
              <h3>Description</h3>
              <p>{{ Content.job_description }}</p>
            </div>
            <!--Photos-->
            <div
              class="tab-pane fade"
              id="pills-photo"
              role="tabpanel"
              aria-labelledby="pills-photo-tab"
            >
              <section class="gallery-section">
                <div class="container gallery-container">
                  <div id="projects">
                    <ul id="gallery" class="myimgdivtoggle">
                      <li class="gallery1">
                        <a href="#">
                          <img src="../assets/images/vendor-dj.png" />
                        </a>
                      </li>
                      <li class="gallery1">
                        <a href="#">
                          <img src="../assets/images/vendor-dj.png" />
                        </a>
                      </li>
                      <li class="gallery1">
                        <a href="#">
                          <img src="../assets/images/vendor-dj.png" />
                        </a>
                      </li>
                      <li class="gallery1">
                        <a href="#">
                          <img src="../assets/images/vendor-dj.png" />
                        </a>
                      </li>
                      <li class="gallery1">
                        <a href="#">
                          <img src="../assets/images/vendor-dj.png" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <!-- modal gallery -->
                  <div class="gallery">
                    <a class="close" href="#">
                      <i>
                        <span class="bar"></span>
                        <span class="bar"></span>
                      </i>
                    </a>
                    <img src="" />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5">
        <form @submit.prevent="submitBid" class="formVendor">
          <div class="row">
            <div class="col-lg-12">
              <h1>Bid For Job</h1>
              <div class="lineHr"></div>
            </div>
            <div class="col-lg-6 mb-3">
              <label>First name</label>
              <input
                v-model="bid.firstname"
                required
                type="text"
                class="input"
              />
            </div>
            <div class="col-lg-6 mb-3">
              <label>Last name</label>
              <input v-model="bid.surname" required type="text" class="input" />
            </div>
            <div class="col-lg-12 mb-3">
              <label>Email address</label>
              <input v-model="bid.email" required type="email" class="input" />
            </div>
            <div class="col-lg-6 mb-3">
              <label>Phone number</label>
              <input v-model="bid.phone" type="tel" required class="input" />
            </div>
            <div class="col-lg-6 mb-3">
              <label>Bid amount (NGN)</label>
              <input type="text" v-model="bid.price" required class="input" />
            </div>
            <div class="col-lg-12 mb-3">
              <label>Additional info</label>
              <textarea
                class="textarea"
                required
                v-model="bid.description"
              ></textarea>
            </div>
            <div class="col-lg-12">
              <button class="button" type="submit" :disabled="loading">
                Submit Bid<span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
                ></span>
              </button>
            </div>
            <!-- <div v-if="!loggedIn" class="col-lg-12">
              <button type="submit" class="button">
                You have to log in to continue
              </button>
            </div> -->
            <!-- <div
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
            </div> -->
            <!-- <div
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
            </div> -->
          </div>
        </form>
      </div>
    </div>
  </div>

  <elfrique-footer />
</template>

<script>
import Header from "./elfrique-header.vue";
import Newsletter from "./elfrique-newsletter.vue";
import Footer from "./elfrique-footer.vue";
import VendorService from "../service/vendor.service";
import ProfileService from "../service/profile.service";
import moment from "moment";
import Swal from "sweetalert2";
import $ from "jquery";
export default {
  name: "Elfrique",
  components: {
    "elfrique-header": Header,
    "elfrique-newsletter": Newsletter,
    "elfrique-footer": Footer,
  },

  data() {
    return {
      Content: {
        event: "",
      },
      profile: "",
      eventId: "",
      file: "",
      message: "",
      error: "",
      loading: false,
      bid: {
        description: "",
        price: "",
        name: "",
        email: "",
        phone: "",
        firstname: "",
        surname: "",
      },
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    currentUrl() {
      return window.location.href;
    },
  },
  created() {
    VendorService.getSingleJob(this.$route.params.id).then((response) => {
      this.Content = response.data;
    });
    if (this.loggedIn) {
      ProfileService.getProfile().then(
        (response) => {
          this.profile = response.data.profile;
          console.log(this.profile);
        },
        (error) => {
          this.error = error.response.data.message;
        }
      );
    }
  },
  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY hh:mm");
      }
    },

    submitBid() {
      this.loading = true;
      VendorService.createProposal(this.bid, this.$route.params.id).then(
        (response) => {
          //this.message = response.data.message;
          Swal.fire({
            icon: "success",
            title: `${response.data.message}`,
            showConfirmButton: false,
            timer: 1500,
          });
          this.clearForm();
          this.loading = false;
        },
        (error) => {
          this.error = error.response.data.message;
          Swal.fire({
            icon: "error",
            title: `${error.response.data.message}`,
            showConfirmButton: false,
            timer: 1500,
          });
          this.loading = false;
        }
      );
    },

    clearForm() {
      this.bid.email = "";
      this.bid.firstname = "";
      this.bid.surname = "";
      this.bid.price = "";
      this.bid.description = "";
      this.bid.phone = "";
    },
  },
  mounted() {
    window.scrollTo(0, 0);

    //Gallery
    $(document).ready(function () {
      // filter
      $(".nav-gallery a").on("click", function (event) {
        event.preventDefault();
        // current class
        $(".nav-gallery li.current").removeClass("current");
        $(this).parent().addClass("current");

        // set new heading
        $("h1.heading").text($(this).text());

        // filter link text
        var category = $(this).text().toLowerCase().replace(" ", "-");

        // remove hidden class if "all" is selected
        if (category == null) {
          $("ul#gallery li:hidden").fadeIn("slow").removeClass("hidden");
        } else {
          $("ul#gallery li").each(function () {
            if (!$(this).hasClass(category)) {
              $(this).hide().addClass("hidden");
            } else {
              $(this).fadeIn("slow").removeClass("hidden");
            }
          });
        }
        return false;
      });
      // lightbox
      $("ul#gallery a").on("click", function (event) {
        event.preventDefault();
        var link = $(this).find("img").attr("src");
        $(".gallery img").attr("src", "");
        $(".gallery img").attr("src", link);
        $(".gallery").fadeIn("slow");
      });
      // close lightbox
      $(".gallery").on("click", function (event) {
        event.preventDefault();
        $(".gallery").fadeOut("slow");
      });
    });

    $(document).ready(function () {
      $(".togglebtn").click(function () {
        $(".myimgdivtoggle").toggle();
      });
    });
  },
};
</script>