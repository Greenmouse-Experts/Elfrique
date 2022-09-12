<template>
    <title>Add Info | Elfrique</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Add Info</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Voting</li>
                    <li class="breadcrumb-item active">Add Info</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <div class="container start-voting-div">
            <div class="row justify-content-center">
                <div class="col-lg-10 start-voting-inner-div">
                    <form>
                        <div class="row">
                            <div class="col-lg-12 mt-2">
                                <label for="number of contestants">Number of info</label>
                                <input v-model="NumberOfDetails" class="input" type="number" placeholder="Set number of contestants" required>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <label for="vote option">Vote Option</label>
                                <select v-model="contestId" name="gateway" id="gateway" required>
                                    <option value="select vote option" >Select Your Vote Option</option>
                                    <option :value="con.id" v-for="con in content" :key="con.id" >{{con.title}}</option>
                                    <option :value="con.id" v-for="con in content2" :key="con.id" >{{con.title}}</option>
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
                        <div v-if="NumberOfDetails && contestId" class="modal-table-form">
                             <form name="form" @submit.prevent="addInfo">
                                <!--Table-->
                                <table v-for="(con, index) in detailForm" :key="index" class="table datatable card-table-table">
                                    <thead>
                                    <tr>

                                        <th scope="col">Information Details</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                         <td><textarea v-model="con.details" cols="30" rows="2"></textarea></td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div class="col-lg-12 mt-4">
                                     <button type="submit" class="btn btn-success" :disabled="loading" >Add Info<span v-show="loading" class="spinner-border spinner-border-sm"></span></button>
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
            content2: '',
            contestId: '',
            NumberOfDetails: '',
            message: '',
            error: '',
            loading: false,
            
    
            }  
        },
        computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
            },
        detailForm: function () {
            let detailForm = []
            for(let i = 0; i < this.NumberOfDetails; i++){
                detailForm.push({
                    details: '',
                
                })
            }
            return detailForm
        
        },
  },

  created() {

     if (!this.loggedIn) {
      this.$router.push('/login');
    }

    VoteService.getContests().then
    (
        response => {
            this.content = response.data.voteContest;
        }
    )

    VoteService.getAwards().then
    (
        response => {
            this.content2 = response.data.awards;
        }
    )
    },

    methods: {
        addInfo(){

            this.loading = true;

            if (this.detailForm){
                for (let i = 0; i < this.NumberOfDetails; i++) {
                /* let formData = new FormData();
                formData.append('details', this.detailForm[i].detail); */
            
               
                
                VoteService.addInfo(this.detailForm[i], this.contestId).then
                (
                    response => {
                        console.log(response);
                        this.message = "Info(s) added successfully";
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