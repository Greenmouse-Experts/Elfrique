<template>
  <title>Dashboard | Elfrique - Super Admin</title>
  <dash-header />

  <!--------Main Content--------->
  <main id="main" class="main">
    <!--Page Title-->
    <div class="pagetitle">
      <h1>SuperAdmin Dashboard</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/organiser/dashboard" class="routers"
              ><a>Home</a></router-link
            >
          </li>
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div>
    <!-- <div class="alert alert-danger alert-dismissible fade show" role="alert">
                Your account is not yet verified. Click on the verification link sent to your email to verify your email to avoid account disabling. If you didn't get the verification code click on the verify button below to get a code. <br>
                <button type="button" class="btn btn-success">Verify Now</button>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div> -->
    <!--Page Body-->
    <section class="section dashboard mt-3">
      <div class="col-lg-12">
        <div class="row justify-content-center">
          <!--Box 1-->
          <div class="col-xxl-2 col-md-6">
            <div class="card info-card vote-card">
              <div class="card-body">
                <h5 class="card-title">Votes</h5>
                <div class="d-flex align-items-center">
                  <div
                    class="
                      card-icon
                      rounded-circle
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                  >
                    <img src="@/assets/images/icon-vote.png" />
                  </div>
                  <div class="ps-3">
                    <h6>{{ votes }}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Box 2-->
          <!-- <div class="col-xxl-2 col-md-6">
                        <div class="card info-card ticket-card">
                            <div class="card-body">
                                <h5 class="card-title">Tickets</h5>
                                <div class="d-flex align-items-center">
                                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                        <img src="@/assets/images/icon-ticket.png">
                                    </div>
                                    <div class="ps-3">
                                        <h6>{{ticket}}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
          <!--Box 3-->
          <div class="col-xxl-2 col-md-6">
            <div class="card info-card form-card">
              <div class="card-body">
                <h5 class="card-title">Forms</h5>
                <div class="d-flex align-items-center">
                  <div
                    class="
                      card-icon
                      rounded-circle
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                  >
                    <img src="@/assets/images/icon-form.png" />
                  </div>
                  <div class="ps-3">
                    <h6>{{ form }}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Box 4-->
          <div class="col-xxl-2 col-md-6">
            <div class="card info-card trivia-card">
              <div class="card-body">
                <h5 class="card-title">Trivia</h5>
                <div class="d-flex align-items-center">
                  <div
                    class="
                      card-icon
                      rounded-circle
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                  >
                    <img src="@/assets/images/icon-trivia.png" />
                  </div>
                  <div class="ps-3">
                    <h6>{{ trivia }}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Box 5-->
          <div class="col-xxl-2 col-md-6">
            <div class="card info-card event-card">
              <div class="card-body">
                <h5 class="card-title">Events</h5>
                <div class="d-flex align-items-center">
                  <div
                    class="
                      card-icon
                      rounded-circle
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                  >
                    <img src="@/assets/images/icon-event.png" />
                  </div>
                  <div class="ps-3">
                    <h6>{{ event }}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Box 6-->
          <!-- <div class="col-xxl-2 col-md-6">
                        <div class="card info-card vendor-card">
                            <div class="card-body">
                                <h5 class="card-title">Vendor</h5>
                                <div class="d-flex align-items-center">
                                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                        <img src="@/assets/images/icon-vendor.png">
                                    </div>
                                    <div class="ps-3">
                                        <h6>{{vendor}}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
        </div>
      </div>
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <!--Tabs-->
            <ul class="nav nav-tabs tabs-dashboard" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="voting-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#voting"
                  type="button"
                  role="tab"
                  aria-controls="voting"
                  aria-selected="true"
                >
                  Voting
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="ticket-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#ticket"
                  type="button"
                  role="tab"
                  aria-controls="ticket"
                  aria-selected="false"
                >
                  Events
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="form-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#form"
                  type="button"
                  role="tab"
                  aria-controls="form"
                  aria-selected="false"
                >
                  Forms
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="trivia-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#trivia"
                  type="button"
                  role="tab"
                  aria-controls="trivia"
                  aria-selected="false"
                >
                  Trivias
                </button>
              </li>
              <!-- <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="referrals-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#referrals"
                  type="button"
                  role="tab"
                  aria-controls="referrals"
                  aria-selected="false"
                >
                  Referrals
                </button>
              </li> -->
              <!-- <li class="nav-item" role="presentation">
                                <button class="nav-link" id="payout-tab" data-bs-toggle="tab" data-bs-target="#payout" type="button" role="tab"
                                    aria-controls="blog" aria-selected="false">Payouts</button>
                            </li> -->
            </ul>

            <div class="tab-content pt-2" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="voting"
                role="tabpanel"
                aria-labelledby="voting-tab"
              >
                <div class="card">
                  <div
                    class="alert alert-primary alert-dismissible fade show"
                    role="alert"
                  >
                    Create Your Own Voting Contest.
                    <router-link to="/organiser/start-voting" class="routers"
                      ><strong>Click Me!</strong></router-link
                    >
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="card-body card-table">
                    <!--Table-->
                    <table
                      ref="vote"
                      class="table datatable card-table-table"
                      id="voteTable"
                    >
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Title</th>
                          <th scope="col">Image</th>
                          <th scope="col">Type</th>
                          <th scope="col">Fee</th>
                          <th scope="col">Fee</th>
                          <th scope="col">Payment</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in voteContest" :key="item.id">
                          <th scope="row">#</th>
                          <td>{{ item.title }}</td>
                          <td>
                            <img :src="item.image" style="width: 100px" />
                          </td>
                          <td>{{ item.type }}</td>
                          <td>{{ item.fee }}</td>
                          <td>{{ item.votelimit }}</td>
                          <td>{{ item.paymentgateway }}</td>
                          <td>{{ item.packagestatus }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="ticket"
                role="tabpanel"
                aria-labelledby="ticket-tab"
              >
                <div class="card">
                  <div
                    class="alert alert-primary alert-dismissible fade show"
                    role="alert"
                  >
                    Start Sales of Your Event Tickets.
                    <router-link to="/organiser/create-event" class="routers"
                      ><strong>Click Me!</strong></router-link
                    >
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="card-body card-table">
                    <!--Table-->
                    <table
                      ref="event"
                      class="table datatable card-table-table"
                      id="eventTable"
                    >
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Title</th>
                          <th scope="col">Image</th>
                          <th scope="col">Venue</th>
                          <th scope="col">Starting Date</th>
                          <th scope="col">End Date</th>
                          <th scope="col">Organisation</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in events" :key="item.id">
                          <th scope="row">#</th>
                          <td>{{ item.title }}</td>
                          <td>
                            <img :src="item.image" style="width: 100px" />
                          </td>
                          <td>{{ item.venue }}</td>
                          <td>{{ item.startdate }}</td>
                          <td>{{ item.enddate }}</td>
                          <td>{{ item.organisation }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="form"
                role="tabpanel"
                aria-labelledby="form-tab"
              >
                <div class="card">
                  <div
                    class="alert alert-primary alert-dismissible fade show"
                    role="alert"
                  >
                    Start Sales of Your Forms Online.
                    <router-link to="/organiser/create-form" class="routers"
                      ><strong>Click Me!</strong></router-link
                    >
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="card-body card-table">
                    <!--Table-->
                    <table
                      ref="form"
                      class="table datatable card-table-table"
                      id="formTable"
                    >
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Title</th>
                          <th scope="col">Image</th>
                          <th scope="col">Type</th>
                          <th scope="col">Fee</th>
                          <th scope="col">Starting Date</th>
                          <th scope="col">Closing Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in eventForm" :key="item.id">
                          <th scope="row">#</th>
                          <td>{{ item.title }}</td>
                          <td>
                            <img :src="item.image" style="width: 100px" />
                          </td>
                          <td>{{ item.type }}</td>
                          <td>{{ item.fee }}</td>
                          <td>{{ item.startdate }}</td>
                          <td>{{ item.closedate }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="trivia"
                role="tabpanel"
                aria-labelledby="trivia-tab"
              >
                <div class="card">
                  <div
                    class="alert alert-primary alert-dismissible fade show"
                    role="alert"
                  >
                    Create Your Trivia.
                    <router-link to="/organiser/create-trivia" class="routers"
                      ><strong>Click Me!</strong></router-link
                    >
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="card-body card-table">
                    <table
                      ref="trivia"
                      class="table datatable card-table-table"
                      id="triviaTable"
                    >
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">ID</th>
                          <th scope="col">Title</th>
                          <th scope="col">Image</th>
                          <th scope="col">Type</th>
                          <th scope="col">Duration</th>
                          <th scope="col">Options</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in trivias" :key="item.id">
                          <th scope="row">#</th>
                          <td>{{ item.id }}</td>
                          <td>{{ item.title }}</td>
                          <td>
                            <img :src="item.image" style="width: 100px" />
                          </td>
                          <td>{{ item.type }}</td>
                          <td>{{ item.duration }}</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="referrals"
                role="tabpanel"
                aria-labelledby="referrals-tab"
              >
                <!--People You Referred-->
                <div class="card">
                  <div class="referral-link-here">
                    <h3 class="mb-3 text-dark font-weight-bold">
                      Your referral link:
                    </h3>
                    <input
                      class="input-url"
                      type="url"
                      placeholder="Your created short url will appear here"
                      disabled
                      :value="referral"
                    />
                    <input
                      class="input-url-button"
                      type="button"
                      value="Copy"
                    />
                  </div>
                  <div class="card-body card-table">
                    <!--Table-->
                    <p class="text-center p-text">People you referred</p>
                    <table
                      ref="referrer"
                      class="table datatable card-table-table"
                    >
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Email</th>
                          <th scope="col">Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(con, index) in content" :key="con.id">
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ con.user.email }}</td>
                          <td>
                            {{ con.user.firstname }} {{ con.user.lastname }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!--Your Referral Earnings-->
                <div class="card">
                  <div class="card-body card-table">
                    <!--Table-->
                    <p class="text-center p-text">Your referral earnings</p>
                    <table class="table datatable card-table-table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Product</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Earned From</th>
                          <th scope="col">Date Added</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="payout"
                role="tabpanel"
                aria-labelledby="payout-tab"
              >
                <div class="card">
                  <div
                    class="alert alert-primary alert-dismissible fade show"
                    role="alert"
                  >
                    Your Payouts requests
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="card-body card-table">
                    <table class="table datatable card-table-table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">ID</th>
                          <th scope="col">Product</th>
                          <th scope="col">Product ID</th>
                          <th scope="col">Approval Status</th>
                          <th scope="col">Payment Status</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Date Added</th>
                          <th scope="col">View Narration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <dash-footer />
</template>

<style scoped src="@/assets/css/dashStyle.css"></style>

<script>
import Header from "./dash-header.vue";
import Footer from "./dash-footer.vue";
import VoteService from "../../service/vote.service";
import EventService from "../../service/event.service";
import FormService from "../../service/form.service";
import TriviaService from "../../service/trivia.service";
export default {
  name: "Elfrique",
  components: {
    "dash-header": Header,
    "dash-footer": Footer,
  },
  data() {
    return {
      ref_Id: "",
      referral: "",
      message: "",
      content: "",
      adminId: "",
      form: 0,
      trivia: 0,
      trivias: {},
      eventForm: {},
      event: 0,
      events: {},
      votes: 0,
      voteContest: {},
      vendor: 0,
      ticket: 0,
      uri: "data:application/vnd.ms-excel;base64,",
      template:
        '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
      base64: function (s) {
        return window.btoa(unescape(encodeURIComponent(s)));
      },
      format: function (s, c) {
        return s.replace(/{(\w+)}/g, function (m, p) {
          return c[p];
        });
      },
    };
  },

  computed: {
    currentUser() {
      const user = this.$store.state.auth.user;
      if (user) {
        return user;
      }
    },
  },

  created() {
    VoteService.getAllContestForAdmin().then((response) => {
      this.voteContest = response.data.voteContests;
      this.votes = this.voteContest.length;
      //console.log(this.voteContest);
      setTimeout(function () {
        $("#voteTable").DataTable({
          dom: "Bfrtip",
          pageLength: 10,
          buttons: ["copy", "csv", "excel", "pdf", "print"],
        });
      }, 1000);
    });
    EventService.allEventsforAdmin().then((response) => {
      this.events = response.data.events;
      this.event = this.events.length;
      setTimeout(function () {
        $("#eventTable").DataTable({
          dom: "Bfrtip",
          pageLength: 10,
          buttons: ["copy", "csv", "excel", "pdf", "print"],
        });
      }, 1000);
    });
    FormService.allFormForAdmin().then((response) => {
      this.eventForm = response.data.form;
      this.form = this.eventForm.length;
      setTimeout(function () {
        $("#formTable").DataTable({
          dom: "Bfrtip",
          pageLength: 10,
          buttons: ["copy", "csv", "excel", "pdf", "print"],
        });
      }, 1000);
    });

    TriviaService.getAllTrivias().then((response) => {
      this.trivias = response.data.trivias;
      this.trivia = this.trivias.length;
      setTimeout(function () {
        $("#triviaTable").DataTable({
          dom: "Bfrtip",
          pageLength: 10,
          buttons: ["copy", "csv", "excel", "pdf", "print"],
        });
      }, 1000);
    });
  },

  methods: {},

  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>