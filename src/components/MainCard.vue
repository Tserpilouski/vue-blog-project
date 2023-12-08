<script setup>
// Принимаем объект cardData как пропс
const props = defineProps(["cardData"]);

console.log(props.cardData);
</script>

<template>
  <div class="cardbox">
    <div>
      <span>{{ props.cardData.tags }}</span>
    </div>
    <span class="cardbox_title">{{ props.cardData.title }}</span>
    <div>
      <span>{{ props.cardData.author }}</span>
      <span>{{ props.cardData.date }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cardbox {
  width: 5rem;
  height: 5rem;
  background-color: aqua;
  &_title {
    font-size: 1rem;
    color: black;
  }
}
</style>
