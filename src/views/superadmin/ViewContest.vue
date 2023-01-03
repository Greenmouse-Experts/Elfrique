<template>
  <title>View Contest | Elfrique</title>
  <dash-header />

  <!--------Main Content--------->
  <main id="main" class="main">
    <div class="pagetitle">
      <h1 class="create">View Contest</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/organiser/dashboard" class="routers"
              ><a>Home</a></router-link
            >
          </li>
          <li class="breadcrumb-item active">Voting</li>
          <li class="breadcrumb-item active">View Contest</li>
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
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Image</th>
                    <th scope="col">Date Added</th>
                    <th scope="col">Type</th>
                    <th scope="col">Fee</th>
                    <th scope="col">Status</th>
                    <th scope="col">Vote Link</th>
                    <th scope="col">Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(con, index) in items" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ con.id }}</td>
                    <td>{{ con.title }}</td>
                    <td><img :src="con.image" /></td>
                    <td>{{ new Date(con.startdate).getDate() }}/{{ new Date(con.startdate).getMonth() + 1 }}/{{ new Date(con.startdate).getFullYear() }}</td>
                    <td>{{con.type}}</td>
                    <td>{{con.fee}}</td>
                    <td v-if="con.status == true">Active</td>
                    <td v-else>Inactive</td>
                    <td>
                      <a :href="'/voting-content/' + con.id"
                        >Vote Link</a
                      >
                    </td>
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
                          <li><a class="dropdown-item" href="#">Edit</a></li>
                          <li><a class="dropdown-item" href="#">Enable</a></li>
                          <li><a class="dropdown-item" href="#">Disable</a></li>
                          <li><a class="dropdown-item" href="#">Delete</a></li>
                        </ul>
                      </div>
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
            <b>View Contest Sales Analytics</b>
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
                      <th scope="col">CONTESTANT NAME</th>
                      <th scope="col">CANDIDATE NUMBER</th>
                      <th scope="col">VOTING RESULT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Hamzat Abdulazeez</td>
                      <td>1202</td>
                      <td>1</td>
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
  <dash-footer />
</template>
<style scoped src="@/assets/css/dashStyle.css"></style>
<script>
  import Header from "./dash-header.vue";
  import Footer from "./dash-footer.vue";
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
        _BASE_URL: ''
      };
    },

    methods: {
      getContest() {
        voteService.getallUserContest().then((res) => {
          this.items = res.data.voteContests;
          console.log(this.items);
        });
      },
    },

    mounted() {
      window.scrollTo(0, 0);
      this.getContest();
      
      this._BASE_URL = window.location.protocol + '//' + window.location.host;
    },
  };
</script>
