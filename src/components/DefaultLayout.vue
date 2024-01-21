<template>
  <div>
    <Navbar />
    <main class="main">
      <router-view />
    </main>
    <FooterInfo />
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import FooterInfo from "../components/FooterInfo.vue";
</script>

<style>
.main {
  background-color: black;
}
</style>
