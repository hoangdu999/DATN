<template>
    <Swiper ref="swiperRef" class="swiper" :modules="[Autoplay, Pagination, Navigation, EffectCards]" effect="cards"
        grabCursor :slides-per-view="1" :space-between="30" :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }" :pagination="{ clickable: true }"
        :navigation="{ nextEl: '.slider-button-next', prevEl: '.slider-button-prev' }" :keyboard="{ enabled: true }"
        :mousewheel="true" @slideChange="onSlideChange" @autoplayTimeLeft="onAutoplayTimeLeft">
        <SwiperSlide v-for="(slide, index) in slides" :key="index" :data-bg-color="slide.bgColor"
            :data-progress-color="slide.progressColor">
            <div class="card" :class="slide.class">
            
                <div class="card-content">
                    <h2 class="card-title">{{ slide.title }}</h2>
                    <p class="card-description">{{ slide.description }}</p>
                    <button class="cta-button">Learn More</button>
                </div>
            </div>
        </SwiperSlide>

        <!-- <div class="swiper-pagination"></div> -->
        <div class="slider-button-prev slider-button"></div>
        <div class="slider-button-next slider-button"></div>
    </Swiper>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination, EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const swiperRef = ref(null)
const slides = [
    { title: 'Slide 1', description: 'Description 1', bgColor: '#411a29', progressColor: '#FF5B79', class: 'slide-item' },
    { title: 'Slide 2', description: 'Description 2', bgColor: '#1E1B4B', progressColor: '#4F46E5', class: 'slide-item' },
    { title: 'Slide 3', description: 'Description 3', bgColor: '#0C3720', progressColor: '#5b874b', class: 'slide-item' }
]

function onSlideChange() {
    nextTick(() => {
        updateBackground()
        playPageFlipSound()
    })
}

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

function playPageFlipSound() {
    const sound = document.getElementById('pageFlipSound')
    if (sound) {
        sound.currentTime = 0
        sound.play().catch(() => { })
    }
}

onMounted(() => {
    nextTick(() => {
        updateBackground()
        createPageFlipAudio()
        setupCardEffects()
    })
})

function createPageFlipAudio() {
    const audio = document.createElement('audio')
    audio.id = 'pageFlipSound'
    audio.preload = 'auto'
    audio.src = 'data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAAD...'
    document.body.appendChild(audio)
}

function setupCardEffects() {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const { left, top, width, height } = card.getBoundingClientRect()
            const x = (e.clientX - left) / width - 0.5
            const y = (e.clientY - top) / height - 0.5
            const maxRotation = 2
            card.style.transform = `perspective(1000px) rotateX(${y * maxRotation}deg) rotateY(${-x * maxRotation}deg)`
        })

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)'
        })
    })
}
</script>

<style scoped>
/* Import your previous TheCardCss.css here or copy relevant styles */
@import "./TheCardCss.css";
</style>