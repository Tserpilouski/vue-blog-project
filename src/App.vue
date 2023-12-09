<template>
  <div>
    <Header></Header>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
</script>
