<template>
  <title>View Contests | Elfrique</title>
  <dash-header />

  <!--------Main Content--------->
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>View Contests</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/organiser/dashboard" class="routers"
              ><a>Home</a></router-link
            >
          </li>
          <li class="breadcrumb-item active">Voting</li>
          <li class="breadcrumb-item active">View Contests</li>
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
              <table class="table datatable card-table-table" id="getContest">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Image</th>
                    <th scope="col">Type</th>
                    <th scope="col">Fee</th>
                    <th scope="col">Status</th>
                    <th scope="col">Options</th>
                    <th scope="col">Vote Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in items" :key="item">
                    <th scope="row">{{ i + 1 }}</th>
                    <td>{{ item.id }}</td>
                    <td>{{ item.title }}</td>
                    <td><img :src="item.image" /></td>
                    <td style="text-transform: capitalize">{{ item.type }}</td>
                    <td v-if="item.type == 'free'">0</td>
                    <td v-else>{{ item.fee }}</td>
                    <td v-if="item.status == true">Active</td>
                    <td v-else>Inactive</td>
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
                              type="button"
                              class="dropdown-item"
                              @click="edit(item.id)"
                              >Edit</a
                            >
                          </li>
                          <li>
                            <a
                              type="button"
                              class="dropdown-item"
                              @click="enable(item.id)"
                              >Enable</a
                            >
                          </li>
                          <li>
                            <a
                              type="button"
                              class="dropdown-item"
                              @click="disable(item.id)"
                              >Disable</a
                            >
                          </li>
                          <li>
                            <a
                              type="button"
                              class="dropdown-item"
                              @click="deleteItem(item.id)"
                              >Delete</a
                            >
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td>
                      <a :href="baseUrl + 'voting-content/' + item.id"
                        >Vote Link</a
                      >
                    </td>
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
import { _BASE_URL } from "../../configs";
import voteService from "../../service/vote.service";
export default {
  name: "Elfrique",
  components: {
    "dash-header": Header,
    "dash-footer": Footer,
  },
  data() {
    return {
      items: [],
      baseUrl: _BASE_URL,
    };
  },
  created() {
    this.getContest();
  },
  methods: {
    getContest() {
      voteService.getallUserContest().then((res) => {
        this.items = res.data.voteContests;
        setTimeout(() => {
          $("#getContest").DataTable({
            dom: "Bfrtip",
            pageLength: 10,
            buttons: ["copy", "csv", "excel", "pdf", "print"],
          });
        }, 1000);
      });
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>