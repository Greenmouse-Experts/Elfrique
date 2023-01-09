<template>
    <title>View Organiser | Elfrique - Super Admin</title>

  <template v-if="isLoading">
    <LoaderVue loaderImage center /> 
  </template>

  <template v-else>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>View Organiser</h1>
            <nav>
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                <li class="breadcrumb-item active">General</li>
                <li class="breadcrumb-item active"><router-link to="/superadmin/overview-general" class="routers"><a>Overview</a></router-link></li>
                <li class="breadcrumb-item active">View Organisers</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <section class="section">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body card-table">
                <div class="buttons-table">
                    <!-- <button type="button">Copy</button>
                    <button type="button">CSV</button>
                    <button type="button">Excel</button>
                    <button type="button">PDF</button>
                    <button type="button">Print</button> -->
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
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Tel Number</th>
                        <th scope="col">Date Joined</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr  v-for="(con,index) in resultQUery" :key="con.id">
                        <th scope="row">{{index + 1}}</th>
                        <td>{{con.firstname}} {{con.lastname}}</td>
                        <td><a href="mailto:">{{con.email}}</a></td>
                        <td><a href="tel:">{{con.phonenumber}}</a></td>
                        <td>Feb 2nd, 2022</td>
                        <td>
                            <button class="btn btn-primary btn-sm mx-1 text-dark">Edit</button>
                            <button class="btn btn-warning btn-sm mx-1 v">Suspend</button>
                            <button class="btn btn-danger btn-sm mx-1 text-dark">Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <nav>
                    <ul class="pagination pagination-md">
                        <li class="page-item disabled">
                            <a class="page-link" @click="prevPage"><span aria-hidden="true">&laquo;</span></a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">{{current_page}}</a></li>
                        <!-- <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li> -->
                        <li class="page-item">
                            <a class="page-link" @click="nextPage"><span aria-hidden="true">&raquo;</span></a>
                        </li>
                    </ul>
                </nav>
            </div>  
          </div>
        </div>
      </div>
    </section>
    
    </main>

    <dash-footer/>
  </template>
</template>
<style scoped src="@/assets/css/dashStyle.css"></style>
<script>
    import Header from './dash-header.vue'
    import Footer from './dash-footer.vue'
    import AuthService from '../../service/auth.service'
  import LoaderVue from '../components/Loader.vue';

    export default {
        name: "Elfrique",
        components:{
            'dash-header': Header,
            'dash-footer': Footer,
            LoaderVue
        },
        data() {
            return {
                Content: '',
                size: 10,
                current_page: 1, 
                isLoading: true
            }
        }, 

    computed: {
    loggedIn() {
            return this.$store.state.admin.status.loggedIn;
            },
            resultQUery(){
                return this.Content.filter((row, index) => {
                    let start = (this.current_page-1)*this.size;
                    let end = this.current_page*this.size;
                    if(index >= start && index < end) return true;
                });
            }
        },

        created() {
            if (!this.loggedIn) {
                this.$router.push('/superadmin');
            }
            AuthService.getOrganizers().then(response => {
                this.Content = response.data.users;
                this.isLoading = false;
                //console.log(this.Content);
            })
        },
        methods: {
            nextPage() {
                if((this.current_page*this.size) < this.Content.length) this.current_page++;
            },
            prevPage() {
                if(this.current_page > 1) this.current_page--;
            },
        },
        mounted(){
                window.scrollTo(0,0)
        }
    }
</script>