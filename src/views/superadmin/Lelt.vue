<template>
    <title> IELTS | Elfrique</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1 class="create"> IELTS</h1>
            <nav>
                <!-- HAMZAT UPDATE ON TRAVEL TOUR -->
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">
                        Travel & Tour
                    </li>
                    <li class="breadcrumb-item active">
                        IELTS
                    </li>
                </ol>
            </nav>
        </div>
        <!-- End Page Title -->
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
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telephone Number</th>
                        <th scope="col">Date Booked</th>
                        <th scope="col">Check In</th>
                        <th scope="col">Check Out</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Hamzat</td>
                        <td>Adeleke</td>
                        <td>myemail@email.com</td>
                        <td>07012345678</td>
                        <td>2022-09-31</td>
                        <td>2022-10-28</td>
                        <td>2022-11-30</td>
                        <td>
                            <button class="btn btn-success btn-sm mx-1 text-dark m-1">Approve</button>
                            <button class="btn btn-warning btn-sm mx-1 text-dark m-1">Suspend</button>
                            <button class="btn btn-danger btn-sm mx-1 text-dark m-1">Delete</button>
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
        <!-- HAMZAT UPDATE ON TRAVEL TOUR  ENDS HERE -->
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