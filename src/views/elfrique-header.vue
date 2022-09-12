<template>
    <header>
        <section class="headerContact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <span>
                            <i class="bi bi-envelope-open-fill"></i> <a href="mailto:info@elfrique.com">info@elfrique.com</a>
                        </span>
                        <span>
                            <i class="bi bi-phone-fill"></i> <a href="tel:234 907 113 0455">+2349071130455</a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
        <nav class="navbar navbar-expand-lg" id="header-scroll">
            <div class="container">
                <a class="navbar-brand">
                <router-link to="/" style="background-color: #fff !important;" class="routers"><img src="@/assets/images/logo.png" alt="Elfrique logo"></router-link>
                </a>
                <button class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-100" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <button data-bs-dismiss="offcanvas">
                            <i class="bi bi-x-square"></i>
                        </button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-center flex-grow-1">
                            <li class="nav-item">
                                <router-link to="/" class="routers"><a class="nav-link">Home</a></router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#">
                                Our Services
                                </a>
                                <div class="dropdown-content container desktop-dropdown">
                                    <div class="row">
                                        <div class="col-lg-3">
                                            <h1>Featured Services</h1>
                                            <div class="line-hr"></div>
                                            <p>You can contact us for any enquires.</p>
                                            <router-link to="/contact" class="routers"><a class="contact-megamenu">Contact Us <i class="bi bi-arrow-right"></i></a></router-link>
                                        </div>
                                        <div class="col-lg-1"></div>
                                        <div class="col-lg-4">
                                            <router-link to="/vote-management" class="routers"><a><i class="bi bi-arrow-right-short"></i> Vote Management System</a></router-link>
                                            <router-link to="/trivia-management" class="routers"><a><i class="bi bi-arrow-right-short"></i> Trivia Management System</a></router-link>
                                            <router-link to="/travel-tour-management" class="routers"><a><i class="bi bi-arrow-right-short"></i> Travels & Tours Management System</a></router-link>
                                        </div>
                                        <div class="col-lg-4">
                                            <router-link to="/event-form-management" class="routers"><a><i class="bi bi-arrow-right-short"></i> Event Forms Management System</a></router-link>
                                            <router-link to="/event-ticket-management" class="routers"><a><i class="bi bi-arrow-right-short"></i> Event Tickets Management System</a></router-link>
                                            <router-link to="/event-vendor-management" class="routers"><a><i class="bi bi-arrow-right-short"></i> Event Vendors Management System</a></router-link>
                                        </div>
                                    </div>
                                </div>
                                <ul class="dropdown-menu mobile-dropdown" aria-labelledby="navbarDropdown">
                                    <li><router-link to="/vote-management" class="routers"><a class="dropdown-item"><i class="bi bi-arrow-right-short"></i> Vote Management System</a></router-link></li>
                                    <li><router-link to="/event-ticket-management" class="routers"><a class="dropdown-item"><i class="bi bi-arrow-right-short"></i> Event Tickets Management System</a></router-link></li>
                                    <li><router-link to="/trivia-management" class="routers"><a class="dropdown-item"><i class="bi bi-arrow-right-short"></i> Trivia Management System</a></router-link></li>
                                    <li><router-link to="/event-vendor-management" class="routers"><a class="dropdown-item"><i class="bi bi-arrow-right-short"></i> Event Vendors Management System</a></router-link></li>
                                    <li><router-link to="/event-form-management" class="routers"><a class="dropdown-item"><i class="bi bi-arrow-right-short"></i> Event Forms Management System</a></router-link></li>
                                    <li><router-link to="/travel-tour-management" class="routers"><a class="dropdown-item"><i class="bi bi-arrow-right-short"></i> Travels & Tours Management System</a></router-link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <router-link to="/pricing" class="routers"><a class="nav-link">Pricing</a></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/blogs" class="routers"><a class="nav-link">Blog</a></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/contact" class="routers"><a class="nav-link">Contact</a></router-link>
                            </li>
                        </ul>
                        <div class="login-div">
                            <router-link to="/login" class="btn-login">Login</router-link>
                            <router-link to="/signup" class="btn-signup">Sign Up <i class="bi bi-arrow-right"></i></router-link>
                        </div>
                        <!-- <div class="icon-hambuger">
                            <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i class="fas fa-bars"></i></a>
                        </div> -->
                    </div>
                </div>
            </div>
        </nav>
        <!-- <div class="offcanvas offcanvas-end offcanvas-contact-hambuger" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header">
            <button data-bs-dismiss="offcanvas" aria-label="Close">
            <i class="bi bi-x-square"></i>
            </button>
        </div>
        <div class="offcanvas-body text-center">
            <div class="logo-area">
            <img src="@/assets/images/logo.png">
            <p>Elfrique is a creative and innovative complete management company. We use through our website and short codes to help customers achieve their goals.</p>
            </div>
            <div class="contact-area">
            <h4>Contact:</h4>
            <p><span><i class="bi bi-telephone-fill"></i></span> <a href="tel:+2349071130455">+234 907 113 0455</a></p>
            <p><span><i class="bi bi-whatsapp"></i></span> <a href="https://wa.me/+2349013209138" target="_blank">+234 901 320 9138</a></p>
            <p><span><i class="bi bi-envelope-fill"></i></span> <a href="mailto:info@elfrique.com">info@elfrique.com</a></p>
            </div>
            <div class="contact-area social-icons">
            <h4>Connect With Us:</h4>
            <a href="https://web.facebook.com/elfrique/?_rdc=1&_rdr" target="_blank" title="Like us on Facebook"><i class="fab fa-facebook"></i></a>
            <a href="https://twitter.com/elfrique" target="_blank" title="Follow us on Twitter"><i class="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/elfrique/" target="_blank" title="Follow us on Instagram"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
        </div> -->
    </header>
</template>

<script>
import $ from 'jquery'
export default {
  mounted(){
    window.scrollTo(0,0)

    //On Scroll Navabr
    $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 1) {
          $("#header-scroll").addClass("navbar-onscroll")
      } else {
          $("#header-scroll").removeClass("navbar-onscroll")
      }
    });
  }
}
</script>