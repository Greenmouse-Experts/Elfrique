<template>
    <title> Tour Sales Analytics | Elfrique</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1 class="create"> Tour Sales Analytics</h1>
            <nav>
                <!-- HAMZAT UPDATE ON TRAVEL TOUR -->
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">
                        Travel & Tour
                    </li>
                    <li class="breadcrumb-item active">
                        Tour Sales Analytics
                    </li>
                </ol>
            </nav>
        </div>
        <!-- End Page Title -->
        <div class="container create-refer-div">
            <div class="row justify-content-center">
                <div class="col-lg-12 start-voting-inner-div">
                    <form>
                        <div class="row">
                            <div class="col-lg-12 mt-4">
                                <label for="vote option" class="create">Sales Analytics</label>
                                <select id="gateway" required>
                                    <option value="select vote option" >Select Your Option </option>
                                    <option value="select vote option" >Select Your Option</option>
                                </select>
                            </div>
                            <div class="col-lg-12 mt-4">
                                <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">View Analytics</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl container">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel"><b>Sales Analytics</b></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center">
                           <b>
                                Choose From the List
                           </b>
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
        <!-- HAMZAT UPDATE ON TRAVEL TOUR  ENDS HERE -->
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