<template>
    <title>Search For Vote | Elfrique</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Search For Vote(s)</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Voting</li>
                    <li class="breadcrumb-item active">Search For Vote</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <div class="container start-voting-div">
            <div class="row justify-content-center">
                <div class="col-lg-10 start-voting-inner-div">
                    <form @submit.prevent="getBookedTicket">
                        <div class="row">
                            <div class="col-lg-12 mt-2">
                                <label for="vote option" class="create">Select Voting Contest</label>
                                <select v-model="voteId" id="gateway" required>
                                    <option v-for="item in votes" :key="item" :value="item.id" >{{item.title}}</option>
                                </select>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <button type="submit" value="proceed" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Search <i class="bi bi-binoculars"></i></button>
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
                <h5 class="modal-title" id="staticBackdropLabel"><b>Voters Details</b></h5>
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
                                  <th scope="col">Voter's Name</th>
                                  <th scope="col">Voter's Email</th>
                                  <th scope="col">Voter's Phone</th>
                                  <th scope="col">Number of Votes</th>
                                  <th scope="col">Date Added</th>
                                  <th scope="col">Reference</th>
                                  <th scope="col">Contestant Voted</th>
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
                                  <th>{{item.voters_name}}</th>
                                  <td>{{item.voters_email}}</td>
                                  <td>{{item.voters_phone}}</td>
                                  <td>{{item.numberOfVote}}</td>
                                  <td>{{new Date(item.createdAt).getDate()}}/{{new Date(item.createdAt).getMonth() + 1}}/{{new Date(item.createdAt).getFullYear()}}</td>
                                  <td>{{item.reference}}</td>
                                  <td>{{item.contestant.fullname}}</td>
                                </tr>
                              </tbody>
                        </table>
                    </div>  
                    <div class="analyticsNote">
                        <!-- <p>Total amount : ₦12300</p> -->
                        <p>Vote(s):{{ticketBooked.length}}</p>
                        <!-- <p>Current Online Payment Gateway: PAYSTACK</p> -->
                    </div>
                    <!-- <div class="analyticsLinkBelow">
                        <a href="#">View narration so far</a>
                    </div> -->
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

    <dash-footer/>
</template>
<style scoped src="@/assets/css/dashStyle.css"></style>
<script>
    import Header from './dash-header.vue'
    import Footer from './dash-footer.vue'
import voteService from '../../service/vote.service'

    export default {
      name: "Elfrique",
      components:{
      'dash-header': Header,
      'dash-footer': Footer,
      },
      data(){
            return{
            votes: [],
            voteId: '',
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


    voteService.getAllContests().then
    (
        response => {
            this.votes = response.data.voteContests;
        }
    )
    },

    methods: {
         getBookedTicket(){
            this.loading = true;
            this.ticketBooked = [];
            voteService.getAllVoters(this.voteId).then(res => {
                this.loading = false;
                this.ticketBooked = res.data.contestVotes;
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