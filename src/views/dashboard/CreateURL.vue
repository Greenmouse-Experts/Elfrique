<template>
    <title>Create Short URL | Elfrique</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Elfrique URL Shortener</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
            <li class="breadcrumb-item active">Short URLs</li>
            <li class="breadcrumb-item active">Create URL</li>
          </ol>
        </nav>
      </div><!-- End Page Title -->
      <div class="container short-url-dash">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <h1 class="text-center text-dark"></h1>
            <div class="box-note">
              <p>You can shorten urls here , there is option for you to enter an alias(short-prefix) you wish to use, your shortened link will be like <strong>https://elfrique.com/s/youralias</strong> that will be set for you if its available, if its not available you will be notified that its not available and you wil have to choose another one, if you leave the url prefix empty then a prefix will be automatically created for you.</p>
            </div>
         
            <div  v-if="error" class=" alert-danger alert  alert-dismissible fade show" role="alert">
                {{error}}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div  v-if="message" class= 'alert-success alert  alert-dismissible fade show' role="alert">
                {{message}} 
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div v-if="successful" class="created-url-here mt-5">
              <h3 class="mb-3 text-dark font-weight-bold">Your new created Short-URL:</h3>
              <input class="input-url" type="url" placeholder="Your created short url will appear here" disabled :value="url.shortUrl">
              <input class="input-url-button" type="button" value="copy">
            </div>
            <form name="form" @submit.prevent="createURL">
              <div class="row">
                <div class="col-lg-12">
                  <label for="Url Alias (optional)">Url Alias (optional)</label>
                  <input v-model="url.alias" type="text" placeholder="Enter URL prefix">
                </div>
                <div class="col-lg-12">
                  <label for="Elfrique Website Link Original URL">Elfrique Website Link Original URL</label>
                  <input v-model="url.longUrl" type="url" placeholder="Enter your URL here" required>
                </div>
                <div class="col-lg-12">
                  <button type="submit" :disabled="loading" >GO!<span v-show="loading" class="spinner-border spinner-border-sm"></span></button>
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
    import EventService from '../../service/event.service'
    import VendorService from '../../service/vendor.service'
    export default {
      name: "Elfrique",
      components:{
      'dash-header': Header,
      'dash-footer': Footer,
      },
      data(){
            return{
            message: '',
            error: '',
            file: '',
            loading: false,
            successful: false,
            url: {
                alias: '',
                longUrl: '',
                shortUrl: '',
            }
            
    
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

  
    },

    methods:{
        createURL(){
            this.loading = true;
            let urlForm = {
                alias: this.url.alias,
                longUrl: this.url.longUrl,
            }

            VendorService.createUrl(urlForm).then(response => {
                    
                    this.message = `URL Shorten Successfully`;
                    this.loading = false;
                    this.url.shortUrl = response.data.shortUrl;
                    this.successful = true;
                    window.scrollTo(0,0)

            },
            error => {
                console.log(error);
                this.error = error.response.data.message;
                console.log(error.response.data);


                this.loading = false;
                 window.scrollTo(0,0)
            });
        },

        },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>