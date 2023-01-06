<template>
    <title>Sign Up | Elfrique – Complete Event Management System</title>

    <div class="bodySignup">
        <main class="authMain">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 text-area">
                        <a href="/" class="routers">
                            <img src="@/assets/images/logo.png" alt="Elfrique Logo">
                        </a>
                        <p class="text-first">Sign Up</p>
                        <div class="line-rule"></div>
                        <h1>Elfrique is much better when you have an account.</h1>
                        <div class="btn-div">
                            <p>Already have an account?</p>
                            <router-link to="/login" class="routers"><a class="btn-btn">Log In <i class="bi bi-box-arrow-in-right"></i></a></router-link>
                        </div>
                    </div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-6">
                        <div class="form-area">
                            <div class="header-form">
                                <h3>Sign Up Form</h3>
                            </div>
                            <form  name="form" @submit.prevent="handleRegister">
                                <div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'" >{{message}}</div>
    
                                <div v-if="!successful">
                               
                                    <div class="row">
                                        <!--First Name-->
                                        <div class="col-lg-3">
                                            <label for="firstname">First Name</label>
                                            <input v-model="user.firstname" type="text" placeholder="Enter first name" name="firstname" required>
                                        </div>
                                        <!--Last Name-->
                                        <div class="col-lg-3">
                                            <label for="lastname">Last Name</label>
                                            <input v-model="user.lastname" type="text" placeholder="Enter last name" name="lastname" required>
                                        </div>
                                        <!--Phone Number-->
                                        <div class="col-lg-6">
                                            <label for="phone number">Phone Number</label>
                                            <input v-model="user.phonenumber" name="phonenumber" type="tel" placeholder="Enter phone number" required>
                                        </div>
                                        <!--Email-->
                                        <div class="col-lg-6">
                                            <label for="email">Email</label>
                                            <input v-model="user.email" name="email" type="email" placeholder="Enter email address" required>
                                        </div>
                                        <!--Referral-->
                                        <div class="col-lg-6">
                                            <label for="email">Referral Code<small>(Optional)</small></label>
                                            <input v-if="$route.query.referral" v-model="user.referral" name="referral_email" type="text" placeholder="Referral ID" disabled>
                                            <input v-else v-model="user.referral" name="referral_email" type="text" placeholder="Referral ID">
                                        </div>
                                        <!--Password-->
                                        <div class="col-lg-6">
                                            <label for="password">Password</label>
                                            <input  v-model="user.password" name="password" type="password" placeholder="Enter preferred password" required>
                                        </div>
                                        <!--Confirm Password-->
                                        <div class="col-lg-6">
                                            <label for="password">Confirm Password</label>
                                            <input v-model="user.confirmpassword" name="confirmpassword" type="password" placeholder="Enter password again" required>
                                        </div>
                                        <!--Submit Button-->
                                        <div class="col-lg-12 text-center">
                                            <button type="submit" :disabled="loading">Sign Up<span v-show="loading" class="spinner-border spinner-border-sm"></span></button>
                                        </div>
                                       
                                        
                                    </div>
                                </div>
                            </form>
                            <div v-if="successful">
                                <div class="row">
                                    <div class="col-lg-12 text-center">
                                        <h3>You have successfully registered!</h3>
                                        <p>Please check your email for a verification link.</p>
                                        <router-link to="/login" class="routers"><a class="btn-btn">Log In <i class="bi bi-box-arrow-in-right"></i></a></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-under">
                            <p>By clicking "Sign Up", you agree to the <router-link to="/terms" class="routers"><a>Terms of Use</a></router-link> and <router-link to="/privacy" target="_blank" class="routers"><a>Privacy Policy</a></router-link></p>
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
  name: 'Register',
  data() {
    return {
      user: {
        firstname: '',
        lastname: '',
        phonenumber: '',
        email: '',
        referral: this.$route.query.referral,
        password: '',
        confirmpassword: ''
      },
      loading: false,
      submitted: false,
      successful: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/organiser/dashboard');
    }
  },
  methods: {
    handleRegister() {
        this.message = '';
        this.loading = true;
        this.submitted = true;
        console.log(this.user);
      
        this.$store.dispatch('auth/register', this.user).then(

        data => {
            this.message = data.message;
            this.successful = true;
            
        },
        error => {
            this.message =
            (error.response && error.response.data && error.response.data.message) ||
           /*  error.message */ error.response.data.errors[0].message|| "password does not match or too short"
            /* error.toString(); */
            this.successful = false;
            this.loading = false;
        },
        );
        
      
    }
  },
    mounted(){
    window.scrollTo(0,0)
    }
}

</script>