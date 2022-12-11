<template>
  <div class="d-flex flex-row flex-wrap">
    <span class="d-flex mx-2 text-capitalize">
      <label class="radio" style="display: flex">
      <input
        type="radio"
        v-model="selectedVal"
        @input="$emit('update:modelValue', selected)"
        class="radio-input"
        name="paymentGateway"
        :value="selected"
        :checked="selected"
      />
      <span class="mx-3 d-flex">{{ selected }}</span>
        <div class="circle"></div>
      </label>
    </span>
    <span
      class="d-flex mx-2 text-capitalize"
      v-for="(gateway, index) in gateways"
      :key="index"
    >
      <label class="radio" style="display: flex">
      <input
        type="radio"
        v-model="selectedVal"
        @input="$emit('update:modelValue', gateway)"
        name="paymentGateway"
        class="radio-input"
        :value="gateway"
      />
      <span class="mx-3 d-flex">{{ gateway }}</span>
      <div class="circle"></div>
      </label>
    </span>
  </div>
</template>

<script>
  export default {
    name: "PaymentGateway",
    components: {},
    props: {
      selected: {
        type: String,
        default: "",
      },
      gateways: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        selectedVal: "",
      };
    },

    watch: {
      selected() {
        this.selectedVal = this.selected;
      },
    },
  };
</script>

<style>
  .radio {
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    color: black;
  }

  .radio-input {
    display: none;
  }

  .circle {
    position: relative;
    height: 20px;
    width: 20px;
    border: 3px solid #e1e1e1;
    display: inline-block;
    border-radius: 50%;
    right: 94%;
    top: 27%;
  }

  .circle:after {
    content: "";
    height: 10px;
    width: 10px;
    display: block;
    position: absolute;
    background: #3ce75b;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    opacity: 0;
  }

  .radio input:checked ~ .circle:after {
    opacity: 1;
  }
</style>
