<template>
  <title>
    Trivia Management System | Elfrique – Complete Event Management System
  </title>
  <elfrique-header />

  <section class="voting-content">
    <div class="container header-cont">
      <div class="row">
        <div class="col-md-4">
          <div class="img-area">
            <img :src="trivia.image" />
          </div>
        </div>
        <div class="col-md-4">
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
              <h4>You are about to pay. There would be no refund or reversal if you choose a wrong form.</h4>
              <hr>
              <h5>Summary of your order</h5>
              <div>
                <h6>Name</h6>
                <p>{{triviaPlayer.name}}</p>
              </div>
              <div>
                <h6>Email</h6>
                <p>{{triviaPlayer.email}}</p>
              </div>
              <div>
                <h6>Reference</h6>
                <p>{{reference}}</p>
              </div>
              <div>
                <h6><strong>Amount</strong></h6>
                <p>{{currency_symbol}} {{(amount/toRate).toFixed(2)}}</p>
              </div>
              <h5>Choose Payment Gateway</h5>
          </div>
          <div v-if="currency_symbol != 'NGN'">
            <div class="col-lg-12 mb-3">
                <button @click="flutterWave(trivia.id)">
                  Pay Now – International
                </button>
              </div>
          </div>
          <div v-else>
            <div class="col-lg-12 mb-3" v-if="method == 'paystack'">
              <button @click="Paystack(trivia.id)">
                Pay Now – Local
              </button>
            </div>
            <div class="col-lg-12 mb-3" v-if="method == 'flutterwave'">
              <button @click="flutterWave(trivia.id)">
                Pay Now – Local & International
              </button>
            </div>
            <div class="col-lg-12 mb-3" v-if="method == 'interswitch'">
              <button @click="Interswitch(trivia.id)">
                Pay Now – Local & International
              </button>
            </div>
            <!-- <div class="col-lg-12 mb-3" v-if="method == 'aimstoget'">
              <button :disabled="loading" @click="callAtgPay(form_id)">
                Pay Now – Airtime – Nigeria Only 
              </button>
            </div> -->
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
                    <h1 style="margin-top: -20px;">Instructions</h1>
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
                          <p style="color: red; text-align:center;">{{errMessage}}</p>
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
                    <h1 style="margin-top: -20px;">Oragniser Details</h1>
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
                    <h1 style="margin-top: -20px;">Event Details</h1>
                    <h6>{{ trivia.details }}</h6>
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
import uniqid from "uniqid";
import moment from "moment";
import axios from "axios";
import TriviaService from "../service/trivia.service";
export default {
  name: "Elfrique",
  components: {
    "elfrique-header": Header,
    "elfrique-footer": Footer,
  },
  data() {
    return {
      trivia: "",
      triviaType: '',
      loading: false,
      paymentForm: false,
      currency_symbol: "",
      toRate: "",
      amount: 2000,
      triviaPlayer: {
        name: "",
        email: "",
        phonenumber: "",
        city: "",
      },
      triviaType: '',
      errMessage: '',
      reference: this.genRef(),
    };
  },

  computed:{
    currentUrl() {
      return window.location.href;
    },
  },

  created() {
    TriviaService.getSingleTrivia(this.$route.params.id).then((response) => {
      this.trivia = response.data.trivia;
      //console.log(this.trivia);
      this.triviaType =  response.data.trivia.type
    });
    this.convert_price();
  },

  methods: {
    convert_price() {
      axios.get("https://ipapi.co/currency").then((res) => {
        let currency = res.data;
        axios
          .get(`https://api.exchangerate-api.com/v4/latest/${currency}`)
          .then((res) => {
            this.currency_symbol = res.data.base;
            this.toRate = res.data.rates["NGN"];
          });
      });
    },
    submitPlayer() {
      this.loading = true;
      if(this.triviaType == 'paid'){
        this.paymentForm = true
        this.loading = false;
      }
      else{
          TriviaService.createPlayer(this.triviaPlayer, this.trivia.id)
        .then(
          (response) => {
            this.$store
              .dispatch("vote/getTriviaPlayer", response.data.player)
              .then(() => {
                this.$router.push(
                  "/trivia-content-instruction/" + this.trivia.id
                );
              })
          }
        )
        .catch(err => {
            this.loading = false;
              new Error(err)
              this.errMessage = "You have already attemted this Trivia, please enter another email to cotinue"
              setTimeout(() => {
                  this.errMessage = ""
              }, 3000);
          })
      }
    },
    genRef() {
      return uniqid();
    },
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>