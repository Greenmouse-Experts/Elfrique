<template>
<div>
  <link
    rel="shortcut icon"
    href="@/assets/images/favicon.png"
    type="image/x-icon"
  />
  <!--------Header------------>
  <header id="header" class="header fixed-top d-flex align-items-center">
    <div class="d-flex align-items-center justify-content-center">
      <a class="logo">
        <router-link to="/organiser/dashboard" class="routers">
          <img src="@/assets/images/logo.png" alt="Elfrique Logo" />
        </router-link>
      </a>
      <i class="bi bi-list toggle-sidebar-btn"></i>
    </div>
    <!--Search Field-->
    <!-- <div class="search-bar">
            <form class="search-form d-flex align-items-center" method="POST" action="#">
                <input type="text" name="query" placeholder="Search" title="Enter search keyword" required>
                <button type="submit" title="Search"><i class="bi bi-search"></i></button>
            </form>
        </div> -->
    <!--Nav Icon-->
    <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">
        <!--Notification Nav-->
        <li class="nav-item dropdown">
          <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i class="bi bi-bell"></i>
            <span class="badge bg-success badge-number">{{
              notificationCount
            }}</span>
          </a>
          <ul
            class="
              dropdown-menu dropdown-menu-end dropdown-menu-arrow
              notifications
            "
          >
            <li class="dropdown-header">
              You have {{ notificationCount }} new notifications
              <!-- <span
                class="badge rounded-pill bg-danger p-2 ms-2 text-light"
                @click="deleteAllNotice(userId)"
                >Delete All</span
              > -->
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li
              class="notification-item"
              v-for="item in notification"
              :key="item.id"
              style="cursor: pointer"
              @click="deleteNotice(item.id)"
            >
              <!-- <i class="bi bi-exclamation-circle text-warning"></i> -->
              <i class="text-warning"></i>
              <div>
                <h4>{{ item.type }}</h4>
                <p>{{ item.message }}</p>
                <p>{{ getHumanDate(item.createdAt) }}</p>
              </div>
            </li>

            <li>
              <hr class="dropdown-divider" />
            </li>
            <li class="dropdown-footer">
              <a href="#">Show all notifications</a>
            </li>
          </ul>
          <!-- End Notification Dropdown Items -->
        </li>
        <!--Profile Image Icon-->
        <li class="nav-item dropdown pe-3">
          <a
            class="nav-link nav-profile d-flex align-items-center pe-0"
            href="#"
            data-bs-toggle="dropdown"
          >
            <img src="@/assets/images/profile-img.png" class="rounded-circle" />
            <span
              class="d-none d-md-block dropdown-toggle ps-2"
              :key="currentUser"
              >{{ currentUser.firstname }}</span
            >
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile"
          >
            <li class="dropdown-header">
              <h6 :key="currentUser">
                {{ currentUser.firstname }} {{ currentUser.lastname }}
              </h6>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li>
              <router-link to="/organiser/profile" class="routers"
                ><a class="dropdown-item d-flex align-items-center">
                  <i class="bi bi-person"></i>
                  <span>My Profile</span>
                </a></router-link
              >
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li>
              <hr class="dropdown-divider" />
            </li>

            <li>
              <hr class="dropdown-divider" />
            </li>

            <li>
              <a
                class="dropdown-item d-flex align-items-center"
                href
                @click.prevent="logOut"
              >
                <i class="bi bi-box-arrow-right"></i>
                <span>Sign Out</span>
              </a>
            </li>
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
        <router-link to="/organiser/dashboard" class="routers"
          ><a class="nav-link collapsed">
            <img src="@/assets/images/menu-dashboard.png" />
            <span>Dashboard</span>
          </a></router-link
        >
      </li>
      <!-- Hamzat Update -->
      <li v-if="currentUser.role == 'admin'" class="nav-item">
        <router-link to="/superadmin/dashboard" class="routers"
          ><a class="nav-link collapsed">
            <img src="@/assets/images/menu-dashboard.png" />
            <span>Superadmin</span>
          </a></router-link
        >
      </li>
      <!--Voting-->
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          data-bs-target="#voting-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <img src="@/assets/images/menu-vote.png" /><span></span>Voting<i
            class="bi bi-chevron-down ms-auto"
          ></i>
        </a>
        <ul
          id="voting-nav"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <router-link to="/organiser/start-voting" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Create Voting</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/add-contestant" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Add Contestants</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/add-sponsor" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Add Sponsors</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/add-category" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Add Category</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/add-nominee" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Add Nominees</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/view-contestants" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>View Contests</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/view-vote-analytics" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Sales Analytics</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/result-setting" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Result Setting</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/add-info" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Add Info</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/search-vote" class="routers"
              ><a>
                <i class="bi bi-circle"></i><span>Search For Vote</span>
              </a>
              </router-link
            >
          </li>
        </ul>
      </li>
      <!--Registration-->
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          data-bs-target="#reg-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <img src="@/assets/images/menu-registration.png" /><span></span
          >Event<i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul
          id="reg-nav"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <router-link to="/organiser/create-event" class="routers"
              >
              <a
                ><i class="bi bi-circle"></i>
                <span>
                  Create Event
                </span>
                </a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/add-ticket" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Add Ticket</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/view-event" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>View Event</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/create-referral" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Create Referral</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/view-referral" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>View Referral</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/view-sales" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>View Sales</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/sales-analytics" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Sales Analytics</span></a
              ></router-link
            >
          </li>
        </ul>
      </li>

      <!--Forms-->
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          data-bs-target="#forms-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <img src="@/assets/images/menu-form.png" /><span></span>Forms<i
            class="bi bi-chevron-down ms-auto"
          ></i>
        </a>
        <ul
          id="forms-nav"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <router-link to="/organiser/create-form" class="routers"
              ><a><i class="bi bi-circle"></i><span>Create Form</span></a></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/build-form" class="routers"
              ><a><i class="bi bi-circle"></i><span>Build Form</span></a></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/view-form" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>View Forms</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/personal-form" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Personal Forms</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/form-sales-analytics" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Sales Analytics</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/search-form" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Search For Forms</span></a
              ></router-link
            >
          </li>
        </ul>
      </li>
      <!--Trivia-->
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          data-bs-target="#trivia-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <img src="@/assets/images/menu-trivia.png" /><span></span>Trivia<i
            class="bi bi-chevron-down ms-auto"
          ></i>
        </a>
        <ul
          id="trivia-nav"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <a href="/organiser/create-trivia" class="routers"
              ><a><i class="bi bi-circle"></i><span>Create Trivia</span></a></a
            >
          </li>
          <li>
            <router-link to="/organiser/add-Question" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Add Question</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/view-trivia" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>View Trivia</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/update-trivia" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Update Trivia</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/view-result" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>View Results</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/update-question" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Update Question</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/update-answer" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Update Answer</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/trivia-sales-analytics" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Sales Analytics</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/search-trivia" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Search For Trivia</span></a
              ></router-link
            >
          </li>
        </ul>
      </li>
      <!--Vendor-->
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          data-bs-target="#vendor-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <img src="@/assets/images/menu-vendor.png" /><span></span>Vendor<i
            class="bi bi-chevron-down ms-auto"
          ></i>
        </a>
        <ul
          id="vendor-nav"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <router-link to="/organiser/create-vendor-service" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Create Vendor Service</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/view-vendor-service" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>View All Vendor Service</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/edit-vendor-service" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Edit Vendor Service </span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/bidders-vendor" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>View Proposals
              </span></a
              ></router-link
            >
          </li>
          <!-- <li>
            <router-link to="/organiser/reviews" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Reviews</span></a
              ></router-link
            >
          </li> -->
          <!-- <li>
            <router-link to="/organiser/search-vendor" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Search For Vendor</span></a
              ></router-link
            >
          </li> -->
          <li>
            <router-link to="/organiser/place-advert" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Place Advert</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/advert-listing" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span> View All Advert Listing</span></a
              ></router-link
            >
          </li>
          <!-- <li>
            <router-link to="/organiser/view-enquiries" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>View Enquiries</span></a
              ></router-link
            >
          </li> -->
          <!-- <li>
            <router-link to="/organiser/vendor-sales-analytics" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Sales Analytics</span></a
              ></router-link
            >
          </li> -->
        </ul>
      </li>
      <!--Travel-->
      <!-- <li class="nav-item">
        <a
          class="nav-link collapsed"
          data-bs-target="#travel-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <img src="@/assets/images/menu-travel.png" /><span></span>Travel &
          Tour<i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul
          id="travel-nav"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
        >
        <li>
          <router-link to="/organiser/travel-booking" class="routers"
            ><a
              ><i class="bi bi-circle"></i><span>Travel Booking</span></a
            ></router-link
          >
        </li>
        <li>
          <router-link to="/organiser/hotel-booking" class="routers"
            ><a
              ><i class="bi bi-circle"></i><span>Hotel Booking</span></a
            ></router-link
          >
        </li>
        <li>
          <router-link to="/organiser/ielts" class="routers"
            ><a
              ><i class="bi bi-circle"></i><span>IELTS</span></a
            ></router-link
          >
        </li>
        <li>
          <router-link to="/organiser/tour-sales" class="routers"
            ><a
              ><i class="bi bi-circle"></i><span>Sales Analytics</span></a
            ></router-link
          >
        </li>
        </ul>
      </li> -->
      <!--Short URL-->
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          data-bs-target="#url-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <img src="@/assets/images/menu-url.png" /><span></span>Short URLs<i
            class="bi bi-chevron-down ms-auto"
          ></i>
        </a>
        <ul
          id="url-nav"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <router-link to="/organiser/create-url" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>Create URL</span></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/organiser/view-url" class="routers"
              ><a
                ><i class="bi bi-circle"></i><span>View URL</span></a
              ></router-link
            >
          </li>
        </ul>
      </li>
      <!--transaction  history-->
      <li class="nav-item">
        <router-link to="/organiser/transactionhistory" class="routers"
          ><a class="nav-link collapsed">
            <img src="@/assets/images/menu-form.png" />
            <span>Transaction History</span>
          </a></router-link
        >
      </li>
      <!--Profile-->
      <li class="nav-item">
        <router-link to="/organiser/profile" class="routers"
          ><a class="nav-link collapsed">
            <img src="@/assets/images/menu-profile.png" />
            <span>Profile</span>
          </a></router-link
        >
      </li>
      <!--Log Out-->
      <li class="nav-item">
        <a class="nav-link collapsed" href @click.prevent="logOut">
          <img src="@/assets/images/menu-logout.png" />
          <span>Log Out</span>
        </a>
      </li>
    </ul>
  </aside>
  </div>
