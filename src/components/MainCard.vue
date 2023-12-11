<script setup>
import { computed } from "vue";
const props = defineProps(["cardData", "specialStyle"]);

const backgroundStyle = computed(() => {
  return {
    backgroundImage: `url(${props.cardData.imagePath})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
});
</script>

<template>
  <div class="card" :style="backgroundStyle">
    <div>
      <span class="card_tag">{{ props.cardData.tags }}</span>
    </div>
    <span class="card_title">{{ props.cardData.title }}</span>
    <div class="card_auth">
      <span>{{ props.cardData.author }}</span>
      <span>{{ props.cardData.date }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-color: rgb(255, 225, 170);
  color: white;
  border: 1px solid black;

  &_title {
    font-size: 2rem;
    font-weight: bold;
  }
  &_tag {
    display: inline-block;
    padding: 0.8rem;
    margin-bottom: 1rem;
    background-color: rgb(123, 206, 255);
  }
  &_auth {
    margin-bottom: 2rem;
  }
  &_auth > :first-child {
    margin-right: 0.5rem;
  }
}
.card:hover {
  border: 1px white solid;
  cursor: pointer;
}
</style>
