<template>
    <title>Trivia Sales Analytics | Elfrique</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1 class="create">
                Trivia Sales Analytics
            </h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Trivia</li>
                    <li class="breadcrumb-item active">Trivia Sales Analytics</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <div class="container start-voting-div">
            <div class="row justify-content-center">
                <div class="col-lg-12 start-voting-inner-div">
                    <form @submit.prevent="getBookedTicket">
                        <div class="row">
                            <div class="col-lg-12 mt-4">
                                <select name="gateway" v-model="triviaId" id="gateway">
                                    <option value="select vote option">Select Your Trivia Option</option>
                                    <option v-for="item in trivias" :key="item" :value="item.id" >{{item.title}}</option>
                                </select>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <button type="submit" data-bs-toggle="modal" data-bs-target="#staticBackdrop">View Analytics</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl container">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel"><b>Trivia Sales Analytics</b></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                    <div class="card-body card-table" id="TicketBooked">
                        <div class="buttons-table">
                            <button type="button">Copy</button>
                            <button type="button">CSV</button>
                            <button type="button">Excel</button>
                            <button type="button">PDF</button>
                            <button type="button">Print</button>
                        </div>
                        <div class="search-table">
                            <form>
                                <input type="text" placeholder="Search...">
                            </form>
                        </div>
                        <!--Table-->
                        <table class="table datatable card-table-table">
                            <thead>
                            <tr>
                                <th scope="col">S/N</th>
                                <th scope="col">Name</th>
                                <th scope="col">Description	</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Status</th>
                                <th scope="col">Payment gateway</th>
                                <th scope="col">Date added</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, i) in ticketBooked" :key="item.id">
                                  <th scope="row">{{i + 1}}</th>
                                  <th>{{item.title}}</th>
                                  <td>{{item.details}}</td>
                                  <td v-if="item.amount">{{item.currency}} {{item.amount}}</td>
                                  <td v-else>Free</td>
                                  <td v-if="item.status">On</td>
                                  <td v-else> Off </td>
                                  <td>{{item.paymentgateway}}</td>
                                  <td>{{new Date(item.createdAt).getDate()}}/{{new Date(item.createdAt).getMonth() + 1}}/{{new Date(item.createdAt).getFullYear()}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>  
                    <div class="analyticsNote">
                    </div>
                    <div class="analyticsLinkBelow">
                        <!-- <a href="#">View narration so far</a> -->
                    </div>
                </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>

    <dash-footer/>
</template>
<style scoped src="@/assets/css/dashStyle.css"></style>
<script>
    import Header from './dash-header.vue'
    import Footer from './dash-footer.vue'
import triviaService from '../../service/trivia.service'
  import LoaderVue from "../components/Loader.vue";

    export default {
      name: "Elfrique",
      components:{
      'dash-header': Header,
      'dash-footer': Footer,
      LoaderVue
      },
      data(){
            return{
            trivias: [],
            triviaId: '',
            ticketBooked: [],
            message: '',
            error: '',
            loading: false,
            }  
        },
        computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
            },
  },

  created() {

     if (!this.loggedIn) {
      this.$router.push('/login');
    }


    triviaService.getAllTrivias().then
    (
        response => {
            this.trivias = response.data.trivias;
        }
    )
    },

    methods: {
        getBookedTicket(){
            this.loading = true;
            this.ticketBooked = [];
            triviaService.getSingleTrivia(this.triviaId).then(res => {
                this.loading = false;
                this.ticketBooked.push(res.data.trivia)
                setTimeout(function () {
                    $("#TicketBooked").DataTable({
                    dom: "Bfrtip",
                    pageLength: 10,
                    buttons: ["copy", "csv", "excel", "pdf", "print"],
                    });
                }, 1000);
                //console.log(res.data)
            })
        }
    },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>