<template>
    <div class="home">
            <TheCard :slides="listSlides" />
    </div>
  </template>
<script setup>
import TheCard from '../../components/card/TheCard.vue';
const listSlides = [
  { title: 'Slide 1', description: 'Description 1', bgColor: '#411a29', progressColor: '#FF5B79', class: 'slide-item' },
  { title: 'Slide 2', description: 'Description 2', bgColor: '#1E1B4B', progressColor: '#4F46E5', class: 'slide-item' },
  { title: 'Slide 3', description: 'Description 3', bgColor: '#0C3720', progressColor: '#5b874b', class: 'slide-item' }
]

</script>

<style scoped>
@import url(./TheHomeCss.css);
</style>