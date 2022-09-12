<template>
  <title>Add Tickets | Elfrique</title>
  <dash-header />

  <!--------Main Content--------->
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Add Tickets</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/organiser/dashboard" class="routers"
              ><a>Home</a></router-link
            >
          </li>
          <li class="breadcrumb-item active">Registration</li>
          <li class="breadcrumb-item active">Add Ticket</li>
        </ol>
      </nav>
    </div>
    <!-- End Page Title -->

    <div class="container start-voting-div create-event-div">
      <div class="row justify-content-center">
        <div class="col-lg-11 start-voting-inner-div">
          <div
            class="start-vote-details alert alert-dismissible fade show"
            role="alert"
          >
            Select the events name to continue.
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div
            v-if="error"
            class="alert-danger alert alert-dismissible fade show"
            role="alert"
          >
            {{ error }}
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
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
          <form name="form" @submit.prevent="addTicket">
            <div class="row">
              <div class="col-lg-12 mt-4">
                <label for="vote option">Event Name</label>
                <select
                  v-model="eventId"
                  name="gateway"
                  id="gateway"
                  aria-placeholder="Select your event name"
                  required
                >
                  <option value="select vote option" disabled>
                    Select Your Vote Option
                  </option>
                  <option :value="con.id" v-for="con in content" :key="con.id">
                    {{ con.title }}
                  </option>
                </select>
              </div>
            </div>

            <div v-if="eventId" class="col-lg-11 event-details-header mt-4">
              Tickets
            </div>
            <!--Add Ticket DIV-->
            <div v-if="eventId" class="col-lg-11 start-voting-inner-div">
              <h5
                class="text-center"
                style="font-size: 16px; font-weight: 400; margin-bottom: 35px"
              >
                Click on the add ticket button below and follow the prompt to
                add ticket(s) for your free or paid event. <br />
                Note that you can add both ticket types for free or paid events
              </h5>
              <div class="row">
                <!--Add Ticket Button Modal-->
                <div class="col-lg-12 text-center">
                  <a
                    type="button"
                    class="btn-add-ticket"
                    @click="addTicketModal"
                  >
                    Add Ticket <i class="bi bi-plus-circle-fill"></i>
                  </a>
                </div>
                <!--Add Ticket Modal-->
                <div class="col-lg-12">
                  <div
                    class="modal fade"
                    ref="mainBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="mainBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">
                            What type of ticket do you want to add?
                          </h5>
                          <a
                            type="button"
                            class="btn-close"
                            @click="modal.hide()"
                            aria-label="Close"
                          ></a>
                        </div>
                        <div class="modal-body text-center">
                          <a
                            type="button"
                            class="btn-ticket-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#paidBackdrop"
                            @click="paidTicket"
                            >Paid Ticket</a
                          >
                          <a
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#freeBackdrop"
                            class="btn-ticket-btn"
                            v-on:click="freeTicket"
                            >Free Ticket</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--Paid Modal-->
                <div class="col-lg-12">
                  <div
                    class="modal fade"
                    ref="paidBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="paidBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">
                            How many paid ticket types do you wish to add?
                          </h5>
                          <a
                            type="button"
                            class="btn-close"
                            @click="modal.hide()"
                            aria-label="Close"
                          ></a>
                        </div>
                        <div class="modal-body">
                          <input
                            v-model="numberOfPaidTickets"
                            class="input"
                            type="number"
                            placeholder="Enter number"
                          />
                          <button
                            type="button"
                            style="
                              width: 80px;
                              background-color: blue;
                              padding: 5px 1px;
                            "
                            class="mt-4"
                            @click="modal.hide()"
                          >
                            Ok
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--Free Modal-->
                <div class="col-lg-12">
                  <div
                    class="modal fade"
                    ref="freeBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="freeBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">
                            How many free ticket types do you wish to add?
                          </h5>
                          <a
                            type="button"
                            class="btn-close"
                            @click="modal.hide()"
                            aria-label="Close"
                          ></a>
                        </div>
                        <div class="modal-body">
                          <input
                            v-model="numberOfFreeTickets"
                            class="input"
                            type="number"
                            placeholder="Enter number"
                          />
                          <button
                            type="button"
                            style="
                              width: 80px;
                              background-color: blue;
                              padding: 5px 1px;
                            "
                            class="mt-4"
                            @click="modal.hide()"
                          >
                            Ok
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-for="con in freeticketForm"
              :key="con.id"
              class="col-lg-11 start-voting-inner-div"
            >
              <div class="row">
                <!--Event Title-->
                <div class="col-lg-4 mt-4">
                  <label for="state">Ticket Name</label>
                  <input v-model="con.name" class="input" type="text" />
                </div>
                <!--City-->
                <div class="col-lg-4 mt-4">
                  <label for="city">Quantity Available</label>
                  <input v-model="con.quantity" class="input" type="number" />
                </div>
                <div v-if="freeticket" class="col-lg-2 mt-4">
                  <label for="city">Price</label>
                  <input value="free" disabled class="input" type="text" />
                </div>
                <div class="col-lg-2 mt-4">
                  <label for="remove">Remove</label>
                  <button
                    type="button"
                    style="width: 80px; background-color: red; padding: 5px 1px"
                    v-on:click="removeFreeTicket"
                  >
                    Remove
                  </button>
                </div>
                <!--Location-->
                <div class="col-lg-6 mt-4">
                  <label for="location">Ticket Sales Start</label>
                  <input v-model="con.salesstart" class="input" type="date" />
                </div>
                <!--Start Date-->
                <div class="col-lg-6 mt-4">
                  <label for="start date">Ticket Sales End </label>
                  <input v-model="con.salesend" class="input" type="date" />
                </div>
              </div>
            </div>
            <div
              v-for="con in paidticketForm"
              :key="con.id"
              class="col-lg-11 start-voting-inner-div"
            >
              <div class="row">
                <!--Event Title-->
                <div class="col-lg-4 mt-4">
                  <label for="state">Ticket Name</label>
                  <input v-model="con.name" class="input" type="text" />
                </div>
                <!--City-->
                <div class="col-lg-4 mt-4">
                  <label for="city">Quantity Available</label>
                  <input v-model="con.quantity" class="input" type="number" />
                </div>
                <div class="col-lg-2 mt-4">
                  <label for="city">Price</label>
                  <input v-model="con.price" class="input" type="text" />
                </div>
                <div class="col-lg-2 mt-4">
                  <label for="remove">Remove</label>
                  <button
                    type="button"
                    style="width: 80px; background-color: red; padding: 5px 1px"
                    v-on:click="removePaidTicket"
                  >
                    Remove
                  </button>
                </div>
                <!--Location-->
                <div class="col-lg-6 mt-4">
                  <label for="location">Ticket Sales Start</label>
                  <input v-model="con.salesstart" class="input" type="date" />
                </div>
                <!--Start Date-->
                <div class="col-lg-6 mt-4">
                  <label for="end date">Ticket Sales End </label>
                  <input v-model="con.salesend" class="input" type="date" />
                </div>
              </div>
            </div>
            <div class="col-lg-11 mt-4">
              <button type="submit" class="btn btn-success" :disabled="loading">
                Add Tickets<span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
                ></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>

  <dash-footer />
