import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";
import SearchResult from "../views/SearchResult.vue";
import BlogPost from "../views/BlogPost.vue";
import Pricing from "../views/Pricing.vue";
import Contact from "../views/Contact.vue";
import Privacy from "../views/Privacy.vue";
import Terms from "../views/Terms.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Forgot from "../views/Forgot.vue";
import VerifyEmail from "../views/VerifyEmail.vue";
///////////////////E-visa
import eVisaUnitedArabEmirates from "../views/evisa/UnitedArabEmirates.vue";
import eVisaTurkey from "../views/evisa/Turkey.vue";
import eVisaTanzania from "../views/evisa/Tanzania.vue";
import eVisaEastAfricaTourist from "../views/evisa/EastAfricaTourist.vue";
import eVisaEthiopia from "../views/evisa/Ethiopia.vue";
import eVisaMalawi from "../views/evisa/Malawi.vue";
import eVisaZimbabwe from "../views/evisa/Zimbabwe.vue";
import eVisaZambia from "../views/evisa/Zambia.vue";
import DetailsSent from "../views/evisa/DetailsSent.vue";

///////////////////SERVICES
///////////////////SERVICES
//Voting System
import ServiceVoteManagementSystem from "../views/VoteManagementSystem.vue";
import VotVotingContent from "../views/VotingContent.vue";
import VotAwardContent from "../views/AwardContent.vue";
import VotNomineeContent from "../views/NomineeContent.vue";
import VotContestantProfile from "../views/ContestantProfile.vue";
import VotNomineeProfile from "../views/NomineeProfile.vue";
import VotContestantProfilePay from "../views/ContestantProfilePay.vue";
import VotNomineeProfilePay from "../views/NomineeProfilePay.vue";
//Event Form
import ServiceEventFormManagementSystem from "../views/EventFormManagementSystem.vue";
import EvtForEventFormContent from "../views/EventFormContent.vue";
import EvtForEventFormFill from "../views/EventFormFill.vue";
import EvtForEventFormPay from "../views/EventFormPay.vue";
//Trivia System
import ServiceTriviaManagementSystem from "../views/TriviaManagementSystem.vue";
import SearchEventVendor from "../views/SearchEventVendor.vue";
import TriTriviaContent from "../views/TriviaContent.vue";
import TriTriviaContentInstruction from "../views/TriviaContentInstruction.vue";
import TriTriviaContentQuiz from "../views/TriviaContentQuiz.vue";
import TriTriviaResult from "../views/TriviaResult.vue";
//Event Ticket
import ServiceEventTicketManagementSystem from "../views/EventTicketManagementSystem.vue";
import TicTicketContent from "../views/TicketContent.vue";
//Travel And Tour System
import ServiceTravelAndTourManagementSystem from "../views/TravelAndTourManagementSystem.vue";
// Hamzat TravelAndTourPage
import TravelAndTourPage from "../views/TravelAndTourPage.vue";
//Event Vendor
import ServiceEventVendorManagementSystem from "../views/EventVendorManagementSystem.vue";
import ServiceViewMoreVendor from "../views/ViewMoreVendor.vue";
import ServiceVendorEventDecorator from "../views/VendorEventDecorator.vue";
import ServiceDetailsVendor from "../views/DetailsVendor.vue";
import ServiceVendorProfile from "../views/VendorProfile.vue";
///////////////////////////////////////////User Dashboard
import Dashboard from "../views/dashboard/Dashboard.vue";
import DashProfile from "../views/dashboard/Profile.vue";
import DashTransaction from "../views/dashboard/TransactionHistory.vue";
import DashStartVoting from "../views/dashboard/StartVoting.vue";
import DashCreateVoting from "../views/dashboard/CreateVote.vue";
import DashAddContestant from "../views/dashboard/AddContestant.vue";
import DashAddNominee from "../views/dashboard/AddNominee.vue";
import DashAddSponsors from "../views/dashboard/AddSponsors.vue";
import DashAddCategory from "../views/dashboard/AddCategory.vue";
import DashAddInfo from "../views/dashboard/AddInfo.vue";
import DashSearchVote from "../views/dashboard/SearchVote.vue";
import DashCreateEvent from "../views/dashboard/CreateEvent.vue";
import DashAddTicket from "../views/dashboard/AddTicket.vue";
import DashAddQuestion from "../views/dashboard/AddQuestion.vue";
import DashViewEvent from "../views/dashboard/ViewEvent.vue";
/* LATEST IMPORT FROM HAMZAT; */
import CreateReferral from "../views/dashboard/CreateReferral.vue";
import ViewReferral from "../views/dashboard/ViewReferral.vue";
import SalesAnalytics from "../views/dashboard/SalesAnalytics.vue";
import UpdateQuestion from "../views/dashboard/UpdateQuestion.vue";
import UpdateAnswer from "../views/dashboard/UpdateAnswer.vue";
import ViewEnquiries from "../views/dashboard/ViewEnquiries.vue";
import ViewVendorService from "../views/dashboard/ViewVendorService.vue";
import EditVendorService from "../views/dashboard/EditVendorService.vue";
import TravelBooking from "../views/dashboard/TravelBooking.vue";
import IELTS from "../views/dashboard/IELTS.vue";
import TourSales from "../views/dashboard/TourSales.vue";
import ViewSales from "../views/dashboard/ViewSales.vue";
//catchall 404
import NotFound from '../views/NotFound.vue'
/* import DashSearchEvent from "../views/dashboard/SearchEvent.vue"; */
import DashEventSalesAnalytics from "../views/dashboard/EventSalesAnalytics.vue";
import VendorSalesAnalytics from "../views/dashboard/VendorSalesAnalytics.vue";
import HotelBooking from "../views/dashboard/HotelBooking.vue";
import DashPersonalTicket from "../views/dashboard/PersonalTicket.vue";
import DashSearchTicket from "../views/dashboard/SearchTicket.vue";
import DashCreateForm from "../views/dashboard/CreateForm.vue";
import DashBuildForm from "../views/dashboard/BuildForm.vue";
import DashViewForm from "../views/dashboard/ViewForm.vue";
import DashPersonalForm from "../views/dashboard/PersonalForm.vue";
import DashFormSalesAnalytics from "../views/dashboard/FormSalesAnalytics.vue";
import DashSearchForm from "../views/dashboard/SearchForm.vue";
import DashCreateTrivia from "../views/dashboard/CreateTrivia.vue";
import DashViewTrivia from "../views/dashboard/ViewTrivia.vue";
import DashUpdateTrivia from "../views/dashboard/UpdateTrivia.vue";
import DashViewResult from "../views/dashboard/ViewResult.vue";
import DashSearchTrivia from "../views/dashboard/SearchTrivia.vue";
import DashCreateURL from "../views/dashboard/CreateURL.vue";
import DashViewURL from "../views/dashboard/ViewURL.vue";
import DashViewContestants from "../views/dashboard/ViewContestants.vue";
import DashVoteSalesAnalytics from "../views/dashboard/VoteSalesAnalytics.vue";
import DashVoteSalesAnalyticsInner from "../views/dashboard/VoteSalesAnalyticsInner.vue";
import DashResultSetting from "../views/dashboard/ResultSetting.vue";
import DashTriviaSalesAnalytics from "../views/dashboard/TriviaSalesAnalytics.vue";
import DashPlaceAdvert from "../views/dashboard/PlaceAdvert.vue";
import DashAdvertListing from "../views/dashboard/AdvertListing.vue";
import DashCreateVendorService from "../views/dashboard/CreateVendorService.vue";
import DashViewVendor from "../views/dashboard/ViewVendor.vue";
import DashBiddersLogVendor from "../views/dashboard/BiddersLogVendor.vue";
import DashReviews from "../views/dashboard/Reviews.vue";

