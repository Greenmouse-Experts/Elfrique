<template>
  <div class="d-flex flex-row flex-wrap">
    <span class="d-flex mx-2 text-capitalize">
      <input
        type="radio"
        style="width: 20px; height: 20px"
        v-model="selectedVal"
        @input="$emit('update:modelValue', selected)"
        name="paymentGateway"
        class="d-flex mt-1"
        :value="selected"
        :checked="selected"
      />
      <span class="mx-3 d-flex">{{ selected }}</span>
    </span>
    <span
      class="d-flex mx-2 mb-3 text-capitalize"
      v-for="(gateway, index) in gateways"
      :key="index"
    >
      <input
        type="radio"
        style="width: 20px; height: 20px"
        v-model="selectedVal"
        @input="$emit('update:modelValue', gateway)"
        name="paymentGateway"
        class="d-flex mt-1"
        :value="gateway"
      />
      <span class="mx-2 d-flex">{{ gateway }}</span>
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
            default: ''
        },
        gateways: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
        selectedVal: ''
      };
    },

    watch: {
        selected() {
            this.selectedVal = this.selected;
        }
    },
  };
</script>
