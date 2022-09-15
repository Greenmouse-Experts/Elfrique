<template>
    <title>Event Sales Analytics | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1 class="create">
                Event Sales Analytics
            </h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Registration</li>
                    <li class="breadcrumb-item"><router-link to="/superadmin/overview-registration" class="routers"><a>Overview</a></router-link></li>
                    <li class="breadcrumb-item active">Event Sales Analytics</li>
                </ol>
            </nav>
        </div>
        <!-- End Page Title -->

        <div class="container start-voting-div">
            <div class="row justify-content-center">
                <div class="col-lg-12 start-voting-inner-div">
                    <form>
                        <div class="row">
                            <div class="col-lg-12 mt-4">
                                <select name="gateway" id="gateway">
                                    <option value="select vote option">Select Your Event Option-1</option>
                                    <option value="select vote option">Select Your Event Option-2</option>
                                </select>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <button
                                type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop">
                                    View Analytics
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
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
                        <b>View Event Sales Analytics</b>
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
                                <!--Table-->
                                <table
                                    id="dataTableRef"
                                    ref="vote"
                                    class="table datatable card-table-table"
                                >
                                    <thead>
                                    <tr>
                                        <th scope="col">Event Id</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Nmae</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Home Address</th>
                                        <th scope="col">Country</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Quatity</th>
                                        <th scope="col">Ticket Name</th>
                                        <th scope="col">Reference</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Date Added</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                       <td>6</td>
                                       <td>Dancehall event</td>
                                       <td>HAMZAT</td>
                                       <td>greenmouse@gmail.com</td>
                                       <td>Ajah Lagos</td>
                                       <td>Nigeria</td>
                                       <td>1000</td>
                                       <td>1</td>
                                       <td>Regular</td>
                                       <td>O393185</td>
                                       <td>Comfirmed</td>
                                       <td>9/12/2022</td>
                                    </tr>
                                    </tbody>
                                </table>
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