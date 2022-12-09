<template>
  <div class="d-flex flex-row">
    <span class="d-flex mx-2 flex-grow-1 text-capitalize">
      <input
        type="radio"
        style="width: 20px; height: 20px"
        v-model="selectedVal"
        @input="$emit('update:modelValue', selected)"
        name="paymentGateway"
        class="d-flex flex-grow-1 mt-1"
        :value="selected"
        :checked="selected"
      />
      <span class="ml-2 d-flex flex-grow-1">{{ selected }}</span>
    </span>
    <span
      class="d-flex mx-2 flex-grow-1 text-capitalize"
      v-for="(gateway, index) in gateways"
      :key="index"
    >
      <input
        type="radio"
        style="width: 20px; height: 20px"
        v-model="selectedVal"
        @input="$emit('update:modelValue', gateway)"
        name="paymentGateway"
        class="d-flex flex-grow-1 mt-1"
        :value="gateway"
      />
      <span class="ml-2 d-flex flex-grow-1">{{ gateway }}</span>
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
