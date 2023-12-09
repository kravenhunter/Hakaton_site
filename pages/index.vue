<script setup lang="ts"></script>

<template>
  <div class="main">
    <NuxtImg class="oval__top" src="/images/Oval.jpg" />
    <NuxtImg class="oval__botton" src="/images/Oval _6.jpg" />
    <NuxtImg class="chel__right" src="/images/chelRig.svg" width="600px" height="400px" />
    <NuxtImg class="chel__left" src="/images/sdfsd.svg" width="600px" height="400px" />
    <div class="main__scammers">
      <h1>Осторожно, мошенники!</h1>
      <h2>Будьте бдительны!</h2>
      <div class="main__scammers-btn">
        <UiElementsButton :is-button="false" title="Войти" link-path="/auth/login" />

        <p>и обезопасить себя</p>
      </div>
    </div>
    <div class="main__app flex justify-end">
      <!--       <div class="new__app-image">
        <NuxtImg src="/images/Galaxy_Note_20_Ultra.svg" alt="Galaxy_Note_20_Ultra" />
      </div> -->
      <div class="main__app-description">
        <h4>Новое приложение</h4>
        <p>Скачайте наше новое мобильное приложение для Android</p>
        <UiElementsButton title="Скачать" button-class="color__black" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  color: #555;
  position: relative;

  & .oval__top {
    position: absolute;
    bottom: 141px;
    left: 0;
  }
  & .oval__botton {
    position: absolute;
    top: 394px;
    left: 0;
  }
  & h1 {
    color: var(--color-blue-dark);
    margin-bottom: 20px;
  }
  & h2 {
    margin-bottom: 80px;
  }
  &__scammers {
    width: min(100%, 732px);
    height: min(100%, 249px);
    margin-top: 216px;
    margin-left: 250px;
    margin-bottom: 198px;
    &-btn {
      width: min(100%, 313px);
    }

    & a {
      padding: 19px 108px;
      border-radius: 50px;
      font-size: 32px;
      font-weight: 700;
    }
    & p {
      text-align: center;
      margin-top: 30px;
      color: #bbb;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  &__app {
    width: min(100%, 877px);
    height: 913px;
    background: url("/images/Galaxy_Note_20_Ultra.jpg") left no-repeat;
    &-description {
      width: min(100%, 305px);
      margin-top: 129px;
      & h4 {
        margin-bottom: 17px;
      }
      & button {
        padding: 13px 53px;
        font-size: 20px;
        border-radius: 30px;
      }
      & p {
        font-size: 20px;
        margin-bottom: 50px;
      }
    }
  }
}
.chel__right{
  position: absolute;
  right: 0;
  top: 50%;
}
.chel__left{
  position: absolute;
  right: 0;
}
</style>
