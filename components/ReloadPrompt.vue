<template>
  <transition name="slide">
    <div v-if="show" class="update-popup">
      <p>有新的更新可用</p>
      <button class="refresh-button" @click="refresh">刷新</button>
      <button @click="close">取消</button>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    refresh() {
      window.location.reload();
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.update-popup {
  border: 1px solid var(--va-border-color);
  background-color: var(--va-c-bg);
}

.refresh-button {
  color: var(--va-c-text);
  background-color: var(--va-primary);
}

.refresh-button:hover {
  background-color: var(--va-primary-light);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
