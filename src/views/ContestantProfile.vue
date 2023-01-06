<template>
  <title>
    Contestant Profile | Elfrique – Complete Event Management System
  </title>
  <elfrique-header />

  <section class="contestant-profile">
    <!--Contestants Header-->
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center" :style="cssProps">
          <h1>{{ contest.title }} Contest</h1>
        </div>
      </div>
    </div>
    <!--Contestants Details and vote-->
    <div class="container mt-5 details-contestant">
      <div class="row">
        <div class="col-lg-7">
          <div class="img-area">
            <img :src="contestant.image" />
          </div>
          <div class="text-area">
            <h4>Contestant Name</h4>
            <p>{{ contestant.fullname }}</p>
            <h4>Contestant Number</h4>
            <p>{{ contestant.contestantnumber }}</p>
            <h4>Number of Votes</h4>
            <p>{{ contestant.voteCount }}</p>
            <h4>About</h4>
            <h6>{{ contestant.about }}</h6>
          </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-4 form-area">
          <h1>Input Details To Vote Now</h1>
          <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>

          <form @submit.prevent="proceedToOtp">
            <div
              v-if="message"
              class="alert-success alert alert-dismissible fade show"
              role="alert"
            >
              {{ message }}
              <!-- <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> -->
            </div>
            <div class="row">
              <div class="col-lg-12 mb-3">
                <label>Total number of votes you want</label>
                <input
                  v-model="freeVote"
                  type="number"
                  placeholder="Enter number of votes you want"
                  :disabled="disabled || contest.type === 'free'"
                  min="1"
                  max="1"
                  v-if="contest.type === 'free'"
                />
                <input
                  v-model="numberOfVotes"
                  type="number"
                  placeholder="Enter number of votes you want"
                  :disabled="disabled"
                  min="1"
                  max="10000000000000"
                  v-else
                />
              </div>
              <div class="col-lg-12 mb-3">
                <label>First Name</label>
                <input
                  v-model="firstname"
                  type="text"
                  placeholder="Enter your name"
                  :disabled="disabled"
                />
              </div>
              <div class="col-lg-12 mb-3">
                <label>Last Name</label>
                <input
                  v-model="lastname"
                  type="text"
                  placeholder="Enter your name"
                  :disabled="disabled"
                />
              </div>
              <div class="col-lg-12 mb-3">
                <label>Email address</label>
                <input
                  v-model="email"
                  type="email"
                  placeholder="Enter your email address"
                  :disabled="disabled"
                />
              </div>
              <div class="col-lg-12 mb-3">
                <label>Phone Number</label>
                <input
                  v-model="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  :disabled="disabled"
                />
              </div>
              <div class="col-lg-12 mb-3">
                <label>Transaction reference</label>
                <input
                  v-model="reference"
                  style="text-transform: uppercase"
                  disabled
                />
              </div>
              <div class="col-lg-12 mb-3" v-if="loadOtp">
                <label>Enter OTP sent to {{ email }}</label>
                <OtpInput
                  @validateOtp="handleValidate($event)"
                  :disabled="disabled"
                  :error="errorOtp"
                  :clear="removeInput"
                />
              </div>
              <div>
                <p v-if="contest.type == 'free'"><strong>Free</strong></p>

                <p v-else>
                  <strong
                    >Each vote cost {{ currency_symbol }}
                    {{ (contest.fee / toRate).toFixed(2) }}</strong
                  >
                </p>
              </div>
              <div class="col-lg-12 mb-3" v-if="!loadOtp">
                <button type="submit">Proceed</button>
              </div>
              <div class="col-lg-12 mb-3" v-else>
                <button
                  type="button"
                  v-on:click="processVote()"
                  :disabled="voteBtn"
                >
                  Vote
                </button>
              </div>
            </div>
          </form>
          <!-- <div class="col-lg-12 mb-3">
            <button :disabled="loading" v-on:click="payWithPaystack">
              Pay with Paystack
            </button>
          </div>
          <div class="col-lg-12 mb-3">
            <button :disabled="loading" @click="showPaymentModal">
              Pay with Flutterwave
            </button>
          </div>
          <div class="col-lg-12 mb-3">
            <button :disabled="loading" @click="showPaymentInterswitch">
              Pay with Interswitch
            </button>
          </div>
          <div class="col-lg-12 mb-3">
            <button :disabled="loading" @click="callAtgPay">
              Vote with Airtime
            </button>
          </div> -->
        </div>
      </div>
    </div>
    <!--Other Contestants--
    <div class="container service-content-vote mt-5">
      <div class="row tab-content">
        <div class="col-lg-12">
          <h1 style="font-size: 25px; font-weight: 700; padding-bottom: 10px">
            Other Contestant(s)
          </h1>
        </div>
        <div
          class="col-md-3 py-2"
          v-for="con in otherContestants"
          :key="con.id"
        >
          <div class="card">
            <img :src="con.image" class="card-img-top" />
            <div class="card-body">
              <p class="card-text main-text">
                <i class="bi bi-person-video"></i> : {{ con.fullname }}
              </p>
              <p class="card-text card-text-after">
                <i class="bi bi-circle-square"></i> :
                {{ con.contestantnumber }} (contestant number)
              </p>
              <p class="card-text card-text-after">
                <i class="bi bi-activity"></i>: {{ con.voteCount }} (votes)
              </p>
              <router-link :to="'/contestant-profile/' + con.id" class="routers"
                ><a class="btn-view-contest">View Profile</a></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>--->
  </section>

  <elfrique-footer />
