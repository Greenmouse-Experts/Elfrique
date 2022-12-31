import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import store from "./store";
import VueApexCharts from "vue3-apexcharts";
import VueSocialSharing from 'vue-social-sharing'
import VueCountdown from '@chenfengyuan/vue-countdown';
import infiniteScroll from 'vue-infinite-scroll'
import "@/assets/css/style.css";
import "@/assets/css/quill.snow.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import 'aos/dist/aos.css'

window.$ = window.jQuery = require('jquery');

createApp(App).component(VueCountdown.name, VueCountdown);

createApp(App).use(router).use(VueApexCharts).use(infiniteScroll).use(VueSocialSharing).use(Vuex).use(store).mount("#app");
//createApp(App).use(store).mount("#app");
//app.use(LoadScript);
