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
      <hr />
      <h2 class="main-box__title-h2">Feel free to give us your opinion:</h2>
      <div class="chat">
        <label class="chat__label" for="chat">Write your thoughts:</label>
        <input
          class="chat__input"
          id="chat"
          type="text"
          v-model="chatText"
          @keypress.enter="saveCommit"
          placeholder="write..."
        />
        <div class="comments">
          <Comment
            v-for="com in findComments"
            :key="com.id"
            :comment="com"
          ></Comment>
        </div>
      </div>
      <div class="change-article">
        <span>Change information about your article</span>
        <button v-if="data" @click="openModal">Edit Post</button>
      </div>
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
import { ref, computed } from "vue";
import PostEditor from "../components/PostEditor.vue";
import Modal from "../components/modals/Modal.vue";
import Comment from "../components/Comment.vue";
import dataComment from "../data/dataComent.json";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();
const datass = ref(datas);
const comments = ref(dataComment);
const chatText = ref("");
const isModalOpen = ref(false);
const currentDate = new Date();
const formattedDate = currentDate
  .toLocaleDateString("en-GB")
  .split("/")
  .reverse()
  .join("-");

const id = +route.fullPath.split("/")[2];
const data = datass.value.find((card) => card.id === id);
const editableData = ref(data ? { ...data } : {});

const findComments = computed(() => {
  return comments.value.filter((com) => com.id_article === id);
});

function openModal() {
  if (data) {
    editableData.value = { ...data };
    isModalOpen.value = true;
  }
}

function saveCommit() {
  comments.value.push({
    id_article: id,
    author: "Kiryl lol",
    text: chatText.value,
    date: formattedDate,
  });
  chatText.value = "";
  console.log(dataComment);
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
    &-h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
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

.chat {
  padding-left: 8rem;
  display: flex;
  flex-direction: column;
  &__label {
    color: white;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  &__input {
    background-color: black;
    border-color: white;
    margin-bottom: 1rem;
    width: 10rem;
    font-size: 1rem;
    color: white;
  }
}

.comments {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}

.change-article {
  display: flex;
  flex-direction: column;
  width: 20rem;
}
</style>
