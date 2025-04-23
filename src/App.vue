<template>
  <div class="app-container">
    <the-home></the-home>
  </div>
</template>
<script>
  import TheHome from './views/home/TheHome.vue';
  import { reactive, toRefs } from 'vue';
  export default {
      components: {
          TheHome
      },
      setup () {
          const state = reactive({
              count: 0,
          })
      
          return {
              ...toRefs(state),
          }
      }
  }
</script>
<style>
@import url(./assets/css/index.css);
.container-main {
  margin-top: 137.59px;
  padding: 40px 64px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>