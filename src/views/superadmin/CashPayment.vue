<template>
    <title>Cash Payment | Elfrique</title> 
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1 class="create">Cash Payment</h1>
            <nav>
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
                <li class="breadcrumb-item active">Voting</li>
                <li class="breadcrumb-item active">Cash Payment</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <section class="section">
            <div class="row">
                <div class="col-lg-12">
                <div class="card">
                    <div class="card-body card-table">
                        <!--Table-->
                        <table class="table datatable card-table-table">
                            <thead>
                            <tr>
                                <th scope="col">Voter's Name</th>
                                <th scope="col">Voter's Email</th>
                                <th scope="col">Voter's Phone</th>
                                <th scope="col">Number of Voter's</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Date Added</th>
                                <th scope="col">Reference Number</th>
                                <th scope="col">Status</th>
                                <th scope="col">Contestant Voted</th>
                                <th scope="col">Payment Method</th>
                                <th scope="col">Payment Gateway</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style="color: #000 !important;">
                                            Options
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Edit</a></li>
                                            <li><a class="dropdown-item" href="#">Enable</a></li>
                                            <li><a class="dropdown-item" href="#">Disable</a></li>
                                            <li><a class="dropdown-item" href="#">Delete</a></li>
                                        </ul>
                                    </div>
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