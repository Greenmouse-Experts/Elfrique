<template>
    <title> Vendor Sales-Analytics | Elfrique</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1 class="create"> Vendor Sales Analytics</h1>
            <nav>
                <!-- HAMZAT UPDATE ON REGISTRATION -->
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">
                        Vendor
                    </li>
                    <li class="breadcrumb-item active">
                        Vendor Sales Analytics
                    </li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <!-- HAMZAT UPDATE ON REGISTRATION ENDS HERE -->

        <div class="container create-refer-div">
            <div class="row justify-content-center">
                <div class="col-lg-12 start-voting-inner-div">
                    <form>
                        <div class="row">
                            <div class="col-lg-12 mt-4">
                                <label for="vote option" class="create">Sales-Analytics</label>
                                <select id="gateway" required>
                                    <option value="select vote option" >Select Your Event Option 1</option>
                                    <option value="select vote option" >Select Your Event Option 2</option>
                                </select>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">View Analytics</button>
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
                                <th scope="col">VENDOR ID</th>
                                <th scope="col">EVENT NAME</th>
                                <th scope="col">VENDOR TITLE</th>
                                <th scope="col">SERVICE PRICE (NGN)</th>
                                <th scope="col">VENDOR SERVICE IMAGE</th>
                                <th scope="col">VENDOR DESCRIPTION</th>
                                <th scope="col">DATE ADDED</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <input type="file" accept="image/*">
                                </td>
                                <td>You are HER0</td>
                                <td>9/15/2022</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>  
                    <div class="analyticsNote">
                        <h4 class="text-center">
                            NARRATION
                        </h4>
                        <p>Valid Number of Vendor : 71</p>
                        <p>Monetary Value on Vendor received : ₦5590</p>
                        <p>Payments due to Payment Gateway on successful online payments : 69.15</p>
                        <!-- <p>Current Online Payment Gateway: PAYSTACK</p> -->
                    </div>
                </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" data-bs-dismiss="modal">Close</button>
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