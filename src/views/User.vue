<template>
  <div class="container">
    <div class="box">
      <img class="box__img" src="/men.png" alt="" />
      <div class="btnandinput">
        <div class="box__box-btn">
          <button class="tab-button" @click="choseBtn = 'signup'">
            SignUp
          </button>
          <button class="tab-button" @click="choseBtn = 'login'">SignIn</button>
        </div>
        <div>
          <LogIn v-if="choseBtn == 'login'" />
          <SignUp v-else />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import LogIn from "../components/LogIn.vue";
import SignUp from "../components/SignUp.vue";
import { ref } from "vue";

const choseBtn = ref("login");
</script>

<style lang="scss" scoped>
.container {
  width: 1280px;
  min-height: calc(100vh - 10.76875rem);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0);
  padding-top: 2rem;
  &__box-btn {
    margin-bottom: 2rem;
  }
  &__img {
    width: 21rem;
    margin-right: 1rem;
  }
}

.btnandinput {
  background-color: white;
  padding: 1rem;
}

.tab-button {
  width: 10rem;
  height: 3rem;
  background: #f0f0f0;
  border: none;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #000000;
  color: white;
}
</style>
