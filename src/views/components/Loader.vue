<template>
  <div class="loading-screen">
    <div :class="center ? `loading-animation` : `loading-unanimation`">
      <img src="@/assets/images/logo.png" v-if="loaderImage" class="logo-elfrique" />
      <div v-if="loadingBar" class="loading-bar" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loadingBar: {
      type: Boolean,
      default: true
    },
    loaderImage: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false,
    }
  }
};
</script>

<style>
.loading-animation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  position: relative;
  margin-top: 40vh;
  transform: translateY(-50%);
}

.loading-unanimation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
}

.loading-screen {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.logo-elfrique {
  width: 100px;
  animation: bounce 1.5s infinite ease;
}

@keyframes bounce {
  0% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  25% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  100% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
}

.loading-bar {
  width: 200px;
  height: 2px;
  background: #cfcfcf;
  margin-top: 22px;
  position: relative;
  overflow: hidden;
}

.loading-bar::before {
  content: "";
  width: 68px;
  height: 2px;
  background: #4c8f35;
  position: absolute;
  left: -34px;
  animation: bluebar 1.5s infinite ease;
}

@keyframes bluebar {
  50% {
    left: 166px;
  }
}
</style>
