<script setup lang="ts"></script>

<template>
  <div class="default__layout m-auto">
    <UiHeader />
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.default__layout {
  width: min(100%, 1512px);
  height: 100vh;
  display: grid;
}
</style>
