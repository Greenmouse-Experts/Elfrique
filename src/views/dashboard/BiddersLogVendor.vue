<template>
    <title>View Proposals Project| Elfrique</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1 class="create">View Proposals</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Vendor</li>
                    <li class="breadcrumb-item active"><router-link to="/organiser/view-vendor" class="routers">View Vendor</router-link></li>
                    <li class="breadcrumb-item active">View Proposals</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <div class="container create-refer-div">
            <div class="row justify-content-center">
                <div class="col-lg-12 start-voting-inner-div">
                <form>
                    <div class="row">
                    <div class="col-lg-12 mt-4">
                        <label for="vote option">Select a job service before viewing the bidders</label>
                        <select id="gateway" v-model="eventId" required>
                        <option v-for="con in content" :key="con.id" :value="con.id">
                            {{ con.title }}
                        </option>
                        </select>
                    </div>
                    <div class="col-lg-12 mt-4">
                        <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        >
                        Submit
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
                <b>Create referral</b>
                </h5>
                <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ></button>
            </div>
            <div class="modal-body">
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
                            <th scope="col">Surname</th>
                            <th scope="col">Email</th>
                            <th scope="col">Telephone</th>
                            <th scope="col">Vendor</th>
                            <th scope="col">Bid Amount (&#8358;)</th>
                            <th scope="col">More Info</th>
                            <th scope="col">Date Submitted</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ayomide</td>
                            <td>Hamzat</td>
                            <td>myemail@email.com</td>
                            <td>08012345678</td>
                            <td><a href="#">DJ Service</a></td>
                            <td>50,000</td>
                            <td>I'm a professional DJ, with 5 years experience, and certified music expert</td>
                            <td>2022-04-08 13:10:58</td>
                            <td>
                                <button class="btn btn-primary btn-sm mx-1 text-dark m-1">Contact</button>
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