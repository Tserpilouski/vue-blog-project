<template>
  <BaseLayout>
    <template #header>
      <div class="header-box">
        <img v-if="data" class="header-box__img" :src="data.imagePath" />
      </div>
    </template>

    <template #default>
      <div class="main-box">
        <h1 class="main-box__title" v-if="data">{{ data.title }}</h1>
        <hr />
        <span class="main-box__tag" v-if="data">{{ data.tags }}</span>
        <hr />
        <p class="main-box__text" v-if="data">{{ data.text }}</p>
        <p class="main-box__text" v-if="data">{{ data.summary }}</p>
      </div>
    </template>

    <template #footer>
      <p>Here's some contact info</p>
      <button v-if="data" @click="openModal">Edit Post</button>
    </template>
  </BaseLayout>
  <Modal
    v-if="isModalOpen"
    :modelValue="editableData"
    @close="isModalOpen = false"
    @save="saveData"
  >
    <PostEditor v-model="editableData"></PostEditor>
  </Modal>
</template>

<script setup>
import BaseLayout from "../components/BaseLayout.vue";
import datas from "../data/data.json";
import { useRoute } from "vue-router";
import { ref } from "vue";
import PostEditor from "../components/PostEditor.vue";
import Modal from "../components/modals/Modal.vue";

const route = useRoute();
const datass = ref(datas);
const isModalOpen = ref(false);

const id = +route.fullPath.split("/")[2];
const data = datass.value.find((card) => card.id === id);
const editableData = ref(data ? { ...data } : {});

function openModal() {
  if (data) {
    editableData.value = { ...data };
    isModalOpen.value = true;
  }
}

const saveData = () => {
  const index = datass.value.findIndex((card) => card.id === id);
  if (index !== -1) {
    datass.value[index] = { ...editableData.value };
    data.value = { ...datass.value[index] };
  }
  isModalOpen.value = false;
};
</script>

<style lang="scss" scoped>
.header-box {
  width: 100%;
  height: 40rem;
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;

  &__img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    object-fit: contain;
  }
}

.main-box {
  display: flex;
  flex-direction: column;
  &__title {
    font-size: 4rem;
  }
  &__tag {
    background-color: rgb(255, 255, 255);
    width: max-content;
    padding: 0.4rem 1rem;
    color: black;
  }
  &__tag:hover {
    cursor: pointer;
    background-color: red;
    color: white;
  }
  &__text {
    padding: 0 8rem 0 8rem;
    font-size: 1.2rem;
  }
}
</style>
