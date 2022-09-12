<template>
  <!--------Header--------->
  <header id="header" class="header fixed-top d-flex align-items-center">
    <div class="d-flex align-items-center justify-content-center">
        <a class="logo">
            <router-link to="/superadmin/dashboard" class="routers">
                <img src="@/assets/images/logo.png" alt="Elfrique Logo" />
            </router-link>
        </a>
        <i class="bi bi-list toggle-sidebar-btn"></i>
    </div>
    <!--Nav Icon-->
    <nav class="header-nav ms-auto">
        <ul class="d-flex align-items-center">
            <!--Notification Nav-->
            <!-- <li class="nav-item dropdown">
                    <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                        <i class="bi bi-bell"></i>
                        <span class="badge bg-success badge-number">4</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                        <li class="dropdown-header">
                            You have 4 new notifications
                            <span class="badge rounded-pill bg-danger p-2 ms-2 text-light">Delete All</span>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
    
                        <li class="notification-item">
                            <i class="bi bi-exclamation-circle text-warning"></i>
                            <div>
                                <h4>Lorem Ipsum</h4>
                                <p>Quae dolorem earum veritatis oditseno</p>
                                <p>30 min. ago</p>
                            </div>
                        </li>
    
                        <li>
                            <hr class="dropdown-divider">
                        </li>
    
                        <li class="notification-item">
                            <i class="bi bi-x-circle text-danger"></i>
                            <div>
                                <h4>Atque rerum nesciunt</h4>
                                <p>Quae dolorem earum veritatis oditseno</p>
                                <p>1 hr. ago</p>
                            </div>
                        </li>
    
                        <li>
                            <hr class="dropdown-divider">
                        </li>
    
                        <li class="notification-item">
                            <i class="bi bi-check-circle text-success"></i>
                            <div>
                                <h4>Sit rerum fuga</h4>
                                <p>Quae dolorem earum veritatis oditseno</p>
                                <p>2 hrs. ago</p>
                            </div>
                        </li>
    
                        <li>
                            <hr class="dropdown-divider">
                        </li>
    
                        <li class="notification-item">
                            <i class="bi bi-info-circle text-primary"></i>
                            <div>
                                <h4>Dicta reprehenderit</h4>
                                <p>Quae dolorem earum veritatis oditseno</p>
                                <p>4 hrs. ago</p>
                            </div>
                        </li>
    
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li class="dropdown-footer">
                            <a href="#">Show all notifications</a>
                        </li>
    
                    </ul> End Notification Dropdown Items  -->

            <!-- </li> -->
            <!--Profile Image Icon-->
            <li class="nav-item dropdown pe-3">
                <a class="nav-link nav-profile d-flex pe-0" href="#" data-bs-toggle="dropdown">
                    <img src="@/assets/images/profile-img.jpg" class="rounded-circle" />
                    <span class="d-none d-md-block dropdown-toggle ps-2">Elfrique</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                    <li class="dropdown-header">
                        <h6>Elfrique Solution</h6>
                    </li>
                    <li>
                        <hr class="dropdown-divider" />
                    </li>

                    <li>
                        <router-link to="/superadmin/profile" class="routers dropdown-item d-flex align-items-center">
                            <i class="bi bi-person"></i>
                            <span>My Profile</span>
                        </router-link>
                    </li>
                    <li>
                        <hr class="dropdown-divider" />
                    </li>

                    <li>
                        <hr class="dropdown-divider" />
                    </li>

                    <!-- <li>
                            <hr class="dropdown-divider">
                        </li> -->

                    <li>
                        <a class="dropdown-item d-flex align-items-center" type="button" @click="logOut">
                            <i class="bi bi-box-arrow-right"></i>
                            <span>Sign Out</span>
                        </a>
                    </li>
                    <!--Profile-->
                </ul>
                <!-- End Profile Dropdown Items -->
            </li>
        </ul>
    </nav>
  </header>

  <!--------Sidebar--------->
  <aside id="sidebar" class="sidebar">
    <ul class="sidebar-nav" id="sidebar-nav">
        <li class="nav-item">
            <router-link to="/superadmin/dashboard" class="routers nav-link collapsed">
                <img src="@/assets/images/menu-dashboard.png" />
                <span>Dashboard</span>
            </router-link>
        </li>
        <!-- Hamzat Update -->
        <li class="nav-item">
          <router-link to="/organiser/dashboard" class="routers">
              <a class="nav-link collapsed">
                  <img src="@/assets/images/menu-dashboard.png" />
                  <span>Organiser Dashboard</span>
              </a>
          </router-link>
          </li>
        <!--Profile-->
        <!-- <li class="nav-item">
          >>>>>>> 4ffd94dee3104276ac7a9beff5f15b98fb59bc89
                <router-link to="/superadmin/profile" class="routers"><a class="nav-link collapsed">
                    <img src="@/assets/images/menu-profile.png">
                    <span>Profile</span>
                </a></router-link>
            </li> -->
        <!--General-->
        <li class="nav-item">
            <router-link class="nav-link collapsed" data-bs-target="#general-nav" data-bs-toggle="collapse" to="/superadmin/overview-general"> <img src="@/assets/images/menu-general.png" /><span></span>General<i class="bi bi-chevron-down ms-auto"></i> </router-link>
            <ul id="general-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
                <li>
                    <router-link to="/superadmin/overview-general" class="routers">
                        <a><i class="bi bi-circle"></i><span>Overview</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/view-organisers" class="routers">
                        <a><i class="bi bi-circle"></i><span>View Organisers</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/short-links" class="routers">
                        <a><i class="bi bi-circle"></i><span>Short Links</span></a>
                    </router-link>
                </li>
                <!-- <li><router-link to="/superadmin/subscribers" class="routers"><a><i class="bi bi-circle"></i><span>Subscribers</span></a></router-link></li>
                    <li><router-link to="/superadmin/add-subscribers" class="routers"><a><i class="bi bi-circle"></i><span>Add Subscribers</span></a></router-link></li>
                    <li><router-link to="/superadmin/search-airtime" class="routers"><a><i class="bi bi-circle"></i><span>Search Airtime</span></a></router-link></li>
                    <li><router-link to="/superadmin/view-airtime-logs" class="routers"><a><i class="bi bi-circle"></i><span>View Airtime Logs</span></a></router-link></li> -->
                <li>
                    <router-link to="/superadmin/view-payout" class="routers">
                        <a><i class="bi bi-circle"></i><span>View Payout</span></a>
                    </router-link>
                </li>
                <!-- <li><router-link to="/superadmin/payu-log" class="routers"><a><i class="bi bi-circle"></i><span>Payu Log</span></a></router-link></li>
                    <li><router-link to="/superadmin/search-payu-logs" class="routers"><a><i class="bi bi-circle"></i><span>Search Payu Logs</span></a></router-link></li> -->
                <li>
                    <router-link to="/superadmin/add-faq" class="routers">
                        <a><i class="bi bi-circle"></i><span>Add FAQ</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/view-faqs" class="routers">
                        <a><i class="bi bi-circle"></i><span>View FAQs</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/login" class="routers">
                        <a><i class="bi bi-circle"></i><span>Admin-User-Login</span></a>
                    </router-link>
                </li>
            </ul>
        </li>
        <!--Voting-->
        <li class="nav-item">
            <router-link class="nav-link collapsed" data-bs-target="#voting-nav" data-bs-toggle="collapse" to="/superadmin/overview-voting"> <img src="@/assets/images/menu-vote.png" /><span></span>Voting<i class="bi bi-chevron-down ms-auto"></i> </router-link>
            <ul id="voting-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
                <li>
                    <router-link to="/superadmin/overview-voting" class="routers">
                        <a><i class="bi bi-circle"></i><span>Overview</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/cash-payment" class="routers">
                        <a><i class="bi bi-circle"></i><span>Cash Payment</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/pending-online" class="routers">
                        <a><i class="bi bi-circle"></i><span>Pending Online</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/vote-payout-setting" class="routers">
                        <a><i class="bi bi-circle"></i><span>Payout Setting</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/start-voting" class="routers">
                        <a><i class="bi bi-circle"></i><span>Start Voting</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/add-contestant" class="routers">
                        <a><i class="bi bi-circle"></i><span>Add Contestants</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/add-sponsor" class="routers">
                        <a><i class="bi bi-circle"></i><span>Add Sponsors</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/add-category" class="routers">
                        <a><i class="bi bi-circle"></i><span>Add Category</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/add-info" class="routers">
                        <a><i class="bi bi-circle"></i><span>Add Info</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/view-contestants" class="routers">
                        <a><i class="bi bi-circle"></i><span>View Contestants</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/view-contest" class="routers">
                        <a><i class="bi bi-circle"></i><span>View Contest</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/view-categories" class="routers">
                        <a><i class="bi bi-circle"></i><span>View Categories</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/vote-sales-analytics" class="routers">
                        <a><i class="bi bi-circle"></i><span>Sales Analytics</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/result-setting" class="routers">
                        <a><i class="bi bi-circle"></i><span>Result Setting</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/search-for-vote" class="routers">
                        <a><i class="bi bi-circle"></i><span>Search For Votes</span></a>
                    </router-link>
                </li>
            </ul>
        </li>
        <!--Registration-->
        <li class="nav-item">
            <router-link class="nav-link collapsed" data-bs-target="#reg-nav" data-bs-toggle="collapse" to="/superadmin/overview-registration"> <img src="@/assets/images/menu-registration.png" /><span></span>Event Registration<i class="bi bi-chevron-down ms-auto"></i> </router-link>
            <ul id="reg-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
                <li>
                    <router-link to="/superadmin/overview-registration" class="routers">
                        <a><i class="bi bi-circle"></i><span>Overview</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/create-event" class="routers">
                        <a><i class="bi bi-circle"></i><span>Create Event</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/add-ticket" class="routers">
                        <a><i class="bi bi-circle"></i><span>Add Ticket</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/view-event" class="routers">
                        <a><i class="bi bi-circle"></i><span>View Event</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/event-setting" class="routers">
                        <a><i class="bi bi-circle"></i><span>Event Setting</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/personal-ticket" class="routers">
                        <a><i class="bi bi-circle"></i><span>Personal Ticket</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/event-cash-payment" class="routers">
                        <a><i class="bi bi-circle"></i><span>Cash Payment</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/event-payout-setting" class="routers">
                        <a><i class="bi bi-circle"></i><span>Payout Setting</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/event-sales-analytics" class="routers">
                        <a><i class="bi bi-circle"></i><span>Sales Analytics</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/search-ticket" class="routers">
                        <a><i class="bi bi-circle"></i><span>Search For Tickets</span></a>
                    </router-link>
                </li>
            </ul>
        </li>
        <!--Forms-->
        <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#"> <img src="@/assets/images/menu-form.png" /><span></span>Forms<i class="bi bi-chevron-down ms-auto"></i> </a>
            <ul id="forms-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
                <li>
                    <router-link to="/superadmin/overview-forms" class="routers">
                        <a><i class="bi bi-circle"></i><span>Overview</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/create-form" class="routers">
                        <a><i class="bi bi-circle"></i><span>Create Form</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/build-form" class="routers">
                        <a><i class="bi bi-circle"></i><span>Build Form</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/view-forms" class="routers">
                        <a><i class="bi bi-circle"></i><span>View Forms</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/personal-forms" class="routers">
                        <a><i class="bi bi-circle"></i><span>Personal Forms</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/form-cash-payment" class="routers">
                        <a><i class="bi bi-circle"></i><span>Cash Payment</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/form-payout-setting" class="routers">
                        <a><i class="bi bi-circle"></i><span>Payout Setting</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/form-sales-analytics" class="routers">
                        <a><i class="bi bi-circle"></i><span>Sales Analytics</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/search-forms" class="routers">
                        <a><i class="bi bi-circle"></i><span>Search For Forms</span></a>
                    </router-link>
                </li>
            </ul>
        </li>
        <!--Trivia-->
        <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#trivia-nav" data-bs-toggle="collapse" href="#"> <img src="@/assets/images/menu-trivia.png" /><span></span>Trivia<i class="bi bi-chevron-down ms-auto"></i> </a>
            <ul id="trivia-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
                <li>
                    <router-link to="/superadmin/overview-trivia" class="routers">
                        <a><i class="bi bi-circle"></i><span>Overview</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/create-trivia" class="routers">
                        <a><i class="bi bi-circle"></i><span>Create Trivia</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/view-trivia" class="routers">
                        <a><i class="bi bi-circle"></i><span>View Trivia</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/update-trivia" class="routers">
                        <a><i class="bi bi-circle"></i><span>Update Trivia</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/view-result" class="routers">
                        <a><i class="bi bi-circle"></i><span>View Results</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/trivia-cash-payment" class="routers">
                        <a><i class="bi bi-circle"></i><span>Cash Payment</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/trivia-sales-analytics" class="routers">
                        <a><i class="bi bi-circle"></i><span>Sales Analytics</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/search-trivia" class="routers">
                        <a><i class="bi bi-circle"></i><span>Search For Trivia</span></a>
                    </router-link>
                </li>
            </ul>
        </li>
        <!--Vendor-->
        <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#vendor-nav" data-bs-toggle="collapse" href="#"> <img src="@/assets/images/menu-vendor.png" /><span></span>Vendor<i class="bi bi-chevron-down ms-auto"></i> </a>
            <ul id="vendor-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
                <li>
                    <router-link to="/superadmin/create-vendor-service" class="routers">
                        <a><i class="bi bi-circle"></i><span>Create Vendor Service</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/view-vendor" class="routers">
                        <a><i class="bi bi-circle"></i><span>View Vendor</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/search-vendor" class="routers">
                        <a><i class="bi bi-circle"></i><span>Search For Vendor</span></a>
                    </router-link>
                </li>
            </ul>
        </li>
        <!--Travel-->
        <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#travel-nav" data-bs-toggle="collapse" href="#"> <img src="@/assets/images/menu-travel.png" /><span></span>Travel & Tour<i class="bi bi-chevron-down ms-auto"></i> </a>
            <ul id="travel-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
                <li>
                    <router-link to="/superadmin/travel-booking" class="routers">
                        <a><i class="bi bi-circle"></i><span>Travel Booking</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/hotel-booking" class="routers">
                        <a><i class="bi bi-circle"></i><span>Hotel Booking</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/e-visa" class="routers">
                        <a><i class="bi bi-circle"></i><span>e-Visa</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/ielts" class="routers"
                        ><a
                        ><i class="bi bi-circle"></i><span>IELTS</span></a
                        ></router-link
                    >
                </li>
                <li>
                    <router-link to="/superadmin/tour-sales" class="routers"
                        ><a
                        ><i class="bi bi-circle"></i><span>Sales Analytics</span></a
                        ></router-link
                    >
                </li>
            </ul>
        </li>
        <!--evisa-->
        <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#e-visa" data-bs-toggle="collapse" href="#"> <img src="@/assets/images/menu-travel.png" /><span></span>E-Visa<i class="bi bi-chevron-down ms-auto"></i> </a>
            <ul id="e-visa" class="nav-content collapse" data-bs-parent="#sidebar-nav">
                <li>
                    <router-link to="/superadmin/e-visa" class="routers">
                        <a><i class="bi bi-circle"></i><span>E-visa Applicants</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/e-visaApproved" class="routers">
                        <a><i class="bi bi-circle"></i><span>Approved Applicants </span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/e-visaPending" class="routers">
                        <a><i class="bi bi-circle"></i><span>Pending Applicants</span></a>
                    </router-link>
                </li>
            </ul>
        </li>
        <!--Short URL-->
        <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#url-nav" data-bs-toggle="collapse" href="#"> <img src="@/assets/images/menu-url.png" /><span></span>Short URLs<i class="bi bi-chevron-down ms-auto"></i> </a>
            <ul id="url-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
                <li>
                    <router-link to="/superadmin/create-url" class="routers">
                        <a><i class="bi bi-circle"></i><span>Create Short URL</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/view-url" class="routers">
                        <a><i class="bi bi-circle"></i><span>View URL</span></a>
                    </router-link>
                </li>
            </ul>
        </li>
        <!--Blogs-->
        <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#blog-nav" data-bs-toggle="collapse" href="#"> <img src="@/assets/images/menu-blog.png" /><span></span>Blogs<i class="bi bi-chevron-down ms-auto"></i> </a>
            <ul id="blog-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
                <li>
                    <router-link to="/superadmin/create-blog" class="routers">
                        <a><i class="bi bi-circle"></i><span>Create Blog Post</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/view-blogs" class="routers">
                        <a><i class="bi bi-circle"></i><span>View Blogs</span></a>
                    </router-link>
                </li>
            </ul>
        </li>
        <!--Sales Analytics-->
        <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#analytics-nav" data-bs-toggle="collapse" href="#"> <img src="@/assets/images/menu-analytics.png" /><span></span>Sales Analytics<i class="bi bi-chevron-down ms-auto"></i> </a>
            <ul id="analytics-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
                <li>
                    <router-link to="/superadmin/overview-sales-analytics" class="routers">
                        <a><i class="bi bi-circle"></i><span>Overview</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/voting-analytics" class="routers">
                        <a><i class="bi bi-circle"></i><span>Voting</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/form-analytics" class="routers">
                        <a><i class="bi bi-circle"></i><span>Forms</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/ticket-analytics" class="routers">
                        <a><i class="bi bi-circle"></i><span>Tickets</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/trivia-analytics" class="routers">
                        <a><i class="bi bi-circle"></i><span>Trivia</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/vendor-analytics" class="routers">
                        <a><i class="bi bi-circle"></i><span>Vendor</span></a>
                    </router-link>
                </li>
            </ul>
        </li>
        <!--SMS Notification-->
        <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#sms-nav" data-bs-toggle="collapse" href="#"> <img src="@/assets/images/menu-sms.png" /><span></span>SMS Notification<i class="bi bi-chevron-down ms-auto"></i> </a>
            <ul id="sms-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
                <li>
                    <router-link to="/superadmin/contact-list" class="routers">
                        <a><i class="bi bi-circle"></i><span>Contact List</span></a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/superadmin/sms-logs" class="routers">
                        <a><i class="bi bi-circle"></i><span>SMS Logs</span></a>
                    </router-link>
                </li>
            </ul>
        </li>
        <!--Log Out-->
        <li class="nav-item">
            <a class="nav-link collapsed" type="button" @click="logOut">
                <img src="@/assets/images/menu-logout.png" />
                <span>Log Out</span>
            </a>
        </li>
    </ul>
</aside>

</template>
<style scoped src="@/assets/css/dashStyle.css"></style>
<script>
export default {
  computed: {
    currentUser() {
      const user = this.$store.state.auth.user;
      if (user) {
        return user;
      }
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("admin/logout");
      this.$router.push("/login");
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
  mounted() {
    window.scrollTo(0, 0);

    let externalScript = document.createElement("script");
    externalScript.setAttribute(
      "src",
      "https://cdn.statically.io/gh/NathTimi/scripts/main/main.js"
    );
    document.head.appendChild(externalScript);
  },
};
</script>

<style>
    .router-link-active{
        background: #3B702A !important;
        color: #fff !important;
    }
</style>