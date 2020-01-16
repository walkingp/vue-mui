<template>
    <button
        class="button"
        :disabled="disabled"
        @click="handleClick"
        :class="[
      `mc-button--${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled
      }
    ]"
    >
        <i :class="icon" v-if="icon"></i>
        <!-- 如果没有传入插槽的时候才显示 -->
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </button>
</template>
<script>
export default {
  name: "MButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>
<style lang="scss">
@import url(./button.scss);
</style>
