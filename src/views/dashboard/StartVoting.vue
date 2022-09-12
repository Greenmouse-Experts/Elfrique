<template>
    <title>Create Voting Form | Elfrique</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1 class="create">Create Voting</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Voting</li>
                    <li class="breadcrumb-item active">Create Voting</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <div class="container start-voting-div">
            <div class="row justify-content-center">
                <div class="col-lg-10 start-voting-inner-div">
                    <div class="start-vote-details alert alert-dismissible fade show" role="alert">
                        Please choose if your vote contest has categories or not by selecting the appropriate radio button corresponding to yours below. <br>
                        <strong>**Select your type of vote, if free or paid**</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <div  v-if="message" class= 'alert-success alert  alert-dismissible fade show' role="alert">
                      {{message}} 
                      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                     <form name="form" @submit.prevent="startVoting">
                        <div class="row">
                            <div class="col-lg-12 mt-1">
                                <label for="category selection">Category Selection</label>
                                <input v-model="votecontent.category" class="radio" type="radio" name="category" id="pageant"  value="pageant" checked> <span>Pageants (Not Categorized)</span>
                                <input v-model="votecontent.category" class="radio" type="radio" name="category" id="award"  value="award"> <span>Award (Categorized)</span>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <label for="voting type">Voting Type</label>
                                <input  v-model="votecontent.type" class="radio" type="radio" name="type" id="paid" value="paid" checked> <span>Paid</span>
                                <input v-model="votecontent.type" class="radio" type="radio" name="type" id="free" value="free"> <span>Free</span>
                            </div>
                            <div v-if="votecontent.type=='paid'" class="col-lg-12 mt-4">
                                <label for="voting packages">Voting Packages</label>
                                <input v-model="votecontent.votingPackage" class="radio" type="radio" name="package" id="disabled" value="disabled" checked> <span>Disabled</span>
                                <input v-model="votecontent.votingPackage" class="radio" type="radio" name="package" id="enabled" value="enabled"> <span>Enabled</span>
                            </div>
                            <div v-if="votecontent.category=='award'" class="col-lg-12 mt-4">
                                <label for="category" class="col-md-4 col-lg-3 col-form-label">Number of Award Categories (if categorised)</label>
                                <input  v-model="votecontent.awardCategory" name="awardCategory" type="number" class="form-control" id="awardCategory" placeholder="Enter number of category">
                            </div>
                        
                            <div class="col-lg-12 mt-4">
                                <label for="daily vote limit">Daily Vote Limit</label>
                                <input v-model="votecontent.dailyVoteLimit" class="radio" type="radio" name="limit" id="unlimited"  value="unlimited" checked> <span>Unlimited</span>
                                <input v-model="votecontent.dailyVoteLimit" class="radio" type="radio" name="limit" id="limited" value="limited"> <span>Limited</span>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <label for="contestant profile view">Contestant Profile View</label>
                                <input v-model="votecontent.contestantProfileView" class="radio" type="radio" name="contestant" id="off" value="off"  checked> <span>Off</span>
                                <input v-model="votecontent.contestantProfileView" class="radio" type="radio" name="contestant" id="on" value="on"> <span>On</span>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <label for="preferred payment gateway">Select Preferred Payment Gateway</label>
                                <select v-model="votecontent.preferredPaymentGateway" name="gateway" id="gateway" required>
                                    <option value="paystack">Paystack</option>
                                    <option value="flutterwave">Flutterwave</option>
                                    <option value="payu">Payu</option>
                                    <option value="interswitch">Interswitch</option>
                                </select>
                            </div>
                            <!-- <div class="col-lg-12 mt-4">
                                <label for="accept crypto payments">Accept Crypto Payments (Bitcoin, Ethereum, Steem)</label>
                                <input v-model="votecontent.acceptCryptoPayments" class="radio" type="radio" name="cryto" id="off" value="off"> <span>Off</span>
                                <input v-model="votecontent.acceptCryptoPayments" class="radio" type="radio" name="cryto" id="on" value="on" checked> <span>On</span>
                            </div> -->
                            <div class="col-lg-12 mt-4">
                                <button type="submit" value="proceed">Proceed</button>
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
    export default {
      name: "Elfrique",
      components:{
      'dash-header': Header,
      'dash-footer': Footer,
      },
      data(){
          return{
              votecontent:{
                    category:'peageant',
                    type:'paid',
                    votingPackage:'disabled',
                    contestantProfileView:'off',
                    awardCategory:'',
                    dailyVoteLimit:'unlimited',
                    preferredPaymentGateway:'',
                    acceptCryptoPayments:'on',
              }
          }
          

      },

    computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    message() {
      return this.$store.state.vote.message;
    },
  },

  created() {

     if (!this.loggedIn) {
      this.$router.push('/login');
        }
    },

      methods:{
          startVoting(){
              this.$store.dispatch('vote/getVoteContent',this.votecontent).then(
            () => {
            //console.log(this.$store.state.vote.voteContent)
              this.$router.push('/organiser/create-voting');
          }
            )
        }
      },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>  