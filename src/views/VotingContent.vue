<template>
  <title>
    Vote Management System | Elfrique – Complete Event Management System
  </title>
  <elfrique-header />

  <section class="voting-content">
    <div class="container header-cont">
      <div class="row">
        <div class="col-md-4">
          <div class="img-area">
            <img :src="contest.image" ondragstart="return false;" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="text-title-area">
            <h1>{{ contest.title }}</h1>
            <small
              >Organised by :
              <span
                >{{ contest.adminuser.firstname }}
                {{ contest.adminuser.lastname }}</span
              ></small
            >
            <div class="details-header">
              <h5>Start</h5>
              <p>
                <i class="bi bi-calendar3"></i> :
                {{ format_date(contest.startdate) }}
              </p>

              <!-- <p><i class="bi bi-alarm"></i> : 00:01</p> -->
              <h5>End</h5>
              <p>
                <i class="bi bi-calendar3"></i> :
                {{ format_date(contest.closedate) }}
              </p>
              <!-- <p><i class="bi bi-alarm"></i> : 23:99</p> -->
            </div>
            <div class="details-social">
              <h5>Share on:</h5>
              <ShareNetwork
                network="facebook"
                :url="currentUrl"
                :title="contest.title"
                :quote="contest.title"
                :hashtags="'Elfrique, Contest, Voting,' + contest.title"
              >
                <img src="@/assets/images/share-facebook.png" />
              </ShareNetwork>
              <ShareNetwork
                network="whatsapp"
                :url="currentUrl"
                :title="contest.title"
              >
                <img src="@/assets/images/share-whatsapp.png" />
              </ShareNetwork>
              <ShareNetwork
                network="telegram"
                :url="currentUrl"
                :title="contest.title"
              >
                <img src="@/assets/images/share-telegram.png" />
              </ShareNetwork>
              <ShareNetwork
                network="twitter"
                :url="currentUrl"
                :title="contest.title"
                twitter-user="@elfrique"
                :hashtags="'Elfrique, Contest, Vote,' + contest.title"
              >
                <img src="@/assets/images/share-twitter.png" />
              </ShareNetwork>
              <ShareNetwork
                network="email"
                :url="currentUrl"
                :title="contest.title"
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
            <p v-if="ended == true" class="timeUpText" style="color: red">
              Time is up
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container service-content-vote mt-4">
      <div class="row">
        <div class="col-lg-12">
          <ul
            class="nav nav-pills nav-fill mb-4 mt-2 justify-content-center"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active tabs-button"
                id="pills-cont-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-cont"
                type="button"
                role="tab"
                aria-controls="pills-cont"
                aria-selected="true"
              >
                <i class="bi bi-people-fill"></i> Contestants
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link tabs-button"
                id="pills-graph-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-graph"
                type="button"
                role="tab"
                aria-controls="pills-graph"
                aria-selected="false"
              >
                <i class="bi bi-graph-up-arrow"></i> Result Graph
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <!-- <button
                class="nav-link tabs-button"
                id="pills-organ-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-organ"
                type="button"
                role="tab"
                aria-controls="pills-organ"
                aria-selected="false"
              >
                <i class="fas fa-tv"></i> Organisers
              </button> -->
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link tabs-button"
                id="pills-trans-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-trans"
                type="button"
                role="tab"
                aria-controls="pills-trans"
                aria-selected="false"
              >
                <i class="fas fa-images"></i> Verify Transaction
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <!--Contestants-->
            <div
              class="tab-pane fade show active"
              id="pills-cont"
              role="tabpanel"
              aria-labelledby="pills-cont-tab"
            >
              <div class="container" v-if="ended == false">
                <div class="row">
                  <div class="col-md-10 mb-5 mt-4 header-search-form">
                    <form>
                      <input
                        class="input"
                        type="text"
                        placeholder="Search for contestants"
                        required
                      />
                      <input
                        class="submit-btn"
                        type="submit"
                        value="Search &#128269;"
                      />
                    </form>
                  </div>
                  <div
                    class="col-md-3 py-2"
                    v-for="con in contest.contestants"
                    :key="con.id"
                  >
                    <div class="card">
                      <img
                        :src="con.image"
                        ondragstart="return false;"
                        class="card-img-top"
                      />
                      <div class="card-body">
                        <p class="card-text main-text">
                          <i class="bi bi-person-video"></i> :
                          {{ con.fullname }}
                        </p>
                        <p class="card-text card-text-after">
                          <i class="bi bi-circle-square"></i> :
                          {{ con.contestantnumber }} contestant number
                        </p>
                        <p class="card-text card-text-after d-flex flex-column">
                          <span class="flex-row">
                            <i class="bi bi-activity"></i>:
                            {{ con.voteCount }} (votes)
                          </span>
                          <span class="ml-5">
                            <ProgressBarVue
                              :value="con.voteCount"
                              :total="totalVotes"
                              :percentage="true"
                            />
                          </span>
                        </p>
                        <router-link
                          :to="'/contestant-profile/' + con.id"
                          class="routers"
                          ><a class="btn-view-contest">Vote</a></router-link
                        >
                      </div>
                    </div>
                  </div>
                  <!-- <div class="col-md-3 py-2">
                                        <div class="card">
                                            <img src="@/assets/images/voting-contimg.jpg" class="card-img-top">
                                            <div class="card-body">
                                                <p class="card-text main-text"><i class="bi bi-person-video"></i> : Ajayi Dorcas</p>
                                                <p class="card-text card-text-after"><i class="bi bi-circle-square"></i> : 002 (contestant number)</p>
                                                <p class="card-text card-text-after"><i class="bi bi-activity"></i>: 2 (votes)</p>
                                                <router-link to="#" class="routers"><a class="btn-view-contest">View Profile</a></router-link>
                                            </div>
                                        </div>
                                    </div> -->
                </div>
              </div>
              <div class="container" v-if="ended == true">
                <h6 style="color: red">
                  oOps! This contest has ended, goto contest page to view
                  another one
                </h6>
              </div>
            </div>
            <!--Result Graph-->
            <div
              class="tab-pane fade"
              id="pills-graph"
              role="tabpanel"
              aria-labelledby="pills-graph-tab"
            >
              <div class="float-right">
                <div class="form-group">
                  <label for="chart">Select Graph</label>
                  <select class="form-control" v-model="chartType">
                    <option>Select Chart</option>
                    <option value="polar">Polar Area Chart</option>
                    <option value="bar">Bar Chart</option>
                    <option value="pie">Pie Chart</option>
                  </select>
                </div>
              </div>
              <PieChart v-if="chartType == 'pie'" />
              <BarChart v-if="chartType == 'bar'" />
              <PolarChart v-if="chartType == 'polar'" />
            </div>
            <!--Organiser-->
            <div
              class="tab-pane fade"
              id="pills-organ"
              role="tabpanel"
              aria-labelledby="pills-organ-tab"
            >
              <div class="container organiser-area">
                <div class="row justify-content-center px-2">
                  <div class="col-lg-10">
                    <h1>Oragniser Details</h1>
                    <h4>Name</h4>
                    <p>
                      {{ contest.adminuser.profile.firstname }}
                      {{ contest.adminuser.profile.lastname }}
                    </p>
                    <h4>Email</h4>
                    <p>{{ contest.adminuser.profile.email }}</p>
                    <h4>Phone Number</h4>
                    <p>{{ contest.adminuser.profile.phonenumber }}</p>
                    <h4>About</h4>
                    <h6>{{ contest.adminuser.profile.about }}</h6>
                  </div>
                </div>
              </div>
            </div>
            <!--Verify Transaction-->
            <div
              class="tab-pane fade"
              id="pills-trans"
              role="tabpanel"
              aria-labelledby="pills-trans-tab"
            >
              <div class="container organiser-area">
                <div class="row justify-content-center">
                  <div class="col-lg-10">
                    <h1>Verify Transaction</h1>
                    <h5>
                      Enter your reference number below to verify your
                      transaction status
                    </h5>
                    <form>
                      <div class="row">
                        <div class="col-lg-6">
                          <label>Reference Number</label>
                          <input
                            type="text"
                            placeholder="Enter Reference Number"
                          />
                          <button type="submit" class="mt-2">Verify</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <elfrique-footer />
