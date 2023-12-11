<script setup>
const props = defineProps(["cardData"]);
</script>

<template>
  <div class="card">
    <img class="card__img" :src="props.cardData.imagePath" alt="" />
    <div class="card__info">
      <span class="card__date">{{ props.cardData.date }}</span>
      <span class="card__title">{{ props.cardData.title }}</span>
      <p class="card__text">
        {{ props.cardData.summary }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
  width: 20rem;
  margin: 0 1rem 1rem 0;

  &__img {
    margin-bottom: 1rem;
  }

  &__date,
  &__text {
    font-size: 0.8rem;
    color: gray;
    margin-bottom: 0.5rem;
  }
  &__title {
    font-size: 2rem;
    color: black;
    margin-bottom: 1.3rem;
  }

  &__info {
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
  }
}
</style>
