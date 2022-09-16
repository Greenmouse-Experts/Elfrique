<template>
    <title>Vote Sales Analytics | Elfrique</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Sales Analytics</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Voting</li>
                    <li class="breadcrumb-item active">Sales Analytics</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <div class="container start-voting-div">
            <div class="row justify-content-center">
                <div class="col-lg-10 start-voting-inner-div">
                    <form  name="form" @submit.prevent="getAnalytics">
                        <div class="row">
                            <div class="col-lg-12 mt-4">
                                <label for="vote option">Select Contest Name</label>
                                <select v-model="contestId" name="gateway" id="gateway">
                                    <option value="select vote option">Select Your Vote Option</option>
                                    <option :value="con.id" v-for="con in content" :key="con.id" >{{con.title}}</option>
                                </select>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <button type="submit">View Analytics</button>
                            </div>
                        </div>
                    </form>
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
                message: '',
                error: '',
                loading: false,
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

    VoteService.getContests().then
    (
        response => {
            this.content = response.data.voteContest;
        }
    )
    },


    methods: {

        getAnalytics(){
             this.$router.push(`/organiser/view-vote-analytics/${this.contestId}`)
        }

    },
      
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script> 