<template>
  <title>
    Travel And Tour Management System | Elfrique – Complete Event Management
    System
  </title>
  <elfrique-header />

  <!--Service Header-->
  <div class="container-fluid search-travel-house">
    <div class="row justify-content-center mt-5">
      <div class="col-lg-12 text-center mb-4 header-text">
        <h1>Book your flights, hotels & e-Visa</h1>
      </div>
      <div class="col-lg-10 mb-5 search-travel-section">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link tabs-button active"
              id="nav-flight-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-flight"
              type="button"
              role="tab"
              aria-controls="nav-flight"
              aria-selected="true"
            >
              <i class="fa fa-plane"></i> <span>Flight</span>
            </button>
            <button
              class="nav-link tabs-button"
              id="nav-hotel-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-hotel"
              type="button"
              role="tab"
              aria-controls="nav-hotel"
              aria-selected="false"
            >
              <i class="fa fa-bed"></i> <span>Hotels</span>
            </button>
            <button
              class="nav-link tabs-button"
              id="nav-visa-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-visa"
              type="button"
              role="tab"
              aria-controls="nav-visa"
              aria-selected="false"
            >
              <i class="fa fa-file-invoice"></i> <span>E-Visa</span>
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <!--Flight-->
          <div
            class="tab-pane tabOne fade show active"
            id="nav-flight"
            role="tabpanel"
            aria-labelledby="nav-flight-tab"
          >
            <form @submit.prevent="searchFlight">
              <div class="row mb-3">
                <div class="col-lg-3">
                  <select v-model="flight.FlightSearchType" required>
                    <option value="Return">Round Trip</option>
                    <option value="Oneway">One-way</option>
                    <!-- <option value="Multidestination">Multi-city</option> -->
                  </select>
                </div>
                <div class="col-lg-3">
                  <select v-model="flight.Ticketclass" required>
                    <option value="Y">Economy</option>
                    <option value="W">Premium Economy</option>
                    <option value="J">Business</option>
                    <option value="F">First Class</option>
                  </select>
                </div>
                <div class="col-lg-2">
                  <label class="label-number">Adult (Above 12 years)</label>
                  <input
                    v-model="flight.Adults"
                    class="input-number"
                    type="number"
                    required
                  />
                </div>
                <div class="col-lg-2">
                  <label class="label-number">Children (2-12 years)</label>
                  <input
                    v-model="flight.Children"
                    class="input-number"
                    type="number"
                    required
                  />
                </div>
                <div class="col-lg-2">
                  <label class="label-number">Infant (Below 2 years)</label>
                  <input
                    v-model="flight.Infants"
                    class="input-number"
                    type="number"
                    required
                  />
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
                        v-model="flight.Itineraries.Departure"
                        @keyup="formatCity"
                        type="text"
                        list="cityName"
                        placeholder="City or Airport"
                        required
                      />
                      <datalist id="cityName">
                        <option
                          v-for="item in cityList"
                          :key="item"
                          :value="
                            item.City +
                            ' - ' +
                            item.AirportName +
                            ' - ' +
                            item.AirportCode
                          "
                        />
                      </datalist>
                    </div>
                    <div class="col-lg-6 div-input">
                      <label>To</label>
                      <input
                        v-model="flight.Itineraries.Destination"
                        @keyup="formatDCity"
                        type="text"
                        list="destinationCity"
                        required
                        placeholder="City or Airport"
                      />
                      <datalist id="destinationCity">
                        <option
                          v-for="item in DcityList"
                          :key="item"
                          :value="
                            item.City +
                            ' - ' +
                            item.AirportName +
                            ' - ' +
                            item.AirportCode
                          "
                        />
                      </datalist>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="row g-1">
                    <div class="col-lg-6 div-input">
                      <label>Depart</label>
                      <input
                        v-model="flight.Itineraries.DepartureDate"
                        type="date"
                        required
                      />
                    </div>
                    <div
                      v-if="flight.FlightSearchType == 'Return'"
                      class="col-lg-6 div-input"
                    >
                      <label>Return</label>
                      <input
                        v-model="flight.Itineraries.ReturnDate"
                        type="date"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-lg-12 text-center mt-2">
                      <button :disabled="loading" type="submit">
                        <i class="bi bi-search"></i>
                        <span
                          v-show="loading"
                          class="spinner-border spinner-border-sm"
                        ></span>
                      </button>
                      <!-- <router-link to="/travel-tour-page" class="routers">
                                                <a>
                                                    <button type="submit"><i class="bi bi-search"></i></button>
                                                </a>
                                            </router-link> -->
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <!--Hotels-->
          <div
            class="tab-pane tabOne fade"
            id="nav-hotel"
            role="tabpanel"
            aria-labelledby="nav-hotel-tab"
          >
            <form>
              <div class="row mb-3">
                <div class="col-lg-4">
                  <label class="label-number">Number of rooms</label>
                  <input class="input-number" type="number" />
                </div>
                <div class="col-lg-4">
                  <label class="label-number">Adult (Above 12 years)</label>
                  <input class="input-number" type="number" />
                </div>
                <div class="col-lg-4">
                  <label class="label-number">Children (2-12 years)</label>
                  <input class="input-number" type="number" />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="row g-1 justify-content-center">
                    <div class="col-lg-12 div-input">
                      <label>Going to?</label>
                      <input
                        type="text"
                        placeholder="Destination, city or hotel name"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="row g-1">
                    <div class="col-lg-6 div-input">
                      <label>Check-in</label>
                      <input type="date" />
                    </div>
                    <div class="col-lg-6 div-input">
                      <label>Check-out</label>
                      <input type="date" />
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-lg-12 text-center mt-2">
                      <!-- <router-link to="/travel-tour-page" class="routers">
                                                <a> -->
                      <button type="submit">
                        <i class="bi bi-search"></i>
                      </button>
                      <!-- </a>
                                            </router-link> -->
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <!--e-Visa-->
          <div
            class="tab-pane fade"
            id="nav-visa"
            role="tabpanel"
            aria-labelledby="nav-visa-tab"
          >
            <p>
              <a href="#evisa">Click Here</a> To View Our E-Visa Destinations
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Service Header Ends-->

  <!--Service Travel And Tour-->
  <main class="travel-tour mt-5 mb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 header mb-5">
          <h1>Top Hotels</h1>
          <div class="line-hr"></div>
        </div>
        <div class="col-md-3">
          <div class="box">
            <div class="img-area">
              <img
                src="@/assets/images/hotel1.png"
                ondragstart="return false;"
              />
            </div>
            <div class="text-area">
              <h5 class="title">Blu Atlantic Hotel</h5>
              <p class="location">Lekki, Lagos</p>
              <p class="star">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="box">
            <div class="img-area">
              <img
                src="@/assets/images/hotel2.png"
                ondragstart="return false;"
              />
            </div>
            <div class="text-area">
              <h5 class="title">The Yatch Sea Front</h5>
              <p class="location">Lekki, Lagos</p>
              <p class="star">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="box">
            <div class="img-area">
              <img
                src="@/assets/images/hotel3.png"
                ondragstart="return false;"
              />
            </div>
            <div class="text-area">
              <h5 class="title">Nordic Hotel</h5>
              <p class="location">Lekki, Lagos</p>
              <p class="star">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="box">
            <div class="img-area">
              <img
                src="@/assets/images/hotel4.png"
                ondragstart="return false;"
              />
            </div>
            <div class="text-area">
              <h5 class="title">T9 Hotel</h5>
              <p class="location">Lekki, Lagos</p>
              <p class="star">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-12 header mb-5">
          <h1>Top Travel Destinations</h1>
          <div class="line-hr"></div>
        </div>
        <div class="col-md-3">
          <div class="box">
            <div class="img-area">
              <img
                src="@/assets/images/travel1.jpg"
                ondragstart="return false;"
              />
            </div>
            <div class="text-area">
              <h5 class="title">
                Lagos <span><i class="bi bi-arrow-right"></i></span> London
              </h5>
              <p class="price">NGN 500,187</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="box">
            <div class="img-area">
              <img
                src="@/assets/images/travel2.png"
                ondragstart="return false;"
              />
            </div>
            <div class="text-area">
              <h5 class="title">
                Lagos <span><i class="bi bi-arrow-right"></i></span> Toronto
              </h5>
              <p class="price">NGN 590,908</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="box">
            <div class="img-area">
              <img
                src="@/assets/images/travel3.jpg"
                ondragstart="return false;"
              />
            </div>
            <div class="text-area">
              <h5 class="title">
                Lagos <span><i class="bi bi-arrow-right"></i></span> New York
              </h5>
              <p class="price">NGN 471,577</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="box">
            <div class="img-area">
              <img
                src="@/assets/images/travel4.png"
                ondragstart="return false;"
              />
            </div>
            <div class="text-area">
              <h5 class="title">
                Lagos <span><i class="bi bi-arrow-right"></i></span> Accra
              </h5>
              <p class="price">NGN 162,397</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="evisa-section" id="evisa">
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-lg-12 header mb-5">
            <h1>E-Visa Destinations</h1>
            <div class="line-hr"></div>
          </div>
          <div class="box evisa-box">
            <router-link to="/evisa/uae" class="routers">
              <div class="img-area">
                <img
                  src="@/assets/images/flag-dubai.png"
                  ondragstart="return false;"
                />
              </div>
              <div class="text-area">
                <h5 class="title">United Arab Emirates (Dubai)</h5>
              </div>
            </router-link>
          </div>
          <div class="box evisa-box">
            <router-link to="/evisa/turkey" class="routers">
              <div class="img-area">
                <img
                  src="@/assets/images/flag-turkey.png"
                  ondragstart="return false;"
                />
              </div>
              <div class="text-area">
                <h5 class="title">Turkey</h5>
              </div>
            </router-link>
          </div>
          <div class="box evisa-box">
            <router-link to="/evisa/tanzania" class="routers">
              <div class="img-area">
                <img
                  src="@/assets/images/flag-tanzania.png"
                  ondragstart="return false;"
                />
              </div>
              <div class="text-area">
                <h5 class="title">Tanzania</h5>
              </div>
            </router-link>
          </div>
          <div class="box evisa-box">
            <router-link to="/evisa/east-africa-tourist" class="routers">
              <div class="img-area">
                <img
                  src="@/assets/images/flag-eastAfrica.png"
                  ondragstart="return false;"
                />
              </div>
              <div class="text-area">
                <h5 class="title">
                  East Africa Tourist Visa (Kenya, Rwanda & Uganda)
                </h5>
              </div>
            </router-link>
          </div>
          <div class="box evisa-box">
            <router-link to="/evisa/ethiopia" class="routers">
              <div class="img-area">
                <img
                  src="@/assets/images/flag-ethiopia.png"
                  ondragstart="return false;"
                />
              </div>
              <div class="text-area">
                <h5 class="title">Ethiopia</h5>
              </div>
            </router-link>
          </div>
          <div class="box evisa-box">
            <router-link to="/evisa/malawi" class="routers">
              <div class="img-area">
                <img
                  src="@/assets/images/flag-malawi.png"
                  ondragstart="return false;"
                />
              </div>
              <div class="text-area">
                <h5 class="title">Malawi</h5>
              </div>
            </router-link>
          </div>
          <div class="box evisa-box">
            <router-link to="/evisa/zimbabwe" class="routers">
              <div class="img-area">
                <img
                  src="@/assets/images/flag-zimbabwe.png"
                  ondragstart="return false;"
                />
              </div>
              <div class="text-area">
                <h5 class="title">Zimbabwe</h5>
              </div>
            </router-link>
          </div>
          <div class="box evisa-box">
            <router-link to="/evisa/zambia" class="routers">
              <div class="img-area">
                <img
                  src="@/assets/images/flag-zambia.png"
                  ondragstart="return false;"
                />
              </div>
              <div class="text-area">
                <h5 class="title">Zambia</h5>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="container mt-3">
        <div class="row justify-content-center">
          <div class="col-lg-12 header header-evisaProcess mb-5 text-center">
            <h1>Our E-Visa Application Process</h1>
            <p>
              With just three steps you get your e-visa. Fast & Stress-Free!
            </p>
            <div class="line-hr"></div>
          </div>
          <div class="col-lg-11">
            <div class="row">
              <div class="col-md-4 text-center">
                <div class="steps-div">
                  <div class="steps">Step 1</div>
                </div>
                <div class="evisaProcess-box">
                  <img
                    src="@/assets/images/evisa-icon1.png"
                    ondragstart="return false;"
                  />
                  <p>Provide Travel Info</p>
                </div>
              </div>
              <div class="col-md-4 text-center">
                <div class="steps-div">
                  <div class="steps">Step 2</div>
                </div>
                <div class="evisaProcess-box">
                  <img
                    src="@/assets/images/evisa-icon2.png"
                    ondragstart="return false;"
                  />
                  <p>Visa experts collect Application</p>
                </div>
              </div>
              <div class="col-md-4 text-center">
                <div class="steps-div">
                  <div class="steps">Step 3</div>
                </div>
                <div class="evisaProcess-box">
                  <img
                    src="@/assets/images/evisa-icon3.png"
                    ondragstart="return false;"
                  />
                  <p>Get your Visa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!--Service Travel And Tour Ends-->

  <elfrique-footer />
