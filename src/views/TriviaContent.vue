<template>
  <title>
    Trivia Management System | Elfrique – Complete Event Management System
  </title>

    <template v-if="isLoading">
    <LoaderVue loaderImage center /> 
  </template>

  <template v-else>

  <elfrique-header />

  <section class="voting-content">
    <div class="container header-cont">
      <div class="row">
        <div class="col-md-4 col-lg-4">
          <div class="img-area">
            <img :src="trivia.image" />
          </div>
        </div>
        <div class="col-md-4 col-lg-4">
          <div class="text-title-area">
            <h1>{{ trivia.title }}</h1>
            <small
              >Organised by :
              <span
                >{{ trivia.adminuser.profile.firstname }}
                {{ trivia.adminuser.profile.lastname }}</span
              ></small
            >
            <div class="details-header">
              <h5>Price</h5>
              <p><i class="bi bi-credit-card-fill"></i> : {{ trivia.type }}</p>
              <h5>Duration</h5>
              <p><i class="bi bi-alarm"></i> : {{ trivia.duration }} Minutes</p>
            </div>
            <div class="details-social">
              <h5>Share on:</h5>
              <ShareNetwork
                network="facebook"
                :url="currentUrl"
                :title="trivia.title"
                :description="trivia.details"
                :quote="trivia.title"
                :hashtags="'Elfrique, Trivia, Quiz,' + trivia.title"
              >
                <img src="@/assets/images/share-facebook.png" />
              </ShareNetwork>
              <ShareNetwork
                network="whatsapp"
                :url="currentUrl"
                :title="trivia.title"
                :description="trivia.details"
              >
                <img src="@/assets/images/share-whatsapp.png" />
              </ShareNetwork>
              <ShareNetwork
                network="telegram"
                :url="currentUrl"
                :title="trivia.title"
                :description="trivia.details"
              >
                <img src="@/assets/images/share-telegram.png" />
              </ShareNetwork>
              <ShareNetwork
                network="twitter"
                :url="currentUrl"
                :title="trivia.title"
                twitter-user="@elfrique"
                :hashtags="'Elfrique, Trivia, Quiz,' + trivia.title"
              >
                <img src="@/assets/images/share-twitter.png" />
              </ShareNetwork>
              <ShareNetwork
                network="email"
                :url="currentUrl"
                :title="trivia.title"
                :description="trivia.details"
              >
                <img src="@/assets/images/share-email.png" />
              </ShareNetwork>
            </div>
          </div>
        </div>
        <div class="col-lg-4 form-area" v-if="paymentForm">
          <div class="contestantPaySection">
            <h4>
              You are about to pay. There would be no refund or reversal if you
              choose a wrong form.
            </h4>
            <hr />
            <h5>Summary of your order</h5>
            <div>
              <h6>Name</h6>
              <p>{{ triviaPlayer.name }}</p>
            </div>
            <div>
              <h6>Email</h6>
              <p>{{ triviaPlayer.email }}</p>
            </div>
            <div>
              <h6>Reference</h6>
              <p>{{ reference }}</p>
            </div>
            <div>
              <h6><strong>Amount</strong></h6>
              <p v-if="toRate">{{ currency_symbol }} {{ (amount / toRate).toFixed(2) }}</p>
            </div>
            <h5 class="mt-2" v-if="currency_symbol === 'NGN'">Choose Payment Gateway</h5>
            <PaymentGateway
              :selected="paymentGateway"
              :gateways="paymentMethods"
              v-model="selectedGateway"
              v-if="currency_symbol === 'NGN'"
            />
          </div>
          <div v-if="currency_symbol != 'NGN'" class="-mt-2">
            <div class="col-lg-12 d-grid gap-2 mb-3 mb-3">
              <button @click="flutterWave(trivia.id)">
                Pay Now – International
              </button>
            </div>
          </div>
          <div v-else class="mt-n3">
            <div
              class="col-lg-12 d-grid gap-2 mb-3"
              v-if="selectedGateway == 'paystack'"
            >
              <button @click="PayStack(trivia.id)" :disabled="loading">Pay Now – Local</button>
            </div>
            <div
              class="col-lg-12 d-grid gap-2 mb-3 mb-3"
              v-if="selectedGateway == 'flutterwave'"
            >
              <button @click="flutterWave(trivia.id)" :disabled="loading">
                Pay Now – Local & International
              </button>
            </div>
            <div
              class="col-lg-12 d-grid gap-2 mb-3 mb-3"
              v-if="selectedGateway == 'interswitch'"
            >
              <button @click="interSwitch(trivia.id)" :disabled="loading">
                Pay Now – Local & International
              </button>
            </div>
            <div
              class="col-lg-12 d-grid gap-2 mb-3"
              v-if="selectedGateway == 'aimstoget'"
            >
              <button :disabled="loading" @click="callAtgPay(form_id)">
                Pay Now – Airtime – Nigeria Only
              </button>
            </div>
          </div>
          <!-- <div class="col-lg-12 mb-3">
            <button>
              AimToGet – Pay Now – Airtime – Nigeria Only 
            </button>
          </div> -->
        </div>
      </div>
    </div>

    <div class="container event-form-content mt-4" v-if="!paymentForm">
      <div class="row">
        <div class="col-lg-12">
          <ul class="nav nav-pills mb-5 mt-2" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active tabs-button"
                id="pills-trivia-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-trivia"
                type="button"
                role="tab"
                aria-controls="pills-trivia"
                aria-selected="true"
              >
                <i class="bi bi-people-fill"></i> Trivia
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
            <!--Trivia-->
            <div
              class="tab-pane fade show active"
              id="pills-trivia"
              role="tabpanel"
              aria-labelledby="pills-trivia-tab"
            >
              <div class="event-details">
                <div class="row">
                  <div class="col-lg-12">
                    <h1 style="margin-top: -20px">Instructions</h1>
                    <h6>{{ trivia.instruction }}</h6>
                  </div>
                  <form @submit.prevent="submitPlayer">
                    <div class="row">
                      <div class="col-lg-12">
                        <h1>Get Trivia</h1>
                        <h6>
                          Enter the following details to access trivia question
                        </h6>
                      </div>
                      <div class="col-lg-6 mb-3">
                        <label>Email address</label>
                        <input
                          v-model="triviaPlayer.email"
                          class="input"
                          type="email"
                          placeholder="Enter email address"
                        />
                      </div>
                      <div class="col-lg-6 mb-3">
                        <label>Phone number</label>
                        <input
                          v-model="triviaPlayer.phonenumber"
                          class="input"
                          type="tel"
                          placeholder="Enter phone number"
                        />
                      </div>
                      <div class="col-lg-6 mb-3">
                        <label>Name</label>
                        <input
                          v-model="triviaPlayer.name"
                          class="input"
                          type="text"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div class="col-lg-6 mb-3">
                        <label>City</label>
                        <input
                          v-model="triviaPlayer.city"
                          class="input"
                          type="text"
                          placeholder="Enter your city"
                        />
                      </div>
                      <div class="col-lg-12 text-center">
                        <p style="color: red; text-align: center">
                          {{ errMessage }}
                        </p>
                        <button
                          type="submit"
                          class="btn btn-success"
                          :disabled="loading"
                        >
                          Continue<span
                            v-show="loading"
                            class="spinner-border spinner-border-sm"
                          ></span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
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
                  <div class="col-lg-12">
                    <h1 style="margin-top: -20px">Oragniser Details</h1>
                    <h4>Name</h4>
                    <p>
                      {{ trivia.adminuser.profile.firstname }}
                      {{ trivia.adminuser.profile.lastname }}
                    </p>
                    <h4>Email</h4>
                    <p>{{ trivia.adminuser.profile.email }}</p>
                    <h4>Phone Number</h4>
                    <p>{{ trivia.adminuser.profile.phonenumber }}</p>
                    <h4>About</h4>
                    <h6>{{ trivia.adminuser.profile.about }}</h6>
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
                    <h1 style="margin-top: -20px">Event Details</h1>
                    <h6>{{ trivia.details }}</h6>
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
</template>

