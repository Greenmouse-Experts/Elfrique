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
            <img :src="eventContent.image" ondragstart="return false;" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="text-title-area">
            <h1>{{ eventContent.title }}</h1>
            <small
              >Organised by :
              <span
                >{{ eventContent.adminuser.profile.firstname }}
                {{ eventContent.adminuser.profile.lastname }}</span
              ></small
            >
            <div class="details-header">
              <h5>Start</h5>
              <p>
                <i class="bi bi-calendar3"></i> :
                {{ format_date(eventContent.startdate) }}
              </p>
              <p><i class="bi bi-alarm"></i> : 00:01</p>
              <h5>End</h5>
              <p>
                <i class="bi bi-calendar3"></i> :
                {{ format_date(eventContent.startdate) }}
              </p>
              <p><i class="bi bi-alarm"></i> : 23:99</p>
            </div>
            <div class="details-social">
              <h5>Share on:</h5>
              <ShareNetwork
                network="facebook"
                :url="currentUrl"
                :title="eventContent.title"
                :description="eventContent.description"
                :quote="eventContent.title"
                :hashtags="'Elfrique, Event, Job,' + eventContent.title"
              >
                <img src="@/assets/images/share-facebook.png" />
              </ShareNetwork>
              <ShareNetwork
                network="whatsapp"
                :url="currentUrl"
                :title="eventContent.title"
                :description="eventContent.description"
              >
                <img src="@/assets/images/share-whatsapp.png" />
              </ShareNetwork>
              <ShareNetwork
                network="telegram"
                :url="currentUrl"
                :title="eventContent.title"
                :description="eventContent.description"
              >
                <img src="@/assets/images/share-telegram.png" />
              </ShareNetwork>
              <ShareNetwork
                network="twitter"
                :url="currentUrl"
                :title="eventContent.title"
                twitter-user="@elfrique"
                :hashtags="'Elfrique, Event, Form,' + eventContent.title"
              >
                <img src="@/assets/images/share-twitter.png" />
              </ShareNetwork>
              <ShareNetwork
                network="email"
                :url="currentUrl"
                :title="eventContent.title"
                :description="eventContent.description"
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
              <span>20</span>
            </div>
            <div class="boxes hours">
              <span class="title">Hours</span> <br />
              <span>2</span>
            </div>
            <div class="boxes minutes">
              <span class="title">Min</span> <br />
              <span>50</span>
            </div>
            <div class="boxes seconds">
              <span class="title">Sec</span> <br />
              <span>45</span>
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </div>
    </div>

    <form class="fillFormSection">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 mt-4">
            <h5>Instructions: Fill up the form below and submit.</h5>
          </div>
          <!--Single Text Field-->
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
          </div>
          <!--Multi-Text Field-->

          <!--Button-->
          <div class="col-lg-12 inputDiv">
            <button type="submit">Submit Form</button>
          </div>
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
import LoaderVue from './components/Loader.vue';

export default {
  name: "Elfrique",
  components: {
    "elfrique-header": Header,
    "elfrique-footer": Footer,
    LoaderVue,
  },
  data() {
    return {
      eventContent: "",
      question: "",
      loading: true
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
      this.question = response.data.form.formQuestions;
      this.loading = false;
    });
  },

  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY hh:mm");
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>