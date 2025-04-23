<template>
  <div class="ms-textarea-main">
      <label v-if="!noTitle" :for="name" class="lable-textarea" :style="{fontSize : fontSizeTile + 'px'}" >{{title}} <span class="required">{{required ? "*" : "" }}</span></label><br />
      <textarea 
          :type="type"
          :name="name"
          :tabindex="tabIndex"
          :placeholder="placeholder"
          :value="modelValue"
          @click="onClick"
          @blur="onBlur"
          @input="changeValue($event)"
          class="ms-textarea"
          :style="{
              width : widthtext+ 'px',
              height : heighttext + 'px',
              marginTop : marginToptextarea + 'px',
          }"
          :rows="Rows"
          :cols="Cols"
        >
      </textarea>  
    </div>
</template>
<script>
export default {
name: "MsTextarea",
props:{
  Cols:String,
  Rows:String,
  noTitle :Boolean,
  title : String,
  tabIndex: Number,
  name : String,
  type: {
      type : String,
      default : "text"
  },
  placeholder: String,
  modelValue: String,
  required: Boolean,
  heighttext : Number,
  widthtext : Number,
  marginToptextarea : Number,
  fontSizeTile : Number,
},
methods:{
  onClick(e){
      this.$emit("click",e);
  },
  onBlur(e){
      this.$emit("blur",e);
  },
  changeValue(event) {
    this.$emit("update:modelValue", event.target.value);
    this.$emit("message-error-input",this.name, "");
  },
}
};
</script>
<style scoped>
.ms-textarea-main{
  width: 100%;
}
.lable-textarea{
  font-weight: bold;
}
.required{
  color: red;
}
.ms-textarea{
  height: 28px;
  width: 100% !important;
  outline: none;
  border:1px solid #b1aeae;
  margin-top: 10px;
  padding-left: 8px;
  overflow: auto;
}
.ms-textarea:focus{
  border:1px solid #525050;
}
</style>
