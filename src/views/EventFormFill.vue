<template>
  <title>Form Title Here | Elfrique – Complete Event Management System</title>

  <template v-if="loading">
    <LoaderVue loaderImage center />
  </template>

  <template v-else>
    <elfrique-header />

    <section class="voting-content">
      <div class="container header-cont">
        <div class="row">
          <div class="col-md-4">
            <div class="img-area">
              <img
                :src="eventContent.eventform.image"
                ondragstart="return false;"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="text-title-area">
              <h1>{{ eventContent.eventform.title }}</h1>
              <!----<small
              >Organised by :
              <span
                >{{ eventContent.adminuser.profile.firstname }}
                {{ eventContent.adminuser.profile.lastname }}</span
              ></small
            >-->
              <div class="details-header">
                <h5>Start</h5>
                <p>
                  <i class="bi bi-calendar3"></i> :
                  {{ format_date(eventContent.eventform.startdate) }}
                </p>
                <p><i class="bi bi-alarm"></i> : {{ format_time(eventContent.eventform.startdate) }}</p>
                <h5>End</h5>
                <p>
                  <i class="bi bi-calendar3"></i> :
                  {{ format_date(eventContent.eventform.closedate) }}
                </p>
                <p><i class="bi bi-alarm"></i> : {{ format_time(eventContent.eventform.closedate) }}</p>
              </div>
              <div class="details-social">
                <h5>Share on:</h5>
                <ShareNetwork
                  network="facebook"
                  :url="currentUrl"
                  :title="eventContent.eventform.title"
                  :description="eventContent.eventform.description"
                  :quote="eventContent.eventform.title"
                  :hashtags="
                    'Elfrique, Event, Job,' + eventContent.eventform.title
                  "
                >
                  <img src="@/assets/images/share-facebook.png" />
                </ShareNetwork>
                <ShareNetwork
                  network="whatsapp"
                  :url="currentUrl"
                  :title="eventContent.eventform.title"
                  :description="eventContent.eventform.description"
                >
                  <img src="@/assets/images/share-whatsapp.png" />
                </ShareNetwork>
                <ShareNetwork
                  network="telegram"
                  :url="currentUrl"
                  :title="eventContent.eventform.title"
                  :description="eventContent.eventform.description"
                >
                  <img src="@/assets/images/share-telegram.png" />
                </ShareNetwork>
                <ShareNetwork
                  network="twitter"
                  :url="currentUrl"
                  :title="eventContent.eventform.title"
                  twitter-user="@elfrique"
                  :hashtags="
                    'Elfrique, Event, Form,' + eventContent.eventform.title
                  "
                >
                  <img src="@/assets/images/share-twitter.png" />
                </ShareNetwork>
                <ShareNetwork
                  network="email"
                  :url="currentUrl"
                  :title="eventContent.eventform.title"
                  :description="eventContent.eventform.description"
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
              <div class="boxes days">
                <span class="title">Days</span> <br />
                <span>{{ countdown.days }}</span>
              </div>
              <div class="boxes hours">
                <span class="title">Hours</span> <br />
                <span>{{ countdown.hours }}</span>
              </div>
              <div class="boxes minutes">
                <span class="title">Min</span> <br />
                <span>{{ countdown.minutes }}</span>
              </div>
              <div class="boxes seconds">
                <span class="title">Sec</span> <br />
                <span>{{ countdown.seconds }}</span>
              </div>
              <div class="clear"></div>
              <p v-if="ended == false" class="timeUpText" style="color: red">
                Time is up
              </p>
            </div>
          </div>
        </div>
      </div>

      <form class="fillFormSection" @submit.prevent="getFormData($event)">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 mt-4">
              <h5>Instructions: Fill up the form below and submit.</h5>
            </div>

            <div class="col-lg-12 inputDiv">
              <div id="fb-render" class="col-lg-8"></div>
              <button type="submit" style="margin-top: 5px">Submit Form</button>
            </div>

            <!--Single Text Field--
          <div v-for="con in question" :key="con.id" class="col-lg-12 inputDiv">
            <label>{{ con.question }}</label>
            <input
              v-if="con.type == 'Single Text Field'"
              type="text"
              placeholder="Enter answer here"
              class="input"
            />
            <textarea
              v-if="con.type == 'Multi-Text Field'"
              cols="30"
              rows="3"
              placeholder="Enter answer here"
              class="input"
            ></textarea>
            <select v-if="con.type == 'Select Dropdown'" class="input">
              <option v-for="opt in con.formOptions" :key="opt.id">
                {{ opt.value }}
              </option>
            </select>
            <input
              v-if="con.type == 'Upload File Field'"
              type="file"
              class="input"
            />
            <input v-if="con.type == 'Date Field'" type="date" class="input" />
            <input v-if="con.type == 'Time Field'" type="time" class="input" />
            <div v-if="con.type == 'Check Boxes'">
              <div v-for="opt in con.formOptions" :key="opt.id">
                <input type="checkbox" /> <span>{{ opt.value }}</span>
              </div>
            </div>
            <div v-if="con.type == 'Radio Button'">
              <div v-for="opt in con.formOptions" :key="opt.id">
                <input type="Radio" /> <span>{{ opt.value }}</span>
              </div>
            </div>
          </div>--->
            <!--Multi-Text Field-->

            <!--Button--
            <div class="col-lg-12 inputDiv">
              <button type="submit">Submit Form</button>
            </div>-->
          </div>
        </div>
      </form>
    </section>

    <elfrique-footer />
  </template>
