<template>
  <title>View Proposals Project| Elfrique</title>
  <dash-header />

  <!--------Main Content--------->
  <main id="main" class="main">
    <div class="pagetitle">
      <h1 class="create">View Proposals</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/organiser/dashboard" class="routers"
              ><a>Home</a></router-link
            >
          </li>
          <li class="breadcrumb-item active">Vendor</li>
          <li class="breadcrumb-item active">
            <router-link to="/organiser/view-vendor" class="routers"
              >View Vendor</router-link
            >
          </li>
          <li class="breadcrumb-item active">View Proposals</li>
        </ol>
      </nav>
    </div>
    <!-- End Page Title -->

    <div class="container create-refer-div">
      <div class="row justify-content-center">
        <div class="col-lg-12 start-voting-inner-div">
          <form @submit.prevent="getAllProposal">
            <div class="row">
              <div class="col-lg-12 mt-4">
                <label for="vote option"
                  >Select a job service before viewing the bidders</label
                >
                <select id="gateway" v-model="jobId" required>
                  <option v-for="con in content" :key="con.id" :value="con.id">
                    {{ con.job_type }}
                  </option>
                </select>
              </div>
              <div class="col-lg-12 mt-4">
                <button
                  type="submit"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

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
              <b>Create referral</b>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <section class="section">
              <div class="row">
                <div class="col-lg-12">
                  <div class="card">
                    <div class="card-body card-table">
                      <!--Table-->
                      <table
                        class="table datatable card-table-table"
                        id="biddersTable"
                      >
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Surname</th>
                            <th scope="col">Email</th>
                            <th scope="col">Telephone</th>
                            <th scope="col">Vendor</th>
                            <th scope="col">Bid Amount <!-- (&#8358;) --></th>
                            <th scope="col">More Info</th>
                            <th scope="col">Date Submitted</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, i) in bidders" :key="item">
                            <th scope="row">{{ i + 1 }}</th>
                            <td>{{ item.firstname }}</td>
                            <td>{{ item.surname }}</td>
                            <td>{{ item.email }}</td>
                            <td>{{ item.phone }}</td>
                            <td>
                              <a href="#">{{ item.eventjob.job_type }}</a>
                            </td>
                            <td>{{ item.price }}</td>
                            <td>{{ item.description }}</td>
                            <td>{{ getDate(item.createdAt) }}</td>
                            <td>
                              <!-- <button class="btn btn-primary btn-sm mx-1 text-dark m-1">Contact</button> -->
                              <button
                                @click="deleteProposal(item.id)"
                                class="btn btn-danger btn-sm mx-1 text-dark m-1"
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
              </div>
            </section>
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
import vendorService from "../../service/vendor.service";
import moment from "moment";
import Swal from "sweetalert2";
export default {
  name: "Elfrique",
  components: {
    "dash-header": Header,
    "dash-footer": Footer,
  },
  data() {
    return {
      content: [],
      jobId: "",
      bidders: [],
    };
  },
  created() {
    vendorService.getAllSellerJob().then((response) => {
      this.content = response.data;
    });
  },
  methods: {
    getAllProposal() {
      vendorService.getAllProposal(this.jobId).then((res) => {
        this.bidders = res.data;
        setTimeout(function () {
          $("#biddersTable").DataTable({
            dom: "Bfrtip",
            pageLength: 10,
            buttons: ["copy", "csv", "excel", "pdf", "print"],
          });
        }, 1000);
      });
    },
    deleteProposal(id) {
      Swal.fire({
        title: "Are you sure you want to delete this proposal?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          vendorService
            .deleteProposal(id)
            .then(() => {
              this.getAllProposal();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Proposal Deleted Successfully",
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
    getDate(value) {
      return moment(value).format("LLL");
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