</template>

<script>
  import Header from "./elfrique-header.vue";
  import Footer from "./elfrique-footer.vue";
  import BarChart from "../Chart/BarChart.vue";
  import PieChart from "../Chart/PieChart.vue";
  import PolarChart from "../Chart/PolarChart.vue";
  import moment from "moment";
  import VoteService from "../service/vote.service";
  import ProgressBarVue from "./components/ProgressBar.vue";
  export default {
    name: "Elfrique",
    components: {
      "elfrique-header": Header,
      "elfrique-footer": Footer,
      BarChart,
      PieChart,
      PolarChart,
      ProgressBarVue,
    },
    data() {
      return {
        contest: "",
        ended: false,
        endDate: "",
        countdown: {
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        },
        chartType: "",
        label: 0,
        totalVotes: 0,
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
      VoteService.getSingleContest(this.$route.params.id).then((response) => {
        this.contest = response.data.voteContest;
        this.endDate = response.data.voteContest.closedate;
        this.getTotalVotes(response.data.voteContest);
        this.getCountdown();
      });
    },
    methods: {
      getTotalVotes(contest) {
        let sum = 0;
        contest.contestants.forEach((contenstant) => {
          sum += contenstant.voteCount;
        });

        this.totalVotes = sum;
      },

      getCountdown() {
        var endCount = moment(this.endDate).format("YYYY-MM-DDT11:00:00Z");

        // make it a moment object End
        var event = moment(endCount);

        // get current time/date
        var current = moment().format();
        /* console.log(current);
      console.log(endCount); */
        if (current >= endCount) {
          this.ended = true;
          this.countdown.days = 0;
          this.countdown.hours = 0;
          this.countdown.minutes = 0;
          this.countdown.seconds = 0;
        } else {
          this.ended = false;
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
      getContestant(con) {
        this.$store.dispatch("vote/getContestant", con);
      },
    },
    mounted() {
      window.scrollTo(0, 0);
    },
  };
</script>

<style>
  .form-control {
    height: 50px;
  }
  .form-control:focus {
    color: #212529;
    background-color: #fff;
    border-color: #68f874 !important;
    outline: 0;
    box-shadow: none !important;
  }
</style>
