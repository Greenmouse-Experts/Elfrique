<template>
  <title>Personal Form | Elfrique</title>
  <dash-header />

  <!--------Main Content--------->
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Personal Form</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/organiser/dashboard" class="routers"
              ><a>Home</a></router-link
            >
          </li>
          <li class="breadcrumb-item active">Forms</li>
          <li class="breadcrumb-item active">Personal Form</li>
        </ol>
      </nav>
    </div>
    <!-- End Page Title -->

    <section class="section">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
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
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Form Field Name</th>
                    <th scope="col">Form Field Value</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">Date Added</th>
                    <!----<th scope="col">Edit Filled Form</th>-->
                    <th scope="col">View Filled Form</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(contents, i) in content" :key="i">
                    <th scope="row">{{ i + 1 }}</th>
                    <td>{{ contents.title }}</td>
                    <td>
                      <div v-for="(schema, k) in contents.formSchemas" :key="k">
                        <span
                          v-for="(records, j) in schema.formRecords"
                          :key="j"
                        >
                          <p>{{ JSON.parse(records.userData)[0].name }}</p>
                        </span>
                      </div>
                    </td>
                    <td>
                      <div v-for="(schema, k) in contents.formSchemas" :key="k">
                        <span
                          v-for="(records, j) in schema.formRecords"
                          :key="j"
                        >
                          <p>
                            {{
                              JSON.parse(
                                records.userData
                              )[0].userData.toString()
                            }}
                          </p>
                        </span>
                      </div>
                    </td>
                    <td>
                      {{ contents.fee === "" ? "Free" : `NGN ${contents.fee}` }}
                    </td>
                    <td>
                      {{
                        new Date().getTime() >
                        new Date(contents.closedate).getTime()
                          ? "Closed"
                          : "Active"
                      }}
                    </td>
                    <td>
                      {{ format_date(contents.createdAt) }}
                    </td>
                    <td v-if="contents.formSchemas.length > 0">
                      <router-link
                        :to="'/event-form-content/' + contents.formSchemas[0].id"
                        class="routers"
                        ><a class="btn-view-contest">View Form</a></router-link
                      >
                    </td>
                    <td v-else>
                      N/A
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
        return this.$store.state.auth.status.loggedIn;
      },
    },
    created() {
      if (!this.loggedIn) {
        this.$router.push("/login");
      }

      EventService.getFormsUser().then((response) => {
        this.content = response.data.form;
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
