<script setup lang="ts"></script>

<template>
  <header class="flex justify-between items-center">
    <div class="logo">
      <nuxt-img src="/images/fraudLogo_5.svg" />
    </div>
    <ul class="flex">
      <li>
        <nuxt-link to="/">Главная</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/info">Информация</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/scammers">Мошенники</nuxt-link>
      </li>
      <li>
        <nuxt-link class="login" to="/auth/login">Войти</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<style scoped lang="scss">
header {
  width: 100%;
  height: min(100%, 120px);
  background: var(--color-blue-dark);
  padding: 29px 67px 31px 67px;
  & .logo {
    width: min(100%, 173px);
    height: min(100%, 54px);
    & img {
      height: 100%;
      width: 100%;
    }
  }
  & ul li {
    color: white;
  }
  & a {
    padding: 20px 27px;
    border-radius: 30px;
    &.router-link-active {
      background: var(--color-blue-light);
    }
  }
  & .login {
    background: var(--color-blue-light);
  }
}
</style>