<script>
  import Header from "./elfrique-header.vue";
  import Footer from "./elfrique-footer.vue";
  import uniqid from "uniqid";
  import moment from "moment";
  import axios from "axios";
  import TriviaService from "../service/trivia.service";
  import Notification from "../service/notitfication-service";
  import TransactionService from "../service/transaction.service";
  import Swal from "sweetalert2";
  import PaymentGateway from "./components/PaymentGateway.vue";
  import LoaderVue from './components/Loader.vue';
  import transactionService from "../service/transaction.service";

  export default {
    name: "Elfrique",
    components: {
      "elfrique-header": Header,
      "elfrique-footer": Footer,
      PaymentGateway,
      LoaderVue,
      Swal
    },
    data() {
      return {
        trivia: "",
        triviaType: "",
        loading: false,
        isLoading: true,
        admin_id: "",
        paymentForm: false,
        disableBtn: false,
        currency_symbol: "",
        toRate: "",
        method: "",
        amount: "",
        usd_rate: "",
        triviaPlayer: {
          name: "",
          email: "",
          phonenumber: "",
          city: "",
        },
        triviaType: "",
        errMessage: "",
        reference: this.genRef(),
        publicKey: "pk_test_be803d46f5a6348c3643967d0e6b7b2303d42b4f",
        flw_public_key: "FLWPUBK_TEST-0f353662b04aee976128e62946a59682-X",
        paymentGateway: "",
        paymentMethods: ["paystack", "flutterwave", "interswitch", "aimsToGet"],
        selectedGateway: "",
        payload: {
          reference: ""
        }
      };
    },

    computed: {
      currentUrl() {
        return window.location.href;
      },
    },

    created() {
      TriviaService.getSingleTrivia(this.$route.params.id).then((response) => {
        this.trivia = response.data.trivia;
        //console.log(this.trivia);
        this.triviaType = response.data.trivia.type;
        this.amount = response.data.trivia.amount;
        this.paymentGateway = response.data.trivia.paymentgateway;
        this.selectedGateway = this.paymentGateway;
        const indexItem = this.paymentMethods.indexOf(this.paymentGateway);
        this.paymentMethods.splice(indexItem, 1);
        this.admin_id = response.data.trivia.adminuserId;
        this.convert_price();
        this.isLoading = false;
      });

      const script = document.createElement("script");
      script.src = "https://newwebpay.interswitchng.com/inline-checkout.js";
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
              text: `The status for Your Trivia Subscription with reference number ${this.payload.reference} is Paid`,
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
        axios.get("https://ipinfo.io?token=79cd3ae8cbc7b1").then((res) => { 
        axios.get(`http://ip-api.com/json/${res.data.ip}?fields=country,countryCode,currency,as,query`).then((res) => {
          let currency = res.data.currency;
          if (currency === 'NGN' || currency === 'GHS' || currency === 'KES') {
            axios
              .get(`https://api.exchangerate-api.com/v4/latest/${currency}`)
              .then((res) => {
                this.currency_symbol = res.data.base;
                this.toRate = res.data.rates["NGN"];
              });
          }
          else { 
            axios
              .get(`https://api.exchangerate-api.com/v4/latest/USD`)
              .then((res) => {
                this.currency_symbol = res.data.base;
                this.toRate = res.data.rates["NGN"];
              });
          }
        });
        })
      },
      submitPlayer() {
        this.loading = true;
        var triviaPlayerObj = {};

        if (this.triviaType == "paid") {
          this.paymentForm = true;
          this.loading = false;
          window.scrollTo(0, 0);

          triviaPlayerObj = this.triviaPlayer;
          window.localStorage.setItem(
            "triviaPlayer",
            JSON.stringify(triviaPlayerObj)
          );

        } else {
          TriviaService.createPlayer(this.triviaPlayer, this.trivia.id)
            .then((response) => {
              this.$store
                .dispatch("vote/getTriviaPlayer", response.data.player)
                .then(() => {
                  this.$router.push(
                    "/trivia-content-instruction/" + this.trivia.id
                  );
                });
            })
            .catch((err) => {
              this.loading = false;
              new Error(err);
              this.errMessage =
                "You have already attemted this Trivia, please enter another email to continue";
              setTimeout(() => {
                this.errMessage = "";
              }, 3000);
            });
        }
      },
      genRef() {
        return uniqid();
      },
      PayStack(id) {
        //  options
        this.loading = true;
        TriviaService.createPlayer(this.triviaPlayer, this.trivia.id)
          .then((res) => {
            this.$store.dispatch("vote/getTriviaPlayer", res.data.player);
            const paymentOptions = {
              // general options
              key: "pk_test_be803d46f5a6348c3643967d0e6b7b2303d42b4f", //required
              email: this.triviaPlayer.email, //required
              amount: (this.amount * 100).toFixed(0), //required
              reference: this.reference, //required
              firstname: this.triviaPlayer.name,
              lastname: "",
              /* currency: this.currency,
                channels: this.channels,
                metadata: this.metadata,
                label: this.label,  */
              onSuccess: (response) => {
                console.log(response);
                this.method = "Paystack";
                Notification.addNotification({
                  receiverId: this.admin_id,
                  type: "Trivia Payment",
                  message: `${this.triviaPlayer.name} just Successfully Paid for ${this.trivia.title} Trivia`,
                });
                TransactionService.makeTransaction({
                  admin_id: this.admin_id,
                  reference: this.reference,
                  category: "Trivia Payment",
                  email: this.triviaPlayer.email,
                  method: this.method,
                  product_title: this.trivia.title,
                  product_id: this.trivia.id,
                  currency: this.currency_symbol,
                  type: "paid",
                  amount: (this.amount / this.toRate).toFixed(2),
                  payer_name: this.triviaPlayer.name,
                }).then((response) => {
                  //this.modal.hide();
                  this.message = response.data.message;
                  //this.resetForm();
                  Swal.fire({
                    icon: "success",
                    text: `You have successfully Paid for ${this.trivia.title} Trivia`,
                    confirmButtonText: "Ok",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      this.$router.push(
                        "/trivia-content-instruction/" + this.trivia.id
                      );
                    }
                  });
                });
              },
            };
            const paystack = new window.PaystackPop();
            paystack.newTransaction(paymentOptions);
          })
          .catch((err) => {
            this.loading = false;
              Swal.fire({
                icon: "error",
                text: `You have already attempted this Trivia, please enter another email to continue`,
                confirmButtonText: "Ok",
              });
          });
      },
      flutterWave(id) {
        if (this.currency_symbol !== "NGN") {
          this.loading = true;
          TriviaService.createPlayer(this.triviaPlayer, this.trivia.id)
            .then((res) => {
              this.$store.dispatch("vote/getTriviaPlayer", res.data.player);
              let paymentParams = FlutterwaveCheckout({
                public_key: this.flw_public_key,
                tx_ref: this.reference,
                amount: (this.amount / this.toRate),
                currency: "USD",
                customer: {
                  email: this.triviaPlayer.email,
                  /* phone_number: this.payContent.phone, */
                },
                callback: (response) => {
                  console.log(response);
                  this.loading = false;
                  this.method = "Flutterwave";
                  Notification.addNotification({
                    receiverId: this.adminId,
                    type: "Trivia Payment",
                    message: `${this.triviaPlayer.name} just Successfully Paid for ${this.trivia.title} Trivia`,
                  });
                  TransactionService.makeTransaction({
                    admin_id: this.admin_id,
                    reference: this.reference,
                    category: "Trivia Payment",
                    email: this.triviaPlayer.email,
                    method: this.method,
                    product_title: this.trivia.title,
                    product_id: this.trivia.id,
                    currency: this.currency_symbol,
                    type: "paid",
                    amount: (this.amount / this.toRate).toFixed(2),
                    payer_name: this.triviaPlayer.name,
                  }).then((response) => {
                    this.loading = false;
                    this.message = response.data.message;
                    Swal.fire({
                      icon: "success",
                      text: `You have successfully Paid for ${this.trivia.title} Trivia`,
                      confirmButtonText: "Ok",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        this.$router.push(
                          "/trivia-content-instruction/" + this.trivia.id
                        );
                      }
                    });
                  });

                  paymentParams.close();

                  window.close();
                },
                onclose: () => paymentParams.close(),
              });
            })
            .catch((err) => {
              this.loading = false;
              Swal.fire({
                icon: "error",
                text: `You have already attempted this Trivia, please enter another email to continue`,
                confirmButtonText: "Ok",
              });
            });
        } else {
          this.loading = true;
          TriviaService.createPlayer(this.triviaPlayer, this.trivia.id)
            .then((res) => {
              this.$store.dispatch("vote/getTriviaPlayer", res.data.player);
              let paymentParams = FlutterwaveCheckout({
                public_key: this.flw_public_key,
                tx_ref: this.reference,
                amount: this.amount,
                currency: "NGN",
                customer: {
                  email: this.triviaPlayer.email,
                  phone_number: this.triviaPlayer.phonenumber,
                },
                callback: (response) => {
                  //console.log(response);
                  this.loading = false;
                  this.method = "Flutterwave";
                  Notification.addNotification({
                    receiverId: this.adminId,
                    type: "Trivia Payment",
                    message: `${this.triviaPlayer.name} just Successfully Paid for ${this.trivia.title} Trivia`,
                  });
                  TransactionService.makeTransaction({
                    admin_id: this.admin_id,
                    reference: this.reference,
                    category: "Trivia Payment",
                    email: this.triviaPlayer.email,
                    method: this.method,
                    product_title: this.trivia.title,
                    product_id: this.trivia.id,
                    currency: this.usd_rate,
                    type: "paid",
                    amount: (this.amount / this.toRate).toFixed(2),
                    payer_name: this.triviaPlayer.name,
                  }).then((response) => {
                    this.loading = false;
                    Swal.fire({
                      icon: "success",
                      text: `You have successfully Paid for ${this.trivia.title} Trivia`,
                      confirmButtonText: "Ok",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        this.$router.push(
                          "/trivia-content-instruction/" + this.trivia.id
                        );
                      }
                    });
                    //this.message = response.data.message;
                  });

                  paymentParams.close();

                  window.close();
                },
                onclose: () => paymentParams.close(),
              });
            })
            .catch((err) => {
              this.loading = false;
              Swal.fire({
                icon: "error",
                text: `You have already attempted this Trivia, please enter another email to continue`,
                confirmButtonText: "Ok",
              });
            });
        }
      },
      interSwitch(id) {
        let samplePaymentRequest = {
          merchant_code: "MX60729",
          pay_item_id: "6294592",
          site_redirect_url: window.location.origin,
          cust_id: this.triviaPlayer.email,
          data_ref: "vjyLc2lgNK",
          txn_ref: this.reference,
          amount: this.amount.toString(),
          currency: 566, // ISO 4217 numeric code of the currency used
          onComplete: (response) => {
            console.log(response);
            this.method = "InterSwitch";
            //console.log(this.transactForm);
            Notification.addNotification({
              receiverId: this.admin_id,
              type: "Ticket Payment",
              message: `${this.triviaPlayer.name} just Successfully Paid for ${this.trivia.title}`,
            });
            TriviaService.createPlayer(this.triviaPlayer, this.trivia.id)
              .then((response) => {
                this.$store
                  .dispatch("vote/getTriviaPlayer", response.data.player)
                  .then(() => {
                    Swal.fire({
                      icon: "success",
                      text: `You have successfully Paid for ${this.trivia.title} Trivia`,
                      confirmButtonText: "Ok",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        this.$router.push(
                          "/trivia-content-instruction/" + this.trivia.id
                        );
                      }
                    });
                  });
              })
              .catch((err) => {
                this.loading = false;
                new Error(err);
                this.errMessage =
                  "You have already attemted this Trivia, please enter another email to continue";
                setTimeout(() => {
                  this.errMessage = "";
                }, 3000);
              });
            TransactionService.makeTransaction({
              admin_id: this.admin_id,
              reference: this.reference,
              category: "Trivia Payment",
              email: this.triviaPlayer.email,
              method: this.method,
              product_title: this.trivia.title,
              product_id: this.trivia.id,
              currency: this.currency_symbol,
              type: "paid",
              amount: (this.amount / this.toRate).toFixed(2),
              payer_name: this.triviaPlayer.name,
            }).then((response) => {
              //this.modal.hide();
              this.message = response.data.message;
              //this.resetForm();
            });
          },
          mode: "TEST",
        };
        console.log(samplePaymentRequest);
        window.webpayCheckout(samplePaymentRequest);
        //this.modal.hide();
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

      const triviaPlayerObj = JSON.parse(
        window.localStorage.getItem("triviaPlayer")
      );

      if (triviaPlayerObj) {
        this.triviaPlayer = triviaPlayerObj;

        const isEmpty = Object.keys(this.triviaPlayer).length === 0;

        if (!isEmpty) {
          this.paymentForm = true;
        }
      }
    },
  };
</script>
