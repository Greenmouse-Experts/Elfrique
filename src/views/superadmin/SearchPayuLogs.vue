<template>
    <title>Search Payu Logs | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1 class="create">
                Search Payu Logs
            </h1>
            <nav>
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                <li class="breadcrumb-item active">General</li>
                <li class="breadcrumb-item active"><router-link to="/superadmin/overview-general" class="routers"><a>Overview</a></router-link></li>
                <li class="breadcrumb-item active">Search Payu Logs</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <div class="container start-voting-div">
            <div class="row justify-content-center">
                <div class="col-lg-12 start-voting-inner-div">
                    <form>
                        <div class="row">
                            <div class="col-lg-12 mt-2">
                                <label for="number of contestants create">Payu Reference Number</label>
                                <input class="input" type="text" placeholder="Enter payu reference number">
                            </div>
                            <div class="col-lg-12 mt-4">
                                <button type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop" value="proceed">Search <i class="bi bi-binoculars"></i>
                                </button>
                            </div>
                        </div>
                    </form>
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
                       View Search Payu Logs
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
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
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