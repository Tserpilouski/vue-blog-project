<template>
  <div class="container">
    <div class="box">
      <img class="box__img" src="/men.png" alt="" />
      <div class="authform">
        <div class="boxbtn">
          <button
            class="boxbtn__btn"
            :class="{ boxbtn__btn_active: !login }"
            @click="login = false"
          >
            SignUp
          </button>
          <button
            class="boxbtn__btn"
            :class="{ boxbtn__btn_active: login }"
            @click="login = true"
          >
            SignIn
          </button>
        </div>
        <div>
          <LogIn v-if="login == true" />
          <SignUp v-else />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import LogIn from "../components/auth/LogIn.vue";
import SignUp from "../components/auth/SignUp.vue";
import { ref } from "vue";

const login = ref(true);
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

.authform {
  background-color: white;
  padding: 1rem;
}

.boxbtn__btn {
  width: 10rem;
  height: 3rem;
  background: #f0f0f0;
  border: none;

  &:hover {
    background: #9b9b9b;
  }

  &_active {
    color: white;
    background-color: black;
  }
}
</style>
