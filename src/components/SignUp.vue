<template>
  <form class="form" name="signup-form">
    <div class="input">
      <label for="email">Email:</label>
      <input id="email" type="text" v-model="user.email" />
    </div>
    <div class="input">
      <label for="password">Password:</label>
      <input id="password" type="text" v-model="user.password" />
    </div>
    <button class="btn" @click="register">Register</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const user = ref({
  email: "",
  password: "",
});

const auth = getAuth();

const register = () => {
  createUserWithEmailAndPassword(auth, user.value.email, user.value.password)
    .then((data) => {
      console.log("Successfuly registered!", data);
      router.push("/about");
    })
    .catch((error) => {
      console.log(error.code);
    });
};
</script>
