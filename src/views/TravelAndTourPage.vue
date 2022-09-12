<template>
  <title>
    Travel And Tour Management Page | Elfrique – Complete Event Management
    System
  </title>
  <elfrique-header />

  <!-- Tour New Added -->
  <section class="Tour">
    <div class="container-fluid">
      <div class="row justify-content-center mt-5">
        <div class="col-lg-1"></div>
        <div class="col-lg-10">
          <div class="row">
            <div class="col-md-4">
              <div class="text">
                <p>
                  {{ formResult.from }}
                  <span>
                    <i class="bi bi-arrow-left-right"></i>
                  </span>
                  <span class="niger"> {{ formResult.to }} </span>
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="text">
                <p>{{ formResult.departureDate }}</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="text">
                <p>
                  <span v-if="formResult.adultsCount != '0'"
                    >{{ formResult.adultsCount }} Adult,
                  </span>
                  <span v-if="formResult.childrenCount != '0'"
                    >{{ formResult.childrenCount }} Children,
                  </span>
                  <span v-if="formResult.infantCount != '0'"
                    >{{ formResult.infantCount }} Infant,
                  </span>
                  <span v-if="formResult.ticketClass == 'Y'">Economy</span>
                  <span v-if="formResult.ticketClass == 'W'"
                    >Premium Economy</span
                  >
                  <span v-if="formResult.ticketClass == 'J'">Business</span>
                  <span v-if="formResult.ticketClass == 'F'">First Class</span>
                </p>
              </div>
            </div>
            <!-- <div class="col-md-3">
              <div class="modify">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Modify <i class="bi bi-pen"></i>
                </button>
              </div>
            </div> -->
          </div>
        </div>
        <div class="col-lg-1"></div>
      </div>
    </div>
  </section>
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="search-travel-house-div">
            <div class="search-travel-section">
              <div class="tab-content" id="nav-tabContent">
                <!--Flight-->
                <div
                  class="tab-pane tabOne fade show active"
                  id="nav-flight"
                  role="tabpanel"
                  aria-labelledby="nav-flight-tab"
                >
                  <form>
                    <div class="row mb-3">
                      <div class="col-lg-3">
                        <select>
                          <option>Round Trip</option>
                          <option>One-way</option>
                          <option>Multi-city</option>
                        </select>
                      </div>
                      <div class="col-lg-3">
                        <select>
                          <option>Economy</option>
                          <option>Premium Economy</option>
                          <option>Business</option>
                          <option>First Class</option>
                        </select>
                      </div>
                      <div class="col-lg-2">
                        <label class="label-number"
                          >Adult (Above 12 years)</label
                        >
                        <input class="input-number" type="number" />
                      </div>
                      <div class="col-lg-2">
                        <label class="label-number"
                          >Children (2-12 years)</label
                        >
                        <input class="input-number" type="number" />
                      </div>
                      <div class="col-lg-2">
                        <label class="label-number"
                          >Infant (Below 2 years)</label
                        >
                        <input class="input-number" type="number" />
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-md-6">
                        <div class="row g-1 justify-content-center">
                          <div class="col-lg-1 icon-to-fro text-center">
                            <i class="bi bi-arrow-left-right"></i>
                          </div>
                          <div class="col-lg-6 div-input">
                            <label>From</label>
                            <input
                              type="text"
                              placeholder="City or Flightport"
                            />
                          </div>
                          <div class="col-lg-6 div-input">
                            <label>To</label>
                            <input
                              type="text"
                              placeholder="City or Flightport"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="row g-1">
                          <div class="col-lg-6 div-input">
                            <label>Depart</label>
                            <input type="date" />
                          </div>
                          <div class="col-lg-6 div-input">
                            <label>Return</label>
                            <input type="date" />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="row">
                          <div class="col-lg-12 text-center mt-2 py-2">
                            <button type="submit">Submit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" id="close" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Tour New Added Ended -->
  <!-- Filter Added -->
  <section class="filter">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="row">
            <div class="col-md-12">
              <div class="sort">
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      class="nav-link tabs-button active"
                      id="nav-Cheapest-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-Cheapest"
                      type="button"
                      role="tab"
                      aria-controls="nav-Cheapest"
                      aria-selected="false"
                    >
                      <i class="fa fa-file-invoice"></i
                      ><span>Airline List(s)</span>
                    </button>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <!--Cheapest-->
                  <div
                    class="tab-pane tabOne fade show active"
                    id="nav-Cheapest"
                    role="tabpanel"
                    aria-labelledby="nav-Cheapest-tab"
                  >
                    <div v-if="flightResult.length > 0">
                      <div
                        class="learnt"
                        v-for="item in flightResult"
                        :key="item"
                      >
                        <div class="row">
                          <div class="col-md-1">
                            <div class="pull">
                              <img
                                :src="
                                  item.FlightCombination.FlightModels[0]
                                    .AirlineLogoUrl
                                "
                                style="width: 88%"
                                draggable="false"
                              />
                            </div>
                          </div>
                          <div class="col-md-3">
                            <div class="pull">
                              <p>
                                {{
                                  item.FlightCombination.FlightModels[0]
                                    .AirlineName
                                }}
                              </p>
                            </div>
                          </div>
                          <div class="col-md-2">
                            <div class="pull">
                              <p>
                                {{
                                  getTime(
                                    item.FlightCombination.FlightModels[0]
                                      .DepartureTime
                                  )
                                }}
                                ({{
                                  item.FlightCombination.FlightModels[0]
                                    .DepartureCode
                                }})
                              </p>
                              <p>
                                {{
                                  item.FlightCombination.FlightModels[0]
                                    .DepartureName
                                }}
                              </p>
                            </div>
                          </div>
                          <div class="col-md-2">
                            <div class="pull">
                              <p>
                                {{
                                  getDiff(
                                    item.FlightCombination.FlightModels[0]
                                      .FlightLegs[0].StartTime,
                                    item.FlightCombination.FlightModels[0]
                                      .FlightLegs[0].EndTime
                                  )
                                }}
                              </p>
                              <p>
                                {{
                                  item.FlightCombination.FlightModels[0].Stops
                                }}
                                Stop
                              </p>
                            </div>
                          </div>
                          <div class="col-md-2">
                            <div class="pull">
                              <p>
                                {{
                                  getTime(
                                    item.FlightCombination.FlightModels[0]
                                      .ArrivalTime
                                  )
                                }}
                                ({{
                                  item.FlightCombination.FlightModels[0]
                                    .ArrivalCode
                                }})
                              </p>
                              <p>
                                {{
                                  item.FlightCombination.FlightModels[0]
                                    .ArrivalName
                                }}
                              </p>
                            </div>
                          </div>
                          <div class="col-md-2">
                            <div class="pull">
                              <p>
                                {{
                                  getNPrice(item.FlightCombination.Price.Amount)
                                }}
                              </p>
                              <button
                                type="button"
                                @click="getFlightData(item)"
                                class="lenn"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal1"
                              >
                                View
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-else style="text-align: center">
                      <div class="learnt">No Flight found for this trip</div>
                    </div>
                  </div>
                  <!-- <div
                    class="tab-pane tabOne fade"
                    id="nav-hotel"
                    role="tabpanel"
                    aria-labelledby="nav-hotel-tab"
                  >
                    <div class="learnt">
                      <div class="row">
                        <div class="col-md-1">
                          <div class="pull">
                            <img
                              src="@/assets/images/AF.gif"
                              draggable="false"
                            />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="pull">
                            <p>KLM Royal Dutch Airlines</p>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="pull">
                            <p>22:10 (LOS)</p>
                            <p>Abuja</p>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="pull">
                            <p>11h 5m</p>
                            <p>1 Stop</p>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="pull">
                            <p>09:10 (LCY)</p>
                            <p>Chana</p>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="pull">
                            <p>₦2,864,032</p>
                            <button
                              type="button"
                              class="lenn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1"
                            >
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="learnt">
                      <div class="row">
                        <div class="col-md-1">
                          <div class="pull">
                            <img
                              src="@/assets/images/paysmallsmall.png"
                              draggable="false"
                            />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="pull">
                            <p>KLM Royal Dutch Airlines</p>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="pull">
                            <p>22:10 (LOS)</p>
                            <p>Lagos</p>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="pull">
                            <p>10h 5m</p>
                            <p>1 Stop</p>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="pull">
                            <p>08:10 (LCY)</p>
                            <p>London</p>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="pull">
                            <p>₦1,864,032</p>
                            <button
                              type="button"
                              class="lenn"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1"
                            >
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-visa"
                    role="tabpanel"
                    aria-labelledby="nav-visa-tab"
                  >
                    <div class="learnt">
                      <div class="row">
                        <div class="col-md-1">
                          <div class="pull">
                            <img
                              src="@/assets/images/AF.gif"
                              draggable="false"
                            />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="pull">
                            <p>KLM Royal Dutch Airlines</p>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="pull">
                            <p>22:10 (LOS)</p>
                            <p>Kaduna</p>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="pull">
                            <p>11h 5m</p>
                            <p>1 Stop</p>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="pull">
                            <p>08:10 (LCY)</p>
                            <p>France</p>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="pull">
                            <p>₦1,864,032</p>
                            <button
                              style="
                                background-color: #305d21;
                                border: none;
                                padding: 5px 20px 5px 20px;
                                border-radius: 8px;
                                margin-top: 10px;
                                color: #fff;
                                font-size: 14px;
                              "
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1"
                            >
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="learnt">
                      <div class="row">
                        <div class="col-md-1">
                          <div class="pull">
                            <img
                              src="@/assets/images/paysmallsmall.png"
                              draggable="false"
                            />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="pull">
                            <p>KLM Royal Dutch Airlines</p>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="pull">
                            <p>22:10 (LOS)</p>
                            <p>Lagos</p>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="pull">
                            <p>10h 5m</p>
                            <p>1 Stop</p>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="pull">
                            <p>08:10 (LCY)</p>
                            <p>London</p>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="pull">
                            <p>₦1,864,032</p>
                            <button
                              style="
                                background-color: #305d21;
                                border: none;
                                padding: 5px 20px 5px 20px;
                                border-radius: 8px;
                                margin-top: 10px;
                                color: #fff;
                                font-size: 14px;
                              "
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1"
                            >
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Filter Added Ended -->

  <!-- Modal Lastest -->
  <div
    class="modal fade"
    id="exampleModal1"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    style="z-index: 9999"
  >
    <div class="modal-dialog death" style="max-width: 90%; margin-top: 10%;margin-left: auto;margin-right: auto;">
      <div class="modal-content">
        <div class="modal-header" style="padding: 1rem 1rem;">
          <h5 class="modal-title" id="exampleModalLabel">
            Departure flight : {{ from }} - {{ to }}
          </h5>
          <button
            type="button"
            id="closeMOdal"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" style="padding: 1rem 1rem;">
          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                <div class="col-md-2">
                  <div class="teuday">
                    <p>{{ goingDate }}</p>
                  </div>
                </div>
                <div class="col-md-1">
                  <div>
                    <img
                      :src="flightLogo"
                      draggable="false"
                      alt=""
                      style="width: 85%"
                    />
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="lent">
                    <p>
                      <b> {{ departTime }} - {{ arriveTime }} </b>
                    </p>
                    <p>
                      {{ departName }} ({{ departCode }}) - {{ arriveName }} ({{
                        arriveCode
                      }})
                    </p>
                  </div>
                </div>
                <div class="col-md-2">
                  <div>
                    <p>
                      <b> {{ ticketName }} </b>
                    </p>
                    <p>{{ duration }}</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="summary">
                    <div class="fare">
                      <h1>Fare Summary</h1>
                      <div class="adult">
                        <p>
                          Traveler(s)
                          <span> {{ price }} </span>
                        </p>
                        <p v-if="adult != ''">
                          {{ adult }}
                          <span>{{ adultPrice }}</span>
                        </p>
                        <p v-if="children != ''">
                          {{ children }}
                          <span>{{ childrenPrice }}</span>
                        </p>
                        <p v-if="infant != ''">
                          {{ infant }}
                          <span>{{ infantPrice }}</span>
                        </p>
                        <p class="clo"></p>
                      </div>
                      <div class="adult">
                        <p class="text-center to">
                          Total
                          <span> {{ price }} </span>
                        </p>
                        <p class="clo"></p>
                      </div>
                      <div class="adult">
                        <p v-for="item in rules" :key="item">* {{ item }}</p>
                        <button @click="PayFlutter(item)">Book</button>
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
  </div>
  <!-- Modal Lastest-Ends -->

  <elfrique-newsletter />

  <elfrique-footer />
