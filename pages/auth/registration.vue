<script setup lang="ts">

</script>

<template>
  <div>
    <NuxtLink to="/"><nuxt-img src="/images/fraudLogo_3.svg" /></NuxtLink>
    <div class="flexx">
      <div class="osnov__login">
        <div class="orange">
          <NuxtImg src="/images/Galaxy Not20 Ultra.png" width="400px"/>
        </div>
        <div class="forms">
          <div>
            <form action="">
              <div class="ssd">
                <label for="">Никнейм</label>
                <input type="text" name="" id="">
              </div>
              <div class="ssd">
                <label for="">E-mail</label>
                <input type="text" name="" id="">
              </div>
              <div class="ssd">
                <label for="">Повторите пароль</label>
                <input type="text" name="" id="">
              </div>
              <div class="ssd">
                <label for="">Пароль</label>
                <input type="text" name="" id="">
              </div>
              <button>Войти</button>
              <div class="bvb">
                <NuxtLink class="vvv" to="registration">Еще нет аккаунта?</NuxtLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .bvb{
    display: flex;
    justify-content: center;
  }
  .vvv{
    color: #BBB;
    font-family: 'Roboto Mono';
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .ssd{
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
  }
  input{
    width: 349px;
    height: 45px;
    border-radius: 10px;
    background: #D9D9D9;
  }
  button{
    color: #FFF;
    text-align: center;
    font-family: 'Roboto Mono';
    font-size: 20px;
    font-weight: 700;
    display: flex;
    width: 367px;
    height: 55px;
    padding: 13px 108.5px 13px 107.5px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 30px;
    background: #003FB9;
    margin-top: 46px;
    margin-bottom: 29px;
  }
  label{
    color: #000;
    font-family: 'Roboto Mono';
    font-size: 18px;
    font-weight: 400;
  }
  .osnov__login{
    width: 900px;
    height: 570px;
    display: flex;
    justify-content: center;
    border-radius: 16px 0 0 16px;
  }
  .orange{
    background: #FFA51F;
    height: 570px;
    flex: 50%;
    border-radius: 16px 0 0 16px;
    position: relative;

    & img{
      position: absolute;
      bottom: 0;
    }
  }
  .forms{
    height: 570px;
    background: #F9F9F9;
    flex: 50%;
    border-radius: 0 16px 16px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .flexx{
    display: flex;
    justify-content: center;
  }
</style>