</template>
<script>
  import Header from "./elfrique-header.vue";
  import Footer from "./elfrique-footer.vue";
  import EventService from "../service/form.service";
  import moment from "moment";
  import LoaderVue from "./components/Loader.vue";
  import Swal from "sweetalert2";

  export default {
    name: "Elfrique",
    components: {
      "elfrique-header": Header,
      "elfrique-footer": Footer,
      Swal,
      LoaderVue,
    },
    data() {
      return {
        eventContent: "",
        question: "",
        loading: true,
        countdown: {
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        },
        formData: {},
        eventFormId: '',
        formId: ''
      };
    },

    computed: {
      formId() {
        return this.$route.params.id;
      },
      currentUrl() {
        return window.location.href;
      },
    },
    created() {
      EventService.getSingleForm(this.$route.params.id).then((response) => {
        this.eventContent = response.data.form;
        this.formData = JSON.parse(this.eventContent.formData);

        this.eventFormId = this.eventContent.eventformId;
        this.formId = this.eventContent.id;
      this.endDate = response.data.form.eventform.closedate;
        this.loading = false;

        this.getCountdown();

        setTimeout(() => {
          this.renderForm();
        }, 1000)
      });
    },

  methods: {
      getCountdown() {
        var endCount = moment(this.endDate).format("YYYY-MM-DDT11:00:00Z");

        // make it a moment object End
        var event = moment(endCount);

        // get current time/date
        var current = moment().format();
        /* console.log(current);
      console.log(endCount); */
        if (current >= endCount) {
          this.ended = false;
          this.countdown.days = 0;
          this.countdown.hours = 0;
          this.countdown.minutes = 0;
          this.countdown.seconds = 0;
        } else {
          this.ended = true;
          // get difference between event and current
          var diffTime = event.diff(current);

          // let moment.js make the duration out of the timestamp
          var duration = moment.duration(diffTime, "milliseconds", true);

          // Interval
          var interval = 1000;
          setInterval(() => {
            duration = moment.duration(duration - interval, "milliseconds");
            this.countdown.days = parseInt(duration.asDays());
            this.countdown.hours = duration.hours();
            this.countdown.minutes = duration.minutes();
            this.countdown.seconds = duration.seconds();
          }, interval);
        }
      },

      format_date(value) {
        if (value) {
          return moment(String(value)).format("MM/DD/YYYY hh:mm");
        }
    },

          format_time(value) {
        if (value) {
          return moment(String(value)).format("hh:mm");
        }
      },

      getFormData(value) {
        let formPaylod;

        setTimeout(function () {
          formPaylod = { "userData": $("#fb-render").formRender('userData') };
        }, 10);

        setTimeout(() => {
          this.formData = formPaylod;
            EventService.postResult(this.eventFormId, this.formId, this.formData).then((res) => {
              Swal.fire(res.data.message, "", "success");
            });
        }, 10);
      },

      renderForm() {
        const formRenderOptions = this.formData;
        setTimeout(function () {
          $("#fb-render").formRender(formRenderOptions);
        }, 500);
      },
    },

    mounted() {
      window.scrollTo(0, 0);
      let externalScriptFive = document.createElement("script");

      externalScriptFive.setAttribute(
        "src",
        "https://formbuilder.online/assets/js/form-render.min.js"
      );

      document.head.appendChild(externalScriptFive);
    },
  };
</script>