</template>
<style scoped src="@/assets/css/dashStyle.css"></style>
<script>
import Header from "./dash-header.vue";
import Footer from "./dash-footer.vue";
import { Modal } from "bootstrap";
import EventService from "../../service/event.service";
export default {
  name: "Elfrique",
  components: {
    "dash-header": Header,
    "dash-footer": Footer,
  },
  data() {
    return {
      content: "",
      eventId: "",
      numberOfFreeTickets: "",
      numberOfPaidTickets: "",
      freeticket: false,
      paidticket: false,
      message: "",
      error: "",
      loading: false,
      successful: false,
      modal: null,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    eventName: function () {
      this.content.find((event) => {
        if (event.id == this.eventId) {
          console.log(event.title);
          return event.title;
        }
        return null;
      });
    },
    freeticketForm: function () {
      let freeticketForm = [];
      for (let i = 0; i < this.numberOfFreeTickets; i++) {
        freeticketForm.push({
          name: "",
          price: "free",
          quantity: "",
          salesend: "",
          salesstart: "",
        });
      }
      return freeticketForm;
    },
    paidticketForm: function () {
      let paidticketForm = [];
      for (let i = 0; i < this.numberOfPaidTickets; i++) {
        paidticketForm.push({
          name: "",
          price: "",
          quantity: "",
          salesend: "",
          salesstart: "",
        });
      }
      return paidticketForm;
    },
    allTickets: function () {
      let allTickets = [];
      allTickets = allTickets.concat(this.freeticketForm);
      allTickets = allTickets.concat(this.paidticketForm);
      console.log(allTickets);
      return allTickets;
    },
  },

  created() {
    if (!this.loggedIn) {
      this.$router.push("/login");
    }

    EventService.getEvents().then((response) => {
      this.content = response.data.events;
    });
    
  },

  methods: {
      closeModal(){
          console.log("hello")
          this.modal = new Modal(this.$refs.mainBackdrop);
          this.modal.hide()
      },
      addTicketModal(){
          this.modal = new Modal(this.$refs.mainBackdrop);
          this.modal.show()
      },
    addTicket() {
      this.loading = true;
      if (this.eventId && this.allTickets.length > 0) {
        for (let i = 0; i < this.allTickets.length; i++) {
          let ticketForm = {
            name: this.allTickets[i].name,
            price: this.allTickets[i].price,
            quantity: this.allTickets[i].quantity,
            salesend: this.allTickets[i].salesend,
            salesstart: this.allTickets[i].salesstart,
            eventname: this.eventName,
          };

          EventService.createTickets(ticketForm, this.eventId).then(
            (response) => {
              this.successful = true;
              this.message = "Tickets created successfully";
              this.loading = false;
              window.scrollTo(0, 0);
            },
            (error) => {
              this.error = error.response.data.message;
              console.log(error.response.data);
              this.loading = false;
              window.scrollTo(0, 0);
            }
          );
        }
      }
      /* if (this.eventId && this.paidticketForm) {
                console.log(this.paidticketForm)
                for (let i = 0; i < this.numberOfPaidTickets.length; i++) {
                
                    let ticketForm = {
                        "name": this.paidticketForm[i].name,
                        "price": this.paidticketForm[i].price,
                        "quantity": this.paidticketForm[i].quantity,
                        "salesend": this.paidticketForm[i].salesend,
                        "salesstart": this.paidticketForm[i].salesstart,
                        "eventname": this.eventName
                    }

                    await EventService.createTickets(ticketForm, this.eventId).then(response => {
                        this.successful = true;
                        
                    },
                    error => {
                        this.error = error.response.data.message;
                        this.loading = false;
                    });
                }
            }

            if (this.successful) {
                this.message = 'Tickets created successfully';
                this.loading = false;
            } */

      /*  this.message = 'Event Created Successfully';
            this.loading = false; */
    },

    freeTicket() {
        this.modal = new Modal(this.$refs.freeBackdrop);
        this.modal.show()
      this.freeticket = true;
      // this.paidticket = false;
    },
    paidTicket() {
        
        this.modal = new Modal(this.$refs.paidBackdrop);
        this.modal.show()
      this.paidticket = true;

      // this.freeticket = false;
    },
    removeFreeTicket() {
      this.numberOfFreeTickets--;
    },
    removePaidTicket() {
      this.numberOfPaidTickets--;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>