</template>
<script>
import Header from "./elfrique-header.vue";
import Newsletter from "./elfrique-newsletter.vue";
import Footer from "./elfrique-footer.vue";
import axios from "axios";
import { _API_URL } from "../configs";
import moment from "moment";
export default {
  name: "Elfrique",
  components: {
    "elfrique-header": Header,
    "elfrique-newsletter": Newsletter,
    "elfrique-footer": Footer,
  },
  data() {
    return {
      flight: {
        FlightSearchType: "Oneway",
        Adults: 1,
        Children: "0",
        Infants: "0",
        Ticketclass: "Y",
        TargetCurrency: "NGN",
        Itineraries: {
          Departure: "",
          Destination: "",
          DepartureDate: "",
          ReturnDate: ""
        },
      },
      airportCityList: [],
      loading: false,
    };
  },
  computed: {
    cityList() {
      if (this.flight.Itineraries.Departure != "") {
        return this.airportCityList.filter((items) => {
          return this.flight.Itineraries.Departure.toLowerCase()
            .split(" ")
            .every((v) => items.City.toLowerCase().includes(v));
        });
      }
    },
    DcityList() {
      if (this.flight.Itineraries.Destination != "") {
        return this.airportCityList.filter((items) => {
          return this.flight.Itineraries.Destination.toLowerCase()
            .split(" ")
            .every((v) => items.City.toLowerCase().includes(v));
        });
      }
    },
  },
  created() {
    axios.get(`${_API_URL}flight/airports`).then((res) => {
      //console.log(res)
      this.airportCityList = res.data;
    });
  },
  methods: {
    formatCity() {
      this.flight.Itineraries.Departure =
        this.flight.Itineraries.Departure.toString();
      this.flight.Itineraries.Departure =
        this.flight.Itineraries.Departure.charAt(0).toUpperCase() +
        this.flight.Itineraries.Departure.slice(1);
    },
    formatDCity() {
      this.flight.Itineraries.Destination =
        this.flight.Itineraries.Destination.toString();
      this.flight.Itineraries.Destination =
        this.flight.Itineraries.Destination.charAt(0).toUpperCase() +
        this.flight.Itineraries.Destination.slice(1);
    },
    searchFlight() {
      this.loading = true;
      let from = this.flight.Itineraries.Departure.slice(-3);
      let to = this.flight.Itineraries.Destination.slice(-3);
      let dataForm = null
      if (this.flight.Itineraries.ReturnDate != "") {
        dataForm = {
          searchType: this.flight.FlightSearchType,
          adultsCount: this.flight.Adults,
          childrenCount: this.flight.Children,
          infantCount: this.flight.Infants,
          ticketClass: this.flight.Ticketclass,
          currency: "NGN",
          from: from,
          to: to,
          departureDate: moment(this.flight.Itineraries.DepartureDate).format(
            "L"
          ),
          returnDate: moment(this.flight.Itineraries.ReturnDate).format(
            "L"
          ),
        };
      } else {
        dataForm = {
          searchType: this.flight.FlightSearchType,
          adultsCount: this.flight.Adults,
          childrenCount: this.flight.Children,
          infantCount: this.flight.Infants,
          ticketClass: this.flight.Ticketclass,
          currency: "NGN",
          from: from,
          to: to,
          departureDate: moment(this.flight.Itineraries.DepartureDate).format(
            "L"
          ),
        };
      }
      
      //console.log(dataForm)
      
      axios
        .post(`${_API_URL}flight/search`, dataForm, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          //console.log(res.data.flightSearchResult)
          this.loading = false;
          let sendData = JSON.stringify(res.data.flightSearchResult);
          const dataForm = JSON.stringify({
            searchType: this.flight.FlightSearchType,
            adultsCount: this.flight.Adults,
            childrenCount: this.flight.Children,
            infantCount: this.flight.Infants,
            ticketClass: this.flight.Ticketclass,
            currency: "NGN",
            from: from,
            to: to,
            departureDate: moment(this.flight.Itineraries.DepartureDate).format(
              "LL"
            ),
          });
          //console.log(sendData)
          localStorage.setItem('data', sendData)
          localStorage.setItem('form', dataForm)
          this.$router.push({
            name: "TravelAndTourPage",
          });
        })
        .catch(err => {
          this.loading = false
          console.log(err)
        })
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
input[list]:focus {
  outline: none;
}
input[list] + div[list] {
  display: none;
  position: absolute;
  width: 100%;
  max-height: 164px;
  overflow-y: auto;
  max-width: 330px;
  background: #fff;
  border: var(--border);
  border-top: none;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 3px 3px -3px #333;
  z-index: 100;
}
input[list] + div[list] span {
  display: block;
  padding: 7px 5px 7px 20px;
  color: #069;
  text-decoration: none;
  cursor: pointer;
}
input[list] + div[list] span:not(:last-child) {
  border-bottom: 1px solid #eee;
}
input[list] + div[list] span:hover {
  background: rgba(100, 120, 140, 0.2);
}
</style>