//seller dashboard

import SecondDashboard from "../views/dashboard-second/Dashboard.vue";
import SecondDashProfile from "../views/dashboard-second/Profile.vue";
import SecondDashTransaction from "../views/dashboard-second/TransactionHistory.vue";
import SecondDashStartVoting from "../views/dashboard-second/StartVoting.vue";
import SecondDashCreateVoting from "../views/dashboard-second/CreateVote.vue";
import SecondDashAddContestant from "../views/dashboard-second/AddContestant.vue";
import SecondDashAddNominee from "../views/dashboard-second/AddNominee.vue";
import SecondDashAddSponsors from "../views/dashboard-second/AddSponsors.vue";
import SecondDashAddCategory from "../views/dashboard-second/AddCategory.vue";
import SecondDashAddInfo from "../views/dashboard-second/AddInfo.vue";
import SecondDashSearchVote from "../views/dashboard-second/SearchVote.vue";
import SecondDashCreateEvent from "../views/dashboard-second/CreateEvent.vue";
import SecondDashAddTicket from "../views/dashboard-second/AddTicket.vue";
/* import SecondDashViewEvent from "../views/dashboard-second/ViewEvent.vue"; */
import SecondDashSearchEvent from "../views/dashboard-second/SearchEvent.vue";
import SecondDashEventSalesAnalytics from "../views/dashboard-second/EventSalesAnalytics.vue";
import SecondDashPersonalTicket from "../views/dashboard-second/PersonalTicket.vue";
import SecondDashSearchTicket from "../views/dashboard-second/SearchTicket.vue";
import SecondDashCreateForm from "../views/dashboard-second/CreateForm.vue";
import SecondDashViewForm from "../views/dashboard-second/ViewForm.vue";
import SecondDashPersonalForm from "../views/dashboard-second/PersonalForm.vue";
import SecondDashFormSalesAnalytics from "../views/dashboard-second/FormSalesAnalytics.vue";
import SecondDashSearchForm from "../views/dashboard-second/SearchForm.vue";
import SecondDashCreateTrivia from "../views/dashboard-second/CreateTrivia.vue";
import SecondDashViewTrivia from "../views/dashboard-second/ViewTrivia.vue";
import SecondDashUpdateTrivia from "../views/dashboard-second/UpdateTrivia.vue";
import SecondDashViewResult from "../views/dashboard-second/ViewResult.vue";
import SecondDashSearchTrivia from "../views/dashboard-second/SearchTrivia.vue";
import SecondDashCreateURL from "../views/dashboard-second/CreateURL.vue";
import SecondDashViewURL from "../views/dashboard-second/ViewURL.vue";
/* import SecondDashViewContestants from "../views/dashboard-second/ViewContestants.vue"; */
import SecondDashVoteSalesAnalytics from "../views/dashboard-second/VoteSalesAnalytics.vue";
import SecondDashResultSetting from "../views/dashboard-second/ResultSetting.vue";
import SecondDashTriviaSalesAnalytics from "../views/dashboard-second/TriviaSalesAnalytics.vue";
import DashSearchVendor from "../views/dashboard/SearchVendor.vue";
import SecondDashVendorProfile from "../views/dashboard-second/VendorProfile.vue";
import SecondDashPlaceAdvert from "../views/dashboard-second/PlaceAdvert.vue";
import SecondDashAdvertListing from "../views/dashboard-second/AdvertListing.vue";
///////////////////////////////////////////Super Admin
import SuperAdminDashboard from "../views/superadmin/Dashboard.vue";
import SuperAdminProfile from "../views/superadmin/Profile.vue";
import SuperAdminLogin from "../views/superadmin/Login.vue";
/////////////////////////////////////////
import SuperAdminGenOverviewGeneral from "../views/superadmin/OverviewGeneral.vue";
import SuperAdminGenViewOrganiser from "../views/superadmin/ViewOrganiser.vue";
import SuperAdminGenShortLinks from "../views/superadmin/ShortLinks.vue";
import SuperAdminGenSubscribers from "../views/superadmin/Subscribers.vue";
import SuperAdminGenAddSubscribers from "../views/superadmin/AddSubscribers.vue";
import SuperAdminGenSearchAirtime from "../views/superadmin/SearchAirtime.vue";
import SuperAdminGenViewAirtimeLogs from "../views/superadmin/ViewAirtimeLogs.vue";
import SuperAdminGenViewPayout from "../views/superadmin/ViewPayout.vue";
import SuperAdminGenPayuLog from "../views/superadmin/PayuLog.vue";
import SuperAdminGenSearchPayuLogs from "../views/superadmin/SearchPayuLogs.vue";
import SuperAdminGenAddFaq from "../views/superadmin/AddFaq.vue";
import SuperAdminGenViewFaq from "../views/superadmin/ViewFAQs.vue";
///////////////////////////////////
import SuperAdminVotOverviewVoting from "../views/superadmin/OverviewVoting.vue";
import SuperAdminVotViewContest from "../views/superadmin/ViewContest.vue";
import SuperAdminVotVotePayoutSetting from "../views/superadmin/VotePayoutSetting.vue";
import SuperAdminVotStartVoting from "../views/superadmin/StartVoting.vue";
import SuperAdminVotCreateVote from "../views/superadmin/CreateVote.vue";
import SuperAdminVotAddContestant from "../views/superadmin/AddContestant.vue";
import SuperAdminVotAddSponsors from "../views/superadmin/AddSponsors.vue";
import SuperAdminVotAddCategory from "../views/superadmin/AddCategory.vue";
import SuperAdminVotAddInfo from "../views/superadmin/AddInfo.vue";
import SuperAdminVotViewContestants from "../views/superadmin/ViewContestants.vue";
import SuperAdminVotVoteSalesAnalytics from "../views/superadmin/VoteSalesAnalytics.vue";
import SuperAdminVotResultSetting from "../views/superadmin/ResultSetting.vue";
import SuperAdminVotSearchVote from "../views/superadmin/SearchVote.vue";
///////////////////////////////////////
import SuperAdminRegOverviewRegistration from "../views/superadmin/OverviewRegistration.vue";
import SuperAdminRegCreateEvent from "../views/superadmin/CreateEvent.vue";
import SuperAdminRegAddTicket from "../views/superadmin/AddTicket.vue";
import SuperAdminRegViewEvent from "../views/superadmin/ViewEvent.vue";
import SuperAdminRegEventSetting from "../views/superadmin/EventSetting.vue";
import SuperAdminRegPersonalTicket from "../views/superadmin/PersonalTicket.vue";
import SuperAdminRegEventCashPayment from "../views/superadmin/EventCashPayment.vue";
import SuperAdminRegEventPayoutSetting from "../views/superadmin/EventPayoutSetting.vue";
import SuperAdminRegEventSalesAnalytics from "../views/superadmin/EventSalesAnalytics.vue";
import SuperAdminRegSearchTicket from "../views/superadmin/SearchTicket.vue";
///////////////////////////////////////
import SuperAdminFomOverviewForms from "../views/superadmin/OverviewForms.vue";
import SuperAdminFomCreateForm from "../views/superadmin/CreateForm.vue";
import SuperAdminFomBuildForm from "../views/superadmin/BuildForm.vue";
import SuperAdminFomViewForm from "../views/superadmin/ViewForm.vue";
import SuperAdminFomPersonalForm from "../views/superadmin/PersonalForm.vue";
import SuperAdminFomFormCashPayment from "../views/superadmin/FormCashPayment.vue";
import SuperAdminFomFormPayoutSetting from "../views/superadmin/FormPayoutSetting.vue";
import SuperAdminFomFormSalesAnalytics from "../views/superadmin/FormSalesAnalytics.vue";
import SuperAdminFomSearchForm from "../views/superadmin/SearchForm.vue";
///////////////////////////////////////
import SuperAdminTriOverviewTrivia from "../views/superadmin/OverviewTrivia.vue";
import SuperAdminTriCreateTrivia from "../views/superadmin/CreateTrivia.vue";
import SuperAdminTriViewTrivia from "../views/superadmin/ViewTrivia.vue";
import SuperAdminPayoutTrivia from "../views/superadmin/triviaPayout.vue";
import SuperAdminTriUpdateTrivia from "../views/superadmin/UpdateTrivia.vue";
import SuperAdminTriViewResult from "../views/superadmin/ViewResult.vue";
import SuperAdminTriTriviaCashPayment from "../views/superadmin/TriviaCashPayment.vue";
import SuperAdminTriTriviaSalesAnalytics from "../views/superadmin/TriviaSalesAnalytics.vue";
import SuperAdminTriSearchTrivia from "../views/superadmin/SearchTrivia.vue";
///////////////////////////////////////
import SuperAdminVenCreateVendorService from "../views/superadmin/CreateVendorService.vue";
import SuperAdminVenViewVendor from "../views/superadmin/ViewVendor.vue";
import SuperAdminVenSearchVendor from "../views/superadmin/SearchVendor.vue";

