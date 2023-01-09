<template>
    <title>View Vendor Service | Elfrique</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1 class="create">
                View Vendor Service
            </h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Vendor</li>
                    <li class="breadcrumb-item active">View Vendor Service</li>
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
                        <table class="table datatable card-table-table" id="vendorJob">
                            <thead>
                            <tr>
                                <th scope="col">S/N</th>
                                <th scope="col">Event Name</th>
                                <th scope="col">Job Title</th>
                                <th scope="col">Budget</th>
                                <th scope="col">Image</th> 
                                <th scope="col">Description</th>
                                <th scope="col">Location</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(item, i) in content" :key="item">
                                <th scope="row">
                                    {{i+1}}
                                </th>
                                <td>
                                    {{item.event.title}}
                                </td>
                                <td>
                                    {{item.job_type}}
                                </td>
                                <td>
                                    {{item.budget}}
                                </td>
                                <td>
                                    <img
                                        :src="item.img_url"
                                        alt="event-pics"
                                        contain
                                        height="100"
                                        width="150"
                                    />
                                </td>
                                <td>
                                    {{item.job_description}}
                                </td>
                                <td>
                                    {{item.location}}
                                </td>
                                <td>
                                    <button
                              @click="modalDelete(item.id, item.eventId)" class="btn btn-danger btn-sm mx-1 text-white m-1">
                                        Delete
                                    </button>
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

    <dash-footer/>
    
</template>
<style scoped src="@/assets/css/dashStyle.css"></style>
<script>

    import Header from './dash-header.vue'
    import Footer from './dash-footer.vue'
    import EventService from '../../service/event.service'
import vendorService from '../../service/vendor.service.js'
import Swal from "sweetalert2";

    export default {
      name: "Elfrique",
      components:{
      'dash-header': Header,
          'dash-footer': Footer,
      Swal
      },
      data(){
            return{
            content: [],
            eventId: '',
            message: '',
            error: '',
            file: '',
            loading: false,
            successful: false,
            job: {
                description: '',
                title: '',
                price: '',
            }
            
    
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

    vendorService.getAllJobs().then
    (
        response => {
            this.content = response.data;
            console.log(this.content);
            setTimeout(function () {
                    $("#vendorJob").DataTable({
                    dom: "Bfrtip",
                    pageLength: 10,
                    buttons: ["copy", "csv", "excel", "pdf", "print"],
                    });
                }, 1000);
        }
    )


    },

    methods:{
      modalDelete(id, eventId) {
        Swal.fire({
          title: "Do you want to Delete this Vendor Service?",
          showDenyButton: true,
          confirmButtonText: "Yes",
          denyButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                vendorService.deleteJob(eventId, id).then((res) => {
                Swal.fire(res.data.message, "success");
                }).catch((err) => {
                Swal.fire(err.response.data.message, "error");
            })
          } else if (result.isDenied) {
            Swal.fire("Could not Delete Contest", "", "info");
          }
        });
      },
     },
      mounted(){
        window.scrollTo(0,0)

        let externalScriptQuill = document.createElement('script')
        let externalScriptRich = document.createElement('script')

        externalScriptQuill.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/scripts/main/quill.min.js')
        externalScriptRich.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/scripts/main/rich-text.js')

        document.head.appendChild(externalScriptQuill)
        document.head.appendChild(externalScriptRich)
      }
    }
</script>