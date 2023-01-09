<template>
  <title>
    Event Tickets Management System | Elfrique – Complete Event Management
    System
  </title>

        <template v-if="isLoading">
    <LoaderVue loaderImage center /> 
  </template>

  <template v-else>

  <elfrique-header />

  <section class="voting-content event-ticket">
    <div class="container header-cont">
      <div class="row">
        <div class="col-md-4">
          <div class="img-area">
            <img :src="event.image" ondragstart="return false;" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="text-title-area">
            <h1>{{ event.title }}</h1>
            <small
              >Organised by : <span>{{ event.organisation }}</span></small
            >
            <div class="details-header">
              <h5>Location</h5>
              <p><i class="bi bi-geo-alt-fill"></i> : {{ event.venue }}</p>
              <h5>Start Date</h5>
              <p>
                <i class="bi bi-calendar3"></i> :
                {{ format_date(event.startdate) }}
              </p>
              <h5>End Date</h5>
              <p>
                <i class="bi bi-calendar3"></i> :
                {{ format_date(event.enddate) }}
              </p>
            </div>
            <div class="details-social">
              <h5>Share on:</h5>
              <ShareNetwork
                network="facebook"
                :url="currentUrl"
                :title="event.title"
                :description="event.description"
                :quote="event.title"
                :hashtags="'Elfrique, Trivia, Quiz,' + event.title"
              >
                <img src="@/assets/images/share-facebook.png" />
              </ShareNetwork>
              <ShareNetwork
                network="whatsapp"
                :url="currentUrl"
                :title="event.title"
                :description="event.description"
              >
                <img src="@/assets/images/share-whatsapp.png" />
              </ShareNetwork>
              <ShareNetwork
                network="telegram"
                :url="currentUrl"
                :title="event.title"
                :description="event.description"
              >
                <img src="@/assets/images/share-telegram.png" />
              </ShareNetwork>
              <ShareNetwork
                network="twitter"
                :url="currentUrl"
                :title="event.title"
                twitter-user="@elfrique"
                :hashtags="'Elfrique, Trivia, Quiz,' + event.title"
              >
                <img src="@/assets/images/share-twitter.png" />
              </ShareNetwork>
              <ShareNetwork
                network="email"
                :url="currentUrl"
                :title="event.title"
                :description="event.description"
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

    <div class="container event-form-content mt-4">
      <div class="row">
        <div class="col-lg-12">
          <ul class="nav nav-pills mb-5 mt-2" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active tabs-button"
                id="pills-ticket-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-ticket"
                type="button"
                role="tab"
                aria-controls="pills-ticket"
                aria-selected="true"
              >
                <i class="bi bi-people-fill"></i> Ticket
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
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <!--Ticket-->
            <div
              class="tab-pane fade show active"
              id="pills-ticket"
              role="tabpanel"
              aria-labelledby="pills-ticket-tab"
            >
              <div class="event-details" v-if="ended == false">
                <div class="row">
                  <div class="col-lg-6">
                    <h1>Ticket Details</h1>
                    <h6>{{ event.description }}</h6>
                  </div>
                  <div class="col-lg-1"></div>
                  <div class="col-lg-5">
                    <h1>Buy Ticket</h1>
                    <!-- <div class="row">
                      <div
                        v-for="con in event.eventsTickets"
                        :key="con.id"
                        class="col-lg-5"
                      >
                      {{sales_time(con.salesstart) +' ' + momentT}}
                      <div v-if="momentT < sales_time(con.salesstart)">
                        <span>{{ con.name.toUpperCase() }} on Sale</span>
                      </div>
                      <div>
                        <button
                            style="
                              background: #038803;
                              border: 0;
                              color: #fff;
                              border-radius: 5px;
                              padding: 5px;
                            "
                            @click="selectTicket(con)"
                          >
                            {{ con.name.toUpperCase() }} ({{currency_symbol}} {{ convert_price(1000) }})
                          </button>
                      </div>
                      <div v-else>
                        <span>{{ con.name.toUpperCase() }} Sales Ended</span>
                      </div>
                      </div>
                    </div> -->
                    <div class="card" v-if="!proceedPayment">
                      <div class="card-body">
                        <h5 class="card-title mb-3 muted">Ticket</h5>
                        <div
                          class="row mt-4"
                          v-for="con in event.eventsTickets"
                          :key="con.id"
                        >
                          <div class="col d-flex align-items-center">
                            <span>{{ con.name.toUpperCase() }}</span>
                          </div>
                          <div
                            class="col text-center d-flex align-items-center"
                          >
                            <div v-if="con.price == 'free'">
                              <span>Free</span>
                            </div>
                            <div v-if="con.price != 'free'">
                              <span v-if="toRate"
                                >{{ currency_symbol }}
                                {{ (con.price / toRate).toFixed(2) }}</span
                              >
                            </div>
                          </div>
                          <div class="col">
                            <select
                              disabled
                              class="form-control"
                              v-if="parseInt(con.quantity) == 0"
                            >
                              <option>0</option>
                            </select>
                            <select
                              @change="selectTicketQty(con, $event)"
                              class="form-control"
                              v-else
                            >
                              <option value="">0</option>
                              <option
                                v-for="(item, i) in parseInt(con.quantity)"
                                :value="item"
                                :key="item"
                              >
                                {{ i + 1 }}
                              </option>
                            </select>
                            <!-- <input type="number" :max="con.quantity"  @keyup="checkQuantity"
                            @keypress="isNumber($event)" v-model="tickets" class="form-control" min="1" id=""> -->
                          </div>
                        </div>
                        <div class="col-lg-12 text-center d-grid gap-2">
                          <button
                            class="btn btn-buy-ticket btn-block"
                            type="submit"
                            :disabled="totalPrice === 0"
                            @click="showModal"
                          >
                            Buy Ticket
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="card" v-else>
                      <form
                        @submit.prevent="
                          buyTicket(event.paymentgateway, totalPrice)
                        "
                      >
                        <div class="card-body">
                          <h5 class="card-title mb-3 muted">Order Summary</h5>
                          <div v-for="item in newTicket" :key="item.id">
                            <hr />
                            <div class="row mt-4">
                              <div class="col d-flex align-items-center">
                                <span
                                  >{{ item.quantity }} x
                                  {{ item.name.toUpperCase() }}</span
                                >
                              </div>
                              <div
                                class="col justify-content-end d-flex align-items-center"
                              >
                                <div v-if="item.price == 'free'">
                                  <span>Free</span>
                                </div>
                                <div v-if="item.price != 'free'">
                                  <span
                                    >{{ currency_symbol }}
                                    {{ item.price }}</span
                                  >
                                </div>
                              </div>
                            </div>
                            <div class="row mt-2">
                              <div class="col">
                                <span>Sub-Total:</span>
                              </div>
                              <div
                                class="col justify-content-end d-flex align-items-center"
                              >
                                <span>
                                  <strong
                                    >{{ currency_symbol }}
                                    {{ item.sub_total }}</strong
                                  >
                                </span>
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div class="row mt-4">
                            <div class="col">
                              <span><strong>Total</strong></span>
                            </div>
                            <div class="col d-flex justify-content-end">
                              <span
                                ><strong
                                  >{{ currency_symbol }}
                                  {{ totalPrice }}</strong
                                ></span
                              >
                            </div>
                          </div>
                          <div class="row mt-4">
                            <div class="col">
                              <span>Reference NUmber</span>
                            </div>
                            <div class="col d-flex justify-content-end">
                              <span>{{ reference }}</span>
                            </div>
                          </div>
                          <div class="row mt-4">
                            <div class="col">
                              <div class="form-group">
                                <label for="email">Email</label>
                                <input
                                  type="email"
                                  v-model="email"
                                  class="form-control mt-2"
                                  id=""
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row mt-4">
                            <div class="col">
                              <div class="form-group">
                                <label for="email">Firstname</label>
                                <input
                                  type="text"
                                  v-model="firstname"
                                  class="form-control mt-2"
                                  id=""
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row mt-4">
                            <div class="col">
                              <div class="form-group">
                                <label for="email">Lastname</label>
                                <input
                                  type="text"
                                  v-model="lastname"
                                  class="form-control mt-2"
                                  id=""
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row mt-4">
                            <div class="col">
                              <div class="form-group">
                                <label for="email">Phone Number</label>
                                <input
                                  type="tel"
                                  v-model="phone"
                                  class="form-control mt-2"
                                  id=""
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row mt-4">
                            <PaymentGateway
                              radioStyle
                              :selected="selectedGateway"
                              :gateways="paymentMethods"
                              v-model="event.paymentgateway"
                              v-if="currency_symbol === 'NGN'"
                            />
                          </div>
                          <div class="col-lg-12 mt-5 d-grid gap-2">
                            <button
                              style="width: auto"
                              v-if="currency_symbol == 'NGN'"
                              type="submit"
                            >
                              Pay Now - Local Only
                            </button>
                            <button
                              v-else
                              style="width: auto"
                              class="btn btn-block"
                              type="submit"
                            >
                              Pay Now - International
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <!-- <form v-if="ticketSelected" @submit.prevent="buyTicket(event.paymentgateway, convert_price(1000))">
                      <div class="row">
                        <div  v-if="message" class= 'alert-success alert  alert-dismissible fade show' role="alert">
                          {{message}} 
                          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        <div class="col-lg-12 mb-3">
                          <label
                            >{{ formDatas.name.toUpperCase() }} ({{currency_symbol}}
                            {{ convert_price(1000) }}) Availability ({{formDatas.quantity}})</label
                          >
                          <input
                            class="input mb-3"
                            type="number"
                            v-model="ticketQuantity"
                            min="1"
                            @keyup="checkQuantity"
                            @keypress="isNumber($event)"
                            :max="formDatas.quantity"
                            :placeholder="
                              'Enter number of ' + formDatas.name + ' ticket'
                            "
                          />
                          <input
                            class="input mb-3"
                            type="email"
                            v-model="email"
                            placeholder="Enter Email"
                            required
                          />
                          <input
                            class="input mb-3"
                            type="text"
                            v-model="firstname"
                            placeholder="Enter Firstname"
                            required
                          />
                          <input
                            class="input mb-3"
                            type="text"
                            v-model="lastname"
                            placeholder="Enter Lastname"
                            required
                          />
                          <input
                            class="input mb-3"
                            type="tel"
                            v-model="phone"
                            placeholder="Enter Mobile Number"
                            required
                          />
                        </div>
                        <div class="col-lg-12 text-center">
                          <button v-if="formDatas.quantity == 0"
                            disabled
                          >
                            Purchase Completed
                          </button>
                          <button v-else
                            type="submit"
                          >
                            Buy Ticket
                          </button>
                        </div>
                      </div>
                    </form> -->
                  </div>
                </div>
              </div>
              <div class="container" v-if="ended == true">
                <h6 style="color: red">
                  oOps! This event has ended, go to event page to view another
                  one
                </h6>
              </div>
            </div>
            <div
              style="z-index: 9999"
              class="modal fade"
              ref="exampleModal"
              data-backdrop="static"
              data-keyboard="false"
              tabindex="-1"
              aria-labelledby="exampleModal"
              aria-hidden="true"
            >
              <div class="modal-dialog" style="top: 100px; max-width: 60%">
                <div class="modal-content">
                  <div class="modal-header" style="display: block">
                    <button
                      type="button"
                      class="btn-close"
                      style="float: right"
                      @click="modal.hide()"
                      aria-label="Close"
                    ></button>
                    <h5 class="modal-title" id="exampleModalLabel">
                      {{ event.title }}
                    </h5>
                    <h6>
                      {{ event.venue }}
                    </h6>
                    <h6>
                      {{ format_date(event.startdate) }}
                    </h6>
                  </div>
                  <div class="modal-body">
                    <form @submit.prevent="proceedPay">
                      <div class="row">
                        <div class="col">
                          <div class="px-2">
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
                            <div class="form-groug">
                              <label>Phone Number</label>
                              <input
                                type="tel"
                                v-model="phone"
                                class="form-control"
                                placeholder="Phone Required"
                                required
                              />
                            </div>
                            <div class="form-group mt-3">
                              <input
                                type="checkbox"
                                ref="checkbox"
                                required
                                id=""
                              />
                              <span>
                                I accept the
                                <a href="#">terms and conditions</a>
                                for using this service.
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <h6>Tickets</h6>
                          <div v-for="item in newTicket" :key="item">
                            <hr />
                            <div class="row">
                              <div class="col">
                                <span>{{ item.quantity }}</span>
                                <span> x </span> <span>{{ item.name }}</span
                                >:
                              </div>
                              <div class="col">
                                <span v-if="item.price == 'free'"
                                  ><strong>{{ item.price }}</strong></span
                                >
                                <span v-else
                                  ><strong>{{ item.price }}</strong></span
                                >
                              </div>
                            </div>
                            <div class="row mt-2">
                              <div class="col">
                                <span>Sub-Total:</span>
                              </div>
                              <div class="col">
                                <span>
                                  <strong>{{ item.sub_total }}</strong>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="row mt-4">
                            <div class="col">
                              <h5>Total:</h5>
                            </div>
                            <div class="col">
                              <h5>
                                <strong>{{ totalPrice.toFixed(2) }}</strong>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="px-5 text-center">
                        <button
                          class="btn"
                          type="submit"
                          style="
                            border: 0px none;
                            margin: 10px;
                            margin-top: 3px;
                            background: #bfddb4;
                            margin-top: 12px;
                          "
                        >
                          Proceed to Payment
                        </button>
                      </div>
                    </form>
                    <!-- <div v-else>
                      <h3
                        style="
                          text-align: center;
                          font-size: 16px;
                          margin-top: 20px;
                        "
                      >
                        Please fill the above required field and accept terms & conditions to proceed
                      </h3>
                    </div> -->
                  </div>
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
                    <h1>Organiser Details</h1>
                    <h4>Name</h4>
                    <p>{{ event.organisation }}</p>
                    <h4>Email</h4>
                    <p>{{ event.adminuser.email }}</p>
                    <h4>Phone Number</h4>
                    <p>{{ event.adminuser.phonenumber }}</p>
                    <h4>About</h4>
                    <h6>{{ event.adminuser.about }}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <elfrique-footer></elfrique-footer>
  </template>
