<template>
  <title>View Event | Elfrique - Super Admin</title>
  <dash-header />

  <!--------Main Content--------->
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>View Event</h1>
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
              ><a>Overview</a>
            </router-link>
          </li>
          <li class="breadcrumb-item active">View Event</li>
        </ol>
      </nav>
    </div>
    <!-- End Page Title -->

    <section class="section">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body card-table">
              <!--  <div class="buttons-table">
                    <button type="button">Copy</button>
                    <button type="button">CSV</button>
                    <button type="button">Excel</button>
                    <button type="button">PDF</button>
                    <button type="button">Print</button>
                </div>
                <div class="search-table">
                    <form>
                        <input type="text" placeholder="Search...">
                    </form>
                </div> -->
              <!--Table-->
              <table class="table datatable card-table-table">
                <thead>
                  <tr>
                    <th scope="col">Event ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Image</th>
                    <th scope="col">Date Added</th>
                    <th scope="col">Starting Date</th>
                    <th scope="col">Closing Date</th>
                    <th scope="col">Ticket Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Options</th>
                    <th scope="col">Event Link</th>
                  </tr>
                </thead>
                <tbody v-for="con in content" :key="con.id">
                  <tr>
                    <td>{{ con.id }}</td>
                    <!-- <td>{{ con.organisation['id'] }}</td> -->
                    <td>{{ con.title }}</td>
                    <td>
                      <img
                        :src="con.image"
                        alt="event-pics"
                        contain
                        height="100"
                        width="150"
                      />
                    </td>
                    <td>{{ format_date(con.createdAt) }}</td>
                    <td>{{ format_date(con.startdate) }}</td>
                    <td>{{ format_date(con.enddate) }}</td>
                    <td>
                      Regular: Free <br />
                      VIP: NGN 3,000
                    </td>
                    <td>Off</td>
                    <td>
                      <div class="dropdown">
                        <button
                          class="btn btn-info dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Options
                        </button>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a class="dropdown-item" href="#"
                            @click="switchGateway(con.id, 'interswitch')"
                              >Switch To Interswitch</a
                            >
                          </li>
                          <li>
                            <a class="dropdown-item" href="#"
                            @click="switchGateway(con.id, 'paystack')"
                              >Switch To Paystack</a
                            >
                          </li>
                          <li>
                            <a class="dropdown-item" href="#"
                            @click="switchGateway(con.id, 'flutterwave')"
                              >Switch To Flutterwave</a
                            >
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                              @click="viewDetails(con.id)"
                              >View Ticket Details</a
                            >
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#nonstaticBackdrop"
                              @click="viewTicket(con.id)"
                              >View Tickets</a
                            >
                          </li>
                          <li><a class="dropdown-item" href="#" @click="routeEdit(con.id)">Edit</a></li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="#"
                              @click="deleteModal(con.id)"
                              >Delete</a
                            >
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td>
                      <a :href="'/ticket-content/' + con.id"> Event Link</a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <nav>
                <ul class="pagination pagination-md">
                  <li class="page-item disabled">
                    <a class="page-link"
                      ><span aria-hidden="true">&laquo;</span></a
                    >
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link"
                      ><span aria-hidden="true">&raquo;</span></a
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div>
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
      <div class="modal-dialog modal-xl container">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              <b>Ticket Details</b>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-12">
                <div class="card-body card-table">
                  <div class="buttons-table">
                    <button type="button">Copy</button>
                    <button type="button">CSV</button>
                    <button type="button">Excel</button>
                    <button type="button">PDF</button>
                    <button type="button">Print</button>
                  </div>
                  <div class="search-table">
                    <form>
                      <input type="text" placeholder="Search..." />
                    </form>
                  </div>
                  <!--Table-->
                  <table class="table datatable card-table-table">
                    <thead>
                      <tr>
                        <th scope="col">S/N</th>
                        <th scope="col">Ticket Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Booked</th>
                        <th scope="col">Sales Starts</th>
                        <th scope="col">Sales Ends</th>
                        <th scope="col">Event Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, i) in eventTickets" :key="i">
                        <th scope="row">{{ i + 1 }}</th>
                        <td>{{ item.name }}</td>
                        <td>{{ item.price }}</td>
                        <td>{{ item.quantity }}</td>
                        <td>{{ item.booked ? item.booked : "" }}</td>
                        <td>
                          {{ new Date(item.salesstart).getDate() }}/{{
                            new Date(item.salesstart).getMonth() + 1
                          }}/{{ new Date(item.salesstart).getFullYear() }}
                        </td>
                        <td>
                          {{ new Date(item.salesend).getDate() }}/{{
                            new Date(item.salesend).getMonth() + 1
                          }}/{{ new Date(item.salesend).getFullYear() }}
                        </td>
                        <td>
                          <a :href="'/ticket-content/' + item.eventId">
                            Event Link</a
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <nav>
                    <ul class="pagination pagination-md">
                      <li class="page-item disabled">
                        <a class="page-link"
                          ><span aria-hidden="true">&laquo;</span></a
                        >
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">1</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">2</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">3</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link"
                          ><span aria-hidden="true">&raquo;</span></a
                        >
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="close"
              id="close"
              type="button"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!--- Main -->
    <!-- Modal -->
    <div
      class="modal fade"
      id="nonstaticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="nonstaticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl container">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="nonstaticBackdropLabel">
              <b>Ticket</b>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-12">
                <div class="card-body card-table">
                  <div class="buttons-table">
                    <button type="button">Copy</button>
                    <button type="button">CSV</button>
                    <button type="button">Excel</button>
                    <button type="button">PDF</button>
                    <button type="button">Print</button>
                  </div>
                  <div class="search-table">
                    <form>
                      <input type="text" placeholder="Search..." />
                    </form>
                  </div>
                  <!--Table-->
                  <table class="table datatable card-table-table">
                    <thead>
                      <tr>
                        <th scope="col">S/N</th>
                        <th scope="col">Event Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Ticket Name</th>
                        <th scope="col">Reference</th>
                        <th scope="col">Payment Gateway</th>
                        <th scope="col">Date Added</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, i) in ticketDetails" :key="i">
                        <th scope="row">{{ i + 1 }}</th>
                        <td>{{ item.eventId }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.phone_no }}</td>
                        <td>{{ item.quantity }}</td>
                        <td>{{ item.amount }}</td>
                        <td>{{ ticketName(item.eventsTicketId) }}</td>
                        <td>{{ item.reference }}</td>
                        <td>{{ item.payment_method }}</td>
                        <td>
                          {{ new Date(item.createdAt).getDate() }}/{{
                            new Date(item.createdAt).getMonth() + 1
                          }}/{{ new Date(item.createdAt).getFullYear() }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <nav>
                    <ul class="pagination pagination-md">
                      <li class="page-item disabled">
                        <a class="page-link"
                          ><span aria-hidden="true">&laquo;</span></a
                        >
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">1</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">2</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">3</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link"
                          ><span aria-hidden="true">&raquo;</span></a
                        >
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="close"
              id="close"
              type="button"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
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
  import EventService from "../../service/event.service";
  import moment from "moment";
  import Swal from "sweetalert2";

  export default {
    name: "Elfrique",
    components: {
      "dash-header": Header,
      "dash-footer": Footer,
      Swal,
    },
    data() {
      return {
        title: "View Event",
        content: [],
        eventTickets: [],
        ticketDetails: []
      };
    },
    computed: {
      loggedIn() {
        return this.$store.state.admin.status.loggedIn;
      },
    },
    created() {
      if (!this.loggedIn) {
        this.$router.push("/superadmin");
      }

      EventService.allEventsforAdmin().then((response) => {
        this.content = response.data.events;
      });
    },
    methods: {
      format_date(value) {
        if (value) {
          return moment(String(value)).format("MM/DD/YYYY hh:mm");
        }
      },
      viewDetails(id) {
        this.content.filter((con) => {
          if (con.id === id) {
            this.eventTickets = con.eventsTickets;
          }
        });
      },
      viewTicket(id) {
        EventService.getAllUserBookedTickets(id).then((res) => {
          this.ticketDetails = res.data.booked_tickets;
        });
      },
      ticketName(id) {
        let name;
        this.content.map((con) => {
          con.eventsTickets.filter(event => {
            if (event.id === id) {
              name = event.name
            };
          });
        });
        return name;
      },
      switchGateway(id, gateway) {
          let formData = new FormData();

        formData.append("paymentgateway", gateway);

        EventService.updateEvent(id, formData).then(
          (response) => {
            Swal.fire({
              icon: "success",
              text: `Switched to ${gateway} Payment Gateway`,
              confirmButton: 'OK'
            });
          },
          (error) => {
            console.log(error);
            this.error = error.response.data.message;
            this.loading = false;
            window.scrollTo(0, 0);
          }
        );
      },
      deleteModal(id) {
        Swal.fire({
          title: "Do you want to Delete this Event?",
          showDenyButton: true,
          confirmButtonText: "Yes",
          denyButtonText: "No",
        }).then((result) => {
          if (result.isConfirmed) {
            EventService.deleteEvent(id).then((response) => {
              Swal.fire("Event Deleted!", "", "success");
              EventService.allEventsforAdmin().then((response) => {
                this.content = response.data.events;
              })
            }).catch((err) => {
              Swal.fire(err.response.data.message, "", "error");
            })
          } else if (result.isDenied) {
            Swal.fire("Could not Delete Event", "", "info");
          }
        });
      },

      routeEdit(id) {
        this.$router.push('/superadmin/edit-event/' + id);
      }
    },
    mounted() {
      window.scrollTo(0, 0);
    },
  };
</script>
