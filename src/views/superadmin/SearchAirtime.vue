<template>
    <title>Search Airtime | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1 class="create">
                Search Airtime
            </h1>
            <nav>
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                <li class="breadcrumb-item active">General</li>
                <li class="breadcrumb-item active"><router-link to="/superadmin/overview-general" class="routers"><a>Overview</a></router-link></li>
                <li class="breadcrumb-item active">Search Airtime</li>
                </ol>
            </nav>
        </div>
        <!-- End Page Title -->

        <div class="card">
            <div class="container start-voting-div">
                <div class="row justify-content-center">
                    <div class="col-lg-12 start-voting-inner-div">
                        <form>
                            <div class="row">
                                <div class="col-lg-12 mt-2">
                                    <label for="number of contestants create">Reference Number</label>
                                    <input class="input" type="text" placeholder="Enter reference number">
                                </div>
                                <div class="col-lg-12 mt-4">
                                    <button 
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop" value="proceed">Search <i class="bi bi-binoculars"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
       </div>
    
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
                <section class="section card">
            <div class="row">
            <div class="col-lg-12">
                <div class="row">
                    <div class="col-md-12 start-voting-div create-event-div">
                        <div class="start-vote-details alert alert-dismissible fade show" role="alert">
                            <span class="text-danger text-lg"><strong>NOTE*</strong></span>
                            <br>
                            <li class="bg-light py-2 px-2 text-dark mt-2">Transfer Number is the number airtime was transferred to if airtime transfer mode was used</li>
                            <li class="bg-light py-2 px-2 text-dark">Pin is the airtime pin loaded for airtime pin mode</li>
                            <li class="bg-light py-2 px-2 text-dark">User amount is amount the amount the user entered when making deposit</li>
                            <li class="bg-light py-2 px-2 text-dark"> Validated amount is the amount returned by the payment gateway as the amount recieved</li>
                            <li class="bg-light py-2 px-2 text-dark"> Initial validation is the first message recieved from the payment gateway after transaction was sent</li>
                            <li class="bg-light py-2 px-2 text-dark">Final validation is the message sent by the gateway after the airtime has been verified</li>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
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
                            <th scope="col">Batch Number</th>
                            <th scope="col">Elfrique reference</th>
                            <th scope="col">Cheetahpay reference</th>
                            <th scope="col">Product	User amount</th>
                            <th scope="col">Validated amount</th>
                            <th scope="col">PIN	</th>
                            <th scope="col">NETWORK	MODE</th>
                            <th scope="col">STATUS</th>
                            <th scope="col">PIN</th>
                            <th scope="col">DEPOSITORS PHONE</th>
                            <th scope="col">TRANSFER NUMBER</th>
                            <th scope="col">FINAL VALIDATION</th>
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
            </section>
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