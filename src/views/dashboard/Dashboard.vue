<template>
  <title>Dashboard | Elfrique</title>
  <dash-header />

  <!--------Main Content--------->
  <main id="main" class="main">
    <!--Page Title-->
    <div class="pagetitle">
      <h1 class="create">Organiser Dashboard</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/organiser/dashboard" class="routers"
              ><a>Home</a></router-link
            >
          </li>
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div>

    <div
      v-if="role == 'normalUser'"
      class="alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      please
      <a
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        class=""
        >click here</a
      >
      to update your profile details

      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
    <!--Page Body-->
    <section class="section dashboard mt-3">
      <div class="col-lg-12">
        <div class="row justify-content-center">
          <!--Box 1-->
          <div class="col-xxl-6 col-md-6">
            <div class="card info-card vote-card">
              <div class="card-body">
                <h5 class="card-title">Votes</h5>
                <div class="d-flex align-items-center">
                  <div
                    class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                  >
                    <img src="@/assets/images/icon-vote.png" />
                  </div>
                  <div class="ps-3">
                    <h6>{{ votes }}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Box 2-->
          <!-- <div class="col-xxl-2 col-md-6">
                        <div class="card info-card ticket-card">
                            <div class="card-body">
                                <h5 class="card-title">Tickets</h5>
                                <div class="d-flex align-items-center">
                                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                        <img src="@/assets/images/icon-ticket.png">
                                    </div>
                                    <div class="ps-3">
                                        <h6>{{ticket}}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
          <!--Box 3-->
          <div class="col-xxl-6 col-md-6">
            <div class="card info-card form-card">
              <div class="card-body">
                <h5 class="card-title">Forms</h5>
                <div class="d-flex align-items-center">
                  <div
                    class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                  >
                    <img src="@/assets/images/icon-form.png" />
                  </div>
                  <div class="ps-3">
                    <h6>{{ form }}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Box 4-->
          <div class="col-xxl-6 col-md-6">
            <div class="card info-card trivia-card">
              <div class="card-body">
                <h5 class="card-title">Trivia</h5>
                <div class="d-flex align-items-center">
                  <div
                    class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                  >
                    <img src="@/assets/images/icon-trivia.png" />
                  </div>
                  <div class="ps-3">
                    <h6>{{ trivia }}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Box 5-->
          <div class="col-xxl-6 col-md-6">
            <div class="card info-card event-card">
              <div class="card-body">
                <h5 class="card-title">Events</h5>
                <div class="d-flex align-items-center">
                  <div
                    class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                  >
                    <img src="@/assets/images/icon-event.png" />
                  </div>
                  <div class="ps-3">
                    <h6>{{ event }}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Box 6-->
          <!-- <div class="col-xxl-6 col-md-6">
                        <div class="card info-card vendor-card">
                            <div class="card-body">
                                <h5 class="card-title">Vendor</h5>
                                <div class="d-flex align-items-center">
                                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                        <img src="@/assets/images/icon-vendor.png">
                                    </div>
                                    <div class="ps-3">
                                        <h6>{{vendor}}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
        </div>
      </div>
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <!--Tabs-->
            <ul class="nav nav-tabs tabs-dashboard" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="voting-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#voting"
                  type="button"
                  role="tab"
                  aria-controls="voting"
                  aria-selected="true"
                >
                  Voting
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="ticket-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#ticket"
                  type="button"
                  role="tab"
                  aria-controls="ticket"
                  aria-selected="false"
                >
                  Events
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="form-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#form"
                  type="button"
                  role="tab"
                  aria-controls="form"
                  aria-selected="false"
                >
                  Forms
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="trivia-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#trivia"
                  type="button"
                  role="tab"
                  aria-controls="trivia"
                  aria-selected="false"
                >
                  Trivias
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="referrals-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#referrals"
                  type="button"
                  role="tab"
                  aria-controls="referrals"
                  aria-selected="false"
                >
                  Referrals
                </button>
              </li>
              <!-- <li class="nav-item" role="presentation">
                                <button class="nav-link" id="payout-tab" data-bs-toggle="tab" data-bs-target="#payout" type="button" role="tab"
                                    aria-controls="blog" aria-selected="false">Payouts</button>
                            </li> -->
            </ul>

            <div class="tab-content pt-2" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="voting"
                role="tabpanel"
                aria-labelledby="voting-tab"
              >
                <div class="card">
                  <div
                    class="alert alert-primary alert-dismissible fade show"
                    role="alert"
                  >
                    Create Your Own Voting Contest.
                    <router-link to="/organiser/start-voting" class="routers"
                      ><strong>Click Me!</strong></router-link
                    >
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="card-body card-table">
                    <!--Table-->
                    <table
                      id="voteTable"
                      ref="vote"
                      class="table datatable card-table-table"
                    >
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Title</th>
                          <th scope="col">Image</th>
                          <th scope="col">Type</th>
                          <th scope="col">Fee</th>
                          <th scope="col">Voting Limit</th>
                          <th scope="col">Payment</th>
                          <!-- <th scope="col">Status</th> -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in voteContest" :key="item.id">
                          <th scope="row">#</th>
                          <td>{{ item.title }}</td>
                          <td>
                            <img :src="item.image" style="width: 100px" />
                          </td>
                          <td>{{ item.type }}</td>
                          <td>{{ item.fee }}</td>
                          <td>{{ item.votelimit }}</td>
                          <td>{{ item.paymentgateway }}</td>
                          <!-- <td>{{ item.packagestatus }}</td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="ticket"
                role="tabpanel"
                aria-labelledby="ticket-tab"
              >
                <div class="card">
                  <div
                    class="alert alert-primary alert-dismissible fade show"
                    role="alert"
                  >
                    Start Sales of Your Event Tickets.
                    <router-link to="/organiser/create-event" class="routers"
                      ><strong>Click Me!</strong></router-link
                    >
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="card-body card-table">
                    <table
                      ref="event"
                      class="table datatable card-table-table"
                      id="eventTable"
                    >
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Title</th>
                          <th scope="col">Image</th>
                          <th scope="col">Venue</th>
                          <th scope="col">Starting Date</th>
                          <th scope="col">End Date</th>
                          <th scope="col">Organisation</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in events" :key="item.id">
                          <th scope="row">#</th>
                          <td>{{ item.title }}</td>
                          <td>
                            <img :src="item.image" style="width: 100px" />
                          </td>
                          <td>{{ item.venue }}</td>
                          <td>{{ item.startdate }}</td>
                          <td>{{ item.enddate }}</td>
                          <td>{{ item.organisation }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="form"
                role="tabpanel"
                aria-labelledby="form-tab"
              >
                <div class="card">
                  <div
                    class="alert alert-primary alert-dismissible fade show"
                    role="alert"
                  >
                    Start Sales of Your Forms Online.
                    <router-link to="/organiser/create-form" class="routers"
                      ><strong>Click Me!</strong></router-link
                    >
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="card-body card-table">
                    <!--Table-->
                    <table
                      ref="form"
                      class="table datatable card-table-table"
                      id="formTable"
                    >
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Title</th>
                          <th scope="col">Image</th>
                          <th scope="col">Type</th>
                          <th scope="col">Fee</th>
                          <th scope="col">Starting Date</th>
                          <th scope="col">Closing Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in eventForm" :key="item.id">
                          <th scope="row">#</th>
                          <td>{{ item.title }}</td>
                          <td>
                            <img :src="item.image" style="width: 100px" />
                          </td>
                          <td>{{ item.type }}</td>
                          <td>{{ item.fee }}</td>
                          <td>{{ item.startdate }}</td>
                          <td>{{ item.closedate }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="trivia"
                role="tabpanel"
                aria-labelledby="trivia-tab"
              >
                <div class="card">
                  <div
                    class="alert alert-primary alert-dismissible fade show"
                    role="alert"
                  >
                    Create Your Trivia.
                    <router-link to="/organiser/create-trivia" class="routers"
                      ><strong>Click Me!</strong></router-link
                    >
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="card-body card-table">
                    <!--Table-->
                    <table
                      ref="trivia"
                      class="table datatable card-table-table"
                      id="triviaTable"
                    >
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">ID</th>
                          <th scope="col">Title</th>
                          <th scope="col">Image</th>
                          <th scope="col">Type</th>
                          <th scope="col">Duration</th>
                          <!-- <th scope="col">Options</th> -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in trivias" :key="item.id">
                          <th scope="row">#</th>
                          <td>{{ item.id }}</td>
                          <td>{{ item.title }}</td>
                          <td>
                            <img :src="item.image" style="width: 100px" />
                          </td>
                          <td>{{ item.type }}</td>
                          <td>{{ item.duration }}</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="referrals"
                role="tabpanel"
                aria-labelledby="referrals-tab"
              >
                <!--People You Referred-->
                <div class="card">
                  <div class="referral-link-here">
                    <h3 class="mb-3 text-dark font-weight-bold">
                      Your referral link:
                    </h3>
                    <input
                      class="input-url"
                      type="url"
                      placeholder="Your created short url will appear here"
                      disabled
                      :value="referral"
                    />
                    <input
                      class="input-url-button"
                      type="button"
                      value="Copy"
                    />
                  </div>
                  <div class="card-body card-table">
                    <!--Table-->
                    <p class="text-center p-text">People you referred</p>
                    <table
                      ref="referrer"
                      id="myReferral"
                      class="table datatable card-table-table"
                    >
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Email</th>
                          <th scope="col">Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(con, index) in content" :key="con.id">
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ con.user.email }}</td>
                          <td>
                            {{ con.user.firstname }} {{ con.user.lastname }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!--Your Referral Earnings-->
                <div class="card">
                  <div class="card-body card-table">
                    <!--Table-->
                    <p class="text-center p-text">Your referral earnings</p>
                    <table
                      class="table datatable card-table-table"
                      id="ref_earnings"
                    >
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Product</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Earned From</th>
                          <th scope="col">Date Added</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="payout"
                role="tabpanel"
                aria-labelledby="payout-tab"
              >
                <div class="card">
                  <div
                    class="alert alert-primary alert-dismissible fade show"
                    role="alert"
                  >
                    Your Payouts requests
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="card-body card-table">
                    <!--Table-->
                    <table class="table datatable card-table-table" id="payout">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">ID</th>
                          <th scope="col">Product</th>
                          <th scope="col">Product ID</th>
                          <th scope="col">Approval Status</th>
                          <th scope="col">Payment Status</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Date Added</th>
                          <th scope="col">View Narration</th>
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
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div
      class="modal fade sellerModal"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Become a Seller
            </h5>
          </div>
          <div class="modal-body">
            <form @submit.prevent="seller">
              <div class="row">
                <div class="col-lg-12">
                  <p>Fill up your info below to continue</p>
                </div>
                <div class="col-lg-6 mb-2">
                  <label>Bank Account Name</label>
                  <input
                    v-model="profile.accountname"
                    type="text"
                    class="input"
                    required
                  />
                </div>
                <div class="col-lg-6 mb-2">
                  <label>BankAccount Number</label>
                  <input
                    v-model="profile.accountnumber"
                    type="number"
                    class="input"
                    required
                  />
                </div>
                <div class="col-lg-12 mb-2">
                  <label>Bank Name</label>
                  <select v-model="profile.bankname" class="input" required>
                    <option value="Choose Bank Name" hidden>
                      Choose Bank Name
                    </option>
                    <option value="AB Microfinance Bank">
                      AB Microfinance Bank
                    </option>
                    <option value="ASOSavings & Loan">ASOSavings & Loan</option>
                    <option value="Access Bank Plc">Access Bank Plc</option>
                    <option value="Access Money">Access Money</option>
                    <option value="Access Y'ello & Beta">
                      Access Y'ello & Beta
                    </option>
                    <option value="ACCIONO MFB">ACCIONO MFB</option>
                    <option value="Addosser Microfinance Bank">
                      Addosser Microfinance Bank
                    </option>
                    <option value="Advans La Fayette">Advans La Fayette</option>
                    <option value="Alat By Wema">Alat By Wema</option>
                    <option value="AssetMatrix MFB">AssetMatrix MFB</option>
                    <option value="Bowen MFB">Bowen MFB</option>
                    <option value="Carbon">Carbon</option>
                    <option value="Cellulant">Cellulant</option>
                    <option value="CIti Bank">CIti Bank</option>
                    <option value="Contec Global">Contec Global</option>
                    <option value="CoreStep Microfinance Bank">
                      CoreStep Microfinance Bank
                    </option>
                    <option value="Coronation">Coronation</option>
                    <option value="Diamond Bank">Diamond Bank</option>
                    <option value="Eartholeum">Eartholeum</option>
                    <option value="e-BARCs MFB">e-BARCs MFB</option>
                    <option value="Ecobank Mobile">Ecobank Mobile</option>
                    <option value="Ecobank Nigeria Plc">
                      Ecobank Nigeria Plc
                    </option>
                    <option value="Ecobank Xpress Account">
                      Ecobank Xpress Account
                    </option>
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
                    <option value="First Bank Of Nigeria">
                      First Bank Of Nigeria
                    </option>
                    <option value="First City Monument Bank FCMB">
                      First City Monument Bank FCMB
                    </option>
                    <option value="FortisMobile">FortisMobile</option>
                    <option value="GTMobile">GTMobile</option>
                    <option value="Globus Bank">Globus Bank</option>
                    <option value="GoMoney">GoMoney</option>
                    <option value="Guaranty Trust Bank GTB">
                      Guaranty Trust Bank GTB
                    </option>
                    <option value="Hedonmark">Hedonmark</option>
                    <option value="Heritage Banking">Heritage Banking</option>
                    <option value="Hope PSB">Hope PSB</option>
                    <option value="Innovectives Kesh">Innovectives Kesh</option>
                    <option value="Intellifin">Intellifin</option>
                    <option value="Jaiz Bank Plc">Jaiz Bank Plc</option>
                    <option value="Kegow">Kegow</option>
                    <option value="Keystone Bank">Keystone Bank</option>
                    <option value="Kredi Money Microfinance Bank">
                      Kredi Money Microfinance Bank
                    </option>
                    <option value="Kuda MFB">Kuda MFB</option>
                    <option value="Letshego Microfinance Bank">
                      Letshego Microfinance Bank
                    </option>
                    <option value="Lotus Bank">Lotus Bank</option>
                    <option value="Mint - Finex MFB">Mint - Finex MFB</option>
                    <option value="Monie Point">Monie Point</option>
                    <option value="Mkudi">Mkudi</option>
                    <option value="MoneyBox">MoneyBox</option>
                    <option value="Nigeria Int'l Bank (CITIGROUP)">
                      Nigeria Int'l Bank (CITIGROUP)
                    </option>
                    <option value="One Finance">One Finance</option>
                    <option value="Paga">Paga</option>
                    <option value="Palmpay">Palmpay</option>
                    <option value="Parkway">Parkway</option>
                    <option value="Parkway-ReadyCash">Parkway-ReadyCash</option>
                    <option value="Polaris Bank Plc">Polaris Bank Plc</option>
                    <option value="Providus Bank Plc">Providus Bank Plc</option>
                    <option value="Rubies MFB">Rubies MFB</option>
                    <option value="Stanbic IBTC @ease Wallet">
                      Stanbic IBTC @ease Wallet
                    </option>
                    <option value="Stanbic Mobile">Stanbic Mobile</option>
                    <option value="Standard Chartered Bank">
                      Standard Chartered Bank
                    </option>
                    <option value="Sterling Bank">Sterling Bank</option>
                    <option value="TRJBank">TRJBank</option>
                    <option value="TagPay">TagPay</option>
                    <option value="TessyMobile">TessyMobile</option>
                    <option value="Titan Trust Bank">Titan Trust Bank"</option>
                    <option value="Union Bank Of Nigeria">
                      Union Bank Of Nigeria
                    </option>
                    <option value="United Bank For Africa">
                      United Bank For Africa
                    </option>
                    <option value="Unity Bank Plc">Unity Bank Plc</option>
                    <option value="VFB MFB">VFB MFB</option>
                    <option value="VNetworks">VNetworks</option>
                    <option value="Wema Bank">Wema Bank</option>
                    <option value="Wetland MFB">Wetland MFB</option>
                    <option value="Zenith Bank">Zenith Bank</option>
                    <option value="Zenith Mobile">Zenith Mobile</option>
                    <option value="Zinternet - KongaPay">
                      Zinternet - KongaPay
                    </option>
                    <option value="9PSB">9PSB</option>
                  </select>
                </div>
                <div class="col-lg-6 mb-2">
                  <label>About You</label>
                  <input
                    v-model="profile.about"
                    class="textarea"
                    name="about"
                    id="about"
                    cols="40"
                    rows="4"
                    placeholder="Tell us about yourself"
                  />
                </div>
                <div class="col-lg-6 mb-2">
                  <label>Address</label>
                  <input
                    v-model="profile.address"
                    class="textarea"
                    name="address"
                    id="address"
                    cols="40"
                    rows="15"
                    placeholder="Enter your address"
                  />
                </div>
                <div class="col-lg-12 mb-2">
                  <label>Gender</label>
                  <select v-model="profile.gender" class="input" required>
                    <option hidden>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div class="col-lg-6 mb-2">
                  <label>Your Twitter Account URL</label>
                  <input
                    v-model="profile.twitterURL"
                    type="url"
                    class="input"
                  />
                </div>
                <div class="col-lg-6 mb-2">
                  <label>Your Facebook Account URL</label>
                  <input
                    v-model="profile.facebookURL"
                    type="url"
                    class="input"
                  />
                </div>
                <div class="col-lg-6 mb-2">
                  <label>Your Instagram Account URL</label>
                  <input
                    v-model="profile.instagramURL"
                    type="url"
                    class="input"
                  />
                </div>
                <div class="col-lg-12 mt-2">
                  <button
                    type="submit"
                    class="btn btn-success"
                    :disabled="loading"
                  >
                    Submit Details<span
                      v-show="loading"
                      class="spinner-border spinner-border-sm"
                    ></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              :data-bs-dismiss="modal"
            >
              Skip Form
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>

  <dash-footer />
</template>

<style scoped src="@/assets/css/dashStyle.css"></style>

<script>
import Header from "./dash-header.vue";
import Footer from "./dash-footer.vue";
import ProfileService from "../../service/profile.service";
import ReferralService from "../../service/referral.service";
import GetDashboard from "../../service/getDashboard";

import { _BASE_URL } from "../../configs";
export default {
  name: "Elfrique",
  components: {
    "dash-header": Header,
    "dash-footer": Footer,
  },
  data() {
    return {
      ref_Id: "",
      role: "",
      referral: "",
      message: "",
      content: "",
      adminId: "",
      form: 0,
      trivia: 0,
      trivias: {},
      eventForm: {},
      event: 0,
      events: {},
      votes: 0,
      modal: "modal",
      content: "",
      message: "",
      successful: false,
      loading: false,
      userId: "",
      profile: {
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        accountname: "",
        accountnumber: "",
        bankname: "",
        about: "",
        address: "",
        twitterURL: "",
        facebookURL: "",
        instagramURL: "",
      },
      voteContest: {},
      vendor: 0,
      ticket: 0,
      uri: "data:application/vnd.ms-excel;base64,",
      template:
        '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
      base64: function (s) {
        return window.btoa(unescape(encodeURIComponent(s)));
      },
      format: function (s, c) {
        return s.replace(/{(\w+)}/g, function (m, p) {
          return c[p];
        });
      },
    };
  },

  computed: {
    currentUser() {
      const user = this.$store.state.auth.user;
      if (user) {
        return user;
      }
    },
  },
  created() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }

    ProfileService.getProfile().then(
      (response) => {
        this.ref_Id = response.data.profile.adminuser.reference;
        this.role = response.data.profile.adminuser.role;
        this.referral =
          "https://" +
          window.location.href.split("/")[2] +
          "/signup?referral=" +
          this.ref_Id;
        // console.log(window.location.href.split("/"));
        //  _BASE_URL + "signup?referral=" + this.ref_Id;
        this.adminId = response.data.profile.adminuser.id;

        GetDashboard.getDashboard(this.adminId).then((res) => {
          let data = res.data;
          this.form = res?.data?.eventforms?.length;
          this.eventForm = res?.data?.eventforms;
          this.event = res?.data?.events?.length;
          this.events = res?.data?.events;
          this.trivia = res?.data?.trivia?.length;
          this.trivias = res?.data?.trivia;
          this.votes = res?.data?.votingContests?.length;
          this.voteContest = res?.data?.votingContests;
          this.events.filter((el) => {
            this.ticket = el.eventsTickets.length;
          });
          setTimeout(function () {
            $("#voteTable").DataTable({
              dom: "Bfrtip",
              pageLength: 10,
              buttons: ["copy", "csv", "excel", "pdf", "print"],
            });
            $("#formTable").DataTable({
              dom: "Bfrtip",
              pageLength: 10,
              buttons: ["copy", "csv", "excel", "pdf", "print"],
            });
            $("#eventTable").DataTable({
              dom: "Bfrtip",
              pageLength: 10,
              buttons: ["copy", "csv", "excel", "pdf", "print"],
            });
            $("#triviaTable").DataTable({
              dom: "Bfrtip",
              pageLength: 10,
              buttons: ["copy", "csv", "excel", "pdf", "print"],
            });
            $("#ref_earnings").DataTable({
              dom: "Bfrtip",
              pageLength: 10,
              buttons: ["copy", "csv", "excel", "pdf", "print"],
            });
            $("#myReferral").DataTable({
              dom: "Bfrtip",
              pageLength: 10,
              buttons: ["copy", "csv", "excel", "pdf", "print"],
            });
          }, 1000);
        });
      },
      (error) => {
        this.message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );

    ReferralService.getReferral().then(
      (response) => {
        this.content = response.data.referrals;
      },
      (error) => {
        this.message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },

  methods: {
    seller() {
      this.loading = true;
      ProfileService.becomeSeller(this.profile).then(
        (response) => {
          this.message = response.data.message;
          this.successful = true;
          this.loading = false;
          this.modal = "";
          window.location.reload();
          //this.$router.push("/organiser/dashboard");
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            /* error.messag */ error.response.data.errors[0].message ||
            "something went wrong please try again";
          error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>