</template>
<style>
  .details-contestant form input:disabled {
    background-color: #e1e1e1;
    cursor: not-allowed;
  }

  .contestant-profile .details-contestant .form-area button:disabled {
    background-color: #25491947;
    cursor: not-allowed;
  }
</style>
<style scoped>
  .contestant-profile .header-contestant .col-lg-12 {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-image: linear-gradient(90deg, #000000bb, #000000bb),
      url("../assets/images/voting-img.jpg");
    padding: 100px 10px;
    color: #fff;
    border-radius: 20px;
  }
</style>
<script>
  import paystack from "vue-paystack";
  import uniqid from "uniqid";
  import Header from "./elfrique-header.vue";
  import Footer from "./elfrique-footer.vue";
  import VoteService from "../service/vote.service";
  import TransactionService from "../service/transaction.service";
  import Notification from "../service/notitfication-service";
  import axios from "axios";
  import Swal from "sweetalert2";
  import OtpInput from "./components/OtpInput.vue";

  export default {
    name: "Elfrique",
    components: {
      "elfrique-header": Header,
      "elfrique-footer": Footer,
      paystack: paystack,
      OtpInput,
      Swal,
    },
    data() {
      return {
        contest: "",
        currency_symbol: "",
        toRate: "",
        contestant: "",
        method: "",
        email: "",
        loading: false,
        reference: this.genRef(),
        phone: "",
        email: "",
        numberOfVotes: "",
        freeVote: "1",
        publicKey: "pk_test_be803d46f5a6348c3643967d0e6b7b2303d42b4f",
        flw_public_key: "FLWPUBK_TEST-0f353662b04aee976128e62946a59682-X",
        firstname: "",
        lastname: "",
        message: "",
        adminId: "",
        toUsdRate: "",
        generatedOTP: "",
        loadOtp: false,
        disabled: false,
        voteBtn: true,
        errorOtp: false,
        removeInput: false,
      };
    },
    computed: {
      otherContestants() {
        const OC = this.contest.contestants.filter(
          (contestant) => contestant.id !== this.contestant.id
        );
        return OC;
      },

      paymentForm() {
        return {
          email: this.email,
          amount: this.amount,
          method: this.method,
          firstname: this.firstname,
          lastname: this.lastname,
          fullname: this.firstname + " " + this.lastname,
          phone: this.phone,
          reference: this.reference,
          numberOfVotes: this.numberOfVotes,
          currency_symbol: this.currency_symbol,
          toUsdRate: this.toUsdRate,
        };
      },

      amount() {
        return (
          (Number(this.numberOfVotes) * Number(this.contest.fee)) /
          this.toRate
        ).toFixed(2);
      },

      voteForm() {
        return {
          reference: this.reference,
          numberOfVote: this.numberOfVotes,
          method: this.method,
          voters_email: this.email,
          voters_phone: this.phone,
          type: "paid",
          amount: this.amount,
          fullname: this.firstname + " " + this.lastname,
        };
      },
    },

    created() {
      VoteService.getAContestant(this.$route.params.id).then((response) => {
        this.contestant = response.data.contestants;

        VoteService.getSingleContest(
          response.data.contestants.votingContest.id
        ).then((response) => {
          this.adminId = response.data.voteContest.adminuserId;
          this.contest = response.data.voteContest;
          this.method = response.data.voteContest.paymentgateway;
        });
      });

      this.convert_price();

      const script = document.createElement("script");
      script.src =
        "https://qa.interswitchng.com/collections/public/javascripts/inline-checkout.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    },

    methods: {
      convert_price() {
        axios.get("http://ipinfo.io?token=79cd3ae8cbc7b1").then((res) => { 
        axios.get(`https://ip-api.com/json/${res.data.ip}?fields=country,countryCode,currency,as,query`).then((res) => {
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
      format_date(value) {
        if (value) {
          return moment(String(value)).format("MM/DD/YYYY hh:mm");
        }
      },

      proceedToOtp() {
        this.contest.type === "free"
          ? (this.numberOfVotes = this.freeVote)
          : "";
        if (
          this.email !== "" &&
          this.numberOfVotes !== "" &&
          this.firstname !== "" &&
          this.lastname !== "" &&
          this.phone !== ""
        ) {
          if (this.contest.type === "free") {
            this.loadOtp = true;
            this.generateOTP();
          } else {
            this.proceedtopay();
          }
        } else {
          Swal.fire({
            icon: "error",
            text: `You need to fill in all details to proceed`,
            confirmButtonText: "Ok",
          });
        }
      },

      handleValidate(value) {
        if (value === this.generatedOTP) {
          this.disabled = true;
          this.voteBtn = false;
          this.errorOtp = false;
        } else {
          this.errorOtp = true;
        }
      },

      proceedtopay() {
        const paymentForm = this.paymentForm;

        window.localStorage.setItem("paymentForm", JSON.stringify(paymentForm));

        this.$router.push("/contestant-profile-pay/" + this.contestant.id);
      },

      generateOTP() {
        const payload = {
          email: this.email,
          service: "Voting",
        };

        TransactionService.generateOTP(payload).then((response) => {
          this.generatedOTP = response.data.otp;
        });
      },

      processVote() {
        this.voteBtn = true;
        const dataForm = {
          reference: this.reference,
          numberOfVote: this.numberOfVotes,
          method: "",
          voters_email: this.email,
          voters_phone: this.phone,
          currency: null,
          type: "free",
          amount: 0,
          fullname: this.firstname + " " + this.lastname,
        };
        Notification.addNotification({
          receiverId: this.adminId,
          type: "voting",
          message: `Someone just voted ${dataForm.fullname} with ${this.numberOfVotes} vote`,
        });
        TransactionService.submitVote(this.contestant.id, dataForm).then(
          (response) => {
            this.loading = false;
            this.message = response.data.message;
            this.disabled = false;
            this.voteBtn = false;
            this.resetForm();
            this.loadOtp = false;
            this.removeInput = true;
            this.contestant.voteCount += 1;
            Swal.fire({
              icon: "success",
              text: `You have successfully voted for ${this.contestant.fullname}`,
              confirmButtonText: "Ok",
            }).then((result) => {
              if (result.isConfirmed) {
                this.$router.push("/contestant-profile/" + this.contestant.id);
              }
            });
          }
        );
      },

      getContestant(con) {
        this.$store.dispatch("vote/getContestant", con);
        window.scrollTo(0, 0);
      },

      nairaToKobo(amount) {
        return (amount * 100).toFixed(0);
      },

      close() {
        console.log("close");
      },
      genRef() {
        return uniqid();
      },
      resetForm() {
        this.email = "";
        this.address = "";
        this.firstname = "";
        (this.lastname = ""), (this.numberOfVotes = "");
        this.phone = "";
      },

      successPaymentPaystack() {
        this.loading = true;
        this.method = "Paystack";
        console.log(this.voteForm);
        window.scrollTo(0, 0);
        Notification.addNotification({
          receiverId: this.adminId,
          type: "voting",
          message: `Someone just voted ${this.contestant.fullname} with ${this.numberOfVotes} vote`,
        });
        TransactionService.submitVote(this.contestant.id, this.voteForm).then(
          (response) => {
            this.loading = false;
            this.message = response.data.message;
            this.resetForm();
            this.$router.push("/contestant-profile/" + this.contestant.id);
          }
        );
      },
      payWithPaystack() {
        //  options
        const paymentOptions = {
          // general options
          key: this.publicKey, //required
          email: this.email, //required
          amount: this.nairaToKobo(this.amount), //required
          reference: this.reference, //required
          firstname: this.firstname,
          lastname: this.lastname,
          /* currency: this.currency,
        channels: this.channels,
        metadata: this.metadata,
        label: this.label,  */
          onSuccess: (response) => {
            this.successPaymentPaystack();
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
      },
      showPaymentInterswitch() {
        let samplePaymentRequest = {
          merchant_code: "MX60729",
          pay_item_id: "Default_Payable_MX60729",
          site_redirect_url: window.location.origin,
          cust_id: this.email,
          data_ref: "wiJeY3fhpkxpisBwKtsgXxKwwdnECfCvbJHfYDVuLH0=",
          txn_ref: this.reference,
          amount: this.nairaToKobo(this.amount),
          currency: 566, // ISO 4217 numeric code of the currency used
          onComplete: (response) => {
            console.log(response);
            this.loading = true;
            this.method = "InterSwitch";
            console.log(this.voteForm);
            Notification.addNotification({
              receiverId: this.adminId,
              type: "voting",
              message: `Someone just voted ${this.contestant.fullname} with ${this.numberOfVotes} vote`,
            });
            /* TransactionService.submitVote(this.contestant.id, this.voteForm).then(response => {
            this.loading = false;
            this.message = response.data.message;
            this.resetForm();
            this.$router.push('/contestant-profile/' + this.contestant.id)
          }) */
          },
          mode: "TEST",
        };
        console.log(samplePaymentRequest);

        //window.webpayCheckout(samplePaymentRequest);
      },

      showPaymentModal() {
        let paymentParams = {
          public_key: this.flw_public_key,
          tx_ref: this.reference,
          amount: this.nairaToKobo(this.amount),
          currency: "NGN",
          customer: {
            email: this.email,
            phone_number: this.phone,
          },
          callback: (response) => {
            console.log(response);
            this.loading = true;
            this.method = "Flutterwave";
            Notification.addNotification({
              receiverId: this.adminId,
              type: "voting",
              message: `Someone just voted ${this.contestant.fullname} with ${this.numberOfVotes} vote`,
            });

            /* TransactionService.submitVote(this.contestant.id, this.voteForm).then(
            (response) => {
              this.loading = false;
              this.message = response.data.message;
              this.resetForm();
              this.$router.push("/contestant-profile/" + this.contestant.id);
            }
          ); */
          },
          onclose: () => this.onclose(),
        };

        window.FlutterwaveCheckout(paymentParams);
      },

      callAtgPay(e) {
        e.preventDefault();
        AtgPayment.pay({
          // Merchant's aimotget PUBLIC KEY
          key: process.env.VUE_APP_AIM_TO_GET_KEY,
          //customer's email address
          email: this.email,
          //Customer's phone number (Optional)
          phone: this.phone,
          description: `Vote for ${this.contestant.fullname}`,
          amount: (this.amount * 10).toString(),
          reference: this.reference,
          logo_url: "https://example.com/logo.png",
          onclose: function () {
            //do something when modal is closed
            console.log("close");
          },
          onerror: function (data) {
            let reference = data.reference;
            console.log("error");
            //payment failed, do something with reference
          },
          onsuccess: function (data) {
            let reference = data.reference;
            this.loading = true;
            this.method = "AimToGet";
            this.amount = data.amount;
            Notification.addNotification({
              receiverId: this.adminId,
              type: "voting",
              message: `Someone just voted ${this.contestant.fullname} with ${this.numberOfVotes} vote`,
            });
            /* TransactionService.submitVote(this.contestant.id, this.voteForm).then(response => {
                this.loading = false;
                this.message = response.data.message;
                this.resetForm();
                this.$router.push('/contestant-profile/' + this.contestant.id)
            }) */
            //get reference and verify payment before awarding value
          },
        });
      },
    },
    mounted() {
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
