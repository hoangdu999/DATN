<template>
    <Swiper
      ref="swiperRef"
      class="swiper"
      :modules="[Autoplay, Pagination, Navigation, EffectCards]"
      effect="cards"
      grabCursor
      :slides-per-view="1"
      :space-between="30"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }"
      :pagination="{ clickable: true }"
      :navigation="{ nextEl: '.slider-button-next', prevEl: '.slider-button-prev' }"
      :keyboard="{ enabled: true }"
      :mousewheel="true"
      @autoplayTimeLeft="onAutoplayTimeLeft"
      :style="{
        width: width + 'px',
        height: height + 'px',
      }"
    >
      <SwiperSlide
        v-for="(slide, index) in slides"
        :key="index"
        :data-bg-color="slide.bgColor"
        :data-progress-color="slide.progressColor"
      >
        <div class="card" :class="slide.class">
          <div class="card-content">
            <h2 class="card-title">{{ slide.title }}</h2>
            <p class="card-description">{{ slide.description }}</p>
            <button class="cta-button">Learn More</button>
          </div>
        </div>
      </SwiperSlide>
  
      <div class="slider-button-prev slider-button"></div>
      <div class="slider-button-next slider-button"></div>
    </Swiper>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Autoplay, Navigation, Pagination, EffectCards } from 'swiper/modules'
  
  import 'swiper/css'
  import 'swiper/css/effect-cards'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'
  
  // ✅ Nhận props slides, width, height
  defineProps({
    slides: {
      type: Array,
      required: true
    },
    width: {
      type: Number,
      default: 800
    },
    height: {
      type: Number,
      default: 500
    }
  })
  
  const swiperRef = ref(null)
  
  function onAutoplayTimeLeft(swiper, time, progress) {
    document.querySelectorAll('.autoplay-progress svg')?.forEach(svg => {
      svg.style.setProperty('--progress', 1 - progress)
    })
    document.querySelectorAll('.autoplay-progress-bar')?.forEach(bar => {
      bar.style.setProperty('--progress', `${(1 - progress) * 100}%`)
    })
  }
  
  function updateBackground() {
    const activeSlide = swiperRef.value?.swiper?.slides[swiperRef.value.swiper.activeIndex]
    if (!activeSlide) return
  
    const bgColor = activeSlide.getAttribute('data-bg-color')
    const progressColor = activeSlide.getAttribute('data-progress-color')
  
    document.body.style.backgroundColor = bgColor
    document.body.style.setProperty('--progress-color', progressColor)
    document.body.style.setProperty('--theme-color', bgColor)
  }
  
  onMounted(() => {
    updateBackground()
   
  })
  </script>
  
  <style scoped>
  @import "./TheCardCss.css";
  </style>
  