<script setup>
import { ref } from "vue";
const number = ref(1);
const props = defineProps(["count", "parentId"]);
</script>

<template>
  <div
    @click="$emit('increaseBy', number, parentId)"
    class="article__header_vote"
  >
    <font-awesome-icon icon="arrow-up" /> <span>{{ props.count }}</span>
  </div>
</template>
