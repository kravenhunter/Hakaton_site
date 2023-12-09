<script setup lang="ts">
defineProps({
  title: String,
  isButton: {
    type: Boolean,
    default: true,
  },

  buttonClass: {
    type: String,
    default: "color__darkBlue",
  },
  linkPath: String,
});
</script>

<template>
  <button v-if="isButton" :class="buttonClass" type="button">
    <span>{{ title }}</span>
  </button>
  <NuxtLink v-else :to="linkPath" :class="buttonClass">
    {{ title }}
  </NuxtLink>
</template>

<style scoped lang="scss">
button {
  border: none;
}
.color__darkBlue {
  background: var(--color-blue-dark);
  color: white;
}
.color__black {
  background: var(--color-dark);
  color: white;
}
</style>
