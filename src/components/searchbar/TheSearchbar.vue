<template>
    <div class="search-bar">
      <input
        type="text"
        v-model="searchQuery"
        @input="onSearch"
        :placeholder="placeholder"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    placeholder: {
      type: String,
      default: 'Tìm kiếm...'
    }
  })
  
  const emit = defineEmits(['search'])
  const searchQuery = ref('')
  
  const onSearch = () => {
    emit('search', searchQuery.value)
  }
  </script>
  
  <style scoped>
  .search-bar {
    width: 525px;
  }
  input {
    width: 100%;
    padding: 8px;
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid black;
  }
  input:focus {
    border: none;
    border-bottom: 2px solid black;
    outline: none;
    box-shadow: none;
  }
  </style>
  