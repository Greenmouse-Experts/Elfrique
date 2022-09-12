<template>
    <title>Add Sponsors | Elfrique</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Add Sponsors</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Voting</li>
                    <li class="breadcrumb-item active">Add Sponsors</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <div class="container start-voting-div">
            <div class="row justify-content-center">
                <div class="col-lg-10 start-voting-inner-div">
                    <form>
                        <div class="row">
                            <div class="col-lg-12 mt-2">
                                <label for="number of contestants">Number of Companies</label>
                                <input v-model="NumberOfCompanies" class="input" type="number" placeholder="Set number of contestants" required>
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
                        <div v-if="NumberOfCompanies && contestId" class="modal-table-form">
                             <form name="form" @submit.prevent="addSponsor">
                                <!--Table-->
                                <table v-for="(con, index) in companyForm" :key="index" class="table datatable card-table-table">
                                    <thead>
                                    <tr>
                                        <th scope="col">Company Name</th>
                                        <th scope="col">Company Image</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><input v-model="con.companyName" type="text"></td>
                                        <td><input ref="file" type="file" v-on:change="handleFileUpload(index)"></td>
                                        
                                    </tr>
                                    </tbody>
                                </table>
                                <div class="col-lg-12 mt-4">
                                     <button type="submit" class="btn btn-success" :disabled="loading" >Add Sponsors<span v-show="loading" class="spinner-border spinner-border-sm"></span></button>
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
            NumberOfCompanies: '',
            message: '',
            error: '',
            loading: false,
            
    
            }  
        },
        computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
            },
        companyForm: function () {
            let companyForm = []
            for(let i = 0; i < this.NumberOfCompanies; i++){
                companyForm.push({
                    companyName: '',
                    file: '',
                })
            }
            return companyForm
        
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
        addSponsor(){

            this.loading = true;

            if (this.companyForm){
                for (let i = 0; i < this.NumberOfCompanies; i++) {
                console.log(this.contestForm)
                let formData = new FormData();
                formData.append('fullname', this.companyForm[i].companyName);
                formData.append('image', this.companyForm[i].file);
               
                
                VoteService.addsponsor(formData, this.contestId).then
                (
                    response => {
                        console.log(response);
                        this.message = "Sponsor(s) added successfully";
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
        handleFileUpload(n){
        this.companyForm[parseInt(n)].file = this.$refs.file[n].files[0];
        
        
        },
    },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>