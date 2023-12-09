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
  <div class="cardbox" :style="backgroundStyle">
    <div>
      <span class="cardbox_tag">{{ props.cardData.tags }}</span>
    </div>
    <span class="cardbox_title">{{ props.cardData.title }}</span>
    <div class="cardbox_auth">
      <span>{{ props.cardData.author }}</span>
      <span>{{ props.cardData.date }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cardbox {
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-color: rgb(255, 225, 170);
  color: white;
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
</style>
