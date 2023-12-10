<template>
  <BaseLayout>
    <template #header>
      <h1 v-if="data">{{ data.title }}</h1>
      <span v-if="data">{{ data.tags }}</span>
    </template>

    <template #default>
      <p v-if="data">{{ data.summary }}</p>
      <img v-if="data" class="img" :src="data.imagePath" />
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
import Modal from "../components/Modal.vue";

const datass = ref(datas);
const isModalOpen = ref(false);
const route = useRoute();
const currentUrl = route.fullPath;
const id = +currentUrl.split("/")[2];
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
.img {
  width: 15rem;
}
</style>
