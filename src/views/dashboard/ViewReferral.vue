<template>
  <title>View -Referral | Elfrique</title>
  <dash-header />

  <!--------Main Content--------->
  <main id="main" class="main">
    <div class="pagetitle">
      <h1 class="create">View Referral</h1>
      <nav>
        <!-- HAMZAT UPDATE ON REGISTRATION -->
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/organiser/dashboard" class="routers"
              ><a>Home</a></router-link
            >
          </li>
          <li class="breadcrumb-item active">Registration</li>
          <li class="breadcrumb-item active">View Referral</li>
        </ol>
      </nav>
    </div>
    <!-- End Page Title -->

    <!-- HAMZAT UPDATE ON REGISTRATION ENDS HERE -->

    <div class="container create-refer-div">
      <div class="col-lg-12 col-md-12">
        <div class="card-body card-table">
          <!--Table-->
          <table
            id="dataTableRef"
            ref="vote"
            class="table datatable card-table-table"
          >
            <thead>
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">EventId</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Referral Code</th>
                <th scope="col">Edit Referral</th>
                <th scope="col">View Sales</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in content" :key="item">
                <th scope="row">{{ i + 1 }}</th>
                <th>{{ item.eventId }}</th>
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.referral_code }}</td>
                <td>
                  <button
                    @click="passModel(item)"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Edit Referral
                  </button>
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
                            <b>Update Referral</b>
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
                              <form @submit.prevent="UpdateReference">
                                <div class="row">
                                  <div class="col-md-6">
                                    <div class="connet">
                                      <label>Name</label>
                                      <div class="row">
                                        <div class="col-md-12 mb-4">
                                          <input
                                            type="text"
                                            v-model="name"
                                            class="input"
                                            required
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6">
                                    <div class="connet">
                                      <label>Email</label>
                                      <div class="row">
                                        <div class="col-md-12 mb-4">
                                          <input
                                            type="text"
                                            v-model="email"
                                            class="input"
                                            required
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-12">
                                    <div class="connet">
                                      <label>Referral Code</label>
                                      <div class="row">
                                        <div class="col-md-12 mb-4">
                                          <input
                                            type="text"
                                            v-model="referral_code"
                                            class="input"
                                            required
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-3">
                                    <div class="connet">
                                      <button type="submit">
                                        Update Referral
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            id="close"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>View Sales Details</td>
                <td>
                  <button
                    @click="deleteRef(item.id)"
                    style="background: red; color: #fff"
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- Modal -->
  </main>

  <dash-footer />
</template>
<style scoped src="@/assets/css/dashStyle.css"></style>
<script>
import Header from "./dash-header.vue";
import Footer from "./dash-footer.vue";
import EventService from "../../service/event.service";
import Swal from "sweetalert2";

export default {
  name: "Elfrique",
  components: {
    "dash-header": Header,
    "dash-footer": Footer,
  },
  data() {
    return {
      content: "",
      contestId: "",
      NumberOfCategories: "",
      message: "",
      error: "",
      loading: false,
      email: "",
      id: "",
      name: "",
      referral_code: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },

  created() {
    if (!this.loggedIn) {
      this.$router.push("/login");
    }
    this.getUserEventRef();
  },

  methods: {
    getUserEventRef() {
      EventService.getUserEventReferral().then((response) => {
        //console.log(response.data)
        this.content = response.data;
        setTimeout(function () {
          $("#dataTableRef").DataTable({
            dom: "Bfrtip",
            pageLength: 10,
            buttons: ["copy", "csv", "excel", "pdf", "print"],
          });
        }, 1000);
      });
    },
    passModel(item) {
      this.email = item.email;
      this.id = item.id;
      this.name = item.name;
      this.referral_code = item.referral_code;
    },
    deleteRef(id) {
      Swal.fire({
        title: "Are you sure you want to delete this referral?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          EventService.deleteEventReferral(id)
            .then(() => {
              this.getUserEventRef();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Referrer updated Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            })
            .catch((err) => {
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Error Occur",
                showConfirmButton: false,
                timer: 1500,
              });
            });
        }
      });
    },
    UpdateReference() {
      const dataForm = {
        id: this.id,
        name: this.name,
        email: this.email,
        referral_code: this.referral_code,
      };
      EventService.patchEventReferral(dataForm)
        .then(() => {
          this.getUserEventRef();
          this.closeModal();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Referrer updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          this.closeModal();
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Error Occur",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
    closeModal() {
      document.getElementById("close").click();
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.card-table .card-table-table .btn.btn-danger:hover {
  color: #fff !important;
  text-decoration: none !important;
}
</style>