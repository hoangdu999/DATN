<template>
  <input :disabled ="disabled" type="checkbox" v-bind="$attrs" name="" :id="id" class="m-input-checkbox" :checked="checked" @change="selectedCheckBox()" />
  <label :for="id" class="m-checkbox-lable"  ><span></span></label>
</template>
<script>
export default {
    name:"MCheckBox",
    emits:["checkbox-selected"],
    data() {
      return {
      }
    },
    props: {
      id : String,
      checked : Boolean,
      disabled : {
        type : Boolean,
        default : false
      }
    },
    /**
     * Truyền sự kiện chexbox
     *  
     */
    methods:{
      selectedCheckBox(){
        this.$emit("checkbox-selected",!this.checked,this.id);
      }
    }
};
</script>
<style scoped>
@import url(./checkbox.css);
</style>
