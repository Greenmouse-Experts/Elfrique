<template>
  <title>
    Event Form Management System | Elfrique – Complete Event Management System
  </title>

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
              <img :src="eventContent.image" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="text-title-area">
              <h1>{{ eventContent.title ?? "" }}</h1>
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
                <!-- <p><i class="bi bi-alarm"></i> : 00:01</p> -->
                <h5>End</h5>
                <p>
                  <i class="bi bi-calendar3"></i> :
                  {{ format_date(eventContent.closedate) }}
                </p>
                <!-- <p><i class="bi bi-alarm"></i> : 23:99</p> -->
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

      <div class="container event-form-content mt-4">
        <div class="row">
          <div class="col-lg-12">
            <ul class="nav nav-pills mb-5 mt-2" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active tabs-button"
                  id="pills-form-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-form"
                  type="button"
                  role="tab"
                  aria-controls="pills-form"
                  aria-selected="true"
                >
                  <i class="bi bi-people-fill"></i> Forms
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
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
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link tabs-button"
                  id="pills-det-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-det"
                  type="button"
                  role="tab"
                  aria-controls="pills-det"
                  aria-selected="false"
                >
                  <i class="fas fa-info"></i> Event Details
                </button>
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
              <!--Forms-->
              <div
                class="tab-pane fade show active"
                id="pills-form"
                role="tabpanel"
                aria-labelledby="pills-form-tab"
              >
                <div class="event-details">
                  <div class="row">
                    <div class="col-lg-12" v-if="ended == true">
                      <form>
                        <div class="row">
                          <div class="col-lg-12">
                            <h1 style="margin-top: -60px">Register</h1>
                            <p
                              class="amount"
                              style="text-transform: capitalize"
                            >
                              <i class="bi bi-credit-card-fill"></i> :
                              {{ eventContent.type }}
                            </p>
                            <h6>Enter the following details to continue</h6>
                          </div>
                          <div class="col-lg-6 mb-3">
                            <label>First name</label>
                            <input
                              v-model="firstname"
                              class="input"
                              type="text"
                              placeholder="Enter first name"
                            />
                          </div>
                          <div class="col-lg-6 mb-3">
                            <label>Last name</label>
                            <input
                              v-model="lastname"
                              class="input"
                              type="text"
                              placeholder="Enter last name"
                            />
                          </div>
                          <div class="col-lg-12 mb-3">
                            <label>Email address</label>
                            <input
                              v-model="email"
                              class="input"
                              type="email"
                              placeholder="Enter email address"
                            />
                          </div>
                          <div class="col-lg-12 text-center">
                            <button
                              v-if="eventContent.type == 'paid'"
                              @click="proceedPay()"
                            >
                              Proceed
                            </button>
                            <!--Note This proceed button will direct them to EventFormPay.vue page for the summary-->
                            <button
                              v-else
                              @click="continueForm(eventContent.id)"
                            >
                              Proceed
                            </button>
                          </div>
                        </div>
                      </form>

                      <!-- <button
                      @click="showModal"
                      class="btn-view"
                      style="
                        text-decoration: none;
                        background: green none repeat scroll 0% 0%;
                        color: rgb(255, 255, 255);
                        padding: 9px 42px;
                        font-size: 17px;
                        border-radius: 10px;
                        cursor: pointer;
                        border: 0;
                      "
                    >
                      Apply Now
                    </button> -->
                    </div>
                    <div class="col-lg-12" v-else>
                      <h6 style="color: red">
                        Event has expired, goto event form to apply another one
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div
              class="modal fade"
              ref="exampleModal"
              data-backdrop="static"
              data-keyboard="false"
              tabindex="-1"
              aria-labelledby="exampleModal"
              aria-hidden="true"
            >
              <div class="modal-dialog" style="top: 180px; max-width: 579px">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Choose Payment Option
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      @click="modal.hide()"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div class="px-5">
                      <div class="form-groug">
                        <label>Email</label>
                        <input
                          type="email"
                          v-model="email"
                          class="form-control"
                          placeholder="Email Required"
                          required
                        />
                      </div>
                      <div class="form-groug">
                        <label>FirstName</label>
                        <input
                          type="text"
                          v-model="firstname"
                          class="form-control"
                          placeholder="Firstname Required"
                          required
                        />
                      </div>
                      <div class="form-groug">
                        <label>Lastname</label>
                        <input
                          type="text"
                          v-model="lastname"
                          class="form-control"
                          placeholder="Lastname Required"
                          required
                        />
                      </div>
                    </div>

                    <div class="px-5" v-if="inPutFilled">
                      <button
                        class="btn"
                        style="
                          border: 0px none;
                          margin: 10px;
                          margin-top: 3px;
                          background: #bfddb4;
                          margin-top: 12px;
                        "
                        @click="payStack(eventContent.id)"
                      >
                        <img
                          src="https://raw.githubusercontent.com/PaystackHQ/wordpress-payment-forms-for-paystack/master/icon.png"
                          style="width: 105px; height: 42px"
                        />
                      </button>
                      <button
                        class="btn"
                        style="
                          border: 0px none;
                          margin: 10px;
                          margin-top: 3px;
                          background: #bfddb4;
                          margin-top: 12px;
                        "
                        @click="flutterWave(eventContent.id)"
                      >
                        <img
                          src="https://bookface-images.s3.amazonaws.com/logos/630f2d7d83b9b94e29ea834681d64fdabac26af6.png"
                          style="width: 105px; height: 42px"
                        />
                      </button>
                      <button
                        class="btn"
                        style="
                          border: 0px none;
                          margin: 10px;
                          margin-top: 3px;
                          background: #bfddb4;
                          margin-top: 12px;
                        "
                        @click="interSwitch(eventContent.id)"
                      >
                        <img
                          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Finnovation-village.com%2Fwp-content%2Fuploads%2F2016%2F02%2Finterswitch-e1505473879164.png%3Fresize%3D700%252C394%26ssl%3D1&f=1&nofb=1"
                          style="width: 105px; height: 42px"
                        />
                      </button>
                    </div>
                    <div v-else>
                      <h3
                        style="
                          text-align: center;
                          font-size: 16px;
                          margin-top: 20px;
                        "
                      >
                        Please fill the above required field to proceed
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
              <!--Organiser-->
              <div
                class="tab-pane fade"
                id="pills-organ"
                role="tabpanel"
                aria-labelledby="pills-organ-tab"
              >
                <div class="container organiser-area">
                  <div class="row justify-content-center px-2">
                    <div class="col-lg-12">
                      <h1 style="margin-top: -30px">Oragniser Details</h1>
                      <h4>Name</h4>
                      <p>
                        {{ eventContent.adminuser.profile.firstname }}
                        {{ eventContent.adminuser.profile.lastname }}
                      </p>
                      <h4>Email</h4>
                      <p>{{ eventContent.adminuser.email }}</p>
                      <h4>Phone Number</h4>
                      <p>{{ eventContent.adminuser.phonenumber }}</p>
                      <h4>About</h4>
                      <h6>{{ eventContent.adminuser.about }}</h6>
                    </div>
                  </div>
                </div>
              </div>
              <!--Event Details-->
              <div
                class="tab-pane fade"
                id="pills-det"
                role="tabpanel"
                aria-labelledby="pills-det-tab"
              >
                <div class="container organiser-area">
                  <div class="row justify-content-center px-2">
                    <div class="col-lg-12">
                      <h1 style="margin-top: -30px">Event Details</h1>
                      <h6
                        style="
                          max-width: 524px;
                          font-weight: 400;
                          font-size: 16px;
                        "
                      >
                        {{ eventContent.description }}
                      </h6>
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
                    <div class="col-lg-12">
                      <h1>Verify Transaction</h1>
                      <h5>
                        Enter your reference number below to verify your
                        transaction status
                      </h5>
                      <form @submit.prevent="verifyTransaction">
                        <div class="row">
                          <div class="col-lg-6">
                            <label>Reference Number</label>
                            <input
                              type="text"
                              placeholder="Enter Reference Number"
                              v-model="payload.reference"
                            />
                          <button type="submit" :disabled="disableBtn" class="mt-2">Verify</button>
                          </div>
                        </div>
                      </form>

                      <div class="col-lg-10">
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
                      </div>
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
</template>
<script>
  import Header from "./elfrique-header.vue";
  import TransactionService from "../service/transaction.service";
  import Notification from "../service/notitfication-service";
  import Footer from "./elfrique-footer.vue";
  import EventService from "../service/form.service";
  import uniqid from "uniqid";
  import { Modal } from "bootstrap";
  import paystack from "vue-paystack";
  import moment from "moment";
  import axios from "axios";
  import LoaderVue from "./components/Loader.vue";
  import transactionService from "../service/transaction.service";
  import Swal from "sweetalert2";

  export default {
    name: "Elfrique",
    components: {
      "elfrique-header": Header,
      "elfrique-footer": Footer,
      LoaderVue,
      Swal
    },
    data() {
      return {
        ended: true,
        currency_symbol: "",
        toRate: "",
        message: "",
        eventContent: {
          adminuser: {
            profile: {},
          },
          id: "",
          title: "",
          fee: "",
        },
        modal: null,
        email: "",
        admin_id: "",
        firstname: "",
        lastname: "",
        description: "",
        disableBtn: false,
        method: "",
        reference: this.genRef(),
        publicKey: "pk_test_be803d46f5a6348c3643967d0e6b7b2303d42b4f",
        flw_public_key: "FLWPUBK_TEST-0f353662b04aee976128e62946a59682-X",
        endDate: "",
        countdown: {
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        },
        loading: true,
        payload: {
          reference: "",
        },
      };
    },
    computed: {
      formId() {
        return this.$route.params.id;
      },
      currentUrl() {
        return window.location.href;
      },
      inPutFilled() {
        if (this.email != "" && this.firstname != "" && this.lastname != "") {
          return true;
        } else {
          return false;
        }
      },
      transactForm() {
        return {
          admin_id: this.admin_id,
          reference: this.reference,
          category: "Event Form",
          email: this.email,
          method: this.method,
          product_title: this.eventContent.title,
          product_id: this.eventContent.id,
          currency: this.currency_symbol,
          type: "paid",
          amount: (this.eventContent.fee / this.toRate).toFixed(2),
          payer_name: this.firstname + " " + this.lastname,
        };
      },
    },
    created() {
      EventService.getSingleForm(this.$route.params.id).then((response) => {
        this.eventContent = response.data.form;

        this.admin_id = response.data.form.adminuserId;
        this.method = response.data.form.paymentgateway;
        this.description = response.data.form.description;
        this.endDate = response.data.form.closedate;
        this.getCountdown();
        //console.log(response.data.form);
        this.loading = false;
      });
      this.convert_price();
      const script = document.createElement("script");
      script.src =
        "https://qa.interswitchng.com/collections/public/javascripts/inline-checkout.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    },

    methods: {
      verifyTransaction() {
        this.disableBtn = true;
        transactionService
          .verifyTransaction(this.payload)
          .then((response) => {
            Swal.fire({
              icon: "success",
              text: `The status for Your Event Form Subscription with reference number ${this.payload.reference} is Paid`,
              confirmButton: 'OK'
            });
            this.disableBtn = false;
          }).catch(err => {
            Swal.fire({
              icon: "error",
              text: err.response.data.message,
              confirmButton: 'OK'
            });
            this.disableBtn = false;
          })
      },

      convert_price() {
        axios.get("http://ipinfo.io?token=79cd3ae8cbc7b1").then((res) => {
          axios
            .get(
              `https://ip-api.com/json/${res.data.ip}?fields=country,countryCode,currency,as,query`
            )
            .then((res) => {
              let currency = res.data.currency;
              if (
                currency === "NGN" ||
                currency === "GHS" ||
                currency === "KES"
              ) {
                axios
                  .get(`https://api.exchangerate-api.com/v4/latest/${currency}`)
                  .then((res) => {
                    this.currency_symbol = res.data.base;
                    this.toRate = res.data.rates["NGN"];
                  });
              } else {
                axios
                  .get(`https://api.exchangerate-api.com/v4/latest/USD`)
                  .then((res) => {
                    this.currency_symbol = res.data.base;
                    this.toRate = res.data.rates["NGN"];
                  });
              }
            });
        });
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
      continueForm(id) {
        let data = {
          name: this.firstname + " " + this.lastname,
          email: this.email,
        };
        Notification.addNotification({
          receiverId: this.admin_id,
          type: "Event Form",
          message: `Someone just Successfully Applied for Event Form`,
        });
        localStorage.setItem("EventformData", data);
        this.$router.push("/fill-form/" + id, {
          params: { data: { data } },
        });
      },
      proceedPay() {
        localStorage.setItem(
          "EventformData",
          JSON.stringify(this.transactForm)
        );
        localStorage.setItem("EventformDescription", this.description);
        this.$router.push({
          name: "EvtForEventFormPay",
          params: {
            data: JSON.stringify(this.transactForm),
            description: this.description,
          },
        });
      },
      showModal() {
        this.modal = new Modal(this.$refs.exampleModal);
        this.modal.show();
      },
      genRef() {
        return uniqid();
      },
      /* makePayment(id) {
      let url = `/fill-form/' + eventContent.id`;
      this.modal = true;
    }, */
      payStack(id) {
        //  options
        const paymentOptions = {
          // general options
          key: this.publicKey, //required
          email: this.email, //required
          amount: (this.eventContent.fee * 100).toFixed(0), //required
          reference: this.reference, //required
          firstname: this.firstname,
          lastname: this.lastname,
          /* currency: this.currency,
                channels: this.channels,
                metadata: this.metadata,
                label: this.label,  */
          onSuccess: (response) => {
            console.log(response);
            this.method = "Paystack";
            Notification.addNotification({
              receiverId: this.admin_id,
              type: "Event Form",
              message: `Someone just Successfully Applied for Event Form`,
            });
            TransactionService.makeTransaction(this.transactForm).then(
              (response) => {
                //this.modal.hide();
                this.message = response.data.message;
                //this.resetForm();
              }
            );
            this.$router.push("/fill-form/" + id);
          },

          /*  onCancel: () => {
                this.onCancel();
                }, */
          // onBankTransferConfirmationPending: function(response) {
          //   this.onBankTransferConfirmationPending(response);
          // },
          // single split payments
          //subaccount:this.subaccount,  //required for single split
          //transaction_charge:this.transaction_charge,
          //bearer:this.bearer,
          // multi-split payments
          //split_code:this.split_code, //required for multi-split
          // subscriptionss
          // plan: this.plan, //required for subscriptions
          // quantity: this.quantity,
        };
        const paystack = new window.PaystackPop();
        paystack.newTransaction(paymentOptions);
        this.modal.hide();
      },
      flutterWave(id) {
        let paymentParams = {
          public_key: this.flw_public_key,
          tx_ref: this.reference,
          amount: this.eventContent.fee.toString(),
          currency: "NGN",
          customer: {
            email: this.email,
            phone_number: this.phone,
          },
          callback: (response) => {
            console.log(response);
            this.method = "Flutterwave";
            Notification.addNotification({
              receiverId: this.admin_id,
              type: "Event Form",
              message: `Someone just Successfully Applied for Event Form`,
            });
            TransactionService.makeTransaction(this.transactForm).then(
              (response) => {
                this.message = response.data.message;
                //this.resetForm();
              }
            );
            this.$router.push("/fill-form/" + id);
          },
          onclose: () => this.onclose(),
        };

        window.FlutterwaveCheckout(paymentParams);
        this.modal.hide();
      },
      interSwitch(id) {
        let samplePaymentRequest = {
          merchant_code: "MX60729",
          pay_item_id: "6294592",
          site_redirect_url: window.location.origin,
          cust_id: this.email,
          data_ref: "vjyLc2lgNK",
          txn_ref: this.reference,
          amount: this.eventContent.fee.toString(),
          currency: 566, // ISO 4217 numeric code of the currency used
          onComplete: (response) => {
            console.log(response);
            this.method = "InterSwitch";
            //console.log(this.transactForm);
            Notification.addNotification({
              receiverId: this.admin_id,
              type: "Event Form",
              message: `Someone just Successfully Applied for Event Form`,
            });
            TransactionService.makeTransaction(this.transactForm).then(
              (response) => {
                //this.modal.hide();
                this.message = response.data.message;
                //this.resetForm();
              }
            );
            this.$router.push("/fill-form/" + id);
          },
          mode: "TEST",
        };
        console.log(samplePaymentRequest);

        window.webpayCheckout(samplePaymentRequest);
        this.modal.hide();
      },
    },
    mounted() {
      window.scrollTo(0, 0);
      const popup = document.createElement("script");
      popup.setAttribute("src", "https://js.paystack.co/v2/inline.js");
      popup.async = true;
      document.head.appendChild(popup);
      const inlineSdk = "https://checkout.flutterwave.com/v3.js";
      const script = document.createElement("script");
      script.src = inlineSdk;
      if (!document.querySelector(`[src="${inlineSdk}"]`)) {
        document.body.appendChild(script);
      }
    },
  };
</script>
