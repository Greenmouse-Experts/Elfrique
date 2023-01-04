<template>
    <title>e-Visa | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>e-Visa</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Travel & Tours</li>
                    <li class="breadcrumb-item active">e-Visa</li>
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
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Date Added</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                   <tbody v-for="(con, idx ) in content" :key="con.id">
                    <tr>
                        <th scope="row">{{idx + 1}}</th>
                        <td>{{con.email}}</td>
                        <td>{{con.phone_number}}</td>
                        <td>{{format_date(con.createdAt)}}</td>
                        <td>
                            <button class="btn btn-primary btn-sm mx-1 text-dark m-1" data-bs-toggle="modal" data-bs-target="#viewDetailModal" @click="getdetail(con)">View Details</button>
                            <!-- <button class="btn btn-warning btn-sm mx-1 text-dark m-1">Suspend</button> -->
                            <button type="button" class="btn btn-danger btn-sm mx-1 text-dark m-1" data-bs-toggle="modal" data-bs-target="#deleteModal"  @click="getdetail(con)">Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <nav>
                    <ul class="pagination pagination-md">
                        <li class="page-item disabled">
                            <a class="page-link"><span aria-hidden="true">&laquo;</span></a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link"><span aria-hidden="true">&raquo;</span></a>
                        </li>
                    </ul>
                </nav>
            </div>  
          </div>
        </div>
      </div>
    </section>
    <!-- Modal -->
    <div class="modal fade" id="viewDetailModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <table class="tableModal">
                        <tr>
                            <td>Full Name:</td>
                            <td>{{detail.fullname}}</td>
                        </tr>
                        <tr>
                            <td>Depart Date:</td>
                            <td>{{format_date(detail.dapart_date)}}</td>
                        </tr>
                        <tr>
                            <td>Return Date:</td>
                            <td>{{format_date(detail.return_date)}}</td>
                        </tr>
                        <tr>
                            <td>Visa Type:</td>
                            <td>{{detail.visa_type}}</td>
                        </tr>
                        <tr>
                            <td>Number of Travelers:</td>
                            <td>{{detail.numberOfTravelers}}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{{detail.email}}</td>
                        </tr>
                        <tr>
                            <td>Phone Number:</td>
                            <td>{{detail.phone_number}}</td>
                        </tr>
                        <tr>
                            <td>Additional Info:</td>
                            <td>{{detail.additional_info}}</td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="deleteModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Delete User</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div v-if="!deleted" class="modal-body deletemodalbox">
                    <h4>Are you sure you want to delete?</h4>
                </div>
                <div v-if="deleted" class="modal-body deletemodalbox">
                    <h4>Applicant has been deleted</h4>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button v-if="!deleted" type="button" class="btn btn-danger" @click="deleteEvisa(detail.id)">Delete<span v-show="loading" class="spinner-border spinner-border-sm"></span></button>
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
    import EvisaService from '../../service/evisa.service'
    import moment from 'moment'
    export default {
      name: "Elfrique",
      components:{
      'dash-header': Header,
      'dash-footer': Footer,
      },

      data(){
        return{
          title: 'View Evisa',
          content: '',
          detail:{},
          message: '',
          deleted: false,
          loading: false,
          }
        },
        computed: {
        loggedIn() {
            return this.$store.state.admin.status.loggedIn;
            },
        },
        created(){
          if (!this.loggedIn) {
                this.$router.push('/superadmin');
    }

            EvisaService.getEvisas().then(response => {
                this.content = response.data.evisa;
            }
            )
        },
        methods: { 
            format_date(value){
                if (value) {
                     return moment(String(value)).format('MM/DD/YYYY hh:mm')
                    }
            },

            getdetail(con){
                this.detail = con
                this.deleted = false
            },

            deleteEvisa(id){
                this.loading = true
                EvisaService.deleteEvisa(id).then(response => {
                    console.log(response);
                    this.deleted = true
                    this.loading = false
                    this.content = this.content.filter( con => con.id != id)
                }
                )
            },
            
      },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>