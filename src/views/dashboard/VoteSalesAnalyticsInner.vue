<template>
    <title>Vote Sales Analytics | Elfrique</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1 class="create">Sales Analytics</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Voting</li>
                    <li class="breadcrumb-item active">Sales Analytics</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

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
                                <input type="text" placeholder="Search...">
                            </form>
                        </div>
                        <!--Table-->
                        <table class="table datatable card-table-table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Contestant Name</th>
                                <th scope="col">Candidate Number</th>
                                <th scope="col">Voting Result</th>
                            </tr>
                            </thead>
                            <tbody v-for="(con,index) in content.contestants" :key="con.id">
                            <tr>
                                <th scope="row">{{index + 1}}</th>
                                <td>{{con.fullname}}</td>
                                <td>{{con.contestantnumber}}</td>
                                <td>{{con.voteCount}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>  
                    <div class="analyticsNote">
                        <p>Total Valid Votes: {{totalvote}}</p>
                        <p>Total Amount: ₦{{totalvote * content.fee}}</p>
                        <!-- <p>Current Online Payment Gateway: PAYSTACK</p> -->
                    </div>
                    <div class="analyticsLinkBelow">
                        <button style="border:none; Background:#fff !important; margin-left: 20px;" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                            View voters 
                        </button>
                        <!-- <a href="#">View unpaid cash payment</a> -->
                        <button style="border:none; Background:#fff !important; margin-left: 20px;" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                            View narration so far
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </section>
        
    </main>

    <!-- Modal  1-->
    <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl container">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel"><b>Valid Votes For Vote Contest</b></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
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
                                <input type="text" placeholder="Search...">
                            </form>
                        </div>
                        <!--Table-->
                        <table class="table datatable card-table-table">
                            <thead>
                            <tr>
                                <th scope="col">VOTERS NAME</th>
                                <th scope="col">VOTERS EMAIL</th>
                                <th scope="col">VOTERS PHONE NUMBER</th>
                                <th scope="col">Number OF VOTES</th>
                                <th scope="col">AMOUNT</th>
                                <th scope="col">Channel	</th>
                                <th scope="col">Payment Method</th>
                                <th scope="col">Contestant</th>
                                <th scope="col">Contestant Number</th>
                                <th scope="col">Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>  
                    <div class="analyticsNote">
                        <p>Total Valid Number of Votes : 71</p>
                        <p>Amount (Payment gateway charges not subtracted) : ₦5590</p>
                        <!-- <p>Current Online Payment Gateway: PAYSTACK</p> -->
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

    <!-- Modal  2-->
    <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl container">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel"><b>Valid Votes For Vote Contest</b></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
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
                                <input type="text" placeholder="Search...">
                            </form>
                        </div>
                        <!--Table-->
                        <table class="table datatable card-table-table">
                            <thead>
                            <tr>
                                <th scope="col">VOTERS NAME</th>
                                <th scope="col">CONTESTANT</th>
                                <th scope="col">CHANNEL</th>
                                <th scope="col">PAYMENT METHOD</th>
                                <th scope="col">AMOUNT</th>
                                <th scope="col">Channel	</th>
                                <th scope="col">Payment Method</th>
                                <th scope="col">1.5% PAYMENT DUE TO PAYMENT GATEWAY FOR LOCAL TRANSACTIONS</th>
                                <th scope="col">3.5% PAYMENT DUE TO ELFRIQUE THIRD PARTY FOR WEBSITE LOCAL </th>
                                <th scope="col">Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>  
                    <div class="analyticsNote">
                        <h4 class="text-center">
                            NARRATION
                        </h4>
                        <p>Valid Number of Votes : 71</p>
                        <p>Monetary Value on Votes received : ₦5590</p>
                        <p>Payments due to Payment Gateway on successful online payments : 69.15</p>
                        <p>Payments due to Event Organizer : 4587.15</p>
                        <!-- <p>Current Online Payment Gateway: PAYSTACK</p> -->
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
    import VoteService from '../../service/vote.service'
    export default {
      name: "Elfrique",
      components:{
      'dash-header': Header,
      'dash-footer': Footer,
      },

       data(){
            return{
            content: '',
            content2: '',
            message: '',
            error: '',
            loading: false,
            totalvote: '',
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

    VoteService.getSingleContest(this.$route.params.id).then
    (
        response => {
            this.content = response.data.voteContest;
            console.log(this.content);
            this.totalvote = this.content.contestants.reduce((acc, cur) => {
                return acc + cur.voteCount;
            }, 0)
        }
    )
    },

      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>