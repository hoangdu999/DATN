<template>
    <div class="auth" :style="`background-image: url(${loginBg})`">
      <div class="center-wrapper">
        <Swiper
          ref="swiperRef"
          class="swiper"
          :modules="[Autoplay, Pagination, Navigation, EffectCards, Keyboard]"
          effect="cards"
          grabCursor
          :slides-per-view="1"
          :space-between="30"
          :pagination="{ clickable: true }"
          :keyboard="{ enabled: true }"
          :mousewheel="true"
        >
          <SwiperSlide>
            <FormLogin />
          </SwiperSlide>
          <SwiperSlide>
            <FormLogin />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </template>
  
<script setup>
  import { ref} from 'vue'
  import loginBg from './../../assets/img/login.jpg'
  import './TheAuthCss.css'
  import FormLogin from '../../components/form-login/FormLogin.vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Autoplay, Navigation, Pagination, EffectCards, Keyboard } from 'swiper/modules'

  const swiperRef = ref(null);

</script>


  