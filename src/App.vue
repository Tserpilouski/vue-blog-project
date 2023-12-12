<template>
  <div class="bgr">
    <Header></Header>
    <div>
      <RouterView />
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<style></style>
