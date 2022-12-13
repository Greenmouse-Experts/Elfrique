<template>
  <title>
    Event Vendor Management System | Elfrique – Complete Event Management System
  </title>
  <elfrique-header />

  <!--Service Header-->
  <section class="service-header service-header-vendor">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-11 text-center">
          <h1>Event Vendor Management System</h1>
          <p>Find Capable & Efficient Vendors in Nigeria</p>
        </div>
      </div>
      <div class="row justify-content-center mt-1">
        <div class="col-lg-11 mb-5 search-section-vendor">
          <form>
            <input
              class="searchbox-input input"
              type="text"
              placeholder="What service are you searching for?"
            />
            <input
              class="location-input input"
              type="text"
              placeholder="Enter location"
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

  <div class="container">
    <div class="row">
      <div class="col-lg-12 horizontal-advert mt-3">
        <a href="#">
          <img
            src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1661185447/Elfrique_v2/WhatsApp_Image_2022-08-22_at_5.04.47_PM_3_phhjjh.jpg"
            ondragstart="return false;"
            alt="advert"
          />
        </a>
      </div>
    </div>
  </div>

  <!--Service Event-Vendor-->
  <section class="event-vendor">
    <div class="container service-vendor">
      <div class="row">
        <div class="col-lg-12 header mb-4">
          <h1>Popular Services</h1>
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
        <div class="col-lg-12">
          <div class="row justify-content-center mainService-box">
            <a
              type="button"
              @click="filterVendor('eventdecorators')"
              class="routers vendorService-box"
              ><a href="#jump" style="text-decoration: none">
                <div>
                  <img
                    src="@/assets/images/vendor-icon-eventdecorator.png"
                    ondragstart="return false;"
                  />
                  <h4>Event Decorators</h4>
                </div></a
              >
            </a>
            <a
              type="button"
              @click="filterVendor('photographers')"
              class="routers vendorService-box"
              ><a href="#jump" style="text-decoration: none">
                <div>
                  <img
                    src="@/assets/images/vendor-icon-photographer.png"
                    ondragstart="return false;"
                  />
                  <h4>Photographers</h4>
                </div></a
              >
            </a>
            <a
              type="button"
              @click="filterVendor('caterers')"
              class="routers vendorService-box"
              ondragstart="return false;"
              ><a href="#jump" style="text-decoration: none">
                <div>
                  <img
                    src="@/assets/images/vendor-icon-caterers.png"
                    ondragstart="return false;"
                  />
                  <h4>Caterers</h4>
                </div></a
              >
            </a>

            <a
              type="button"
              @click="filterVendor('diskJockey')"
              class="routers vendorService-box"
            >
              <a href="#jump" style="text-decoration: none">
                <div>
                  <img
                    src="@/assets/images/vendor-icon-dj.png"
                    ondragstart="return false;"
                  />
                  <h4>Disc Jockey (DJ's)</h4>
                </div>
              </a></a
            >
            <a
              type="button"
              @click="filterVendor('fashionDesigners')"
              class="routers vendorService-box"
              ><a href="#jump" style="text-decoration: none">
                <div>
                  <img
                    src="@/assets/images/vendor-icon-fashion.png"
                    ondragstart="return false;"
                  />
                  <h4>Fashion Designers</h4>
                </div></a
              >
            </a>
            <a
              type="button"
              @click="filterVendor('eventPlanners')"
              class="routers vendorService-box"
              ><a href="#jump" style="text-decoration: none">
                <div>
                  <img
                    src="@/assets/images/vendor-icon-eventplaner.png"
                    ondragstart="return false;"
                  />
                  <h4>Event Planers</h4>
                </div></a
              >
            </a>
            <a
              type="button"
              @click="filterVendor('invitationAndPrinting')"
              class="routers vendorService-box"
              ><a href="#jump" style="text-decoration: none">
                <div>
                  <img
                    src="@/assets/images/vendor-icon-printing.png"
                    ondragstart="return false;"
                  />
                  <h4>Invitations & Printing Services</h4>
                </div></a
              >
            </a>
            <a
              type="button"
              @click="filterVendor('makeUpArtist')"
              class="routers vendorService-box"
              ><a href="#jump" style="text-decoration: none">
                <div>
                  <img
                    src="@/assets/images/vendor-icon-makeup.png"
                    ondragstart="return false;"
                  />
                  <h4>Make-Up Artist</h4>
                </div></a
              >
            </a>
          </div>
        </div>
        <div class="col-lg-12 horizontal-advert mt-3">
          <a href="#">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1661185447/Elfrique_v2/WhatsApp_Image_2022-08-22_at_5.04.47_PM_3_phhjjh.jpg"
              ondragstart="return false;"
              alt="advert"
            />
          </a>
        </div>
      </div>
    </div>

    <div class="container service-vendor">
      <div class="row">
        <div class="col-lg-12 header mb-3">
          <h1 id="jump">Available Jobs</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-9">
          <div class="row">
            <div
              v-for="con in resultQuery"
              :key="con.id"
              class="vendorJob-box col-lg-4"
            >
              <div class="card">
                <a :href="'/details-vendor/' + con.id">
                  <div class="img-area">
                    <img :src="con.event.image" />
                  </div>
                </a>
                <div class="card-body">
                  <a :href="'/details-vendor/' + con.id" class="routers">
                    <h1 title="Needed Service">{{ con.job_type }} Needed</h1>
                  </a>
                  <div class="line-rule"></div>
                  <span class="eventname" title="Event Type"
                    ><i class="bi bi-stack"></i> {{ con.event.title }}</span
                  >
                  <span class="date" title="Bid Closing Date"
                    ><i class="bi bi-calendar-week-fill"></i>
                    {{ format_date(con.event.startdate) }}</span
                  >
                  <span class="location card-text" :title="con.location"
                    ><i class="bi bi-geo-alt-fill"></i> {{ con.location }}</span
                  >
                  <span class="price" title="Starting Price"
                    ><i class="bi bi-cash"></i> Starts at
                    <strong>&#8358;{{ con.budget }}</strong></span
                  >
                  <button>
                    <router-link class="btnA" :to="'/details-vendor/' + con.id"
                      >View</router-link
                    >
                  </button>
                </div>
              </div>
            </div>
            <!-- Modal -->
          </div>

          <div class="col-md-12 text-center mt-5 paginationDivArea">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a
                    class="page-link"
                    type="button"
                    @click="prevPage()"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">Previous</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">{{ current_page }}</a>
                </li>
                <li class="page-item">
                  <a
                    type="button"
                    @click="nextPage()"
                    class="page-link"
                    aria-label="Next"
                  >
                    <span aria-hidden="true">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <!-- <div class="col-md-12 text-center mt-5">
            <a href="/view-more-vendor" class="btn-all-service">View More</a>
          </div> -->
        </div>
        <div class="col-lg-3">
          <!--  <div class="advert-area">
            <a href="#">
              <img
                src="@/assets/images/advert-banner1.jpg"
                ondragstart="return false;"
                alt="advert"
              />
            </a>
          </div> -->
          <div class="advert-area">
            <a href="#">
              <img
                src="@/assets/images/advert-banner1.jpg"
                ondragstart="return false;"
                alt="advert"
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-12 horizontal-advert mt-3">
          <a href="#">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1661185447/Elfrique_v2/WhatsApp_Image_2022-08-22_at_5.04.47_PM_3_phhjjh.jpg"
              ondragstart="return false;"
              alt="advert"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
  <!--Service Event-Vendor Ends-->

  <elfrique-footer />
</template>

<script>
import Header from "./elfrique-header.vue";
import Newsletter from "./elfrique-newsletter.vue";
import Footer from "./elfrique-footer.vue";
import VendorService from "../service/vendor.service";
import moment from "moment";

export default {
  name: "Elfrique",
  components: {
    "elfrique-header": Header,
    "elfrique-newsletter": Newsletter,
    "elfrique-footer": Footer,
  },
  data() {
    return {
      Content: "",
      eventId: "",
      file: "",
      bid: {
        description: "",
        price: "",
      },
      message: "",
      error: "",
      loading: false,
      size: 3,
      current_page: 1,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    resultQuery() {
      return this.Content.filter((row, index) => {
        let start = (this.current_page - 1) * this.size;
        let end = this.current_page * this.size;
        if (index >= start && index < end) return true;
      });
    },
  },
  created() {
    this.getVendors();
  },

  methods: {
    getEventId(id) {
      this.eventId = id;
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY hh:mm");
      }
    },

    getVendors() {
      VendorService.getAllJobs().then((response) => {
        this.Content = response.data;
        console.log(this.Content);
      });
    },

    nextPage() {
      //console.log('helo')
      if (this.current_page * this.size < this.Content.length)
        this.current_page++;
    },
    prevPage() {
      if (this.current_page > 1) this.current_page--;
    },

    filterVendor(value) {
      if (value.length > 0) {
        this.Content = this.Content.filter(
          (item) =>
            item.eventCategory.toLowerCase().indexOf(value.toLowerCase()) != -1
        );
        console.log(this.Content);
        if (this.Content == "") {
          this.getVendors();
        }
      } else {
        this.getVendors();
        this.Content = this.Content;
      }
    },

    SubmitBid() {
      this.loading = true;

      let formData = new FormData();
      formData.append("image", this.file);
      formData.append("description", this.bid.description);
      formData.append("price", this.bid.price);

      VendorService.createProposal(formData, this.eventId).then(
        (response) => {
          this.message = `Your  Bid Proposal Submitted Successfully`;
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