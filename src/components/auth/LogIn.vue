<template>
  <form class="form" name="login-form" @submit.prevent="login">
    <div class="input">
      <label for="email">Email:</label>
      <input id="email" type="email" v-model="user.email" />
    </div>
    <div class="input">
      <label for="password">Password:</label>
      <input id="password" type="password" v-model="user.password" />
    </div>
    <span>{{ errMsg }}</span>
    <button class="btn" type="submit" v-on:click="sigin">Login</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const errMsg = ref("");
const user = ref({
  email: "",
  password: "",
});

const auth = getAuth();

const sigin = () => {
  signInWithEmailAndPassword(auth, user.value.email, user.value.password)
    .then((data) => {
      console.log("Successfuly login!", data);
      router.push("/about");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        default:
          errMsg.value = "good";
      }
    });
};
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
