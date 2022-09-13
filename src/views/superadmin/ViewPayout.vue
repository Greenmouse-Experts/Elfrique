<template>
    <title>View Payout | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1 class="create">View Payouts</h1>
            <nav>
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                <li class="breadcrumb-item active">General</li>
                <li class="breadcrumb-item active"><router-link to="/superadmin/overview-general" class="routers"><a>Overview</a></router-link></li>
                <li class="breadcrumb-item active">View Payouts</li>
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
                                <th scope="col">Product</th>
                                <th scope="col">Product ID</th>
                                <th scope="col">Organiser</th>
                                <th scope="col">Approval Status</th>
                                <th scope="col">Payment Status</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Date Added</th>
                                <th scope="col">Options</th>
                                <th scope="col">Narration</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Form</td>
                                <td>330</td>
                                <td>organiseremailaddress@email.com</td>
                                <td><span class="text-success fw-bolder">Approved</span></td>
                                <td><span class="text-success fw-bolder">Paid</span></td>
                                <td>250</td>
                                <td>2022-2-3</td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" style="color:#000 !important"  aria-expanded="false">
                                            Options
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">View User Account Details</a></li>
                                            <li><a class="dropdown-item" href="#">Approve Payout</a></li>
                                            <li><a class="dropdown-item" href="#">Indicate Payment For Organiser</a></li>
                                            <li><a class="dropdown-item" href="#">Indicate Payment For Referrer</a></li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                    <button type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop">
                                    View Narration
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Vote</td>
                                <td>120</td>
                                <td>organiseremailaddress@email.com</td>
                                <td><span class="text-danger fw-bolder">Not Approved</span></td>
                                <td><span class="text-danger fw-bolder">Pending Payment</span></td>
                                <td>500</td>
                                <td>2022-1-30</td>
                                <td>
                                    <div class="dropdown">
                                    <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" style="color:#000 !important" aria-expanded="false">
                                        Options
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">View User Account Details</a></li>
                                        <li><a class="dropdown-item" href="#">Approve Payout</a></li>
                                        <li><a class="dropdown-item" href="#">Indicate Payment For Organiser</a></li>
                                        <li><a class="dropdown-item" href="#">Indicate Payment For Referrer</a></li>
                                    </ul>
                                    </div>
                                </td>
                                <td>
                                    <button type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop">
                                    View Narration
                                    </button>
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
    
    <!-- Modal -->
    <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        >
        <div class="modal-dialog modal-xl container">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                    <b>
                        Add Subscribers Email
                    </b>
                </h5>
                <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ></button>
            </div>
            <div class="modal-body">
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
                                <th scope="col">EMAIL </th>
                                <th scope="col">CHANNEL	</th>
                                <th scope="col">AMOUNT</th>
                                <th scope="col">1.5% PAYMENT DUE TO PAYMENT GATEWAY FOR LOCAL TRANSACTIONS</th>
                                <th scope="col">2.5% PAYMENT DUE TO ELFRIQUE THIRD PARTY FOR WEBSITE LOCAL TRANSACTIONS</th>
                                <th scope="col">3.5% PAYMENT DUE TO PAYMENT GATEWAY FOR INTERNATIONAL TRANSACTION</th>
                                <th scope="col">4% PAYMENT DUE TO ELFRIQUE ON ALL WEB BASED LOCAL TRANSACTIONS</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
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
            <div class="modal-footer">
                <button
                class="close"
                id="close"
                type="button"
                data-bs-dismiss="modal"
                >
                Close
                </button>
            </div>
            </div>
        </div>
    </div>

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