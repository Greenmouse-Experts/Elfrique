<template>
    <title>Form Sales Analytics | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Sales Analytics</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Forms</li>
                    <li class="breadcrumb-item"><router-link to="/superadmin/overview-forms" class="routers"><a>Overview</a></router-link></li>
                    <li class="breadcrumb-item active">Sales Analytics</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <div class="container start-voting-div">
            <div class="row justify-content-center">
                <div class="col-lg-10 start-voting-inner-div">
                    <form @submit.prevent="getBookedTicket">
                        <div class="row">
                            <div class="col-lg-12 mt-4">
                                <select name="gateway" id="gateway" v-model="formId">
                                    <option v-for="item in forms" :key="item" :value="item.id" >{{item.title}}</option>
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
                                  <th scope="col">FormId</th>
                                  <th scope="col">Name</th>
                                  <th scope="col">Description</th>
                                  <th scope="col">Amount</th>
                                  <th scope="col">Type</th>
                                  <th scope="col">Method</th>
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
                                  <th>{{item.id}}</th>
                                  <td>{{item.title}}</td>
                                  <td>{{item.description}}</td>
                                  <td>{{item.currency}} {{item.fee}}</td>
                                  <td style="text-transform: capitalize">{{item.type}}</td>
                                  <td>{{item.paymentgateway}}</td>
                                </tr>
                              </tbody>
                        </table>
                    </div>  
                    <div class="analyticsNote">
                        <!-- <p>Total amount : ₦12300</p> -->
                        <p>Form(s):{{ticketBooked.length}}</p>
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
import formService from '../../service/form.service'

    export default {
      name: "Elfrique",
      components:{
      'dash-header': Header,
      'dash-footer': Footer,
      },
     
      data(){
            return{
            forms: [],
            formId: '',
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

    formService.allFormForAdmin().then
    (
        response => {
            this.forms = response.data.form;
        }
    )
    },

    methods: {
        getBookedTicket(){
            this.loading = true;
            this.ticketBooked = [];
            formService.getSingleForm(this.formId).then(res => {
                console.log(res.data);
                this.loading = false;
                this.ticketBooked.push(res.data.form);
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