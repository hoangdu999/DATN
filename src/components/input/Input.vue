<template>
  <div
    :style="{
      width: width,
    }"
    class="m-input-component"
    :class="{ error: errorMsg }"
  >
    <label for="m-input" class="m-lable"
      >{{ textField
      }}<span>{{ required && textField ? " *" : "" }}</span></label
    >
    <div
      :style="{
        height: height,
        marginTop: !textField ? '' : marginTopInput,
      }"
      class="m-input-main"
    >
      <input
        class="m-input"
        :type="type"
        id="m-input"
        :ref="name"
        :placeholder="placeholder"
        :value="modelValue"
        :style="{
          paddingRight: paddingRight,
          borderColor: isFocused ? focusBorderColor : '',
        }"
        :readonly="isReadonly"
        @focus="onFocus"
        @blur="onBlur"
        @input="changeValue($event)"
        :name="name"
        :tabindex="tabIndex"
      />
      <!-- autocomplete="off" -->
      <p class="m-input__error-msg">{{ errorMsg }}</p>
      <div class="m-input-icon">
        <div :class="classIcon" class="m-input-icon-rotate"></div>
      </div>
    </div>
  </div>
</template>
  <script>
//   import common from '@/common/common';

export default {
  name: "MInput",
  emits: ["change-input", "message-error-input", "update:modelValue"],
  data() {
    return {
      valueInput: null,
      isFocused: false,
    };
  },
  props: {
    focusBorderColor: {
      type: String,
      default: "red",
    },

    textField: String,
    modelValue: String,
    type: String,
    width: String,
    height: String,
    marginBottom: {
      type: String,
    },
    placeholder: String,
    required: Boolean,
    classIcon: String,
    top: String,
    isReadonly: Boolean,
    originValue: {
      type: [String, Number],
    },
    name: {
      type: String,
      default: "",
    },
    errorMsg: {
      type: String,
      default: "",
    },
    rules: {
      type: Array,
      default: new Array(0),
    },
    tabIndex: Number,
  },
  methods: {
    /**
     * Truyền sự kiển đổi value input
     */
    changeValue(event) {
      this.$emit("update:modelValue", event.target.value);
      this.$emit("message-error-input", this.name, "");
    },
    /**
     * Check vaidate theo rules truyen vao
     */
    checkValidate() {
      if (this.rules.length > 0) {
        //   var msgErrorInput = common.inputValidation(this.rules,this.name,this.modelValue);
        this.$emit("message-error-input", this.name, msgErrorInput);
      }
    },
    /**
     * Focus input
     */
    onFocus() {
      this.isFocused = true; // Đặt trạng thái focus
    },
    onBlur() {
      this.isFocused = false; // Xóa trạng thái focus khi rời khỏi
    },
  },
  computed: {
    /**
     * căn trái
     */
    paddingRight() {
      return this.classIcon ? "36px" : "16px";
    },
    /**
     * Cách lable
     */
    marginTopInput() {
      return this.textField ? "5px" : "";
    },
  },
};
</script>
  
  <style scoped>
.m-input-component {
  width: 100%;
}
.m-input-component.error .m-input {
  border: 1px solid red;
}
.m-lable {
  font-weight: 600;
  font-family: inherit;
}
.m-lable span {
  color: red;
}
.m-input-main {
  height: var(--height-default);
  position: relative;
}
.m-input {
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 4px;
  padding-left: 16px;
  border: 1px solid #bbb;
  font-family: inherit;
}
.m-input__error-msg {
  color: red;
  font-size: 12px;
  font-style: italic;
  margin-top: 2px;
  display: block;
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.m-input__error-msg:hover {
  overflow: visible;
  white-space: normal;
  height: auto; /* just added this line */
  -webkit-box-orient: unset;
}
.m-input::placeholder {
  font-size: 14px;
}
.m-input:focus {
  border: 1px solid var(--bgr-header);
}
.m-input-icon {
  position: absolute;
  top: 0;
  width: 32px;
  height: 100%;
  border-radius: 0 4px 4px 0;
  right: 0;
  background-position: center;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s;
}
.m-input-icon-rotate {
  transition: transform 0.3s ease-in-out;
}
.m-input-icon.active .m-input-icon-rotate {
  transform: rotate(180deg);
  transition: transform 0.3s ease-in-out;
}
.m-input-list {
  position: absolute;
  background-color: white;
  box-shadow: 0px -1px 3px 1px #bbb;
  width: 100%;
  border-radius: 4px;
  z-index: 2;
  height: 0;
  top: calc(100% + 2px) !important;
}
.m-input-list-item {
  padding: 8px 16px;
  transition: 0.1s;
  cursor: pointer;
  user-select: none;
}
.m-input-list-item:hover {
  background-color: #ebedf0;
  color: #2ff408;
}
.m-input-list-item:nth-last-child(1):hover {
  border-radius: 0 0 4px 4px;
}
.m-input-list-item:nth-child(1):hover {
  border-radius: 4px 4px 0 0;
}
.m-input-list-item.active {
  background-color: #50b83c;
  color: white;
}
.m-input-list-item.active:nth-last-child(1) {
  border-radius: 0 0 4px 4px;
}
.m-input-list-item.active:nth-child(1) {
  border-radius: 4px 4px 0 0;
}
</style>
  