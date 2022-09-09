<template>
    <title>Log In | Elfrique – Complete Event Management System</title>

    <div class="bodyLogin">
        <main class="authMain">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 text-area">
                        <router-link to="/" class="routers">
                            <img src="@/assets/images/logo.png" alt="Elfrique Logo">
                        </router-link>
                        <p class="text-first">Log In</p>
                        <div class="line-rule"></div>
                        <h1>Welcome back!</h1>
                        <h1 style="font-size: 35px; font-weight: 400;">Keep track of your activities.</h1>
                        <div class="btn-div">
                            <p>Don't have an account?</p>
                            <router-link to="/signup" class="routers"><a class="btn-btn">Sign Up <i class="bi bi-box-arrow-in-right"></i></a></router-link>
                        </div>
                    </div>
                    <div class="col-lg-2"></div>
                    <div class="col-lg-5">
                        <div class="form-area">
                            <div class="header-form">
                                <h3>Log In To Your Account</h3>
                            </div>
                             <form name="form" @submit.prevent="handleLogin">
                                <div class="row">
                                     <div class="col-lg-12">
                                            <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
                                     </div>
                                    <!--Email-->
                                    <div class="col-lg-12">
                                        <label for="email">Email</label>
                                        <input v-model="user.email" type="email" placeholder="Enter email address" required>
                                    </div>
                                    <!--Password-->
                                    <div class="col-lg-12">
                                        <label for="password">Password</label>
                                        <input v-model="user.password" type="password" placeholder="Enter password" required>
                                    </div>
                                    <!--Forgot Password-->
                                    <div class="col-lg-12 forgot">
                                        <p>
                                            <router-link to="/forgot" class="routers"><a>Forgot Password?</a></router-link>
                                        </p>
                                    </div>
                                    <!--Submit Button-->
                                    <div class="col-lg-12 text-center">
                                        <button type="submit" :disabled="loading">Log In <span v-show="loading" class="spinner-border spinner-border-sm"></span></button>
                                       
                                    </div>
                                    <!-- <div  v-show="loading" class="col-lg-12 text-center">
                                        <button class="btn btn-primary btn-block" :disabled="loading">
                                            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
           
                                        </button>
                                    </div> -->
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style src="@/assets/css/authStyle.css"></style>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      loading: false,
      message: '',
      /* userData: this.$store.state.auth.user */
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    userData() {
      return this.$store.state.auth.user;
    }
    
  },
  created() {
   /*  console.log(this.userData);
    if (this.loggedIn && this.userData.user.role == 'seller') {
      this.$router.push('/organiser/dashboard');
    }else if(this.loggedIn && this.userData.user.role == 'normalUser'){
      this.$router.push('/user/dashboard');
    }
      */
  },


  methods: {
    handleLogin() {
      this.loading = true;
     
        if (this.user.email && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
            () => {
              console.log(this.$store.state.auth.user);
              let data = this.$store.state.auth.user;
              if (data.user.role == "seller" || data.user.role == "normalUser") {
                this.$router.push('/organiser/dashboard');
              }
              if (data.user.role == "admin") {
                this.$router.push('/organiser/dashboard');
              }
              //this.$router.push('/user/dashboard');
            },
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            }
          );
        }
      }
    },
  

      mounted(){
        window.scrollTo(0,0)
      }
};
    
</script>