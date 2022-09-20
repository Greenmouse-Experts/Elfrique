<template>
    <title>View All Advert| Elfrique</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1 class="create">
                View All Advert
            </h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Vendor</li>
                    <li class="breadcrumb-item active">Advert Listing</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <section class="section">
            <div class="row">
                <div class="col-lg-12">
                <div class="card">
                    <div class="card-body card-table">
                        <!--Table-->
                        <table class="table datatable card-table-table" id="allAdvert">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Advert Title</th>
                                <th scope="col">Image</th>
                                <th scope="col">Advert Link</th>
                                <th scope="col">Date Added</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody v-for="(con,idx) in content" :key="con.id">
                            <tr>
                                <th scope="row">{{idx + 1}}</th>
                                <td>{{con.title}}</td>
                                <td><img :src="con.img_url"></td>
                                <td><a :href="con.ref_link" target="_blank">{{con.ref_link}}</a></td>
                                <td>{{format_date(con.createdAt)}}</td>
                                <td>
                                    <button class="btn btn-primary btn-sm mx-1 text-dark m-1">Edit</button>
                                    <button class="btn btn-danger btn-sm mx-1 text-dark m-1">Delete</button>
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
    import VendorService from '../../service/vendor.service'
    import moment from 'moment'
    export default {
      name: "Elfrique",
      components:{
      'dash-header': Header,
      'dash-footer': Footer,
      },
      data(){
        return{
          title: 'View Event',
          content: '',
          }
        },
      computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
            },
        },
        created(){
          if (!this.loggedIn) {
                this.$router.push('/login');
    }

            VendorService.getUserAds().then(response => {
                this.content = response.data.data;
                //console.log(this.content);
                setTimeout(function () {
                    $("#allAdvert").DataTable({
                    dom: "Bfrtip",
                    pageLength: 10,
                    buttons: ["copy", "csv", "excel", "pdf", "print"],
                    });
                }, 1000);
            },
            error => {
            this.message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
            this.successful = false;
            console.log(this.message);
            
           /*  this.$store.dispatch('auth/logout');
            this.$router.push('/login'); */
      }
            )
        },
        methods: { 
            format_date(value){
                if (value) {
                     return moment(String(value)).format('MM/DD/YYYY hh:mm')
          }
    }
      },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>