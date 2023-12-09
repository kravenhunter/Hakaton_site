<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="info flex justify-center">
    <div class="discribe">
      <div class="title">
        <h1>Полезные статьи</h1>
        <h2>О мошенничестве и не только</h2>
      </div>
      <div class="empty_block">
        <div class="info_discribe-empty-first"></div>
        <div class="info_discribe-empty-second"></div>
        <div class="info_discribe-empty-third"></div>
      </div>
      <div class="list flex flex-col gap-y-5">
        <div class="app flex">
          <div class="app__text flex">
            <p>Новое приложение FraudChek</p>
            <Icon icon="material-symbols-light:arrow-back" :rotate="2" />
          </div>
          <div class="app__image">
            <NuxtImg src="/images/Realme11.jpg" />
          </div>
        </div>
        <div class="cyber">
          <div class="flex">
            <p>Что такое кибербезопасность?</p>
            <Icon icon="material-symbols-light:arrow-back" :rotate="2" />
          </div>
          <div class="image">
            <NuxtImg src="/images/image536.jpg" />
          </div>
        </div>
        <div class="game">
          <div class="flex">
            <p>Игры и кибербезопасность</p>
            <Icon icon="material-symbols-light:arrow-back" :rotate="2" />
          </div>
          <div class="image">
            <NuxtImg src="/images/image537.jpg" />
          </div>
        </div>
        <div class="criminals">
          <div class="flex">
            <p>Виды киберпреступлений</p>
            <Icon icon="material-symbols-light:arrow-back" :rotate="2" />
          </div>
          <div class="image">
            <NuxtImg src="/images/image538.jpg" />
          </div>
        </div>
        <div class="scammers">
          <div class="flex">
            <p>Как обманывают по телефону</p>
            <Icon icon="material-symbols-light:arrow-back" :rotate="2" />
          </div>
          <div class="image">
            <NuxtImg src="/images/image539.jpg" />
          </div>
        </div>
        <div class="scammers">
          <div class="flex">
            <p>Как продают людей дешевле</p>
            <Icon icon="material-symbols-light:arrow-back" :rotate="2" />
          </div>
          <div class="image">
            <NuxtImg src="/images/image540.jpg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info {
  width: 100%;
  height: 100%;
  & .discribe {
    width: min(100%, 876px);
    & .list {
      & .app {
        background: var(--color-blue-dark);
        &__text {
          width: 466px;
        }
        &_image {
          width: 392px;
          height: 100%;
        }
      }
    }
  }
}
</style>
