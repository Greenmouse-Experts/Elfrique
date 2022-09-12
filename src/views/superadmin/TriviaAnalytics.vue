<template>
    <title>Trivia Analytics | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Trivia Analytics</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Sales Analytics</li>
                    <li class="breadcrumb-item"><router-link to="/superadmin/overview-sales-analytics" class="routers"><a>Overview</a></router-link></li>
                    <li class="breadcrumb-item active">Trivia Analytics</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <div class="container start-voting-div">
            <div class="row justify-content-center">
                <div class="col-lg-11 start-voting-inner-div">
                    <form>
                        <div class="row">
                            <div class="col-lg-12 mt-2">
                                <label>Select Trivia</label>
                                <select class="input">
                                    <option>Select Trivia</option>
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
                                <button value="proceed"
                                type="button"
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
              <b>Trivia Analytics</b>
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
                    <div  class="text-center">
                        <b>
                            User Not Found
                        </b>
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