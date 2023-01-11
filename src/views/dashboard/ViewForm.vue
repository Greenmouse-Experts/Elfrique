<template>
  <title>View Form | Elfrique</title>
  <dash-header />

  <!--------Main Content--------->
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>View Form</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/organiser/dashboard" class="routers"
              ><a>Home</a></router-link
            >
          </li>
          <li class="breadcrumb-item active">Forms</li>
          <li class="breadcrumb-item active">View Form</li>
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
                    <th scope="col">Form ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Image</th>
                    <th scope="col">Type</th>
                    <th scope="col">Starting Date</th>
                    <th scope="col">Closing Date</th>
                    <!-- <th scope="col">Status</th>
                        <th scope="col">Options</th>
                        <th scope="col">Form Link</th> -->
                  </tr>
                </thead>
                <tbody v-for="con in content" :key="con.id">
                  <tr>
                    <td>{{ con.id }}</td>
                    <td>{{ con.eventform.title }}</td>
                    <td>
                      <img
                        :src="con.eventform.image"
                        alt="event-pics"
                        contain
                        height="100"
                        width="150"
                      />
                    </td>
                    <td style="text-transform: capitalize">{{ con.eventform.type }}</td>
                    <td>{{ format_date(con.eventform.startdate) }}</td>
                    <td>{{ format_date(con.eventform.closedate) }}</td>
                    <!-- <td></td>
                        <td></td>
                        <td></td> -->
                  </tr>
                </tbody>
              </table>
              <!-- <nav>
                    <ul class="pagination pagination-md">
                        <li class="page-item disabled">
                            <a class="page-link"><span aria-hidden="true">&laquo;</span></a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link"><span aria-hidden="true">&raquo;</span></a>
                        </li>
                    </ul>
                </nav> -->
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
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (!this.loggedIn) {
      this.$router.push("/login");
    }

    EventService.getForms().then((response) => {
      this.content = response.data.form;
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
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