</template>
<style scoped src="@/assets/css/dashStyle.css"></style>
<script>
  import ProfileService from "../../service/profile.service";
  import moment from "moment";
  import Notification from "../../service/notitfication-service";
  export default {
    name: "dashboard",
    data() {
      return {
        notificationCount: 0,
        notification: "",
        userId: "",
      };
    },
    created() {
      ProfileService.getProfile().then(
        (response) => {
          this.userId = response.data.profile.adminuser.id;
          Notification.findUserNotification({
            receiverId: this.userId,
          }).then((res) => {
            this.notificationCount = res.data.length;
            this.notification = res.data;
          });
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
        }
      );
    },
    computed: {
      currentUser() {
        const user = JSON.parse(localStorage.getItem("user"));
        //console.log(user);
        if (user) {
          //console.log(user);
          return user;
        }
      },
    },

    methods: {
      logOut() {
        this.$store.dispatch("auth/logout");
        this.$router.push("/login");
      },
      deleteNotice(id) {
        Notification.deleteNotification(id, { id: "id" }).then((res) => {
          this.reFetchNotice();
        });
      },
      deleteAllNotice(id) {
        Notification.deleteAllNotification(id, { id: "id" }).then((res) => {
          Notification.findUserNotification({
            receiverId: this.userId,
          }).then((res) => {
            this.reFetchNotice();
          });
        });
      },
      reFetchNotice() {
        Notification.findUserNotification({
          receiverId: this.userId,
        }).then((res) => {
          this.notificationCount = res.data.length;
          this.notification = res.data;
        });
      },
      getHumanDate(date) {
        return moment(date).fromNow();
      },
    },

    mounted() {
      if (!this.currentUser) {
        this.$router.push("/login");
      }
      window.scrollTo(0, 0);
      let externalScript = document.createElement("script");
      externalScript.setAttribute(
        "src",
       "https://cdn.statically.io/gh/NathTimi/scripts/main/main.js"
     );
     document.head.appendChild(externalScript);  
      
    },
// <<<<<<< HEAD
  };
// =======
//     deleteNotice(id) {

//       Notification.deleteNotification(id, { id: "id" }).then((res) => {
//         this.reFetchNotice();
//       });
//     },
//     deleteAllNotice(id) {
//       Notification.deleteAllNotification(id, { id: "id" }).then((res) => {
//         Notification.findUserNotification({
//           receiverId: this.userId,
//         }).then((res) => {
//           this.reFetchNotice();
//         });
//       });
//     },
//     reFetchNotice() {
//       Notification.findUserNotification({
//         receiverId: this.userId,
//       }).then((res) => {
//         this.notificationCount = res.data.length;
//         this.notification = res.data;
//       });
//     },
//     getHumanDate(date) {
//       return moment(date).fromNow();
//     },
//   },

//   mounted() {
//     if (!this.currentUser) {
//       this.$router.push("/login");
//     }
//     window.scrollTo(0, 0);
//     let externalScript = document.createElement("script");
//     externalScript.setAttribute(
//       "src",
//       "https://cdn.statically.io/gh/NathTimi/scripts/main/main.js"
//     );
//     document.head.appendChild(externalScript);    
//   },
// };
</script>