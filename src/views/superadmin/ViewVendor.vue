<template>
    <title>View Vendor | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>View Vendor</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Vendor</li>
                    <li class="breadcrumb-item active">View Vendor</li>
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
                        <th scope="col">Vendor ID</th>
                        <th scope="col">User Email</th>
                        <th scope="col">User Telephone</th>
                        <th scope="col">Vendor Title</th>
                        <th scope="col">Vendor Image</th>
                        <th scope="col">Event Date</th>
                        <th scope="col">Date Added</th>
                        <th scope="col">Link</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>9DER34</td>
                        <td>myemail@email.com</td>
                        <td>09012345678</td>
                        <td>Event Decorator</td>
                        <td><img src="@/assets/images/event-vendor.jpg"></td>
                        <td>2022-04-08 13:10:58</td>
                        <td>Feb 2nd, 2022</td>
                        <td><a href="#">View Vendor Service</a></td>
                        <td>
                            <button class="btn btn-primary btn-sm mx-1 text-dark m-1"
                            type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
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

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl container">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel"><b>Edit Vendor</b></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="row">
                                <div class="col-md-12">
                                    <h3 class="create text-center mt-4">
                                        Edit Vendor
                                    </h3>
                                </div>
                                <div class="col-md-6">
                                    <div class="connet">
                                        <label>User name<span>*</span></label>
                                        <input type="text" placeholder="" required class="input" name="first" id="">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="connet">
                                        <label>User Email<span>*</span></label>
                                        <input type="email" placeholder="Enter Your Last Name" required class="input" name="middle" id="">
                                    </div>
                                </div>
                                <div class="col-md-6 mt-4">
                                    <div class="connet">
                                        <label>User Telephone<span>*</span></label>
                                        <input type="tel" required class="input">
                                    </div>
                                </div>
                                <div class="col-md-6 mt-4">
                                    <div class="connet">
                                        <label>Date Added<span>*</span></label>
                                        <input type="datetime-local" required class="input">
                                    </div>
                                </div>
                                <div class="col-md-3 mt-4">
                                    <div class="connet">
                                        <button>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" data-bs-dismiss="modal">Close</button>
            </div>
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