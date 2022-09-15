<template>
  <title>View Forms | Elfrique - Super Admin</title>
  <dash-header />

  <!--------Main Content--------->
  <main id="main" class="main">
    <div class="pagetitle">
      <h1 class="create">View Forms</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/superadmin/dashboard" class="routers"
              ><a>Home</a></router-link
            >
          </li>
          <li class="breadcrumb-item active">Forms</li>
          <li class="breadcrumb-item">
            <router-link to="/superadmin/overview-forms" class="routers"
              ><a>Overview</a></router-link
            >
          </li>
          <li class="breadcrumb-item active">View Forms</li>
        </ol>
      </nav>
    </div>
    <!-- End Page Title -->

    <section class="section">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body card-table">
              <!-- <div class="buttons-table">
                    <button type="button">Copy</button>
                    <button type="button">CSV</button>
                    <button type="button">Excel</button>
                    <button type="button">PDF</button>
                    <button type="button">Print</button>
                </div> -->
              <!-- <div class="search-table">
                    <form>
                        <input type="text" placeholder="Search...">
                    </form>
                </div> -->
              <!--Table-->
              <p class="text-muted text-center p-text">
                <b class="create">
                  Forms Uploaded
                </b>
              </p>
              <table class="table datatable card-table-table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Organisers</th>
                    <th scope="col">Form ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Image</th>
                    <th scope="col">Date Added</th>
                    <th scope="col">Starting Date</th>
                    <th scope="col">Closing Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Options</th>
                    <th scope="col">Form Link</th>
                  </tr>
                </thead>
                <tbody v-for="(con, idx) in content" :key="con.id">
                  <tr>
                    <td>{{ idx + 1 }}</td>
                    <!-- <td>{{con.organisation}}</td> -->
                    <td>
                      {{ con.adminuser.firstname }} {{ con.adminuser.lastname }}
                    </td>
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
                    <td>{{ format_date(con.createdAt) }}</td>
                    <td>{{ format_date(con.startdate) }}</td>
                    <td>{{ format_date(con.closedate) }}</td>
                    <td>On</td>
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
                              >Off Email Notification</a
                            >
                          </li>
                          <li>
                            <a class="dropdown-item" href="#"
                              >View Form Response</a
                            >
                          </li>
                          <li>
                            <a class="dropdown-item" href="#"
                              >Switch To Interswitch</a
                            >
                          </li>
                          <li>
                            <a class="dropdown-item" href="#"
                              >Switch To Paystack</a
                            >
                          </li>
                          <li>
                            <a class="dropdown-item" href="#"
                              >Switch To Flutterwave</a
                            >
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">Open Form</a>
                          </li>
                          <li><a class="dropdown-item" href="#">Edit</a></li>
                          <li>
                            <a class="dropdown-item" href="#">Payout Setting</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#"
                              >Disable Form View</a
                            >
                          </li>
                          <li><a class="dropdown-item" href="#">Delete</a></li>
                        </ul>
                      </div>
                    </td>
                    <td>
                      <a :href="'/event-form-content/' + con.id">Form Link</a>
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
  </main>

  <dash-footer />
</template>
<style scoped src="@/assets/css/dashStyle.css"></style>
<script>
import Header from "./dash-header.vue";
import Footer from "./dash-footer.vue";
import EventService from "../../service/form.service";
import moment from "moment";
export default {
  name: "Elfrique",
  components: {
    "dash-header": Header,
    "dash-footer": Footer,
  },
  data() {
    return {
      title: "View Event",
      content: "",
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

    EventService.allFormForAdmin().then((response) => {
      this.content = response.data.form;
      console.log(this.content);
    });
  },
  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY hh:mm");
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
