<template>
    <title>Voting Analytics | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1 class="create">Voting Analytics</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Sales Analytics</li>
                    <li class="breadcrumb-item"><router-link to="/superadmin/overview-sales-analytics" class="routers"><a>Overview</a></router-link></li>
                    <li class="breadcrumb-item active">Voting Analytics</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <div class="container start-voting-div">
            <div class="row justify-content-center">
                <div class="col-lg-11 start-voting-inner-div">
                    <form>
                        <div class="row">
                            <div class="col-lg-12 mt-2">
                                <label>Select contest</label>
                                <select class="input">
                                    <option>Select Contest</option>
                                </select>
                            </div>
                            <div class="col-lg-6 mt-3">
                                <label>Starting</label>
                                <input type="date" class="input">
                            </div>
                            <div class="col-lg-6 mt-3">
                                <label>Ending</label>
                                <input type="date" class="input">
                            </div>
                            <div class="col-lg-12 mt-4">
                                <button type="submit" value="proceed"
                                data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop">Submit</button>
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
              <b>Vote Sales Analytics </b>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
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
                          <th scope="col">Event Id</th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Phone</th>
                          <th scope="col">Date Added</th>
                          <th scope="col">Date Ending</th>
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