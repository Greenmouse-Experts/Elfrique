<template>
  <title>Result Setting | Elfrique</title>
  <dash-header />

  <!--------Main Content--------->
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Result Setting</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/organiser/dashboard" class="routers"
              ><a>Home</a></router-link
            >
          </li>
          <li class="breadcrumb-item active">Voting</li>
          <li class="breadcrumb-item active">Result Setting</li>
        </ol>
      </nav>
    </div>
    <!-- End Page Title -->

    <div class="container start-voting-div">
      <div class="row justify-content-center">
        <div class="col-lg-10 start-voting-inner-div">
          <form>
            <div class="row">
              <div class="col-lg-12 mt-4">
                <select name="gateway" id="gateway">
                  <option value="select vote option" disabled>
                    Select Your Vote Option
                  </option>
                  <option :value="con.id" v-for="con in content" :key="con.id" >{{con.title}}</option>
                </select>
              </div>
              <div class="col-lg-12 mt-4">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>

  <dash-footer />
</template>
<style scoped src="@/assets/css/dashStyle.css"></style>
<script>
  import Header from "./dash-header.vue";
  import Footer from "./dash-footer.vue";
    import VoteService from '../../service/vote.service'

  export default {
    name: "Elfrique",
    components: {
      "dash-header": Header,
      "dash-footer": Footer,
    },
        data(){
            return{
            content: [],    
            }  
        },
    created() {
      VoteService.getContests().then((response) => {
        this.content = response.data.voteContest;
      });
    },

    mounted() {
      if (!this.loggedIn) {
        this.$router.push("/login");
      }
      window.scrollTo(0, 0);
    },
  };
</script>
