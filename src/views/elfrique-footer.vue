<template>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="main-ft">
              <router-link to="/" class="routers"><img src="@/assets/images/logo.png"></router-link>
              <h5>Elfrique is a creative and innovative management company. "We constantly strive to help our customers achieve their goal by 
              using our website resources and shortcodes."</h5>
              <p><span><i class="bi bi-telephone-fill"></i></span> <a href="tel:+2349071130455">+234 907 113 0455</a></p>
              <p><span><i class="bi bi-whatsapp"></i></span> <a href="tel:+2349013209138">+234 901 320 9138</a></p>
              <p><span><i class="bi bi-envelope-fill"></i></span> <a href="mailto:info@elfrique.com">info@elfrique.com</a></p>
              <p><span><i class="bi bi-geo-alt-fill"></i></span> <a>77, Ojuelegba road, Old Yaba Rd, Lagos State, Nigeria.</a></p>
              <div class="social">
                <h5>Connect With Us:</h5>
                <a href="https://web.facebook.com/elfrique/?_rdc=1&_rdr" target="_blank" title="Like us on Facebook"><i class="fab fa-facebook"></i></a>
                <a href="https://twitter.com/elfrique" target="_blank" title="Follow us on Twitter"><i class="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/elfrique/" target="_blank" title="Follow us on Instagram"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-1"></div>
          <div class="col-lg-2">
            <div class="link-ft">
              <h4>Company</h4>
              <div class="line-rule"></div>
              <p><router-link to="/blogs" class="routers"><a>Blog</a></router-link></p>
              <p><router-link to="/pricing" class="routers"><a>Pricing</a></router-link></p>
              <p><router-link to="/contact" class="routers"><a>Contact Us</a></router-link></p>
              <!-- <p><router-link to="#" class="routers"><a>Buyers Guide</a></router-link></p>
              <p><router-link to="#" class="routers"><a>Sellers Guide</a></router-link></p> -->
            </div>
          </div>
          <div class="col-lg-2">
            <div class="link-ft">
              <h4>Our Services</h4>
              <div class="line-rule"></div>
              <p><router-link to="/event-form-management" class="routers"><a>Event Forms</a></router-link></p>
              <p><router-link to="/event-ticket-management" class="routers"><a>Event Tickets</a></router-link></p>
              <p><router-link to="/event-vendor-management" class="routers"><a>Event Vendors</a></router-link></p>
              <p><router-link to="/trivia-management" class="routers"><a>Trivia System</a></router-link></p>
              <p><router-link to="/travel-tour-management" class="routers"><a>Travel & Tours</a></router-link></p>
              <p><router-link to="/vote-management" class="routers"><a>Voting Contests</a></router-link></p>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="link-ft">
              <h4>Resources</h4>
              <div class="line-rule"></div>
              <p><router-link to="/terms" class="routers"><a>Terms of Use</a></router-link></p>
              <p><router-link to="/privacy" class="routers"><a>Privacy Policy</a></router-link></p>
            </div>
          </div>
        </div>
      </div>
      <div class="container copyright">
        <div class="row">
          <div class="col-lg-12 text-center">
            <p>
              &copy; <span id="autodate"></span> 
              Elfrique Solutions - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
import $ from 'jquery'
export default {
  mounted(){
    window.scrollTo(0,0)

    //Copyright Date
    function newDate() {
      return new Date().getFullYear();
    }
    document.onload = document.getElementById("autodate").innerHTML = newDate();

  }
}
</script>