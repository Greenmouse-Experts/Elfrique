<template>
  <title>View Event | Elfrique</title>
  <dash-header />

  <!--------Main Content--------->
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>View Event</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/organiser/dashboard" class="routers"
              ><a>Home</a></router-link
            >
          </li>
          <li class="breadcrumb-item active">Registration</li>
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
              <!--Table-->
              <table class="table datatable card-table-table" id="example">
                <thead>
                  <tr>
                    <th scope="col">Event ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Image</th>
                    <th scope="col">Organiser</th>
                    <th scope="col">Starting Date</th>
                    <th scope="col">Closing Date</th>
                    <th scope="col">Options</th>
                    <th scope="col">Event Link</th>
                  </tr>
                </thead>
                <tbody v-for="con in content" :key="con.id">
                  <tr>
                    <td>{{ con.id }}</td>
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
                    <td>{{ con.organisation }}</td>
                    <td>{{ format_date(con.startdate) }}</td>
                    <td>{{ format_date(con.enddate) }}</td>
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
                            <a
                              class="dropdown-item"
                              href="#"
                              @click="routeEdit(con.id)"
                              >Edit</a
                            >
                          </li>
                          <li><a class="dropdown-item" href="#" @click="deleteModal(con.id)">Delete</a></li>
                          <!----<li>
                            <a
                              class="dropdown-item"
                              href="#"
                              @click="showModal = true"
                              >Request Payout</a
                            >
                          </li> -->
                        </ul>
                      </div>
                    </td>
                    <td>
                      <a
                        :href="
                          'http://sandbox.elfrique.com/ticket-content/' + con.id
                        "
                      >
                        {{
                          "http://sandbox.elfrique.com/ticket-content/" + con.id
                        }}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div>
      <vue-final-modal
        v-model="showModal"
        classes="modal-container"
        content-class="modal-content"
      >
        <button class="modal__close" @click="showModal = false">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </button>

        <div class="modal__content">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Request Payout?
                </h5>
              </div>
              <div>
                <h4>You are about to request payout for this event</h4>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-light"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </vue-final-modal>
    </div>
  </main>

  <dash-footer />
</template>
<style scoped src="@/assets/css/dashStyle.css"></style>
<script>
  import Header from "./dash-header.vue";
  import Footer from "./dash-footer.vue";
  import { $vfm, VueFinalModal, ModalsContainer } from "vue-final-modal";
  import EventService from "../../service/event.service";
  import PayoutService from "../../service/payout.service";
  import Swal from "sweetalert2";

  import moment from "moment";
  export default {
    name: "Elfrique",
    components: {
      "dash-header": Header,
      "dash-footer": Footer,
      VueFinalModal,
      ModalsContainer,
      Swal,
    },
    data() {
      return {
        title: "View Event",
        content: "",
        showModal: false,
      };
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      },
      currentUrl() {
        return window.location.href;
      },
      /* resultQuery(){
      return this.content.filter((row, index) => {
            let start = (this.current_page-1)*this.size;
            let end = this.current_page*this.size;
            if(index >= start && index < end) return true;
          });
    } */
    },
    created() {
      if (!this.loggedIn) {
        this.$router.push("/login");
      }

      EventService.getUserEvents().then((response) => {
        this.content = response.data.events;
        setTimeout(function () {
          $("#example").DataTable({
            dom: "Bfrtip",
            pageLength: 10,
            buttons: ["copy", "csv", "excel", "pdf", "print"],
          });
        }, 1000);
      });
    },
    methods: {
      format_date(value) {
        if (value) {
          return moment(String(value)).format("MM/DD/YYYY hh:mm");
        }
      },
      routeEdit(id) {
        this.$router.push("/organiser/edit-event/" + id);
      },
      deleteModal(id) {
        Swal.fire({
          title: "Do you want to Delete this Event?",
          showDenyButton: true,
          confirmButtonText: "Yes",
          denyButtonText: "No",
        }).then((result) => {
          if (result.isConfirmed) {
            EventService.deleteEvent(id)
              .then((response) => {
                Swal.fire("Event Deleted!", "", "success");
                EventService.allEventsforAdmin().then((response) => {
                  this.content = response.data.events;
                });
              })
              .catch((err) => {
                Swal.fire(err.response.data.message, "", "error");
              });
          } else if (result.isDenied) {
            Swal.fire("Could not Delete Event", "", "info");
          }
        });
      },
    },
    mounted() {
      window.scrollTo(0, 0);
    },
  };
</script>
<style scoped>
  ::v-deep .modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ::v-deep .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    max-height: 90%;
    margin: 0 1rem;
    padding: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.25rem;
    background: #fff;
    width: 500px;
    height: 500px;
  }
  .modal__title {
    margin: 0 2rem 0 0;
    font-size: 1.5rem;
    font-weight: 700;
  }
  /* .modal__content {
  flex-grow: 1;
  overflow-y: auto;
} */
  .modal__action {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    padding: 1rem 0 0;
  }
  .modal__close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
</style>

<style scoped>
  .dark-mode div::v-deep .modal-content {
    border-color: #2d3748;
    background-color: #1a202c;
  }
</style>
