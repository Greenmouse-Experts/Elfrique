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
        <div class="col-lg-6">
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
        <div class="col-lg-5 form-area">
          <div class="contestantPaySection">
            <h4>
              Ensure the contestant is who you actually want to vote. There
              would be no refund or reversal of vote if you choose a wrong
              contestant.
            </h4>
            <hr />
            <h5>Summary of your order</h5>
            <div>
              <h6>Votes</h6>
              <p>{{ payContent.numberOfVotes }}</p>
            </div>
            <div>
              <h6>amount</h6>
              <p v-if="payContent.amount != '0.00'">
                {{ payContent.currency_symbol }} {{ payContent.amount }}
              </p>
              <p v-else>Free</p>
            </div>
            <h5>Voter's Details</h5>
            <div>
              <h6>Email</h6>
              <p>{{ payContent.email }}</p>
            </div>
            <div>
              <h6>Phone number</h6>
              <p>{{ payContent.phone }}</p>
            </div>
            <div>
              <h6>Reference number</h6>
              <p class="text-uppercase">{{ payContent.reference }}</p>
            </div>
            <h5 v-if="payContent.currency_symbol === 'NGN'">Choose Payment Gateway</h5>
            <PaymentGateway
              :selected="paymentGateway"
              :gateways="paymentMethods"
              v-model="selectedGateway"
              v-if="payContent.currency_symbol === 'NGN'"
            />
          </div>
          <div v-if="payContent.amount != '0.00'">
            <div v-if="payContent.currency_symbol != 'NGN'">
              <div
                class="col-lg-12 mb-3"
              >
                <button @click="payWithFlutter">Pay Now – International</button>
              </div>
            </div>
            <div v-else>
              <div class="col-lg-12 mb-3" v-if="selectedGateway == 'paystack'">
                <button @click="payWithPaystack">Pay Now – Local</button>
              </div>
              <div
                class="col-lg-12 mb-3"
                v-if="selectedGateway == 'flutterwave'"
              >
                <button @click="payWithFlutter">
                  Pay Now – Local & International
                </button>
              </div>
              <div
                class="col-lg-12 mb-3"
                v-if="selectedGateway == 'interswitch'"
              >
                <button @click="payWithInterswitch">
                  Pay Now – Local & International
                </button>
              </div>
              <div class="col-lg-12 mb-3" v-if="selectedGateway == 'aimsToGet'">
                <button :disabled="loading" @click="callAtgPay">
                  Pay Now – Airtime – Nigeria Only
                </button>
              </div>
            </div>
          </div>
          <div v-else>
            <button @click="continueVote">Proceed Vote</button>
          </div>
        </div>
      </div>
    </div>
    <!--Other Contestants-->
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
                {{ con.contestantnumber }} contestant number
              </p>
              <p class="card-text card-text-after d-flex flex-column">
                <span class="flex-row">
                  <i class="bi bi-activity"></i>: {{ con.voteCount }} (votes)
                </span>
                <span class="ml-5">
                  <ProgressBarVue
                    :value="con.voteCount"
                    :total="totalVotes"
                    :percentage="true"
                  />
                </span>
              </p>
              <router-link :to="'/contestant-profile/' + con.id" class="routers"
                ><a class="btn-view-contest">View Profile</a></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <elfrique-footer />
