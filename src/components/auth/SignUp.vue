<template>
  <form class="form" name="signup-form" @submit.prevent="register">
    <div class="input">
      <label for="email">Email:</label>
      <input id="email" type="text" v-model="user.email" />
    </div>
    <div class="input">
      <label for="password">Password:</label>
      <input id="password" type="password" v-model="user.password" />
    </div>
    <span>{{ errMsg }}</span>
    <button class="btn" type="submit">Register</button>
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
const errMsg = ref(null);

const auth = getAuth();

const register = () => {
  createUserWithEmailAndPassword(auth, user.value.email, user.value.password)
    .then((data) => {
      console.log("Successfuly registered!", data);
      router.push("/about");
    })
    .catch((error) => {
      errMsg.value = error;
      console.log(error.code);
    });
};
</script>
