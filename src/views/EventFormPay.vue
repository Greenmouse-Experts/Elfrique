<template>
  <title>Event Form | Elfrique – Complete Event Management System</title>
  <elfrique-header />

  <section class="contestant-profile">
    <div class="container mt-5 details-contestant">
      <div class="row">
        <div class="col-lg-6">
          <div class="img-area">
            <img src="@/assets/images/event-form-img.jpg" />
          </div>
          <div class="text-area">
            <h4>Form Name</h4>
            <p>{{ product_title }}</p>
            <h4>Event Details</h4>
            <h6>{{ description }}</h6>
          </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-5 form-area">
          <div class="contestantPaySection">
            <h4>
              You are about to pay. There would be no refund or reversal if you
              choose a wrong form.
            </h4>
            <hr />
            <h5>Summary of your order</h5>
            <div>
              <h6>Name</h6>
              <p>{{ name }}</p>
            </div>
            <div>
              <h6>Email</h6>
              <p>{{ email }}</p>
            </div>
            <div>
              <h6>Reference</h6>
              <p>{{ reference }}</p>
            </div>
            <div>
              <h6><strong>Amount</strong></h6>
              <p>{{ currency_symbol }} {{ amount }}</p>
            </div>
            <h5>Choose Payment Gateway</h5>
            <PaymentGateway
              :selected="paymentGateway"
              :gateways="paymentMethods"
              v-model="selectedGateway"
            />
          </div>
          <div v-if="currency_symbol != 'NGN'">
            <div class="col-lg-12 mb-3">
              <button @click="flutterWave(form_id)"
              v-if="selectedGateway == 'flutterwave'">
                Pay Now – International
              </button>
            </div>
          </div>
          <div v-else>
            <div class="col-lg-12 mb-3" v-if="selectedGateway == 'paystack'">
              <button @click="PayStack(form_id)">Pay Now – Local</button>
            </div>
            <div class="col-lg-12 mb-3" v-if="selectedGateway == 'flutterwave'">
              <button @click="flutterWave(form_id)">
                Pay Now – Local & International
              </button>
            </div>
            <div class="col-lg-12 mb-3" v-if="selectedGateway == 'interswitch'">
              <button @click="interSwitch(form_id)">
                Pay Now – Local & International
              </button>
            </div>
            <!-- <div class="col-lg-12 mb-3" v-if="method == 'aimstoget'">
              <button :disabled="loading" @click="callAtgPay(form_id)">
                Pay Now – Airtime – Nigeria Only 
              </button>
            </div> -->
          </div>
          <!-- <div class="col-lg-12 mb-3">
            <button>
              AimToGet – Pay Now – Airtime – Nigeria Only 
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </section>

  <elfrique-footer />