</template>
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
  import { throwStatement } from "@babel/types";
  import Swal from "sweetalert2";
  import PaymentGateway from "./components/PaymentGateway.vue";
  import ProgressBarVue from "./components/ProgressBar.vue";

  export default {
    name: "Elfrique",
    components: {
      "elfrique-header": Header,
      "elfrique-footer": Footer,
      paystack: paystack,
      PaymentGateway,
      Swal,
      ProgressBarVue,
    },
    data() {
      return {
        contest: "",
        contestant: "",
        method: "",
        email: "",
        loading: false,
        reference: "",
        phone: "",
        numberOfVotes: "",
        publicKey: "pk_test_be803d46f5a6348c3643967d0e6b7b2303d42b4f",
        flw_public_key: "FLWPUBK_TEST-0f353662b04aee976128e62946a59682-X",
        firstname: "",
        lastname: "",
        message: "",
        adminId: "",
        paymentGateway: "",
        paymentMethods: ["paystack", "flutterwave", "interswitch", "aimsToGet"],
        selectedGateway: "",
        payContent: {},
        label: 0,
        totalVotes: 0,
      };
    },
    computed: {
      otherContestants() {
        console.log(this.contest);
        const OC = this.contest.contestants.filter(
          (contestant) => contestant.id !== this.contestant.id
        );
        return OC;
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
          this.paymentGateway = response.data.voteContest.paymentgateway;
          this.selectedGateway = this.paymentGateway;
          const indexItem = this.paymentMethods.indexOf(this.paymentGateway);
          this.paymentMethods.splice(indexItem, 1);
          this.getTotalVotes(response.data.voteContest);
        });
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

      format_date(value) {
        if (value) {
          return moment(String(value)).format("MM/DD/YYYY hh:mm");
        }
      },
      getContestant(con) {
        this.$store.dispatch("getContestant", con);
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

      continueVote() {
        const dataForm = {
          reference: this.payContent.reference,
          numberOfVote: this.payContent.numberOfVotes,
          method: "",
          voters_email: this.payContent.email,
          voters_phone: this.payContent.phone,
          currency: this.payContent.currency_symbol,
          type: "free",
          amount: 0,
          fullname: this.payContent.firstname + " " + this.payContent.lastname,
        };
        console.log(dataForm);
        Notification.addNotification({
          receiverId: this.adminId,
          type: "voting",
          message: `Someone just voted ${this.payContent.fullname} with ${this.payContent.numberOfVotes} vote`,
        });
        TransactionService.submitVote(this.contestant.id, dataForm).then(
          (response) => {
            this.loading = false;
            this.message = response.data.message;
            window.localStorage.removeItem("paymentForm");
            //this.resetForm();
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

      successPaymentPaystack() {
        this.loading = false;
        this.method = "Paystack";
        console.log(this.voteForm);
        window.scrollTo(0, 0);
        Notification.addNotification({
          receiverId: this.adminId,
          type: "voting",
          message: `Someone just voted ${this.payContent.fullname} with ${this.payContent.numberOfVotes} vote`,
        });
        TransactionService.submitVote(this.contestant.id, this.voteForm()).then(
          (response) => {
            this.loading = false;
            this.message = response.data.message;
            window.localStorage.removeItem("paymentForm");
            this.contestant.voteCount += Number(this.payContent.numberOfVotes);
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
      payWithPaystack() {
        //  options
        const paymentOptions = {
          // general options
          key: this.publicKey, //required
          email: this.payContent.email, //required
          amount: this.nairaToKobo(this.payContent.amount), //required
          reference: this.payContent.reference, //required
          firstname: this.payContent.firstname,
          lastname: this.payContent.lastname,
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
      payWithInterswitch() {
        let samplePaymentRequest = {
          merchant_code: "MX60729",
          pay_item_id: "Default_Payable_MX60729",
          site_redirect_url: window.location.origin,
          cust_id: this.payContent.email,
          data_ref: "wiJeY3fhpkxpisBwKtsgXxKwwdnECfCvbJHfYDVuLH0=",
          txn_ref: this.payContent.reference,
          amount: this.nairaToKobo(this.payContent.amount),
          currency: 566, // ISO 4217 numeric code of the currency used
          onComplete: (response) => {
            if (response.desc) {
              this.loading = true;
              this.method = "InterSwitch";
              Notification.addNotification({
                receiverId: this.adminId,
                type: "voting",
                message: `Someone just voted ${this.payContent.fullname} with ${this.payContent.numberOfVotes} vote`,
              });
              TransactionService.submitVote(
                this.contestant.id,
                this.voteForm()
              ).then((response) => {
                this.loading = false;
                this.message = response.data.message;
                window.localStorage.removeItem("paymentForm");
                this.contestant.voteCount += Number(
                  this.payContent.numberOfVotes
                );
                Swal.fire({
                  icon: "success",
                  text: `You have successfully voted for ${this.contestant.fullname}`,
                  confirmButtonText: "Ok",
                }).then((result) => {
                  if (result.isConfirmed) {
                    this.$router.push(
                      "/contestant-profile/" + this.contestant.id
                    );
                  }
                });
              });
            }
          },
          mode: "TEST",
        };
        window.webpayCheckout(samplePaymentRequest);
      },

      payWithFlutter() {
        if (this.payContent.currency_symbol != "NGN") {
          let paymentParams = FlutterwaveCheckout({
            public_key: this.flw_public_key,
            tx_ref: this.payContent.reference,
            amount: this.payContent.amount,
            currency: "USD",
            customer: {
              email: this.payContent.email,
              phone_number: this.payContent.phone,
            },
            callback: (response) => {
              console.log(response);
              this.loading = false;
              this.method = "Flutterwave";
              Notification.addNotification({
                receiverId: this.adminId,
                type: "voting",
                message: `Someone just voted ${this.payContent.fullname} with ${this.payContent.numberOfVotes} vote`,
              });
              TransactionService.submitVote(
                this.contestant.id,
                this.voteForm()
              ).then((response) => {
                this.loading = false;
                this.message = response.data.message;
                window.localStorage.removeItem("paymentForm");
                this.contestant.voteCount += Number(
                  this.payContent.numberOfVotes
                );
                Swal.fire({
                  icon: "success",
                  text: `You have successfully voted for ${this.contestant.fullname}`,
                  confirmButtonText: "Ok",
                }).then((result) => {
                  if (result.isConfirmed) {
                  }
                });
              });
              paymentParams.close();
              window.close();
            },
            onclose: () => paymentParams.close(),
          });
        } else {
          let paymentParams = FlutterwaveCheckout({
            public_key: this.flw_public_key,
            tx_ref: this.payContent.reference,
            amount: this.payContent.amount,
            currency: "NGN",
            customer: {
              email: this.payContent.email,
              phone_number: this.payContent.phone,
            },
            callback: (response) => {
              console.log(response);
              this.loading = false;
              this.method = "Flutterwave";
              Notification.addNotification({
                receiverId: this.adminId,
                type: "voting",
                message: `Someone just voted ${this.payContent.fullname} with ${this.payContent.numberOfVotes} vote`,
              });
              TransactionService.submitVote(
                this.contestant.id,
                this.voteForm()
              ).then((response) => {
                this.loading = false;
                this.message = response.data.message;
                window.localStorage.removeItem("paymentForm");
                this.contestant.voteCount += Number(
                  this.payContent.numberOfVotes
                );
                Swal.fire({
                  icon: "success",
                  text: `You have successfully voted for ${this.contestant.fullname}`,
                  confirmButtonText: "Ok",
                }).then((result) => {
                  if (result.isConfirmed) {
                  }
                });
              });
              paymentParams.close();
              window.close();
            },
            onclose: () => paymentParams.close(),
          });
        }

        //window.FlutterwaveCheckout(paymentParams);
      },

      onclose() {
        this.$router.push("/contestant-profile/" + this.contestant.id);
        console.log("go");
      },

      callAtgPay(e) {
        e.preventDefault();
        console.log(this.payContent);
        AtgPayment.pay({
          // Merchant's aimotget PUBLIC KEY
          key: "c51c8c8417c03ce2a4bc6d5b3ceea0e84f4c88dc9a595da3",
          //customer's email address
          email: this.payContent.email,
          //Customer's phone number (Optional)
          phone: this.payContent.phone,
          description: `Vote for ${this.payContent.fullname}`,
          amount: this.payContent.amount.toString(),
          reference: this.payContent.reference,
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
              message: `Someone just voted ${this.payContent.fullname} with ${this.payContent.numberOfVotes} vote`,
            });
            TransactionService.submitVote(
              this.contestant.id,
              this.voteForm()
            ).then((response) => {
              this.loading = false;
              this.message = response.data.message;
              this.contestant.voteCount += Number(
                this.payContent.numberOfVotes
              );
              Swal.fire({
                icon: "success",
                text: `You have successfully voted for ${this.contestant.fullname}`,
                confirmButtonText: "Ok",
              }).then((result) => {
                if (result.isConfirmed) {
                  this.$router.push(
                    "/contestant-profile/" + this.contestant.id
                  );
                }
              });
            });
            //get reference and verify payment before awarding value
          },
        });
      },

      amount() {
        return Number(this.payContent.numberOfVotes) * Number(this.contest.fee);
      },

      voteForm() {
        return {
          reference: this.payContent.reference,
          numberOfVote: this.payContent.numberOfVotes,
          voters_email: this.payContent.email,
          voters_phone: this.payContent.phone,
          method: this.payContent.method,
          type: "paid",
          amount: this.payContent.amount,
          fullname: this.payContent.firstname + " " + this.payContent.lastname,
          currency: this.payContent.currency_symbol,
        };
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
      const interScript = document.createElement("script");
      interScript.src =
        "https://newwebpay.interswitchng.com/inline-checkout.js";
      document.getElementsByTagName("head")[0].appendChild(interScript);

      const paymentForm = JSON.parse(
        window.localStorage.getItem("paymentForm")
      );

      this.payContent = paymentForm;

      this.email = paymentForm.email;
      this.phone = paymentForm.phone;
      this.amount = this.amount();
      this.reference = paymentForm.reference;
      this.firstname = paymentForm.firstname;
      this.lastname = paymentForm.lastname;
    },
  };
</script>
