<template>
  <div class="container">
    <div class="box">
      <h2>Yours articlerticle</h2>
      <button @click="openPopup">Create new article</button>
    </div>
    <CreateNewArticle
      :isPopupVisible="isPopupVisible"
      @update-popup-visibility="handlePopupVisibility"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
import CreateNewArticle from "../components/modals/CreateNewArticle.vue";

const isPopupVisible = ref(false);

const openPopup = () => {
  isPopupVisible.value = true;
};
const handlePopupVisibility = (newVisibility) => {
  isPopupVisible.value = newVisibility;
};
</script>

<style lang="scss" scoped>
.container {
  width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.box {
  height: 100vh;
}
</style>
