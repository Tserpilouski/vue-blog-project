<template>
  <div class="comment">
    <div class="comment__img"></div>
    <div class="comment__text-box">
      <span class="comment__author">{{
        comment.author ? comment.author : "Unknown"
      }}</span>
      <span>{{ comment.text }}</span>
      <span>{{ comment.date }}</span>
    </div>
  </div>
</template>

<script setup>
const { state } = defineProps({
  comment: Object,
});
</script>

<style lang="scss" scoped>
.comment {
  display: flex;
  flex-direction: row;
  color: white;
  width: max-content;
  max-width: 80%;
  border: 1px white solid;
  padding: 1rem;
  margin-bottom: 1rem;
  &__text-box {
    display: flex;
    flex-direction: column;
  }
  &__img {
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
    border-radius: 1rem;
    background-color: red;
  }
  &__author {
    font-size: 1.3rem;
  }
  &__text {
    font-size: 1rem;
  }
  &__date {
    font-size: 0.7rem;
  }
}
</style>
