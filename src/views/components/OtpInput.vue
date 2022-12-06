<template>
  <div class="d-flex flex-column">
    <div class="d-flex flex-row">
      <v-otp-input
        ref="otpInput"
        :input-classes="`otp-input mr-5 ${error ? 'hasError' : ''}`"
        :is-disabled="disabled"
        separator=""
        :num-inputs="5"
        :should-auto-focus="true"
        :is-input-num="true"
        @on-complete="handleOnComplete"
      />
    </div>
    <span class="mt-2" v-if="error">
      <small class="text-red-700 text-xs semibold"
        >Otp code entered is not valid</small
      >
    </span>
  </div>
</template>

<script>
  import VOtpInput from "vue3-otp-input";
  export default {
    name: "OtpInput",
    components: {
      "v-otp-input": VOtpInput,
    },

    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      error: {
        type: Boolean,
        default: false,
      },
      clear: {
        type: Boolean,
        default: false,
      },
    },

    data() {
      return {
        disabledVal: false,
        errorVal: false,
      };
    },

    watch: {
      disabled() {
        this.disabledVal = this.disabled;
      },
      error() {
        this.errorVal = this.error;
      },
      clear() {
        this.$refs.otpInput.clearInput();
      },
    },

    methods: {
      handleOnComplete(value) {
        this.$emit("validateOtp", value);
      },
    },
  };
</script>

<style>
  .otp-input {
    width: 40px;
    height: 54px;
    padding: 5px;
    font-size: 20px;
    border-radius: 4px;
    /* border: 1px solid rgba(0, 0, 0, 0.3); */
    text-align: center;
    outline: none;
    margin-left: 5%;
    margin-right: 5%;
  }
  .otp-input::-webkit-inner-spin-button,
  .otp-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .contestant-profile .details-contestant .form-area .hasError {
    border: 2px solid #ea3c53;
  }

  .text-red-700 {
    color: rgba(185, 28, 28, 1);
  }

  .text-xs {
    font-size: 0.9rem;
    line-height: 1rem;
  }

  .semibold {
    font-weight: 600;
  }
</style>
