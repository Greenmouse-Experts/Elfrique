<template>
    <title>Overview Voting | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Voting Overview</h1>
            <nav>
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                <li class="breadcrumb-item active">Voting</li>
                <li class="breadcrumb-item active">Overview</li>
                </ol>
            </nav>
        </div>
        <!-- End Page Title -->

        <section class="section overview-box-section">
            <div class="container-fluid">
                <div class="row justify-content-center text-center">
                    <!--View Contest-->
                    <router-link to="/superadmin/view-contest" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-vot-viewcontest.png">
                            <p>View Contest</p>
                        </div>
                    </router-link>
                    <!--Cash Payment-->
                    <router-link to="#" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-vot-cashpayment.png">
                            <p>Cash Payment</p>
                        </div>
                    </router-link>
                    <!--Pending Online-->
                    <router-link to="#" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-vot-pendingonline.png">
                            <p>Pending Online</p>
                        </div>
                    </router-link>
                    <!--Payout Setting-->
                    <router-link to="/superadmin/vote-payout-setting" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-vot-payoutsetting.png">
                            <p>Payout Setting</p>
                        </div>
                    </router-link>
                    <!--Start Voting-->
                    <router-link to="/superadmin/start-voting" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-vot-startvoting.png">
                            <p class="font-weight-bold">Start Voting</p>
                        </div>
                    </router-link>
                    <!--Add Contestants-->
                    <router-link to="/superadmin/add-contestant" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-vot-addcontestant.png">
                            <p class="font-weight-bold">Add Contestants</p>
                        </div>
                    </router-link>
                    <!--Add Sponsors-->
                    <router-link to="/superadmin/add-sponsor" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-vot-addsponsor.png">
                            <p class="font-weight-bold">Add Sponsors</p>
                        </div>
                    </router-link>
                    <!--Add Category-->
                    <router-link to="/superadmin/add-category" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-vot-addcategory.png">
                            <p class="font-weight-bold">Add Category</p>
                        </div>
                    </router-link>
                    <!--Add Info-->
                    <router-link to="/superadmin/add-info" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-vot-addinfo.png">
                            <p class="font-weight-bold">Add Info</p>
                        </div>
                    </router-link>
                    <!--View Contestants-->
                    <router-link to="/superadmin/view-contestants" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-vot-viewcontestant.png">
                            <p class="font-weight-bold">View Contestants</p>
                        </div>
                    </router-link>
                    <!--Sales Analytics-->
                    <router-link to="/superadmin/vote-sales-analytics" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-vot-salesanalytic.png">
                            <p class="font-weight-bold">Sales Analytics</p>
                        </div>
                    </router-link>
                    <!--Result Setting-->
                    <router-link to="/superadmin/result-setting" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-vot-resultsetting.png">
                            <p class="font-weight-bold">Result Setting</p>
                        </div>
                    </router-link>
                    <!--Search For Vote-->
                    <router-link to="/superadmin/search-for-vote" class="routers overview-box">
                        <div class="text-center">
                            <img src="@/assets/images/icon-vot-searchforvote.png">
                            <p class="font-weight-bold">Search For Votes</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </section>
    
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