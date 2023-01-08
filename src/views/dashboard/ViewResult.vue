<template>
  <title>View Trivia Result | Elfrique</title>
  <dash-header />

  <!--------Main Content--------->
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>View Result</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/organiser/dashboard" class="routers"
              ><a>Home</a></router-link
            >
          </li>
          <li class="breadcrumb-item active">Trivia</li>
          <li class="breadcrumb-item active">View Result</li>
        </ol>
      </nav>
    </div>
    <!-- End Page Title -->

    <div class="container start-voting-div">
      <div class="row justify-content-center">
        <div class="col-lg-11 start-voting-inner-div">
          <form @submit.prevent="getTrivia">
            <div class="row">
              <div class="col-lg-12 mt-2">
                <label for="number of contestants">Trivia Option</label>
                <select v-model="triviaId" id="gateway" required>
                  <option v-for="item in trivias" :key="item" :value="item.id">
                    {{ item.title }}
                  </option>
                </select>
              </div>
              <div class="col-lg-12 mt-4">
                <button type="submit" data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop" value="proceed">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>



        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl container">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel"><b>Trivia Result</b></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                    <div class="card-body card-table">
                        <!--Table-->
                        <table class="table datatable card-table-table" id="TicketBooked">
                            <thead>
                                <tr>
                                  <th scope="col">S/N</th>
                                  <th scope="col">Name</th>
                                  <th scope="col">Email</th>
                                  <th scope="col">Phone</th>
                                  <th scope="col">City</th>
                                  <th scope="col">Score</th>
                                  <th scope="col">Date</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-if="loading">
                                    <td style="text-align: center; border: 0px" colspan="9">
                                <!--<LoaderVue />-->
                                    </td>
                                </tr>
                                <tr v-for="(item, i) in ticketBooked" :key="item.id" v-else>
                                  <th scope="row">{{i + 1}}</th>
                                  <th>{{item.name}}</th>
                                  <td>{{item.email}}</td>
                                  <td>{{item.phonenumber}}</td>
                                  <td>{{item.city}}</td>
                                  <td>{{item.score}}</td>
                                  <td>{{new Date(item.timeplayed).getDate()}}/{{new Date(item.timeplayed).getMonth() + 1}}/{{new Date(item.timeplayed).getFullYear()}}</td>
                                </tr>
                              </tbody>
                        </table>
                    </div>  
                </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" data-bs-dismiss="modal" @click="ticketBooked = []">Close</button>
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
  import triviaService from "../../service/trivia.service";

  export default {
    name: "Elfrique",
    components: {
      "dash-header": Header,
      "dash-footer": Footer,
    },

    data() {
      return {
        trivias: [],
        triviaId: "",
        ticketBooked: [],
        message: "",
        error: "",
        loading: false,
        display: false,
        triviaContent: {
          title: "",
          details: "",
          instruction: "",
          duration: "",
          type: "",
          numberoftimes: "",
          amount: 0,
          method: "paystack",
        },
        file: "",
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

      triviaService.getAllTrivias().then((response) => {
        this.trivias = response.data.trivias;
      });
    },

    methods: {
        getTrivia() {
            triviaService.getTriviaResult(this.triviaId).then((response) => {
                this.ticketBooked.push(response.data.player);

                console.log(this.ticketBooked);
            });
        }
    },

    mounted() {
      window.scrollTo(0, 0);
    },
  };
</script>
