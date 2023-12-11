<template>
  <form class="form" name="login-form" @submit.prevent="login">
    <div class="input">
      <label for="email">Email:</label>
      <input id="email" type="email" v-model="inputs.email" />
    </div>
    <div class="input">
      <label for="password">Password:</label>
      <input id="password" type="password" v-model="inputs.password" />
    </div>
    <span v-if="error" class="error">{{ error }}</span>
    <button class="btn" type="submit" v-on:click="login">Login</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const inputs = ref({
  email: "",
  password: "",
});

const error = ref("");

function login() {
  if (inputs.value.email === "" || inputs.value.password === "") {
    error.value = "Username and Password cannot be empty";
  } else {
    error.value = "";
  }
}
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  padding-top: 2rem;
}

.form div {
  margin-bottom: 2rem;
}
.form span {
  margin-bottom: 1rem;
}
.btn {
  width: 9rem;
  height: 3rem;
  margin-bottom: 2rem;
}

.input {
  display: flex;
  flex-direction: column;
}

label {
  color: black;
}
</style>