</template>
<script>
  import Header from "./elfrique-header.vue";
  import Footer from "./elfrique-footer.vue";
  import EventService from "../service/form.service";
  import TransactionService from "../service/transaction.service";
  import Notification from "../service/notitfication-service";
  import Swal from "sweetalert2";
  import PaymentGateway from "./components/PaymentGateway.vue";

  export default {
    name: "Elfrique",
    components: {
      "elfrique-header": Header,
      "elfrique-footer": Footer,
      Swal,
      PaymentGateway,
    },
    computed: {
      transData() {
        return JSON.parse(this.$route.params.data);
      },
    },
    data() {
      return {
        data: "",
        reference: "",
        description: localStorage.getItem("EventformDescription"),
        admin_id: "",
        email: "",
        name: "",
        amount: "",
        method: "",
        product_title: "",
        currency_symbol: "",
        form_id: "",
        publicKey: "pk_test_be803d46f5a6348c3643967d0e6b7b2303d42b4f",
        flw_public_key: "FLWPUBK_TEST-0f353662b04aee976128e62946a59682-X",
        paymentGateway: "",
        paymentMethods: ["paystack", "flutterwave", "interswitch"],
        selectedGateway: "",
      };
    },
    created() {
      const script = document.createElement("script");
      script.src =
        "https://qa.interswitchng.com/collections/public/javascripts/inline-checkout.js";
      document.getElementsByTagName("head")[0].appendChild(script);
      this.getData();
    },
    methods: {
      getData() {
        let data = JSON.parse(localStorage.getItem("EventformData"));
        this.reference = data.reference;
        this.form_id = data.product_id;
        this.admin_id = data.admin_id;
        this.email = data.email;
        this.name = data.payer_name;
        this.amount = data.amount;
        this.currency_symbol = data.currency;
        this.data = data;
        this.method = data.method;
        this.reference = data.reference;
        this.product_title = data.product_title;
        this.paymentGateway = data.method;
        this.selectedGateway = this.paymentGateway;
        const indexItem = this.paymentMethods.indexOf(this.paymentGateway);
        this.paymentMethods.splice(indexItem, 1);
      },
      PayStack(id) {
        //  options
        const paymentOptions = {
          // general options
          key: "pk_test_be803d46f5a6348c3643967d0e6b7b2303d42b4f", //required
          email: this.email, //required
          amount: (this.amount * 100).toFixed(0), //required
          reference: this.reference, //required
          firstname: this.name,
          lastname: "",
          /* currency: this.currency,
                channels: this.channels,
                metadata: this.metadata,
                label: this.label,  */
          onSuccess: (response) => {
            console.log(response);
            this.method = "Paystack";
            Notification.addNotification({
              receiverId: this.admin_id,
              type: "Event Form",
              message: `Someone just Successfully Applied for ${this.name} Event Form`,
            });
            TransactionService.makeTransaction(this.data).then((response) => {
              //this.modal.hide();
              this.message = response.data.message;
              //this.resetForm();
            });
            this.$router.push("/fill-form/" + id);
          },
          /*  onCancel: () => {
                this.onCancel();
                }, */
          // onBankTransferConfirmationPending: function(response) {
          //   this.onBankTransferConfirmationPending(response);
          // },
          // single split payments
          //subaccount:this.subaccount,  //required for single split
          //transaction_charge:this.transaction_charge,
          //bearer:this.bearer,
          // multi-split payments
          //split_code:this.split_code, //required for multi-split
          // subscriptionss
          // plan: this.plan, //required for subscriptions
          // quantity: this.quantity,
        };
        const paystack = new window.PaystackPop();
        paystack.newTransaction(paymentOptions);
      },
      flutterWave(id) {
        if (this.currency_symbol != "NGN") {
          let paymentParams = FlutterwaveCheckout({
            public_key: this.flw_public_key,
            tx_ref: this.reference,
            amount: this.amount,
            currency: "USD",
            customer: {
              email: this.email,
              /* phone_number: this.payContent.phone, */
            },
            callback: (response) => {
              console.log(response);
              this.loading = false;
              this.method = "Flutterwave";
              Notification.addNotification({
                receiverId: this.adminId,
                type: "Event Form",
                message: `Someone just Successfully Applied for ${this.name} Event Form`,
              });
              TransactionService.makeTransaction(this.data).then((response) => {
                this.loading = false;
                this.message = response.data.message;
              });
              paymentParams.close();
              this.$router.push("/form-fill/" + id);
              window.close();
            },
            onclose: () => paymentParams.close(),
          });
        } else {
          let paymentParams = FlutterwaveCheckout({
            public_key: this.flw_public_key,
            tx_ref: this.reference,
            amount: this.amount,
            currency: "NGN",
            customer: {
              email: this.email,
              phone_number: this.phone,
            },
            callback: (response) => {
              console.log(response);
              this.loading = false;
              this.method = "Flutterwave";
              Notification.addNotification({
                receiverId: this.adminId,
                type: "Event Form",
                message: `Someone just Successfully Applied for ${this.name} Event Form`,
              });
              TransactionService.makeTransaction(this.data).then((response) => {
                this.loading = false;
                //this.message = response.data.message;
              });
              paymentParams.close();
              this.$router.push("/fill-form/" + id);
              window.close();
            },
            onclose: () => paymentParams.close(),
          });
        }
      },
      interSwitch(id) {
        let samplePaymentRequest = {
          merchant_code: "MX60729",
          pay_item_id: "6294592",
          site_redirect_url: window.location.origin,
          cust_id: this.email,
          data_ref: "vjyLc2lgNK",
          txn_ref: this.reference,
          amount: this.amount,
          currency: 566, // ISO 4217 numeric code of the currency used
          onComplete: (response) => {
            console.log(response);
            this.method = "InterSwitch";
            //console.log(this.transactForm);
            Notification.addNotification({
              receiverId: this.admin_id,
              type: "Event Form",
              message: `Someone just Successfully Applied for ${this.name} Event Form`,
            });
            TransactionService.makeTransaction(this.data).then((response) => {
              //this.modal.hide();
              this.message = response.data.message;
              //this.resetForm();
            });
            this.$router.push("/fill-form/" + id);
          },
          mode: "TEST",
        };
        window.webpayCheckout(samplePaymentRequest);
        //this.modal.hide();
      },
    },
    mounted() {
      window.scrollTo(0, 0);
      const popup = document.createElement("script");
      popup.setAttribute("src", "https://js.paystack.co/v2/inline.js");
      popup.async = true;
      document.head.appendChild(popup);
      const inlineSdk = "https://checkout.flutterwave.com/v3.js";
      const script = document.createElement("script");
      script.src = inlineSdk;
      if (!document.querySelector(`[src="${inlineSdk}"]`)) {
        document.body.appendChild(script);
      }
    },
  };
</script>
