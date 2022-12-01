<template>
  <div class="d-flex flex-row">
    <v-otp-input
      ref="otpInput"
      :input-classes="`otp-input mr-5`"
      separator=""
      :num-inputs="5"
      :should-auto-focus="true"
      :is-input-num="true"
      @on-complete="handleOnComplete"
    />
  </div>
</template>

<script>
import VOtpInput from "vue3-otp-input";
  export default {
    name: "OtpInput",
    components: {
      "v-otp-input": VOtpInput,
    },

    data() {
        return {}
    },

    methods: {
        handleOnComplete(value) {
            this.$emit('validateOtp', value);
        }
    }
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
.hasError {
    border : 1.5px solid #EA3C53
}
</style>
