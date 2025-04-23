<template>
  <div class="m-radio-base">
    <input
      type="radio"
      :id="id"
      :name="nameInput"
      :checked="checked"
      @change="onChange"
      class="m-radio-button"
      :tabindex="tabIndex"
    />
    <label
      :for="id"
      :style="{
        margin: margin,
      }"
      >{{ textField }}
    </label>
  </div>
</template>
<script>
export default {
  name: "MRadioButton",
  emits:["change"],
  props: {
    textField: String,
    margin: String,
    nameInput: String,
    id: String,
    checked: Boolean,
    tabIndex :Number
  },
  methods: {
    /**
     * Bắt sự kiện onChange
     * Author : NVDuong (05/1/2023)
     */
    onChange() {
      this.$emit("change", this.id);
    },
  },
};
</script>
<style scoped>
@import url(./radio.css);
</style>
