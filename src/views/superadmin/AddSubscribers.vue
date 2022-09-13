<template>
    <title>Add Subscribers | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1 class="create">Add Subscribers</h1>
            <nav>
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                <li class="breadcrumb-item active">General</li>
                <li class="breadcrumb-item active"><router-link to="/superadmin/overview-general" class="routers"><a>Overview</a></router-link></li>
                <li class="breadcrumb-item active">Add Subscribers</li>
                </ol>
            </nav>
        </div>
        <!-- End Page Title -->
        <section class="section card">
            <div class="container subscribe-email-section mt-5 mb-5">
            <div class="row justify-content-center">
                <div class="col-lg-12 mb-2 text-center">
                    <h4 class="create">
                        Add Subscribers Email
                    </h4>
                </div>
                <div class="col-lg-10">
                    <form>
                        <input class="email-input" type="email" placeholder="Enter Email">
                        <input class="remove-input" type="text" value="Remove">
                        <div class="mt-3">
                            <button class="btn btn-primary me-2" type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop">Add <i class="bi bi-plus-circle"></i></button>
                            <button class="btn btn-success" type="submit">Save</button>
                        </div>
                    </form>
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
                <section class="section">
            <div class="row">
            <div class="col-lg-12">
                <div class="subscribe-email-section mt-5 mb-5">
                    <form>
                        <input class="email-input" type="email" placeholder="Enter Your Email Address">
                        <input class="remove-input" type="text" value="Remove">
                        <div class="mt-3">
                            <button class="btn btn-success" type="submit">Add</button>
                        </div>
                    </form>
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