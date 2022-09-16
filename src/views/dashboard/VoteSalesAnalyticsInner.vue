<template>
    <title>Vote Sales Analytics | Elfrique</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1 class="create">Sales Analytics</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Voting</li>
                    <li class="breadcrumb-item active">Sales Analytics</li>
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
                                <th scope="col">Contestant Name</th>
                                <th scope="col">Candidate Number</th>
                                <th scope="col">Voting Result</th>
                            </tr>
                            </thead>
                            <tbody v-for="(con,index) in content.contestants" :key="con.id">
                            <tr>
                                <th scope="row">{{index + 1}}</th>
                                <td>{{con.fullname}}</td>
                                <td>{{con.contestantnumber}}</td>
                                <td>{{con.voteCount}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>  
                    <div class="analyticsNote">
                        <p>Total Valid Votes: {{totalvote}}</p>
                        <p>Total Amount: ₦{{totalvote * content.fee}}</p>
                        <!-- <p>Current Online Payment Gateway: PAYSTACK</p> -->
                    </div>
                    <div class="analyticsLinkBelow">
                        <a href="#">View voters</a>
                        <!-- <a href="#">View unpaid cash payment</a> -->
                        <a href="#">View narration so far</a>
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
            message: '',
            error: '',
            loading: false,
            totalvote: '',
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

    VoteService.getSingleContest(this.$route.params.id).then
    (
        response => {
            this.content = response.data.voteContest;
            console.log(this.content);
            this.totalvote = this.content.contestants.reduce((acc, cur) => {
                return acc + cur.voteCount;
            }, 0)
        }
    )
    },

      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>