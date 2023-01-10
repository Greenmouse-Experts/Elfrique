<template>
    <title>View Blogs | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>View Blogs</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Blogs</li>
                    <li class="breadcrumb-item active">View Blogs</li>
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
                        <th scope="col">Blog Title</th>
                        <th scope="col">Blog Image</th>
                        <th scope="col">Date Added</th>
                        <th scope="col">Link</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody  v-for="(con,idx) in Content" :key="con.id" >
                    <tr>
                        <th scope="row">{{idx}}</th>
                        <td>{{con.title}}</td>
                        <td><img :src="con.img_url" ></td>
                        <td>{{format_date(con.createdAt)}}</td>
                        <td><a href="#">View Blog</a></td>
                        <td>
                            <button class="btn btn-primary btn-sm mx-1 text-dark" @click="editBlog(con.id)">Edit</button>
                            <button class="btn btn-danger btn-sm mx-1 text-dark" @click="modalDelete(con.id)">Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <nav>
                    <ul class="pagination pagination-md">
                        <li class="page-item disabled">
                            <a class="page-link"><span aria-hidden="true">&laquo;</span></a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link"><span aria-hidden="true">&raquo;</span></a>
                        </li>
                    </ul>
                </nav>
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
    import BlogService from '../../service/blog.service.js'
import moment from 'moment'
  import Swal from "sweetalert2";

    export default {
      name: "Elfrique",
      components:{
      'dash-header': Header,
          'dash-footer': Footer,
      Swal
      },
      data() {
        return {
            Content: ''

            
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
            BlogService.getBlogs().then(response => {
                this.Content = response.data.blogs;
                console.log(this.Content);
            })

        },
        methods: { 
            format_date(value){
                if (value) {
                     return moment(String(value)).format('MM/DD/YYYY hh:mm')
          }
    },

            editBlog(id) {
                this.$router.push(`/superadmin/editBlog/${id}`);
            },

        modalDelete(id) {
        Swal.fire({
          title: "Do you want to Delete this Blog?",
          showDenyButton: true,
          confirmButtonText: "Yes",
          denyButtonText: "No",
        }).then((result) => {
          if (result.isConfirmed) {
            BlogService.deleteBlog(id).then((res) => {
              Swal.fire("Blog Deleted Successfully", "", "success");
            BlogService.getBlogs().then(response => {
                this.Content = response.data.blogs;
                console.log(this.Content);
            })
            }).catch((err) => {
            Swal.fire(err.response.data.message, "error");
            })
          } else if (result.isDenied) {
            Swal.fire("Could not Delete Contest", "", "info");
          }
        });
      },

      },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>