<template>
  <div class="container">
    <div class="box">
      <pre>{{ tasks }}</pre>
      <Test :tasks="tasks" />
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { db } from "../firebase/index";
import { getDocs, collection } from "firebase/firestore";
import Test from "../components/Test.vue";

const tasks = ref([]);

onMounted(async function () {
  const task = await getDocs(collection(db, "articles"));
  task.forEach((task) => {
    tasks.value.push({ ...task.data(), id: task.id });
  });
});
</script>

<style lang="scss" scoped>
.container {
  width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.box {
  height: 50rem;
  background-color: antiquewhite;
  color: black;
}
</style>
