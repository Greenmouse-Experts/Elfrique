<template>
    <title>My Profile | Elfrique</title>
    <dash-header/>

    <main id="main" class="main">

    <div class="pagetitle">
      <h1>Profile</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/organiser/dashboard" class="routers"><a>Home</a></router-link></li>
          <li class="breadcrumb-item active">Profile</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section profile">
      <div class="row">
        <div class="col-xl-4">

          <div class="card">
            <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
              <img src="@/assets/images/profile-img.png" alt="Profile" class="rounded-circle">
              <h2>{{content.firstname}}  {{content.lastname}}</h2>
            </div>
          </div>

        </div>

        <div class="col-xl-8">

          <div class="card">
            <div class="card-body pt-3">
              <!-- Bordered Tabs -->
              <ul class="nav nav-tabs nav-tabs-bordered">

                <li class="nav-item">
                  <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                </li>

                <li class="nav-item">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                </li>

                <li class="nav-item">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-settings">Settings</button>
                </li>

                <li class="nav-item">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                </li>

              </ul>
              <div class="tab-content pt-2">

                <div class="tab-pane fade show active profile-overview" id="profile-overview">

                  <h5 class="card-title">Profile Details</h5>
                 

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label ">First Name</div>
                    <div class="col-lg-9 col-md-8">{{content.firstname}}</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label ">Last Name</div>
                    <div class="col-lg-9 col-md-8">{{content.lastname}}</div>
                  </div>

                  
                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Phone</div>
                    <div class="col-lg-9 col-md-8">{{content.phonenumber}}</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Email</div>
                    <div class="col-lg-9 col-md-8">{{content.email}}</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Gender</div>
                    <div class="col-lg-9 col-md-8">{{content.gender}}</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Account Name</div>
                    <div class="col-lg-9 col-md-8">{{content.accountname}}</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Account Number</div>
                    <div class="col-lg-9 col-md-8">{{content.accountnumber}}</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Bank</div>
                  </div>
                  <div class="row">
                    <div class="col-lg-9 col-md-8">{{content.bankname}}</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">About</div>
                    <div class="col-lg-9 col-md-8">{{content.about}}</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Twitter URL</div>
                    <div class="col-lg-9 col-md-8">{{content.twitterURL}}</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Facebook Url</div>
                    <div class="col-lg-9 col-md-8">{{content.facebookURL}}</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Instgram Url</div>
                    <div class="col-lg-9 col-md-8">{{content.instagramURL}}</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Registered On</div>
                    <div class="col-lg-9 col-md-8">{{format_date(content.createdAt)}}</div>
                  </div>





                </div>

                <div class="tab-pane fade profile-edit pt-3" id="profile-edit">
 
                  <!-- Profile Edit Form -->
                    <div  v-if="message" :class="successful ? 'alert-success' : 'alert-danger'" class="alert  alert-dismissible fade show" role="alert">
                      {{message}} 
                      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                     <!-- <div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'" >{{message}}</div> -->
                    <div class="row mb-3">
                      <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                      <div class="col-md-8 col-lg-9">
                        <img src="@/assets/images/profile-img.png" alt="Profile">
                        <div class="pt-2">
                          <a href="#" class="btn btn-primary btn-sm" title="Upload new profile image"><i class="bi bi-upload"></i></a>
                          <a href="#" class="btn btn-danger btn-sm" title="Remove my profile image"><i class="bi bi-trash"></i></a>
                        </div>
                      </div>
                    </div>
                     <form  name="form" @submit.prevent="editProfile">
                        <div class="row mb-3">
                          
                          <label for="firstName" class="col-md-4 col-lg-3 col-form-label">First Name</label>
                          <div class="col-md-8 col-lg-9">
                            <input  v-model="profile.firstname" name="firstname" type="text" class="form-control" id="firstName" placeholder="Enter first name">
                          </div>
                        </div>

                        <div class="row mb-3">
                          
                          <label for="lastName" class="col-md-4 col-lg-3 col-form-label">Last Name</label>
                          <div class="col-md-8 col-lg-9">
                            <input  v-model="profile.lastname" name="lastname" type="text" class="form-control" id="lastName" placeholder="Enter lastname name">
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label for="Email" class="col-md-4 col-lg-3 col-form-label">Bank Name</label>
                          <div class="col-md-8 col-lg-9">
                            <select id="gateway" class="input" required>
                          <option value="select vote option" >Select Your Bank </option>
                          <option value="Choose Bank Name" hidden>Choose Bank Name</option>
                              <option value="AB Microfinance Bank">AB Microfinance Bank</option>
                              <option value="ASOSavings & Loan">ASOSavings & Loan</option>
                              <option value="Access Bank Plc">Access Bank Plc</option>
                              <option value="Access Money">Access Money</option>
                              <option value="Access Y'ello & Beta">Access Y'ello & Beta</option>
                              <option value="ACCIONO MFB">ACCIONO MFB</option>
                              <option value="Addosser Microfinance Bank">Addosser Microfinance Bank</option>
                              <option value="Advans La Fayette">Advans La Fayette</option>
                              <option value="Alat By Wema">Alat By Wema</option>
                              <option value="AssetMatrix MFB">AssetMatrix MFB</option>
                              <option value="Bowen MFB">Bowen MFB</option>
                              <option value="Carbon">Carbon</option>
                              <option value="Cellulant">Cellulant</option>
                              <option value="CIti Bank">CIti Bank</option>
                              <option value="Contec Global">Contec Global</option>
                              <option value="CoreStep Microfinance Bank">CoreStep Microfinance Bank</option>
                              <option value="Coronation">Coronation</option>
                              <option value="Diamond Bank">Diamond Bank</option>
                              <option value="Eartholeum">Eartholeum</option>
                              <option value="e-BARCs MFB">e-BARCs MFB</option>
                              <option value="Ecobank Mobile">Ecobank Mobile</option>
                              <option value="Ecobank Nigeria Plc">Ecobank Nigeria Plc</option>
                              <option value="Ecobank Xpress Account">Ecobank Xpress Account</option>
                              <option value="Ekondo MFB">Ekondo MFB</option>
                              <option value="Enterprise Bank">Enterprise Bank</option>
                              <option value="Eyowo">Eyowo</option>
                              <option value="eTranzact">eTranzact</option>
                              <option value="FBN Mobile">FBN Mobile</option>
                              <option value="FCMB Easy Account">FCMB Easy Account</option>
                              <option value="FET">FET</option>
                              <option value="FFS MFB">FFS MFB</option>
                              <option value="FINCA MFB">FINCA MFB</option>
                              <option value="FirstMonie Wallet">FirstMonie Wallet</option>
                              <option value="Fidelity Bank">Fidelity Bank</option>
                              <option value="Fidelity Mobile">Fidelity Mobile</option>
                              <option value="FinaTrust MFB">FinaTrust MFB</option>
                              <option value="First Bank Of Nigeria">First Bank Of Nigeria</option>
                              <option value="First City Monument Bank FCMB">First City Monument Bank FCMB</option>
                              <option value="FortisMobile">FortisMobile</option>
                              <option value="GTMobile">GTMobile</option>
                              <option value="Globus Bank">Globus Bank</option>
                              <option value="GoMoney">GoMoney</option>
                              <option value="Guaranty Trust Bank GTB">Guaranty Trust Bank GTB</option>
                              <option value="Hedonmark">Hedonmark</option>
                              <option value="Heritage Banking">Heritage Banking</option>
                              <option value="Hope PSB">Hope PSB</option>
                              <option value="Innovectives Kesh">Innovectives Kesh</option>
                              <option value="Intellifin">Intellifin</option>
                              <option value="Jaiz Bank Plc">Jaiz Bank Plc</option>
                              <option value="Kegow">Kegow</option>
                              <option value="Keystone Bank">Keystone Bank</option>
                              <option value="Kredi Money Microfinance Bank">Kredi Money Microfinance Bank</option>
                              <option value="Kuda MFB">Kuda MFB</option>
                              <option value="Letshego Microfinance Bank">Letshego Microfinance Bank</option>
                              <option value="Lotus Bank">Lotus Bank</option>
                              <option value="Mint - Finex MFB">Mint - Finex MFB</option>
                              <option value="Monie Point">Monie Point</option>
                              <option value="Mkudi">Mkudi</option>
                              <option value="MoneyBox">MoneyBox</option>
                              <option value="Nigeria Int'l Bank (CITIGROUP)">Nigeria Int'l Bank (CITIGROUP)</option>
                              <option value="One Finance">One Finance</option>
                              <option value="Paga">Paga</option>
                              <option value="Palmpay">Palmpay</option>
                              <option value="Parkway">Parkway</option>
                              <option value="Parkway-ReadyCash">Parkway-ReadyCash</option>
                              <option value="Polaris Bank Plc">Polaris Bank Plc</option>
                              <option value="Providus Bank Plc">Providus Bank Plc</option>
                              <option value="Rubies MFB">Rubies MFB</option>
                              <option value="Stanbic IBTC @ease Wallet">Stanbic IBTC @ease Wallet</option>
                              <option value="Stanbic Mobile">Stanbic Mobile</option>
                              <option value="Standard Chartered Bank">Standard Chartered Bank</option>
                              <option value="Sterling Bank">Sterling Bank</option>
                              <option value="TRJBank">TRJBank</option>
                              <option value="TagPay">TagPay</option>
                              <option value="TessyMobile">TessyMobile</option>
                              <option value="Titan Trust Bank">Titan Trust Bank"</option>
                              <option value="Union Bank Of Nigeria">Union Bank Of Nigeria</option>
                              <option value="United Bank For Africa">United Bank For Africa</option>
                              <option value="Unity Bank Plc">Unity Bank Plc</option>
                              <option value="VFB MFB">VFB MFB</option>
                              <option value="VNetworks">VNetworks</option>
                              <option value="Wema Bank">Wema Bank</option>
                              <option value="Wetland MFB">Wetland MFB</option>
                              <option value="Zenith Bank">Zenith Bank</option>
                              <option value="Zenith Mobile">Zenith Mobile</option>
                              <option value="Zinternet - KongaPay">Zinternet - KongaPay</option>
                              <option value="9PSB">9PSB</option>
                            </select>
                        </div>
                    </div>


                        <div class="row mb-3">
                          <label for="accountnumber" class="col-md-4 col-lg-3 col-form-label">Account Number</label>
                          <div class="col-md-8 col-lg-9">
                            <input v-model="profile.accountnumber" name="address" type="text" class="form-control"  placeholder="Enter Account Number">
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label for="accountname" class="col-md-4 col-lg-3 col-form-label">Account Name</label>
                          <div class="col-md-8 col-lg-9">
                            <input v-model="profile.accountname" name="address" type="text" class="form-control" placeholder="Enter Account Name">
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label for="Phone" class="col-md-4 col-lg-3 col-form-label">Phone</label>
                          <div class="col-md-8 col-lg-9">
                            <input  v-model="profile.phonenumber" name="phonenumber" type="text" class="form-control" id="Phone" placeholder="Enter your phone number">
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label for="Email" class="col-md-4 col-lg-3 col-form-label">Email</label>
                          <div class="col-md-8 col-lg-9">
                            <input v-model="profile.email" name="email" type="email" class="form-control" id="Email" placeholder="Enter your email address">
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label for="gender" class="col-md-4 col-lg-3 col-form-label"  aria-placeholder="choose gender">Gender</label>
                          <div class="col-md-8 col-lg-9">
                              <select v-model="profile.gender" name="gender" id="gender" class="form-control">
                                  <option value="choose gender" hidden>Choose Gender</option>
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                              </select>
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label for="About" class="col-md-4 col-lg-3 col-form-label">About</label>
                          <div class="col-md-8 col-lg-9">
                            <textarea  class="form-control" cols="30" rows="5" v-model="profile.about"></textarea>
                          </div>
                        </div>
                        <div class="text-center">
                          <button type="submit" class="btn btn-success"  :disabled="loading">Save Changes <span v-show="loading" class="spinner-border spinner-border-sm"></span></button>
                        </div>
                      </form><!-- End Profile Edit Form -->

                    </div>

                <div class="tab-pane fade pt-3" id="profile-settings">

                      <!-- Settings Form -->
                  <form>

                    <div class="row mb-3">
                      <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Email Notifications</label>
                      <div class="col-md-8 col-lg-9">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="changesMade" checked>
                          <label class="form-check-label" for="changesMade">
                            Changes made to your account
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="newProducts" checked>
                          <label class="form-check-label" for="newProducts">
                            Information on new products and services
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="proOffers" checked>
                          <label class="form-check-label" for="proOffers">
                            Marketing and promo offers
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="securityNotify" checked>
                          <label class="form-check-label" for="securityNotify">
                            Security alerts
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="text-center">
                      <button type="submit" class="btn btn-success">Save Changes</button>
                    </div>
                  </form><!-- End settings Form -->

                </div>

                <div class="tab-pane fade pt-3" id="profile-change-password">
                   <div  v-if="message" :class="successful ? 'alert-success' : 'alert-danger'" class="alert  alert-dismissible fade show" role="alert">
                      {{message}} 
                      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                  <!-- Change Password Form -->
                  <form  name="form" @submit.prevent="changePassword">

                    <div class="row mb-3">
                      <label for="currentPassword" class="col-md-4 col-lg-3 col-form-label">Current Password</label>
                      <div class="col-md-8 col-lg-9">
                        <input v-model="password.oldPassword" name="oldPassword" type="password" class="form-control" id="currentPassword">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="newPassword" class="col-md-4 col-lg-3 col-form-label">New Password</label>
                      <div class="col-md-8 col-lg-9">
                        <input v-model="password.newPassword" name="newPassword" type="password" class="form-control" id="newPassword">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="renewPassword" class="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                      <div class="col-md-8 col-lg-9">
                        <input v-model="password.confirmpassword" name="confirmpassword" type="password" class="form-control" id="renewPassword">
                      </div>
                    </div>

                    <div class="text-center">
                      <button type="submit" class="btn btn-success" :disabled="loading" >Change Password <span v-show="loading" class="spinner-border spinner-border-sm"></span></button>
                    </div>
                  </form><!-- End Change Password Form -->

                </div>

              </div><!-- End Bordered Tabs -->

            </div>
          </div>

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
    import ProfileService from '../../service/profile.service'
    import moment from 'moment'

  
    export default {
      name: "Elfrique",
      components:{
      'dash-header': Header,
      'dash-footer': Footer,
      },
      data() {
    return {
      content: '',
      message: '',
      successful: false,
      loading: false,
       profile: {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        accountname: '',
        accountnumber: '',
        bankname: '',
        about: '',

      },
      password: {
        oldPassword: '',
        newPassword: '',
        confirmpassword: '',
      }
    };
  },

  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },

  created() {

     if (!this.loggedIn) {
      this.$router.push('/login');
    }

    ProfileService.getProfile().then(
      response => {
        this.content = response.data.profile;
        this.profile = this.content;
      },
      error => {
        this.message =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
        this.successful = false;
      }
    );
  },
  methods: { 
      format_date(value){
         if (value) {
           return moment(String(value)).format('MM/DD/YYYY hh:mm')
          }
      },

      editProfile(){
        this.loading = true;
        ProfileService.editProfile(this.profile).then(
          response => {
            this.message = response.data.message;
            this.successful = true;
            this.loading = false;

},
          error => {
            this.message =
              (error.response && error.response.data && error.response.data.message) ||
              /* error.messag */error.response.data.errors[0].message|| "something went wrong please try again";
              error.toString();
            this.successful = false;
            this.loading = false;
          }
        );
      },

      changePassword(){
        this.loading = true;
        ProfileService.changePassword(this.password).then(
          response => {
            this.message = response.data.message;
            this.successful = true;
            this.loading = false;
          },
          error => {
            this.message =
              (error.response && error.response.data && error.response.data.message) ||
              /* error.messag */error.response.data.errors[0].message|| "something went wrong please try again";
              error.toString();
            this.successful = false;
            this.loading = false;
          }
        );
      }
   },

  mounted(){
        window.scrollTo(0,0)
      }  
}
</script>