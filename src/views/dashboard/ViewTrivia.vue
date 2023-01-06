<template>
  <title>View Trivia | Elfrique</title>
  <dash-header />

  <!--------Main Content--------->
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>View Trivia</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/organiser/dashboard" class="routers"
              ><a>Home</a></router-link
            >
          </li>
          <li class="breadcrumb-item active">Trivia</li>
          <li class="breadcrumb-item active">View Trivia</li>
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
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Detail</th>
                    <th scope="col">Instruction</th>
                    <th scope="col">Image</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Status</th>
                    <th scope="col">Options</th>
                    <th scope="col">Link</th>
                  </tr>
                </thead>
                <tbody v-for="(con, index) in content" :key="con.id">
                  <tr>
                    <th scope="row">{{ index }}</th>
                    <td>{{ con.id }}</td>
                    <td>{{ con.title }}</td>
                    <td>{{ con.details }}</td>
                    <td>{{ con.instruction }}</td>
                    <td>
                      <img
                        :src="con.image"
                        alt="event-pics"
                        contain
                        height="100"
                        width="150"
                      />
                    </td>
                    <td>{{ con.duration }} minutes</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
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
import TriviaService from "../../service/trivia.service";
import moment from "moment";
export default {
  name: "Elfrique",
  components: {
    "dash-header": Header,
    "dash-footer": Footer,
  },
  data() {
    return {
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

    TriviaService.getAllTrivias().then((response) => {
      this.content = response.data.trivias;
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