</template>

<script>
  import Header from "./elfrique-header.vue";
  import Footer from "./elfrique-footer.vue";
  import TransactionService from "../service/transaction.service";
  import Notification from "../service/notitfication-service";
  import EventService from "../service/event.service";
  import uniqid from "uniqid";
  import moment from "moment";
  import IPGeolocationAPI from "ip-geolocation-api-javascript-sdk";
  import axios from "axios";
  import { Modal } from "bootstrap";
  import { Store } from "vuex";
  import Swal from "sweetalert2";
    import LoaderVue from './components/Loader.vue';
  import PaymentGateway from "./components/PaymentGateway.vue";

  export default {
    name: "Elfrique",
    components: {
      "elfrique-header": Header,
      "elfrique-footer": Footer,
      PaymentGateway,
      LoaderVue
    },
    data() {
      return {
        momentT: moment().format(),
        currency_symbol: "",
        tickets: [],
        proceedPayment: false,
        ticketQuantity: 0,
        toRate: "",
        salesEnd: false,
        formDatas: "",
        qutty: "",
        email: "",
        admin_id: "",
        firstname: "",
        lastname: "",
        selectedGateway: "",
        method: this.$store.state.vote.event.paymentgateway,
        paymentMethods: ["paystack", "flutterwave", "interswitch"],
        phone: "",
        isLoading: true,
        reference: this.genRef(),
        publicKey: "pk_test_be803d46f5a6348c3643967d0e6b7b2303d42b4f",
        flw_public_key: "FLWPUBK_TEST-0f353662b04aee976128e62946a59682-X",
        ended: false,
        endDate: "",
        countdown: {
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        },
        quantity: 0,
        message: "",
        event: {
          adminuser: {},
        },
        toUsdRate: "",
        newTicket: [],
        eventId: this.$route.params.id,
        modal: false,
      };
    },
    created() {
      const script = document.createElement("script");
      script.src = "https://newwebpay.interswitchng.com/inline-checkout.js";
      document.getElementsByTagName("head")[0].appendChild(script);
      const indexItem = this.paymentMethods.indexOf(this.event.paymentgateway);
      this.paymentMethods.splice(indexItem, 1);
      this.getEvent();
    },
    computed: {
      currentUrl() {
        return window.location.href;
      },
      transactForm() {
        return {
          admin_id: this.admin_id,
          reference: this.reference,
          category: "Event Ticket",
          ticketQuantity: this.newTicket,
          email: this.email,
          method: this.method,
          product_title: this.event.title,
          product_id: this.event.id,
          type: "paid",
          amount: this.totalPrice,
          currency: this.currency_symbol,
          payer_name: this.firstname + " " + this.lastname,
          phone_no: this.phone,
        };
      },
      totalPrice() {
        if (this.newTicket.length > 0) {
          let total = this.newTicket
            .map((item) => {
              if (item.price == "free") {
                let free = 0 * item.quantity;
                console.log(free);
                return free;
              } else {
                let paid = item.price * item.quantity;
                return paid;
              }
            })
            .reduce((prev, next) => prev + next);
          console.log(total);
          return total;
        } else {
          return 0;
        }
      },
    },
    methods: {
      proceedPay() {
        this.proceedPayment = true;
        this.modal.hide();
      },
      selectTicketQty(item, qty) {
        const elementIndex = this.newTicket.findIndex(
          (obj) => obj.id == item.id
        );
        if (elementIndex == -1) {
          if (item.price != "free") {
            let newPrice = (item.price / this.toRate).toFixed(2);
            let sub_total = (newPrice * qty.target.value).toFixed(2);
            let orifinal_price = item.price;
            this.newTicket.push({
              id: item.id,
              name: item.name,
              price: newPrice,
              orifinal_price: orifinal_price,
              quantity: qty.target.value,
              sub_total: sub_total,
            });
          } else {
            let newPrice = "free";
            this.newTicket.push({
              id: item.id,
              name: item.name,
              price: newPrice,
              quantity: qty.target.value,
              sub_total: 0,
            });
          }
        } else {
          this.newTicket[elementIndex].quantity = qty.target.value;
          console.log(this.newTicket[elementIndex].quantity);
        }
      },
      convert_price() {
          axios
            .get(
              `https://ipgeolocation.abstractapi.com/v1/?api_key=b7acd834a4b846e9b9476c67e52b76eb`
            )
            .then((res) => {
              let currency = res.data.currency.currency_code;
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
      },
      sales_time(value) {
        return moment(value).format();
      },
      getEvent() {
        EventService.getSingleEvent(this.$route.params.id).then((res) => {
          this.event = res.data.events;
          this.admin_id = res.data.events.adminuserId;
          this.endDate = res.data.events.enddate;
          this.convert_price();
          this.getCountdown();
          this.selectedGateway = this.event.paymentgateway;
          this.isLoading = false
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
      isNumber(evt) {
        const charCode = evt.which ? evt.which : evt.keyCode;
        if (
          charCode > 31 &&
          (charCode < 48 || charCode > 57) &&
          charCode !== 46
        ) {
          evt.preventDefault();
        }
      },
      checkQuantity() {
        if (this.ticketQuantity > this.formDatas.quantity) {
          this.ticketQuantity = this.formDatas.quantity;
        }
      },
      showModal() {
        this.modal = new Modal(this.$refs.exampleModal);
        this.modal.show();
      },
      genRef() {
        return uniqid();
      },
      selectTicket(item) {
        this.ticketSelected = true;
        this.formDatas = item;
        this.checkQuantity();
      },
      buyTicket(paymentGateway, price) {
        console.log(this.ticketQuantity);
        let amount = price * this.ticketQuantity;
        let adminId = this.$store.state.vote.event.adminuserId;
        let productTitle = this.event.title;
        if (this.currency_symbol != "NGN" || this.currency_symbol == "USD") {
          let paymentParams = FlutterwaveCheckout({
            public_key: this.flw_public_key,
            tx_ref: this.reference,
            amount: this.totalPrice,
            currency: "USD",
            customer: {
              email: this.email,
              phone_number: this.phone,
            },
            callback: (response) => {
              console.log(response);
              this.method = "Flutterwave";
              Notification.addNotification({
                receiverId: adminId,
                type: "Event Ticket Purchased",
                message: `Someone just Successfully Purchased ${productTitle} ticket`,
              });
              TransactionService.makeTransaction(this.transactForm).then(
                (response) => {
                  this.message = "Ticket has been sccessfully booked!!";
                  //this.resetForm();
                  this.getEvent();
                  this.genRef();
                  this.proceedPayment = false;
                  this.qutty = "";
                  Swal.fire({
                    icon: "success",
                    text: `You have successfully booked ${productTitle} ticket`,
                    confirmButtonText: "Ok",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      this.proceedPayment = false;
                      this.qutty = "";
                    }
                  });
                  paymentParams.close();
                  window.close();
                }
              );
              //this.$router.push("/fill-form/" + id);
            },
            onclose: () => paymentParams.close(),
          });
        } else {
          if (paymentGateway == "interswitch") {
            let samplePaymentRequest = {
              merchant_code: "MX60729",
              pay_item_id: "6294592",
              site_redirect_url: window.location.origin,
              cust_id: this.email,
              data_ref: "vjyLc2lgNK",
              txn_ref: this.reference,
              amount: (this.totalPrice * 100).toFixed(0),
              currency: 566, // ISO 4217 numeric code of the currency used
              onComplete: (response) => {
                if (response.desc) {
                  this.method = paymentGateway;
                  //console.log(this.transactForm);
                  Notification.addNotification({
                    receiverId: adminId,
                    type: "Event Ticket Purchase",
                    message: `Someone just Successfully Purchased ${productTitle} ticket`,
                  });
                  TransactionService.makeTransaction(this.transactForm).then(
                    (response) => {
                      //this.modal.hide();
                      this.getEvent();
                      this.proceedPayment = false;
                      this.qutty = "";
                      this.message = "Ticket has been sccessfully booked!!";
                      Swal.fire({
                        icon: "success",
                        text: `You have successfully booked ${productTitle} ticket`,
                        confirmButtonText: "Ok",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          this.proceedPayment = false;
                          this.qutty = "";
                        }
                      });
                      //this.resetForm();
                    }
                  );
                  //this.$router.push("/fill-form/" + id);
                }
              },
              mode: "TEST",
            };
            window.webpayCheckout(samplePaymentRequest);
          } else if (paymentGateway == "paystack") {
            const paymentOptions = {
              // general options
              key: this.publicKey, //required
              email: this.email, //required
              amount: (this.totalPrice * 100).toFixed(0), //required
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
                  receiverId: adminId,
                  type: "Event Ticket Purchased",
                  message: `Someone just Successfully Purchased ${productTitle} ticket`,
                });
                TransactionService.makeTransaction(this.transactForm).then(
                  (response) => {
                    //this.modal.hide();
                    this.getEvent();
                    this.proceedPayment = false;
                    this.qutty = "";
                    this.message = "Ticket has been sccessfully booked!!";
                    Swal.fire({
                      icon: "success",
                      text: `You have successfully booked ${productTitle} ticket`,
                      confirmButtonText: "Ok",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        this.proceedPayment = false;
                        this.qutty = "";
                      }
                    });
                  }
                );
                //this.$router.push("/fill-form/" + id);
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
          } else if (paymentGateway == "flutterwave") {
            let paymentParams = FlutterwaveCheckout({
              public_key: this.flw_public_key,
              tx_ref: this.reference,
              amount: this.totalPrice,
              currency: "NGN",
              customer: {
                email: this.email,
                phone_number: this.phone,
              },
              callback: (response) => {
                console.log(response);
                this.method = "Flutterwave";
                Notification.addNotification({
                  receiverId: adminId,
                  type: "Event Ticket Purchased",
                  message: `Someone just Successfully Purchased ${productTitle} ticket`,
                });
                TransactionService.makeTransaction(this.transactForm).then(
                  (response) => {
                    this.message = "Ticket has been sccessfully booked!!";
                    //this.resetForm();
                    this.getEvent();
                    this.proceedPayment = false;
                    this.qutty = "";
                    Swal.fire({
                      icon: "success",
                      text: `You have successfully booked ${productTitle} ticket`,
                      confirmButtonText: "Ok",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        this.proceedPayment = false;
                        this.qutty = "";
                      }
                    });
                    paymentParams.close();
                    window.close();
                  }
                );
                //this.$router.push("/fill-form/" + id);
              },
              onclose: () => this.onclose(),
            });

            // window.FlutterwaveCheckout(paymentParams);
          } else {
          }
        }
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

<style>
  .btn.btn-buy-ticket {
    background: #4c8f35;
    color: #fff;
    margin-top: 2rem;
    font-size: 18px;
    font-weight: 600;
    padding: 6px 50px;
  }
</style>
