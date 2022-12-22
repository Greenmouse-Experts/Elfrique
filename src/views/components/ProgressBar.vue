<template>
    <div class="d-flex flex-row" style="width: 100%">
  <div class="progress progress-striped active mt-2 flex-grow-1">
    <div class="progress-bar elfrique" :style="`width: ${Math.round((value / total) * 100)}% ; background-color: #3b702a`"></div>
  </div>
      <span class="mx-3 text-xsm d-flex flex-column justify-content-end" v-if="percentage">{{calculateScore(value,total)}}%</span>
  </div>
</template>

<script>
export default {
    name: 'ProgressBar',
    components: {},
    props: {
        value: {
            type: Number,
            default: 0,
        },

        total: {
            type: Number,
            default: 0,
        },

        percentage: {
            type: Boolean,
            default: false
        }
    },

    methods: {
      calculateScore(value,total) {
        return Math.round((value / total) * 100) || 0
      }
    }
}
</script>

<style>
  .text-xsm {
    font-size: 0.7rem;
    line-height: 1rem;
  }
</style>