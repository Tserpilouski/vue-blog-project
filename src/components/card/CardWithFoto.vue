<script setup>
const props = defineProps(["cardData"]);
</script>

<template>
  <div class="card">
    <div class="card__box">
      <img
        class="card__img"
        v-if="props.cardData.imagePath"
        :src="props.cardData.imagePath"
        alt=""
      />
      <div class="card__no-img" v-else></div>
    </div>
    <div class="card__info">
      <div class="card__header">
        <span class="card__title">{{ props.cardData.title }}</span>
        <p class="card__text">
          {{ props.cardData.summary }}
        </p>
      </div>
      <div class="card__footer">
        <span class="card__date">{{ props.cardData.author }}</span>
        <span class="card__date">{{ props.cardData.date }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  background-color: rgb(237, 237, 237);
  width: 20rem;
  height: 22rem;
  margin: 0 1rem 1rem 0;
  border: 1px white solid;
  &__box {
    width: 100%;
    height: 60%;
    position: relative;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  &__img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
  }

  &__no-img {
    background-color: black;
    width: 100%;
    height: 100%;
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
    height: 40%;
    justify-content: space-between;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  &__header {
    display: flex;
    flex-direction: column;
  }

  &__footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

.card:hover {
  cursor: pointer;
  border: 1px red solid;
}
</style>
