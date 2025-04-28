<template>
  <div class="header">
    <div class="header_container flex-jsb">
      <div class="header__left flex">
        <router-link to="/" class="cur">
          <div class="flex">
            <img src="/src/assets/img/logo_tab_oboe.svg" alt="Logo" class="w-65px" />
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="60" viewBox="0 0 70 60">
              <text x="34" y="57" font-size="40" fill="#b90449" text-anchor="middle" font-weight="600">boe</text>
            </svg>

          </div>
        </router-link>
        <router-link to="/intro" class="cur p-hover">Giới Thiệu</router-link>
        <router-link to="/forum" class="cur p-hover">Diễn Đàn</router-link>
      </div>
      <div class="header__searchbar">
        <!-- 👇 Truyền placeholder động -->
        <TheSearchbar :placeholder="placeholder" />
        <ul class="options__list">
          <li v-for="(item, index) in options" :key="index" class="option-item p-hover"
            :class="{ active: activeIndex === index }" @click="setActive(index)">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="header__right flex-jsa">
        <MsButton radius ="10px" >Đăng Ký</MsButton>
        <MsButton radius ="10px">Đăng Nhập</MsButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, toRefs, computed, watch } from 'vue'
import { useStore } from 'vuex'
import MsButton from '../button/MsButton.vue'
import TheSearchbar from '../searchbar/TheSearchbar.vue'

const store = useStore()

const state = reactive({
  activeIndex: store.getters['header/activeIndex'],
  placeholder: 'Tìm kiếm từ vựng'
})

const options = computed(() => store.getters['header/options'])

const setActive = (index) => {
  state.activeIndex = index
  store.commit('header/setActiveIndex', index)
  state.placeholder = 'Tìm kiếm ' + options.value[index].toLowerCase()
}

watch(() => state.activeIndex, (newIndex) => {
  state.placeholder = 'Tìm kiếm ' + options.value[newIndex].toLowerCase()
})

const { activeIndex, placeholder } = toRefs(state)
</script>

<style scoped>
@import url(./TheHeaderCss.css);
</style>
