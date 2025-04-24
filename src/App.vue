<template>
  <div class="app-container">
    <TheHeader />
    <div class="router-view-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheHeader from './components/header/TheHeader.vue'
export default {
  components: {
    TheHeader
  }
}
</script>

<style>
@import url(./assets/css/index.css);

.app-container {
  position: relative;
}

.router-view-wrapper {
  margin-top: 140px; 
  padding:20px 80px;
}
</style>
