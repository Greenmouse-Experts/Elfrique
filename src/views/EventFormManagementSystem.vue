<template>
  <title>
    Event Form Management System | Elfrique – Complete Event Management System
  </title>
  <elfrique-header />

  <!--Service Header-->
  <section class="service-header">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <h1>Event Forms Management System</h1>
          <p>
            We manage an efficient form system that allows event organisers to
            create customised form questionnaires for their event. Our forms can
            be used for events registrations, award nominations, surveys,
            opinion polls, quiz and a lot more.
          </p>
        </div>
        <div class="col-md-5 text-center">
          <div class="img-area">
            <img src="@/assets/images/service-event-forms.png" />
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-lg-11 mb-5 search-section">
          <form>
            <input
              class="searchbox-input input"
              type="text"
              placeholder="Search here ..."
            />
            <input class="date-input input" type="date" />
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

  <!--Service Content Event Form-->
  <section class="event-form-content">
    <div class="container">
      <div class="row">
        <div class="col-md-3 py-2" v-for="con in eventContent" :key="con.id">
          <div class="card">
            <img :src="con.eventform.image" class="card-img-top" />
            <div class="card-body">
              <p class="card-text main-text" :title="con.eventform.title">
                <i class="bi bi-award-fill"></i> : {{ con.eventform.title }}
              </p>
              <p class="card-text card-text-after">
                <i class="bi bi-credit-card-fill"></i> : {{ con.eventform.type }}
              </p>
              <p class="card-text card-text-after d-flex">
                <span class="d-flex">
                <i class="bi bi-calendar3"></i> <span class="mx-1">:</span>
                </span>
                <span class="d-flex">Start({{
                  reFormatDate(con.eventform.startdate)
                }})<br />
                End({{ reFormatDate(con.eventform.closedate) }})
              </span>
              </p>
              <router-link :to="'/event-form-content/' + con.id" class="routers"
                ><a class="btn-view">Apply</a></router-link
              >
            </div>
          </div>
        </div>

        <div class="p-5" v-if="isLoading">
          <LoaderVue />
        </div>

        <!-- <div class="user" v-for="user in users" :key="user.first">
          <div class="user-avatar">
            <img :src="user.picture.large" />
          </div>
          <div class="user-details">
            <h2 class="user-name">
              {{ user.name.first }}
              {{ user.name.last }}
            </h2>
            <ul>
              <li><strong>Birthday:</strong> {{ formatDate(user.dob.date) }}</li>
              <li><strong>Location:</strong> {{ user.location.city }}, {{ user.location.state }}</li>
            </ul>
          </div>
        </div> -->
      </div>
    </div>
  </section>
  <!--Service Content Event Form Ends-->

  <elfrique-newsletter />
  <elfrique-footer />
</template>
<script>
  import Header from "./elfrique-header.vue";
  import Newsletter from "./elfrique-newsletter.vue";
  import Footer from "./elfrique-footer.vue";
  import EventService from "../service/form.service";
  import LoaderVue from "./components/Loader.vue";
  import moment from "moment";
  import axios from "axios";
  import timeFormat from "./utility/timeFormat";

  export default {
    name: "Elfrique",
    mixins: [timeFormat],
    components: {
      "elfrique-header": Header,
      "elfrique-newsletter": Newsletter,
      "elfrique-footer": Footer,
      LoaderVue,
    },
    data() {
      return {
        eventContent: "",
        users: [],
        isLoading: true,
      };
    },

    created() {
      EventService.getForms().then((response) => {
        this.eventContent = response.data.form;
        this.isLoading = false;
        console.log(this.eventContent);
      });
    },

    methods: {
      format_date(value) {
        if (value) {
          return moment(String(value)).format("MM/DD/YYYY hh:mm");
        }
      },
      formatDate(dateString) {
        let convertedDate = new Date(dateString);
        return convertedDate.toDateString();
      },
      getInitialUsers() {
        axios.get(`https://randomuser.me/api/?results=5`).then((response) => {
          this.users = response.data.results;
        });
      },
      getNextUser() {
        window.onscroll = () => {
          let bottomOfWindow =
            document.documentElement.scrollTop + window.innerHeight / 2 ===
            1578.5;
          console.log(window.innerHeight);
          if (bottomOfWindow) {
            axios.get(`https://randomuser.me/api/`).then((response) => {
              this.users.push(response.data.results[0]);
            });
          }
        };
      },
    },
    beforeMount() {
      this.getInitialUsers();
    },
    mounted() {
      window.scrollTo(0, 0);
      this.getNextUser();
    },
  };
</script>

<style>
  .user {
    display: flex;
    background: #ccc;
    border-radius: 1em;
    margin: 1em auto;
  }

  .user-avatar {
    padding: 1em;
  }

  .user-avatar img {
    display: block;
    width: 100%;
    min-width: 64px;
    height: auto;
    border-radius: 50%;
  }

  .user-details {
    padding: 1em;
  }

  .user-name {
    margin: 0;
    padding: 0;
    font-size: 2rem;
    font-weight: 900;
  }
</style>
