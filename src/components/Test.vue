<template>
  <div>
    <input type="email" placeholder="email" v-model="user.email" />
    <input type="password" placeholder="password" v-model="user.password" />
    <button @click="addUser()">Add user</button>
    <button @click="updateUser()">Update user</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { db } from "../firebase";
import { addDoc, doc, updateDoc, collection } from "firebase/firestore";

const user = ref({
  email: "",
  password: "",
});

async function addUser() {
  await addDoc(collection(db, "articles"), user.value).then((res) => {
    console.log("Done!");
  });
}

async function updateUser() {
  await updateDoc(doc(db, "articles", tasks[1].id), user.value).then((res) => {
    console.log("User updated!");
  });
}

const { tasks } = defineProps({
  tasks: Object,
});
</script>
