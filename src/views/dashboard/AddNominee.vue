<template>
    <title>Add Contestant | Elfrique</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Add Nominee</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Voting</li>
                    <li class="breadcrumb-item active">Add Nominees</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->
        


        <div class="container start-voting-div">
            <div class="row justify-content-center">
                <div class="col-lg-10 start-voting-inner-div">
                    <form>
                        <div class="row">
                            <div class="col-lg-12 mt-2">
                                <label for="number of contestants">Number of Nominees</label>
                                <input v-model="NumberOfContestants" class="input" type="number" placeholder="Set number of contestants" required>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <label for="vote option">Vote Option</label>
                                <select v-model="contest" name="gateway" id="gateway" required>
                                    <option value="select vote option" >Select Your Vote Option</option>
                                    <option :value="con" v-for="con in content" :key="con.id" >{{con.title}}</option>
                                </select>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  v-on:click="getCategories()">Load</button>
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

                        <div v-if="NumberOfContestants && contest" class="modal-table-form">
                             <form name="form" @submit.prevent="addContestant">
                                <!--Table-->
                                <table v-for="(con, index) in contestForm" :key="index" class="table datatable card-table-table">
                                    <thead>
                                    <tr>
                                        <th scope="col">Nominee Full Name</th>

                                        <th scope="col">Nominee Image</th>
                                        <th scope="col">Nominee Number</th>
                                        <th scope="col">About Nominee</th>
                                        <th scope="col">Select Category</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><input v-model="con.contestantFullName" type="text"></td>
                                        <td><input ref="file" type="file" v-on:change="handleFileUpload(index)"></td>
                                        <td><input v-model="con.contestantNumber" type="number"></td>
                                        <td><textarea v-model="con.aboutContestant" cols="30" rows="2"></textarea></td>
                                        <td><select v-model="con.cat" name="gateway" id="gateway" required>
                                            <option disabled >Select Your category</option>
                                            <option :value="con" v-for="(con, index) in category " :key="index">{{con.name}}</option></select>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div class="col-lg-12 mt-4">
                                     <button type="submit" class="btn btn-success" :disabled="loading" >Add Nominees<span v-show="loading" class="spinner-border spinner-border-sm"></span></button>
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
import voteService from '../../service/vote.service'
    export default {
      name: "Elfrique",
      components:{
      'dash-header': Header,
      'dash-footer': Footer,
      },
        data(){
            return{
            content: '',
            contest: '',
            NumberOfContestants: '',
            message: '',
            error: '',
            loading: false,
            content2: '',
            category: '',
            
    
            }  
        },
        computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
            },
        contestForm: function () {
            let contestForm = []
            for(let i = 0; i < this.NumberOfContestants; i++){
                contestForm.push({
                    contestantFullName: '',
                    contestantNumber: '',
                    aboutContestant: '',
                    cat: '',
                    file: '',
                })
            }
            return contestForm
        
        },
        /* getCategories: function () {
            let content = []
            if(this.contest){
                
            
                voteService.getCategories(this.contest.id).then(res => {

            
                content.push(res.data.Categories)
            })
                console.log(content)
                this.category = content
                
            }
            return content
        } */

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
        addContestant(){

            this.loading = true;

            if (this.contestForm){
                for (let i = 0; i < this.NumberOfContestants; i++) {
                let formData = new FormData();
                formData.append('fullname', this.contestForm[i].contestantFullName);
                formData.append('contestantnumber', this.contestForm[i].contestantNumber);
                formData.append('about', this.contestForm[i].aboutContestant);
                formData.append('image', this.contestForm[i].file);
               
                
                VoteService.addNominees(formData, this.contest.title, this.contestForm[i].cat.id ).then
                (
                    response => {
                        console.log(response);
                        this.message = "Nominee(s) added successfully";
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
        this.contestForm[parseInt(n)].file = this.$refs.file[n].files[0];
        
        
        },
        getCategories(){
             
            if(this.contest){
                
            
                voteService.getCategories(this.contest.id).then(res => {

            
                this.category = res.data.Categories
            })
                console.log(this.category)
                console.log(this.contest)
            }
        }

    },

      mounted(){
        window.scrollTo(0,0)
      }     
    }



</script>