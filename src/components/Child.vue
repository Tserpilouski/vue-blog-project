<template>
  <button @click="$emit('increaseBy', number)">Add Math random</button>
</template>

<script setup>
import { ref } from "vue";

const number = ref(5);
</script>
