<script setup lang="ts"></script>

<template>
  <div class="info flex justify-center">
    <div class="discribe">
      <div class="title">
        <h1>Полезные статьи</h1>
        <h2>О мошенничестве и не только</h2>
      </div>
      <div class="empty_block flex justify-between">
        <div class="info_discribe-empty-first"></div>
        <div class="info_discribe-empty-second"></div>
        <div class="info_discribe-empty-third"></div>
      </div>
      <div class="list flex flex-col gap-y-5">
        <div class="app apps flex">
          <div class="app__text flex justify-between">
            <p>Новое приложение FraudChek</p>
            <button type="button" class="btn grid place-content-center">
              <NuxtImg src="/images/Arrow1.svg" />
            </button>
          </div>
          <div class="image">
            <NuxtImg src="/images/Realme11.jpg" />
          </div>
        </div>
        <div class="app flex cyber">
          <div class="app__text flex justify-between">
            <p>Что такое кибербезопасность?</p>
            <button type="button" class="btn grid place-content-center">
              <NuxtImg src="/images/Arrow1.svg" />
            </button>
          </div>
          <div class="image">
            <NuxtImg src="/images/image536.jpg" />
          </div>
        </div>
        <div class="app flex game">
          <div class="app__text flex justify-between">
            <p>Игры и кибербезопасность</p>
            <button type="button" class="btn grid place-content-center">
              <NuxtImg src="/images/Arrow1.svg" />
            </button>
          </div>
          <div class="image">
            <NuxtImg src="/images/image537.jpg" />
          </div>
        </div>
        <div class="app flex criminals">
          <div class="app__text flex justify-between">
            <p>Виды киберпреступлений</p>
            <button type="button" class="btn grid place-content-center">
              <NuxtImg src="/images/Arrow1.svg" />
            </button>
          </div>
          <div class="image">
            <NuxtImg src="/images/image538.jpg" />
          </div>
        </div>
        <div class="app flex scammers">
          <div class="app__text flex justify-between">
            <p>Как обманывают по телефону</p>
            <button type="button" class="btn grid place-content-center">
              <NuxtImg src="/images/Arrow1.svg" />
            </button>
          </div>
          <div class="image">
            <NuxtImg src="/images/image539.jpg" />
          </div>
        </div>
        <div class="app flex sels">
          <div class="app__text flex justify-between">
            <p>Как продают людей дешевле</p>
            <button type="button" class="btn grid place-content-center">
              <NuxtImg src="/images/Arrow1.svg" />
            </button>
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
  & h1 {
    color: var(--color-blue-dark);
  }
  & h2 {
    color: #555555;
    margin-bottom: 39px;
  }
  & .discribe {
    width: min(100%, 876px);
    padding-top: 50px;
    & .empty_block {
      margin-bottom: 18px;
      & > div {
        background: #d9d9d9;
        width: min(100%, 170px);
        height: 45px;
        border-radius: 10px;
      }
      & div:nth-child(1) {
        width: min(100%, 484px);
      }
    }
    & .list {
      & > div {
        height: 227px;
        border-radius: 30px;
        margin-bottom: 18px;
      }
      & .app {
        &__text {
          width: 466px;
          padding: 42px 30px 0 51px;

          & p {
            width: 219px;
            color: white;
            font-size: 20px;
          }
        }
        & .image {
          width: 410px;
          border-radius: 30px;
          overflow: hidden;

          & img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
.apps {
  background: var(--color-blue-dark);
}
.cyber {
  background: #01090a;
}

.game {
  background: #183940;
}
.criminals {
  background: #1d3450;
}
.scammers {
  background: #615f5b;
}
.sels {
  background: #31230c;
}
.btn {
  width: 47px;
  height: 47px;
  background: white;
  border-radius: 38px;
  & img {
    height: 12px;
  }
}
</style>
