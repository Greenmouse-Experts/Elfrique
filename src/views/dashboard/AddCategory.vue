<template>
    <title>Add Category | Elfrique</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Add Category</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Voting</li>
                    <li class="breadcrumb-item active">Add Category</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <div class="container start-voting-div">
            <div class="row justify-content-center">
                <div class="col-lg-10 start-voting-inner-div">
                    <div class="start-vote-details alert alert-dismissible fade show" role="alert">
                        You can only add categories to an award contest. Please select your award contest.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <form>
                        <div class="row">
                            <div class="col-lg-12 mt-2">
                                <label for="number of contestants">Number of Categories</label>
                                <input v-model="NumberOfCategories" class="input" type="number" placeholder="Set number of contestants" required>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <label for="vote option">Vote Option</label>
                                <select v-model="contestId" name="gateway" id="gateway" required>
                                    <option value="select vote option" >Select Your Award option</option>
                                    <option :value="con.id" v-for="con in content" :key="con.id" >{{con.title}}</option>
                                </select>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Load</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Voting Management System</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="card">
                    <div  v-if="error" class=" alert-danger alert  alert-dismissible fade show" role="alert">
                        {{error}}}} 
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <div  v-if="message" class= 'alert-success alert  alert-dismissible fade show' role="alert">
                        {{message}} 
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <div class="card-body card-table">
                        <div v-if="NumberOfCategories && contestId" class="modal-table-form">
                             <form name="form" @submit.prevent="addCategory">
                                <!--Table-->
                                <table v-for="(con, index) in categoryForm" :key="index" class="table datatable card-table-table">
                                    <thead>
                                    <tr>
                                        <th scope="col">Category Name</th>
                                        <th scope="col">Category Description</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><input v-model="con.name" type="text"></td>
                                        <td><textarea v-model="con.description" cols="30" rows="2"></textarea></td>
                                        
                                    </tr>
                                    </tbody>
                                </table>
                                <div class="col-lg-12 mt-4">
                                     <button type="submit" class="btn btn-success" :disabled="loading" >Add Categories<span v-show="loading" class="spinner-border spinner-border-sm"></span></button>
                                </div>
                            </form>
                        </div>
                        <div v-else class="modal-table-form">
                             <div   class=" alert-danger alert  alert-dismissible fade show" role="alert">
                                 form not filled. All fields are required
                            </div>
                        </div>
                    
                    </div>  
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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

    export default {
      name: "Elfrique",
      components:{
      'dash-header': Header,
      'dash-footer': Footer,
      
      },
      data(){
            return{
            content: '',
            contestId: '',
            NumberOfCategories: '',
            message: '',
            error: '',
            loading: false,
            
    
            }  
        },
        computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
            },
        categoryForm: function () {
            let categoryForm = []
            for(let i = 0; i < this.NumberOfCategories; i++){
               categoryForm.push({
                   name: '',
                   description: '',
                
                })
            }
            return categoryForm
        
        },
  },

  created() {

     if (!this.loggedIn) {
      this.$router.push('/login');
    }


    VoteService.getAwards().then
    (
        response => {
            this.content = response.data.awards;
        }
    )
    },

    methods: {
        addCategory(){

            this.loading = true;

            if (this.categoryForm){
                for (let i = 0; i < this.NumberOfCategories; i++) {
                let formData = new FormData();
                formData.append('name', this.categoryForm[i].name);
                formData.append('description', this.categoryForm[i].description);
            
               
                
                VoteService.addCategory(this.categoryForm[i], this.contestId).then
                (
                    response => {
                        console.log(response);
                        this.$store.dispatch('vote/getMessage', 'Contest created successfully');
                        this.message = "categories created successfully";
                        this.loading = false;
                         
                    },

                    error => {
                        this.error = error.response.data.message;
                        this.loading = false;
                        console.log(error);
                    }   
                )
            }
            }
            
        },
        
    },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>