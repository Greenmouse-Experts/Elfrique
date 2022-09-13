<template>
    <title>Vote Payout Setting | Elfrique - Super Admin</title>
    <dash-header/>

    <!--------Main Content--------->
    <main id="main" class="main">
        <div class="pagetitle">
            <h1 class="create">Payout Setting</h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/superadmin/dashboard" class="routers"><a>Home</a></router-link></li>
                    <li class="breadcrumb-item active">Voting</li>
                    <li class="breadcrumb-item active"><router-link to="/superadmin/overview-voting" class="routers"><a>Overview</a></router-link></li>
                    <li class="breadcrumb-item active">Payout Setting</li>
                </ol>
            </nav>
        </div><!-- End Page Title -->

        <div class="container start-voting-div create-event-div payout-setting-div">
            <div class="row justify-content-center">
                <form>
                    <div class="row justify-content-center">
                        <div class="col-lg-11 event-details-header">Update Vote Payout Presetting</div>
                        <!--Update Vote Payout Presetting DIV-->
                        <div class="col-lg-11 start-voting-inner-div">
                            <div class="row">
                                <!--Payment Gateway (Local)-->
                                <div class="col-lg-4 mt-2">
                                    <label for="event title">Payment Gateway (Local)</label>
                                    <input class="input" type="number">
                                </div>
                                <!--Payment Gateway (International)-->
                                <div class="col-lg-4 mt-2">
                                    <label for="event title">Payment Gateway (International)</label>
                                    <input class="input" type="number">
                                </div>
                                <!--Payment Gateway (Airtime)-->
                                <div class="col-lg-4 mt-2">
                                    <label for="event title">Payment Gateway (Airtime)</label>
                                    <input class="input" type="number">
                                </div>
                                <!--Third Party (Local)-->
                                <div class="col-lg-3 mt-2">
                                    <label for="event title">Third Party (Local)</label>
                                    <input class="input" type="number">
                                </div>
                                <!--Third Party (International)-->
                                <div class="col-lg-3 mt-2">
                                    <label for="event title">Third Party (International)</label>
                                    <input class="input" type="number">
                                </div>
                                <!--Third Party (USSD)-->
                                <div class="col-lg-3 mt-2">
                                    <label for="event title">Third Party (USSD)</label>
                                    <input class="input" type="number">
                                </div>
                                <!--Third Party (Airtime)-->
                                <div class="col-lg-3 mt-2">
                                    <label for="event title">Third Party (Airtime)</label>
                                    <input class="input" type="number">
                                </div>
                                <!--Company Percentage (Local)-->
                                <div class="col-lg-3 mt-2">
                                    <label for="event title">Company Percentage (Local)</label>
                                    <input class="input" type="number">
                                </div>
                                <!--Company Percentage (International)-->
                                <div class="col-lg-3 mt-2">
                                    <label for="event title">Company Percentage (International)</label>
                                    <input class="input" type="number">
                                </div>
                                <!--Company Share (USSD)-->
                                <div class="col-lg-3 mt-2">
                                    <label for="event title">Company Share (USSD)</label>
                                    <input class="input" type="number">
                                </div>
                                <!--Company Share (Airtime Transactions)-->
                                <div class="col-lg-3 mt-2">
                                    <label for="event title">Company Share (Airtime Transactions)</label>
                                    <input class="input" type="number">
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-11 event-details-header event-details-headerTwo">Cash Transaction</div>
                        <!--Cash Transaction DIV-->
                        <div class="col-lg-11 start-voting-inner-div">
                            <div class="row">
                                <!--Company Percentage (Local)-->
                                <div class="col-lg-3 mt-2">
                                    <label for="event title">Company Percentage (Local)</label>
                                    <input class="input" type="number">
                                </div>
                                <!--Company Percentage (International)-->
                                <div class="col-lg-3 mt-2">
                                    <label for="event title">Company Percentage (International)</label>
                                    <input class="input" type="number">
                                </div>
                                <!--Third Party (Local)-->
                                <div class="col-lg-3 mt-2">
                                    <label for="event title">Third Party (Local)</label>
                                    <input class="input" type="number">
                                </div>
                                <!--Third Party (International)-->
                                <div class="col-lg-3 mt-2">
                                    <label for="event title">Third Party (International)</label>
                                    <input class="input" type="number">
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-11 event-details-header event-details-headerTwo">Extra Settings</div>
                        <!--Extra Settings DIV-->
                        <div class="col-lg-11 start-voting-inner-div">
                            <div class="row">
                                <!--Deduction When Amount Is Above Set Level(Switch)-->
                                <div class="col-lg-4 mt-2">
                                    <label for="event title">Deduction When Amount Is Above Set Level(Switch)</label> 
                                    <div class="switch">
                                        <input type="checkbox" id="toggleAll" />
                                        <label for="toggleAll"></label>
                                    </div>
                                </div>
                                <!--Amount Threshold-->
                                <div class="col-lg-4 mt-2">
                                    <label for="event title">Amount Threshold</label>
                                    <input class="input" type="number">
                                </div>
                                <!--Amount To Deduct-->
                                <div class="col-lg-4 mt-2">
                                    <label for="event title">Amount To Deduct</label>
                                    <input class="input" type="number">
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-11 mt-4">
                            <button type="submit">Update Payout Setting</button>
                        </div>
                    </div>
                </form>
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