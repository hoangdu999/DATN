<template>
  <input
    :disabled="disabled"
    type="checkbox"
    v-bind="$attrs"
    :id="id"
    class="m-input-checkbox"
    :checked="checked"
    @change="selectedCheckBox"
  />
  <label :for="id" class="m-checkbox-lable"><span></span></label>
</template>

<script setup>
import { defineProps, defineEmits, useAttrs } from 'vue'

// Props
const props = defineProps({
  id: String,
  checked: Boolean,
  disabled: {
    type: Boolean,
    default: false
  }
})

// Emit
const emit = defineEmits(['checkbox-selected'])

// $attrs (có thể được dùng để binding thêm từ component cha)
const $attrs = useAttrs()

// Emit toggle khi checkbox thay đổi
const selectedCheckBox = () => {
  emit('checkbox-selected', !props.checked, props.id)
}
</script>

<style scoped>
@import url(./checkbox.css);
</style>