///////////////////////////////////////
import SuperAdminTrlTravelBooking from "../views/superadmin/TravelBooking.vue";
import SuperAdminTrlHotelBooking from "../views/superadmin/HotelBooking.vue";
import SuperAdminTrleVisa from "../views/superadmin/eVisa.vue";
import SuperAdminTrleVisaPending from "../views/superadmin/eVisaPending.vue";
import SuperAdminTrleVisaApproved from "../views/superadmin/eVisaApproved.vue";
///////////////////////////////////////
import SuperAdminBlgCreateBlogPost from "../views/superadmin/CreateBlogPost.vue";
import SuperAdminBlgViewBlogs from "../views/superadmin/ViewBlogs.vue";
///////////////////////////////////////
import SuperAdminAnaOverviewSalesAnalytics from "../views/superadmin/OverviewSalesAnalytics.vue";
import SuperAdminAnaVotingAnalytics from "../views/superadmin/VotingAnalytics.vue";
import SuperAdminAnaFormAnalytics from "../views/superadmin/FormAnalytics.vue";
import SuperAdminAnaTicketAnalytics from "../views/superadmin/TicketAnalytics.vue";
import SuperAdminAnaTriviaAnalytics from "../views/superadmin/TriviaAnalytics.vue";
import SuperAdminAnaVendorAnalytics from "../views/superadmin/VendorAnalytics.vue";
///////////////////////////////////////
import SuperAdminURLCreateURL from "../views/superadmin/CreateURL.vue";
import SuperAdminURLViewURL from "../views/superadmin/ViewURL.vue";
/////Hamzat superAdmin
import ViewContest from "../views/superadmin/ViewContest.vue";
import ViewCategories from "../views/superadmin/ViewCategories.vue";
import Lelt from "../views/superadmin/Lelt.vue";
import STravelsales from "../views/superadmin/STravelsales.vue";
import CashPayment from "../views/superadmin/CashPayment.vue";
import PendingOnline from "../views/superadmin/PendingOnline.vue";
///////////////////////////////////////
import SuperAdminNotContactList from "../views/superadmin/ContactList.vue";
import SuperAdminNotSMSLogs from "../views/superadmin/SMSLogs.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/blogs", name: "Blogs", component: Blogs },
  {
    path: "/search-result/:product",
    name: "SearchResult",
    component: SearchResult,
    props: (route) => ({ referral: route.query.keyword }),
  },
  { path: "/blogPost/:id", name: "BlogPost", component: BlogPost },
  { path: "/pricing", name: "Pricing", component: Pricing },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/privacy", name: "Privacy", component: Privacy },
  { path: "/terms", name: "Terms", component: Terms },
  { path: "/login", name: "Login", component: Login },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    props: (route) => ({ referral: route.query.referral }),
  },
  { path: "/forgot", name: "Forgot", component: Forgot },
  ///////////////E-Visa
  {
    path: "/evisa/uae",
    name: "eVisaUnitedArabEmirates",
    component: eVisaUnitedArabEmirates,
  },
  { path: "/evisa/turkey", name: "eVisaTurkey", component: eVisaTurkey },
  { path: "/evisa/tanzania", name: "eVisaTanzania", component: eVisaTanzania },
  {
    path: "/evisa/east-africa-tourist",
    name: "eVisaEastAfricaTourist",
    component: eVisaEastAfricaTourist,
  },
  { path: "/evisa/ethiopia", name: "eVisaEthiopia", component: eVisaEthiopia },
  { path: "/evisa/malawi", name: "eVisaMalawi", component: eVisaMalawi },
  { path: "/evisa/zimbabwe", name: "eVisaZimbabwe", component: eVisaZimbabwe },
  { path: "/evisa/zambia", name: "eVisaZambia", component: eVisaZambia },
  { path: "/evisa/details-sent", name: "DetailsSent", component: DetailsSent },
  ///////////////Services
  //voting system
  {
    path: "/vote-management",
    name: "ServiceVoteManagementSystem",
    component: ServiceVoteManagementSystem,
  },
  {
    path: "/voting-content/:id",
    name: "VotVotingContent",
    component: VotVotingContent,
  },
  {
    path: "/award-content/:id",
    name: "VotAwardContent",
    component: VotAwardContent,
  },
  {
    path: "/nominee-content/:id",
    name: "VotNomineeContent",
    component: VotNomineeContent,
  },
  {
    path: "/contestant-profile/:id",
    name: "VotContestantProfile",
    component: VotContestantProfile,
  },
  {
    path: "/nominee-profile/:id",
    name: "VotNomineeProfile",
    component: VotNomineeProfile,
  },
  {
    path: "/contestant-profile-pay/:id",
    name: "VotContestantProfilePay",
    component: VotContestantProfilePay,
  },
  {
    path: "/nominee-profile-pay/:id",
    name: "VotNomineeProfilePay",
    component: VotNomineeProfilePay,
  },
  //Event Form
  {
    path: "/event-form-management",
    name: "ServiceEventFormManagementSystem",
    component: ServiceEventFormManagementSystem,
  },
  {
    path: "/event-form-content/:id",
    name: "EvtForEventFormContent",
    component: EvtForEventFormContent,
  },
  {
    path: "/fill-form/:id",
    name: "EvtForEventFormFill",
    component: EvtForEventFormFill,
  },
  {
    path: "/event-form-pay",
    name: "EvtForEventFormPay",
    component: EvtForEventFormPay,
  },
  //Trivia System
  {
    path: "/trivia-management",
    name: "ServiceTriviaManagementSystem",
    component: ServiceTriviaManagementSystem,
  },
  {
    path: "/trivia-content/:id",
    name: "TriTriviaContent",
    component: TriTriviaContent,
  },
  {
    path: "/trivia-content-instruction/:id",
    name: "TriTriviaContentInstruction",
    component: TriTriviaContentInstruction,
  },
  {
    path: "/trivia-content-quiz/:id",
    name: "TriTriviaContentQuiz",
    component: TriTriviaContentQuiz,
  },
  {
    path: "/trivia-result",
    name: "TriviaResult",
    component: TriTriviaResult,
  },
  //Event Ticket
  {
    path: "/event-ticket-management",
    name: "ServiceEventTicketManagementSystem",
    component: ServiceEventTicketManagementSystem,
  },
  {
    path: "/ticket-content/:id",
    name: "TicTicketContent",
    component: TicTicketContent,
  },
  //Travel And Tour System
  {
    path: "/travel-tour-management",
    name: "ServiceTravelAndTourManagementSystem",
    component: ServiceTravelAndTourManagementSystem,
  },
  // Hamzat Page Travel And Tour Page
  {
    path: "/search-flight-result",
    name: "TravelAndTourPage",
    component: TravelAndTourPage,
  },
  //Event Vendor
  {
    path: "/event-vendor-management",
    name: "ServiceEventVendorManagementSystem",
    component: ServiceEventVendorManagementSystem,
  },
  {
    path: "/view-more-vendor",
    name: "ServiceViewMoreVendor",
    component: ServiceViewMoreVendor,
  },
  {
    path: "/event-decorator",
    name: "ServiceVendorEventDecorator",
    component: ServiceVendorEventDecorator,
  },
  {
    path: "/details-vendor/:id",
    name: "ServiceDetailsVendor",
    component: ServiceDetailsVendor,
  },
  {
    path: "/vendor-profile",
    name: "ServiceVendorProfile",
    component: ServiceVendorProfile,
  },
  {
    path: "/search-result-event-vendor/:location",
    name: "SearchEventVendor",
    component: SearchEventVendor,
    props: (route) => ({ referral: route.query.keyword }),
  },
  ///////////////////////////////////////////User Dashboard
  {
    path: "/verify",
    name: "verify",
    component: VerifyEmail,
    props: (route) => ({ email: route.query.email, token: route.query.token }),
  },
  { path: "/organiser/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/organiser/profile", name: "DashProfile", component: DashProfile },
  {
    path: "/organiser/transactionhistory",
    name: "DashTransaction",
    component: DashTransaction,
  },
  {
    path: "/organiser/start-voting",
    name: "DashStartVoting",
    component: DashStartVoting,
  },

  {
    path: "/organiser/create-voting",
    name: "DashCreateVoting",
    component: DashCreateVoting,
  },
  {
    path: "/organiser/add-contestant",
    name: "DashAddContestant",
    component: DashAddContestant,
  },
  {
    path: "/organiser/add-sponsor",
    name: "DashAddSponsors",
    component: DashAddSponsors,
  },
  {
    path: "/organiser/add-category",
    name: "DashAddCategory",
    component: DashAddCategory,
  },
  {
    path: "/organiser/add-nominee",
    name: "DashAddNominee",
    component: DashAddNominee,
  },
  { path: "/organiser/add-info", name: "DashAddInfo", component: DashAddInfo },
  {
    path: "/organiser/view-contestants",
    name: "DashViewContestants",
    component: DashViewContestants,
  },
  {
    path: "/organiser/view-vote-analytics",
    name: "DashVoteSalesAnalytics",
    component: DashVoteSalesAnalytics,
  },
  {
    path: "/organiser/view-vote-analytics/:id",
    name: "DashVoteSalesAnalyticsInner",
    component: DashVoteSalesAnalyticsInner,
  },
  {
    path: "/organiser/result-setting",
    name: "DashResultSetting",
    component: DashResultSetting,
  },
  {
    path: "/organiser/search-vote",
    name: "DashSearchVote",
    component: DashSearchVote,
  },

  {
    path: "/organiser/create-event",
    name: "DashCreateEvent",
    component: DashCreateEvent,
  },
  {
    path: "/organiser/add-ticket",
    name: "DashAddTicket",
    component: DashAddTicket,
  },
  {
    path: "/organiser/view-event",
    name: "DashViewEvent",
    component: DashViewEvent,
  },
  // LASTEST CHANGES FROM HAMZAT
  {
    path: "/organiser/create-referral",
    name: "CreateReferral",
    component: CreateReferral,
  },
  {
    path: "/organiser/view-referral",
    name: "ViewReferral",
    component: ViewReferral,
  },
  {
    path: "/organiser/sales-analytics",
    name: "SalesAnalytics",
    component: SalesAnalytics,
  },
  /* {
    path: "/organiser/search-event",
    name: "DashSearchEvent",
    component: DashSearchEvent,
  }, */
  {
    path: "/organiser/event-sales-analytics",
    name: "DashEventSalesAnalytics",
    component: DashEventSalesAnalytics,
  },
  {
    path: "/organiser/view-sales",
    name: "ViewSales",
    component: ViewSales,
  },
  {
    path: "/organiser/personal-ticket",
    name: "DashPersonalTicket",
    component: DashPersonalTicket,
  },
  {
    path: "/organiser/search-ticket",
    name: "DashSearchTicket",
    component: DashSearchTicket,
  },
  {
    path: "/organiser/create-form",
    name: "DashCreateForm",
    component: DashCreateForm,
  },
  {
    path: "/organiser/build-form",
    name: "DashBuildForm",
    component: DashBuildForm,
  },
  {
    path: "/organiser/view-form",
    name: "DashViewForm",
    component: DashViewForm,
  },
  {
    path: "/organiser/personal-form",
    name: "DashPersonalForm",
    component: DashPersonalForm,
  },
  {
    path: "/organiser/form-sales-analytics",
    name: "DashFormSalesAnalytics",
    component: DashFormSalesAnalytics,
  },
  {
    path: "/organiser/search-form",
    name: "DashSearchForm",
    component: DashSearchForm,
  },
  {
    path: "/organiser/create-trivia",
    name: "DashCreateTrivia",
    component: DashCreateTrivia,
  },
  {
    path: "/organiser/add-Question",
    name: "DashAddQuestion",
    component: DashAddQuestion,
  },
  {
    path: "/organiser/view-trivia",
    name: "DashViewTrivia",
    component: DashViewTrivia,
  },
  {
    path: "/organiser/update-trivia",
    name: "DashUpdateTrivia",
    component: DashUpdateTrivia,
  },
  {
    path: "/organiser/view-result",
    name: "DashViewResult",
    component: DashViewResult,
  },
  {
    path: "/organiser/update-question",
    name: "UpdateQuestion",
    component: UpdateQuestion,
  },
  {
    path: "/organiser/update-answer",
    name: "UpdateAnswer",
    component: UpdateAnswer,
  },
  {
    path: "/organiser/trivia-sales-analytics",
    name: "DashTriviaSalesAnalytics",
    component: DashTriviaSalesAnalytics,
  },
  {
    path: "/organiser/search-trivia",
    name: "DashSearchTrivia",
    component: DashSearchTrivia,
  },
  {
    path: "/organiser/create-url",
    name: "DashCreateURL",
    component: DashCreateURL,
  },
  { path: "/organiser/view-url", name: "DashViewURL", component: DashViewURL },
  {
    path: "/organiser/create-vendor-service",
    name: "DashCreateVendorService",
    component: DashCreateVendorService,
  },
  {
    path: "/organiser/view-vendor",
    name: "DashViewVendor",
    component: DashViewVendor,
  },
  {
    path: "/organiser/place-advert",
    name: "DashPlaceAdvert",
    component: DashPlaceAdvert,
  },
  {
    path: "/organiser/advert-listing",
    name: "DashAdvertListing",
    component: DashAdvertListing,
  },
  {
    path: "/organiser/search-vendor",
    name: "DashSearchVendor",
    component: DashSearchVendor,
  },
  {
    path: "/organiser/view-vendor-service",
    name: "ViewVendorService",
    component: ViewVendorService,
  },
  {
    path: "/organiser/edit-vendor-service",
    name: "EditVendorService",
    component: EditVendorService,
  },
  {
    path: "/organiser/bidders-vendor",
    name: "DashBiddersLogVendor",
    component: DashBiddersLogVendor,
  },
  { path: "/organiser/reviews", name: "DashReviews", component: DashReviews },
  {
    path: "/organiser/view-enquiries",
    name: "ViewEnquiries",
    component: ViewEnquiries,
  },
  {
    path: "/organiser/vendor-sales-analytics",
    name: "VendorSalesAnalytics",
    component: VendorSalesAnalytics,
  },
  {
    path: "/organiser/hotel-booking",
    name: "HotelBooking",
    component: HotelBooking,
  },
  {
    path: "/organiser/travel-booking",
    name: "TravelBooking",
    component: TravelBooking,
  },
  {
    path: "/organiser/ielts",
    name: "IELTS",
    component: IELTS,
  },
  {
    path: "/organiser/tour-sales",
    name: "TourSales",
    component: TourSales,
  },
   //catchall 404
   {path: '/:catchAll(.*)', name: 'NotFound', component: NotFound},
  // Latest Hamzat Update on Vendor Side

  //seller dashboard
  {
    path: "/user/dashboard",
    name: "SecondDashboard",
    component: SecondDashboard,
  },
  {
    path: "/user/profile",
    name: "SecondDashProfile",
    component: SecondDashProfile,
  },
  {
    path: "/user/transactionhistory",
    name: "SecondDashTransaction",
    component: SecondDashTransaction,
  },

  /* {
    path: "/user/view-contestants",
    name: "SecondDashViewContestants",
    component: SecondDashViewContestants,
  }, */
  {
    path: "/user/view-vote-analytics",
    name: "SecondDashVoteSalesAnalytics",
    component: SecondDashVoteSalesAnalytics,
  },
  {
    path: "/user/result-setting",
    name: "SecondDashResultSetting",
    component: SecondDashResultSetting,
  },
  {
    path: "/user/search-vote",
    name: "SecondDashSearchVote",
    component: SecondDashSearchVote,
  },

  {
    path: "/user/create-event",
    name: "SecondDashCreateEvent",
    component: SecondDashCreateEvent,
  },
  {
    path: "/user/add-ticket",
    name: "SecondDashAddTicket",
    component: SecondDashAddTicket,
  },
  /* {
    path: "/user/view-event",
    name: "SecondDashViewEvent",
    component: SecondDashViewEvent,
  }, */
  /* {
    path: "/user/search-event",
    name: "SecondDashSearchEvent",
    component: SecondDashSearchEvent,
  }, */
  {
    path: "/user/event-sales-analytics",
    name: "SecondDashEventSalesAnalytics",
    component: SecondDashEventSalesAnalytics,
  },
  {
    path: "/user/personal-ticket",
    name: "SecondDashPersonalTicket",
    component: SecondDashPersonalTicket,
  },
  {
    path: "/user/search-ticket",
    name: "SecondDashSearchTicket",
    component: SecondDashSearchTicket,
  },
  {
    path: "/user/create-form",
    name: "SecondDashCreateForm",
    component: SecondDashCreateForm,
  },
  {
    path: "/user/view-form",
    name: "SecondDashViewForm",
    component: SecondDashViewForm,
  },
  {
    path: "/user/personal-form",
    name: "SecondDashPersonalForm",
    component: SecondDashPersonalForm,
  },
  {
    path: "/user/form-sales-analytics",
    name: "SecondDashFormSalesAnalytics",
    component: SecondDashFormSalesAnalytics,
  },
  {
    path: "/user/search-form",
    name: "SecondDashSearchForm",
    component: SecondDashSearchForm,
  },
  {
    path: "/user/create-trivia",
    name: "SecondDashCreateTrivia",
    component: SecondDashCreateTrivia,
  },
  {
    path: "/user/view-trivia",
    name: "SecondDashViewTrivia",
    component: SecondDashViewTrivia,
  },
  {
    path: "/user/update-trivia",
    name: "SecondDashUpdateTrivia",
    component: SecondDashUpdateTrivia,
  },
  {
    path: "/user/view-result",
    name: "SecondDashViewResult",
    component: SecondDashViewResult,
  },
  {
    path: "/user/trivia-sales-analytics",
    name: "SecondDashTriviaSalesAnalytics",
    component: SecondDashTriviaSalesAnalytics,
  },
  {
    path: "/user/search-trivia",
    name: "SecondDashSearchTrivia",
    component: SecondDashSearchTrivia,
  },
  {
    path: "/user/create-url",
    name: "SecondDashCreateURL",
    component: SecondDashCreateURL,
  },
  {
    path: "/user/vendor-profile",
    name: "DashVendorProfile",
    component: SecondDashVendorProfile,
  },
  {
    path: "/user/place-advert",
    name: "SecondDashPlaceAdvert",
    component: SecondDashPlaceAdvert,
  },
  {
    path: "/user/advert-listing",
    name: "SecondDashAdvertListing",
    component: SecondDashAdvertListing,
  },
  {
    path: "/user/view-url",
    name: "SecondDashViewURL",
    component: SecondDashViewURL,
  },
  {
    path: "/organiser/view-vendor",
    name: "DashViewVendor",
    component: DashViewVendor,
  },
  {
    path: "/organiser/search-vendor",
    name: "DashSearchVendor",
    component: DashSearchVendor,
  },
  ///////////////////////////////////////////Super Admin
  {
    path: "/superadmin",
    name: "SuperAdminLogin",
    component: SuperAdminLogin,
  },

  {
    path: "/superadmin/dashboard",
    name: "SuperAdminDashboard",
    component: SuperAdminDashboard,
  },
  {
    path: "/superadmin/profile",
    name: "SuperAdminProfile",
    component: SuperAdminProfile,
  },
  //////////////////////////////
  {
    path: "/superadmin/overview-general",
    name: "SuperAdminGenOverviewGeneral",
    component: SuperAdminGenOverviewGeneral,
  },
  {
    path: "/superadmin/view-organisers",
    name: "SuperAdminGenViewOrganiser",
    component: SuperAdminGenViewOrganiser,
  },
  {
    path: "/superadmin/short-links",
    name: "SuperAdminGenShortLinks",
    component: SuperAdminGenShortLinks,
  },
  {
    path: "/superadmin/subscribers",
    name: "SuperAdminGenSubscribers",
    component: SuperAdminGenSubscribers,
  },
  {
    path: "/superadmin/add-subscribers",
    name: "SuperAdminGenAddSubscribers",
    component: SuperAdminGenAddSubscribers,
  },
  {
    path: "/superadmin/search-airtime",
    name: "SuperAdminGenSearchAirtime",
    component: SuperAdminGenSearchAirtime,
  },
  {
    path: "/superadmin/view-airtime-logs",
    name: "SuperAdminGenViewAirtimeLogs",
    component: SuperAdminGenViewAirtimeLogs,
  },
  {
    path: "/superadmin/view-payout",
    name: "SuperAdminGenViewPayout",
    component: SuperAdminGenViewPayout,
  },
  {
    path: "/superadmin/payu-log",
    name: "SuperAdminGenPayuLog",
    component: SuperAdminGenPayuLog,
  },
  {
    path: "/superadmin/search-payu-logs",
    name: "SuperAdminGenSearchPayuLogs",
    component: SuperAdminGenSearchPayuLogs,
  },
  {
    path: "/superadmin/add-faq",
    name: "SuperAdminGenAddFaq",
    component: SuperAdminGenAddFaq,
  },
  {
    path: "/superadmin/view-faqs",
    name: "SuperAdminGenViewFaq",
    component: SuperAdminGenViewFaq,
  },
  {
    path: "/superadmin/view-faqs",
    name: "SuperAdminGenViewFaq",
    component: SuperAdminGenViewFaq,
  },
  ////////////////////////////////////
  {
    path: "/superadmin/overview-voting",
    name: "SuperAdminVotOverviewVoting",
    component: SuperAdminVotOverviewVoting,
  },
  {
    path: "/superadmin/view-contest",
    name: "SuperAdminVotViewContest",
    component: SuperAdminVotViewContest,
  },
  {
    path: "/superadmin/vote-payout-setting",
    name: "SuperAdminVotVotePayoutSetting",
    component: SuperAdminVotVotePayoutSetting,
  },
  {
    path: "/superadmin/start-voting",
    name: "SuperAdminVotStartVoting",
    component: SuperAdminVotStartVoting,
  },
  {
    path: "/superadmin/createVote",
    name: "SuperAdminVotCreateVote",
    component: SuperAdminVotCreateVote,
  },
  {
    path: "/superadmin/add-contestant",
    name: "SuperAdminVotAddContestant",
    component: SuperAdminVotAddContestant,
  },
  {
    path: "/superadmin/add-sponsor",
    name: "SuperAdminVotAddSponsors",
    component: SuperAdminVotAddSponsors,
  },
  {
    path: "/superadmin/add-category",
    name: "SuperAdminVotAddCategory",
    component: SuperAdminVotAddCategory,
  },
  {
    path: "/superadmin/add-info",
    name: "SuperAdminVotAddInfo",
    component: SuperAdminVotAddInfo,
  },
  {
    path: "/superadmin/view-contestants",
    name: "SuperAdminVotViewContestants",
    component: SuperAdminVotViewContestants,
  },
  {
    path: "/superadmin/vote-sales-analytics",
    name: "SuperAdminVotVoteSalesAnalytics",
    component: SuperAdminVotVoteSalesAnalytics,
  },
  {
    path: "/superadmin/result-setting",
    name: "SuperAdminVotResultSetting",
    component: SuperAdminVotResultSetting,
  },
  {
    path: "/superadmin/search-for-vote",
    name: "SuperAdminVotSearchVote",
    component: SuperAdminVotSearchVote,
  },
  ///////////////////////////////
  {
    path: "/superadmin/overview-registration",
    name: "SuperAdminRegOverviewRegistration",
    component: SuperAdminRegOverviewRegistration,
  },
  {
    path: "/superadmin/create-event",
    name: "SuperAdminRegCreateEvent",
    component: SuperAdminRegCreateEvent,
  },
  {
    path: "/superadmin/add-ticket",
    name: "SuperAdminRegAddTicket",
    component: SuperAdminRegAddTicket,
  },
  {
    path: "/superadmin/view-event",
    name: "SuperAdminRegViewEvent",
    component: SuperAdminRegViewEvent,
  },
  {
    path: "/superadmin/event-setting",
    name: "SuperAdminRegEventSetting",
    component: SuperAdminRegEventSetting,
  },
  {
    path: "/superadmin/personal-ticket",
    name: "SuperAdminRegPersonalTicket",
    component: SuperAdminRegPersonalTicket,
  },
  {
    path: "/superadmin/event-cash-payment",
    name: "SuperAdminRegEventCashPayment",
    component: SuperAdminRegEventCashPayment,
  },
  {
    path: "/superadmin/event-payout-setting",
    name: "SuperAdminRegEventPayoutSetting",
    component: SuperAdminRegEventPayoutSetting,
  },
  {
    path: "/superadmin/event-sales-analytics",
    name: "SuperAdminRegEventSalesAnalytics",
    component: SuperAdminRegEventSalesAnalytics,
  },
  {
    path: "/superadmin/search-ticket",
    name: "SuperAdminRegSearchTicket",
    component: SuperAdminRegSearchTicket,
  },
  ///////////////////////////////////////
  {
    path: "/superadmin/overview-forms",
    name: "SuperAdminFomOverviewForms",
    component: SuperAdminFomOverviewForms,
  },
  {
    path: "/superadmin/create-form",
    name: "SuperAdminFomCreateForm",
    component: SuperAdminFomCreateForm,
  },
  {
    path: "/superadmin/build-form",
    name: "SuperAdminFomBuildForm",
    component: SuperAdminFomBuildForm,
  },
  {
    path: "/superadmin/view-forms",
    name: "SuperAdminFomViewForm",
    component: SuperAdminFomViewForm,
  },
  {
    path: "/superadmin/personal-forms",
    name: "SuperAdminFomPersonalForm",
    component: SuperAdminFomPersonalForm,
  },
  {
    path: "/superadmin/form-cash-payment",
    name: "SuperAdminFomFormCashPayment",
    component: SuperAdminFomFormCashPayment,
  },
  {
    path: "/superadmin/form-payout-setting",
    name: "SuperAdminFomFormPayoutSetting",
    component: SuperAdminFomFormPayoutSetting,
  },
  {
    path: "/superadmin/form-sales-analytics",
    name: "SuperAdminFomFormSalesAnalytics",
    component: SuperAdminFomFormSalesAnalytics,
  },
  {
    path: "/superadmin/search-forms",
    name: "SuperAdminFomSearchForm",
    component: SuperAdminFomSearchForm,
  },
  ///////////////////////////////////////
  {
    path: "/superadmin/overview-trivia",
    name: "SuperAdminTriOverviewTrivia",
    component: SuperAdminTriOverviewTrivia,
  },
  {
    path: "/superadmin/create-trivia",
    name: "SuperAdminTriCreateTrivia",
    component: SuperAdminTriCreateTrivia,
  },
  {
    path: "/superadmin/view-trivia",
    name: "SuperAdminTriViewTrivia",
    component: SuperAdminTriViewTrivia,
  },
  {
    path: "/superadmin/trivia-payout-setting",
    name: "SuperAdminPayoutTrivia",
    component: SuperAdminPayoutTrivia,
  },
  {
    path: "/superadmin/update-trivia",
    name: "SuperAdminTriUpdateTrivia",
    component: SuperAdminTriUpdateTrivia,
  },
  {
    path: "/superadmin/view-result",
    name: "SuperAdminTriViewResult",
    component: SuperAdminTriViewResult,
  },
  {
    path: "/superadmin/trivia-cash-payment",
    name: "SuperAdminTriTriviaCashPayment",
    component: SuperAdminTriTriviaCashPayment,
  },
  {
    path: "/superadmin/trivia-sales-analytics",
    name: "SuperAdminTriTriviaSalesAnalytics",
    component: SuperAdminTriTriviaSalesAnalytics,
  },
  {
    path: "/superadmin/search-trivia",
    name: "SuperAdminTriSearchTrivia",
    component: SuperAdminTriSearchTrivia,
  },
  ///////////////////////////////////////
  {
    path: "/superadmin/create-vendor-service",
    name: "SuperAdminVenCreateVendorService",
    component: SuperAdminVenCreateVendorService,
  },
  {
    path: "/superadmin/view-vendor",
    name: "SuperAdminVenViewVendor",
    component: SuperAdminVenViewVendor,
  },
  {
    path: "/superadmin/search-vendor",
    name: "SuperAdminVenSearchVendor",
    component: SuperAdminVenSearchVendor,
  },
  ///////////////////////////////////////
  {
    path: "/superadmin/travel-booking",
    name: "SuperAdminTrlTravelBooking",
    component: SuperAdminTrlTravelBooking,
  },
  {
    path: "/superadmin/hotel-booking",
    name: "SuperAdminTrlHotelBooking",
    component: SuperAdminTrlHotelBooking,
  },
  {
    path: "/superadmin/e-visa",
    name: "SuperAdminTrleVisa",
    component: SuperAdminTrleVisa,
  },

  {
    path: "/superadmin/e-visaPending",
    name: "SuperAdminTrleVisaPending",
    component: SuperAdminTrleVisaPending,
  },
  {
    path: "/superadmin/e-visaApproved",
    name: "SuperAdminTrleVisaApproved",
    component: SuperAdminTrleVisaApproved,
  },
  ///////////////////////////////////////
  {
    path: "/superadmin/create-blog",
    name: "SuperAdminBlgCreateBlogPost",
    component: SuperAdminBlgCreateBlogPost,
  },
  {
    path: "/superadmin/view-blogs",
    name: "SuperAdminBlgViewBlogs",
    component: SuperAdminBlgViewBlogs,
  },
  ///////////////////////////////////////
  {
    path: "/superadmin/overview-sales-analytics",
    name: "SuperAdminAnaOverviewSalesAnalytics",
    component: SuperAdminAnaOverviewSalesAnalytics,
  },
  {
    path: "/superadmin/voting-analytics",
    name: "SuperAdminAnaVotingAnalytics",
    component: SuperAdminAnaVotingAnalytics,
  },
  {
    path: "/superadmin/form-analytics",
    name: "SuperAdminAnaFormAnalytics",
    component: SuperAdminAnaFormAnalytics,
  },
  {
    path: "/superadmin/ticket-analytics",
    name: "SuperAdminAnaTicketAnalytics",
    component: SuperAdminAnaTicketAnalytics,
  },
  {
    path: "/superadmin/trivia-analytics",
    name: "SuperAdminAnaTriviaAnalytics",
    component: SuperAdminAnaTriviaAnalytics,
  },
  {
    path: "/superadmin/vendor-analytics",
    name: "SuperAdminAnaVendorAnalytics",
    component: SuperAdminAnaVendorAnalytics,
  },
  ///////////////////////////////////////
  {
    path: "/superadmin/create-url",
    name: "SuperAdminURLCreateURL",
    component: SuperAdminURLCreateURL,
  },
  {
    path: "/superadmin/view-url",
    name: "SuperAdminURLViewURL",
    component: SuperAdminURLViewURL,
  },
  ///////////////////////////////////////
  {
    path: "/superadmin/contact-list",
    name: "SuperAdminNotContactList",
    component: SuperAdminNotContactList,
  },
  {
    path: "/superadmin/sms-logs",
    name: "SuperAdminNotSMSLogs",
    component: SuperAdminNotSMSLogs,
  },
  {
    path: "/superadmin/view-contest",
    name: "ViewContest",
    component: ViewContest,
  },
  {
    path: "/superadmin/view-Categories",
    name: "ViewCategories",
    component: ViewCategories,
  },
  {
    path: "/superadmin/ielts",
    name: "Lelt",
    component: Lelt,
  },
  {
    path: "/superadmin/tour-sales",
    name: "STravelsales",
    component: STravelsales,
  },
  {
    path: "/superadmin/cash-payment",
    name: "CashPayment",
    component: CashPayment,
  },
  {
    path: "/superadmin/pending-online",
    name: "PendingOnline",
    component: PendingOnline,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
