<template>
    <title>Edit Blog Post | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Edit Blog</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Blogs</li>
                    <li class="breadcrumb-item active">Edit Blog</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->
         <div  v-if="error" class=" alert-danger alert  alert-dismissible fade show" role="alert">
            {{error}} 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div  v-if="message" class= 'alert-success alert  alert-dismissible fade show' role="alert">
            {{message}} 
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

        <div class="container start-voting-div create-event-div">
            <div class="row justify-content-center">
                <form name="form" @submit.prevent="editBlog">
                    <div class="row justify-content-center">
                        <div class="col-lg-11 start-voting-inner-div">
                            <div class="row">
                                <!--Blog Title-->
                                <div class="col-lg-12 mt-2">
                                    <label>Blog Title</label>
                                    <input v-model="blog.title" class="input" type="text" placeholder="Enter blog title">
                                </div>
                                <!--Blog Image-->
                                <div class="col-lg-12 mt-4">
                                    <label>Blog Image</label>
                                    <input  class="input" type="file" ref="file" accept=".jpg, .jpeg, .png, .jfif" v-on:change="handleFileUpload()">
                                    <small class="text-danger font-weight-bold">(only .jpg, .jpeg, .png, .jfif or .webp format)</small>
                                </div>
                                <!--Blog Details-->
                                <div class="col-lg-12 mt-4">
                                    <label for="event description">Blog Details</label>
                                    <textarea v-model="blog.details" class="input" cols="30" rows="4" placeholder="Enter details here..."></textarea>
                                </div>
                                <!--Blog Author-->
                                <div class="col-lg-12 mt-4">
                                    <label>Blog Author(optional)</label>
                                    <input v-model="blog.author" class="input" type="text" placeholder="Enter name">
                                </div>
                                <!--Blog Date-->
                                <!-- <div class="col-lg-6 mt-4">
                                    <label>Date Posted</label>
                                    <input class="input" type="date">
                                </div> -->
                                <!--Blog Time-->
                                <!-- <div class="col-lg-6 mt-4">
                                    <label>Time Posted</label>
                                    <input class="input" type="time">
                                </div> -->
                            </div>
                        </div>

                        <div class="col-lg-11 mt-4">
                            <button type="submit" :disabled="loading">Create Blog Post<span v-show="loading" class="spinner-border spinner-border-sm"></span></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </main>

    <dash-footer/>
</template>
<style scoped src="@/assets/css/dashStyle.css"></style>
<script>
    import Header from './dash-header.vue'
    import Footer from './dash-footer.vue'
import BlogService from '../../service/blog.service.js'

    export default {
      name: "Elfrique",
      components:{
      'dash-header': Header,
      'dash-footer': Footer,
      },
       data(){
          return{
                blog: {
                    title: '',
                    details: '',
                    author: 'Elfrique',
                },
                file: '',
                error: '',
                loading: false,
                message: '',

            }
        },

    computed: {
    loggedIn() {
      return this.$store.state.admin.status.loggedIn;
    },
    
  },

  created() {

    if (!this.loggedIn) {
      this.$router.push('/superadmin');
      }

      BlogService.getSingleBlog(this.$route.params.id).then((res) => {
          console.log(res.data);
          this.blog.title = res.data.blog.title;
          this.blog.author = res.data.blog.author;
          this.blog.details = res.data.blog.details;
      })
    },

    methods:{
        editBlog(){
            this.loading = true;

            let formData = new FormData();
            formData.append('image', this.file);                                                                                                                                                                                                                                           
            formData.append('title', this.blog.title);
            formData.append('author', this.blog.author);
            formData.append('details', this.blog.details);

            BlogService.editBlog(this.$route.params.id, formData).then(response => {
                    
                    this.message = "Blog Post Edited Successfully";
                    this.loading = false;
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

            
        handleFileUpload(){
        this.file = this.$refs.file.files[0];
      }
     },
      mounted(){
        window.scrollTo(0,0)

        let externalScriptQuill = document.createElement('script')
        let externalScriptRich = document.createElement('script')

        externalScriptQuill.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/scripts/main/quill.min.js')
        externalScriptRich.setAttribute('src', 'https://cdn.statically.io/gh/NathTimi/scripts/main/rich-text.js')

        document.head.appendChild(externalScriptQuill)
        document.head.appendChild(externalScriptRich)
      }
    }
</script>