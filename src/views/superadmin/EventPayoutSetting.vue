<template>
  <title>Event Payout Setting | Elfrique - Super Admin</title>
  <dash-header />

  <!--------Main Content--------->
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Payout Setting</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/superadmin/dashboard" class="routers"
              ><a>Home</a></router-link
            >
          </li>
          <li class="breadcrumb-item active">Registration</li>
          <li class="breadcrumb-item">
            <router-link to="/superadmin/overview-registration" class="routers"
              ><a>Overview</a></router-link
            >
          </li>
          <li class="breadcrumb-item active">Payout Setting</li>
        </ol>
      </nav>
    </div>
    <!-- End Page Title -->

    <div class="container start-voting-div create-event-div payout-setting-div">
      <div class="row justify-content-center">
        <div class="col-lg-11" v-if="message">
          <div
            class="alert-success alert alert-dismissible fade show"
            role="alert"
          >
            {{ message }}
            <a
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></a>
          </div>
        </div>

        <form @submit.prevent="updatePayout">
          <div class="row justify-content-center">
            <div class="col-lg-11 event-details-header">
              Update Event Payout Presetting
            </div>
            <!--Update Event Payout Presetting DIV-->
            <div class="col-lg-11 start-voting-inner-div">
              <div class="row">
                <!--Payment Gateway (Local)-->
                <div class="col-lg-4 mt-2">
                  <label for="event title">Payment Gateway (Local)</label>
                  <input
                    class="input"
                    type="number"
                    min="0"
                    step=".00000001"
                    v-model="payload.payment_gateway_local"
                    required
                  />
                </div>
                <!--Payment Gateway (International)-->
                <div class="col-lg-4 mt-2">
                  <label for="event title"
                    >Payment Gateway (International)</label
                  >
                  <input
                    class="input"
                    type="number"
                    min="0"
                    step=".00000001"
                    v-model="payload.payment_gateway_int"
                    required
                  />
                </div>
                <!--Payment Gateway (Airtime)-->
                <div class="col-lg-4 mt-2">
                  <label for="event title">Payment Gateway (Airtime)</label>
                  <input
                    class="input"
                    type="number"
                    min="0"
                    step=".00000001"
                    v-model="payload.payment_gateway_airtime"
                    required
                  />
                </div>
                <!--Company Percentage (Local)-->
                <div class="col-lg-4 mt-2">
                  <label for="event title">Company Percentage (Local)</label>
                  <input
                    class="input"
                    type="number"
                    min="0"
                    step=".00000001"
                    v-model="payload.company_percent_local"
                    required
                  />
                </div>
                <!--Company Percentage (International)-->
                <div class="col-lg-4 mt-2">
                  <label for="event title"
                    >Company Percentage (International)</label
                  >
                  <input
                    class="input"
                    type="number"
                    min="0"
                    step=".00000001"
                    v-model="payload.company_percent_int"
                    required
                  />
                </div>
                <!--Company Share (Airtime Transactions)-->
                <div class="col-lg-4 mt-2">
                  <label for="event title"
                    >Company Share (Airtime Transactions)</label
                  >
                  <input
                    class="input"
                    type="number"
                    min="0"
                    step=".00000001"
                    v-model="payload.company_percent_airtime"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="col-lg-11 event-details-header event-details-headerTwo">
              Cash Transaction
            </div>
            <!--Cash Transaction DIV-->
            <div class="col-lg-11 start-voting-inner-div">
              <div class="row">
                <!--Company Percentage (Local)-->
                <div class="col-lg-4 mt-2">
                  <label for="event title">Company Percentage (Local)</label>
                  <input
                    class="input"
                    type="number"
                    min="0"
                    step=".00000001"
                    v-model="payload.cash_company_percent_airtime"
                    required
                  />
                </div>
                <!--Company Percentage (International)-->
                <div class="col-lg-4 mt-2">
                  <label for="event title"
                    >Company Percentage (International)</label
                  >
                  <input
                    class="input"
                    type="number"
                    min="0"
                    step=".00000001"
                    v-model="payload.cash_company_percent_airtime"
                    required
                  />
                </div>
                <!--Company Percentage (Airtime)-->
                <div class="col-lg-4 mt-2">
                  <label for="event title">Company Percentage (Airtime)</label>
                  <input
                    class="input"
                    type="number"
                    min="0"
                    step=".00000001"
                    v-model="payload.cash_company_percent_airtime"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="col-lg-11 event-details-header event-details-headerTwo">
              Extra Settings
            </div>
            <!--Extra Settings DIV-->
            <div class="col-lg-11 start-voting-inner-div">
              <div class="row">
                <!--Deduction When Amount Is Above Set Level(Switch)-->
                <div class="col-lg-4 mt-2">
                  <label for="event title"
                    >Deduction When Amount Is Above Set Level(Switch)</label
                  >
                  <div class="switch">
                    <input
                      type="checkbox"
                      id="toggleAll"
                      :checked="setLevel"
                      v-model="setLevel"
                    />
                    <label for="toggleAll"></label>
                  </div>
                </div>
                <!--Amount Threshold-->
                <div class="col-lg-4 mt-2">
                  <label for="event title">Amount Threshold</label>
                  <input
                    class="input"
                    type="number"
                    min="0"
                    step=".00000001"
                    v-model="payload.amount_threshold"
                    required
                  />
                </div>
                <!--Amount To Deduct-->
                <div class="col-lg-4 mt-2">
                  <label for="event title">Amount To Deduct</label>
                  <input
                    class="input"
                    type="number"
                    min="0"
                    step=".00000001"
                    v-model="payload.amount_deduct"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="col-lg-11 mt-4">
              <button type="submit">Update Payout Setting</button>
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
  import PayoutService from "../../service/payout.service";

  export default {
    name: "Elfrique",
    components: {
      "dash-header": Header,
      "dash-footer": Footer,
      PayoutService,
    },

    data() {
      return {
        payload: {
          payment_gateway_local: "",
          payment_gateway_int: "",
          payment_gateway_airtime: "",
          company_percent_local: "",
          company_percent_int: "",
          company_percent_airtime: "",
          cash_company_percent_local: "",
          cash_company_percent_int: "",
          cash_company_percent_airtime: "",
          amount_threshold: "",
          set_level: false,
        },
        setLevel: false,
        message: null,
      };
    },

    created() {
      PayoutService.getAllPayOut("Event").then((response) => {
        this.payload = response.data.payout;
        this.setLevel = response.data.payout.set_level;
      });
    },

    methods: {
      updatePayout() {
        delete this.payload.id;
        delete this.payload.product_name;

        this.payload.set_level = this.setLevel.toString();

        PayoutService.updatePayOut("Event", this.payload).then((response) => {
          this.message = response.data.message;
          window.scrollTo(0, 0);
          PayoutService.getAllPayOut("Event").then((response) => {
            this.payload = response.data.payout;
            this.setLevel = response.data.payout.set_level;
          });
        });
      },
    },

    mounted() {
      window.scrollTo(0, 0);
    },
  };
</script>
