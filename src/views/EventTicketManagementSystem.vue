<template>
  <title>
    Event Tickets Management System | Elfrique – Complete Event Management
    System
  </title>
  <elfrique-header />

  <!--Service Header-->
  <section class="service-header">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <h1>Event Tickets Management System</h1>
          <p>
            We manage an efficient ticket system that allows event organisers to
            create customisedtickets for their event. Our tickets can be used
            for events , awards, concerts , parties and a lot more.
          </p>
        </div>
        <div class="col-md-5 text-center">
          <div class="img-area">
            <img src="@/assets/images/service-event-ticket.png" />
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-lg-11 mb-5 search-section">
          <form>
            <input
              class="searchbox-input input"
              type="text"
              placeholder="Search tickets here ..."
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
      <div class="p-5" v-if="isLoading">
        <LoaderVue />
      </div>
      <div class="row">
        <div class="col-md-3 py-2" v-for="con in eventContent" :key="con.id">
          <div class="card">
            <img :src="con.image" class="card-img-top" />
            <div class="card-body">
              <p class="card-text main-text">
                <i class="bi bi-ticket-detailed-fill"></i> : {{ con.title }}
              </p>
              <p class="card-text card-text-after">
                <i class="bi bi-geo-alt-fill"></i> : {{ con.venue }}
              </p>
              <p class="card-text card-text-after">
                <i class="bi bi-calendar3"></i> :
                {{ reFormatDate(con.startdate) }}
              </p>
              <p class="card-text card-text-after">
                <i class="bi bi-alarm-fill"></i> : 
                {{reFormatTime(con.startdate)}}
              </p>
              <router-link
                to="/ticket-content"
                class="routers"
                v-on:click="getEvent(con.id)"
                ><a class="btn-view">Buy Ticket</a></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Service Content Event Form Ends-->

  <elfrique-footer />
</template>
<script>
  import Header from "./elfrique-header.vue";
  import Newsletter from "./elfrique-newsletter.vue";
  import Footer from "./elfrique-footer.vue";
  import EventService from "../service/event.service";
  import moment from "moment";
  import timeFormat from "./utility/timeFormat";
  import LoaderVue from "./components/Loader.vue";

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
        isLoading: true,
      };
    },

    created() {
      EventService.allEvents().then((response) => {
        this.isLoading = false;
        const eventContent = response.data.events;
        this.eventContent = eventContent.sort(function (a, b) {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        console.log(response);
      });
    },

    methods: {
      format_date(value) {
        if (value) {
          return moment(String(value)).format("MM/DD/YYYY");
        }
      },

      getEvent(id) {
        this.$router.push("/ticket-content/" + id);
      },
    },

    mounted() {
      window.scrollTo(0, 0);
    },
  };
</script>