</template>
<style scoped src="@/assets/css/travelandtour.css"></style>
<script>
import Header from "./elfrique-header.vue";
import Newsletter from "./elfrique-newsletter.vue";
import Footer from "./elfrique-footer.vue";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import Swal from "sweetalert2";
import uniqid from "uniqid";
export default {
  name: "Elfrique",
  components: {
    "elfrique-header": Header,
    "elfrique-newsletter": Newsletter,
    "elfrique-footer": Footer,
  },
  data() {
    return {
      flightResult: JSON.parse(localStorage.getItem('data')) || [],
      formResult: JSON.parse(localStorage.getItem('form')) || [],
      flightLogo: "",
      flightName: "",
      departName: "",
      departTime: "",
      departCode: "",
      arriveName: "",
      arriveTime: "",
      arriveCode: "",
      ticketName: "",
      duration: "",
      adult: "",
      children: "",
      infant: "",
      price: "",
      rules: "",
      from: "",
      to: "",
      goingDate: "",
      Payprice: "",
      adultPrice: "",
      childrenPrice: "",
      infantPrice: "",
      reference: this.genRef(),
      publicKey: "pk_test_be803d46f5a6348c3643967d0e6b7b2303d42b4f",
      flw_public_key: "FLWPUBK_TEST-0f353662b04aee976128e62946a59682-X"
    };
  },
  created() {
    //console.log(this.$route.paramst);
  },
  methods: {
    getFlightData(item) {
      //console.log(item);
      this.flightLogo = item.FlightCombination.FlightModels[0].AirlineLogoUrl;
      this.flightName = item.FlightCombination.FlightModels[0].AirlineName;
      this.departName =
        item.FlightCombination.FlightModels[0].FlightLegs[0].DepartureName;
      this.departTime = this.getTime(
        item.FlightCombination.FlightModels[0].DepartureTime
      );
      this.departCode =
        item.FlightCombination.FlightModels[0].FlightLegs[0].DepartureCode;
      this.arriveName =
        item.FlightCombination.FlightModels[0].FlightLegs[0].DestinationName;
      this.arriveTime = this.getTime(
        item.FlightCombination.FlightModels[0].ArrivalTime
      );
      this.arriveCode =
        item.FlightCombination.FlightModels[0].FlightLegs[0].DestinationCode;
      if (this.formResult.ticketClass == "Y") this.ticketName = "Economy";
      if (this.formResult.ticketClass == "W")
        this.ticketName = "Premium Economy";
      if (this.formResult.ticketClass == "J") this.ticketName = "Business";
      if (this.formResult.ticketClass == "F") this.ticketName = "First Class";
      this.duration = this.getDiff(
        item.FlightCombination.FlightModels[0].FlightLegs[0].StartTime,
        item.FlightCombination.FlightModels[0].FlightLegs[0].EndTime
      );
      if (this.formResult.adultsCount != "0")
        this.adult = `Adults (x${this.formResult.adultsCount})`;
      if (this.formResult.childrenCount != "0")
        this.children = `Children (x${this.formResult.childrenCount})`;
      if (this.formResult.infantCount != "0")
        this.infant = `Infants (x${this.formResult.infantCount})`;
      this.price = this.getNPrice(item.FlightCombination.Price.Amount);
      this.Payprice = item.FlightCombination.Price.Amount;
      this.rules = item.FlightCombination.FareRules;
      this.from = item.FlightCombination.FlightModels[0].DepartureName;
      this.to = item.FlightCombination.FlightModels[0].ArrivalName;
      this.goingDate = moment(this.formResult.departureDate).format("llll");
      if (this.formResult.adultsCount != "0")
        this.adultPrice = this.getNPrice(
          item.FlightCombination.PriceDetails[0].BaseFare.Amount
        );
      if (this.formResult.childrenCount != "0")
        this.childrenPrice = this.getNPrice(
          item.FlightCombination.PriceDetails[1].BaseFare.Amount
        );
      if (this.formResult.infantCount != "0")
        this.infantPrice = this.getNPrice(
          item.FlightCombination.PriceDetails[1].BaseFare.Amount
        );
    },
    getTime(value) {
      return moment(value).format("HH:mm");
    },
    getDiff(d1, d2) {
      momentDurationFormatSetup(moment);
      let b = moment(d2).diff(d1, "minutes", true);
      return moment
        .duration({
          minutes: Math.ceil(b),
        })
        .format("d[d] h[h] m[m]", { trim: "both" });
    },
    getNPrice(value) {
      return value.toLocaleString("en-NG", {
        style: "currency",
        currency: "NGN",
      });
    },
    async PayFlutter(item){
      this.closeModal()
      const { value: email } = await Swal.fire({
        title: 'Input your email address',
        input: 'email',
        inputLabel: 'Your email address',
        inputPlaceholder: 'Enter your email address',
        inputValidator: (value) => {
          if (!value) {
            return 'You need to write something!'
          }
        }
      })
      if (email) {
        
        const { value: name } = await Swal.fire({
          title: 'Enter your name',
          input: 'text',
          inputLabel: 'Your name',
          inputValidator: (value) => {
            if (!value) {
              return 'You need to write something!'
            }
          }
        })
        if (name) {
          let paymentParams = FlutterwaveCheckout({
            public_key: this.flw_public_key,
            tx_ref: this.reference,
            amount: this.Payprice,
            currency: "NGN",
            customer: {
              email: email,
              name: name,
            },
            callback: (response) => {
              console.log(response);
              this.loading = false;
              this.method = "Flutterwave";
              
              paymentParams.close()
              window.close()
            },
            onclose: () => paymentParams.close()
          });
        }
      }

      

    },
    genRef() {
      return uniqid();
    },
    closeModal() {
      document.getElementById("closeMOdal").click();
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
  .swal2-container.swal2-center.swal2-backdrop-show{
    z-index: 9999;
  }
  .swal2-styled.swal2-confirm{
    background: #356425 !important;
  }
</style>