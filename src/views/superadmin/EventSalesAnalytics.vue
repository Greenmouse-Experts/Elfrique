<template>
    <title>Event Sales Analytics | Elfrique</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1 class="create">Sales Analytics</h1>
            <nav>
                <!-- HAMZAT UPDATE ON REGISTRATION -->
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">
                        Event
                    </li>
                    <li class="breadcrumb-item active">
                        Sales Analytics
                    </li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <!-- HAMZAT UPDATE ON REGISTRATION ENDS HERE -->

        <div class="container create-refer-div">
            <div class="row justify-content-center">
                <div class="col-lg-12 start-voting-inner-div">
                    <form @submit.prevent="getBookedTicket">
                        <div class="row">
                            <div class="col-lg-12 mt-4">
                                <label for="vote option" class="create">Select Event</label>
                                <select v-model="eventId" id="gateway" required>
                                    <option v-for="item in events" :key="item" :value="item.id" >{{item.title}}</option>
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
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl container">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel"><b>Sales-Analytics</b></h5>
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
                                  <th scope="col">EventId</th>
                                  <th scope="col">Name</th>
                                  <th scope="col">Email</th>
                                  <th scope="col">Phone</th>
                                  <th scope="col">QTY</th>
                                  <th scope="col">Amount</th>
                                  <th scope="col">Method</th>
                                  <th scope="col">Reference</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-if="loading">
                                    <td style="text-align: center; border: 0px" colspan="9">
                                <LoaderVue />
                                    </td>
                                </tr>
                                <tr v-for="(item, i) in ticketBooked" :key="item.id" v-else>
                                  <th scope="row">{{i + 1}}</th>
                                  <th>{{item.eventsTicketId}}</th>
                                  <td>{{item.name}}</td>
                                  <td>{{item.email}}</td>
                                  <td>{{item.phone_no}}</td>
                                  <td>{{item.quantity}}</td>
                                  <td>{{item.currency}} {{item.amount}}</td>
                                  <td>{{item.payment_method}}</td>
                                  <td>{{item.reference}}</td>
                                </tr>
                              </tbody>
                        </table>
                    </div>  
                    <div class="analyticsNote">
                        <!-- <p>Total amount : ₦12300</p> -->
                        <p>Tickets(s):{{ticketBooked.length}}</p>
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
    import VoteService from '../../service/vote.service'
import eventService from '../../service/event.service'
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
            events: [],
            eventId: '',
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


    eventService.getUserEvents().then
    (
        response => {
            this.events = response.data.events;
            console.log(this.events)
        }
    )
    },

    methods: {
        getBookedTicket(){
            this.loading = true;
            this.ticketBooked = [];
            eventService.getAllUserSingleBookedTicket(this.eventId).then(res => {
                this.loading = false;
                this.ticketBooked = res.data.booked_tickets
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