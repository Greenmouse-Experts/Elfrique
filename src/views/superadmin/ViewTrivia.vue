<template>
    <title>View Trivia | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1 class="create">
                View Trivia
            </h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Trivia</li>
                    <li class="breadcrumb-item"><router-link to="/superadmin/overview-trivia" class="routers"><a>Overview</a></router-link></li>
                    <li class="breadcrumb-item active">View Trivia</li>
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
                        <th scope="col">User Email</th>
                        <th scope="col">User Name</th>
                        <th scope="col">User Phone</th>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Detail</th>
                        <th scope="col">Instruction</th>
                        <th scope="col">Image</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Status</th>
                        <th scope="col">Options</th>
                        <th scope="col">Link</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>myemail@email.com</td>
                        <td>Tabitha Florence</td>
                        <td>080123456789</td>
                        <td>221</td>
                        <td>Question of The Day</td>
                        <td>Trivia details will be inputed here</td>
                        <td>Answer all question correctly and get a free visa to Canada</td>
                        <td><img src="@/assets/images/trivia-listimg.jpg"></td>
                        <td>50 Seconds</td>
                        <td>Active</td>
                        <td>
                            <div class="dropdown">
                                <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Options
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Close Trivia</a></li>
                                    <li><a class="dropdown-item" href="#">Disable Cash Payment</a></li>
                                    <li><a class="dropdown-item" href="#">Update</a></li>
                                    <li><a class="dropdown-item" href="#">Open Result Analysis View</a></li>
                                    <li><a class="dropdown-item" href="#"> View Result</a></li>
                                    <li><a class="dropdown-item" href="#">Delete Trivia</a></li>
                                </ul>
                            </div>
                        </td>
                        <td>hdhdhdhdhdhd</td>
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
    export default {
      name: "Elfrique",
      components:{
      'dash-header': Header,
      'dash-footer': Footer,
      },
      mounted(){
        window.scrollTo(0,0)
      }
    }
</script>