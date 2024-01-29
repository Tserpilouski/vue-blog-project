<template>
  <div class="container">
    <div class="header">
      <h2>Your articles</h2>
      <button class="header__btn" @click="openPopup">Create new article</button>
    </div>
    <CreateNewArticle
      :isPopupVisible="isPopupVisible"
      @update-popup-visibility="handlePopupVisibility"
    />
    <div class="main">
      <ArticlesList
        v-for="article in articles"
        :key="article.id"
        :article="article"
        @click="$router.push({ name: 'article', params: { id: article.id } })"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../firebase/index";
import { query, where } from "firebase/firestore";
import ArticlesList from "../components/card/ArticlesList.vue";
import CreateNewArticle from "../components/modals/CreateNewArticle.vue";
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

const db = getFirestore(app);
const articles = ref([]);
const isPopupVisible = ref(false);

onMounted(async () => {
  const articlesQuery = query(
    collection(db, "articles"),
    where("userId", "==", user.uid)
  );
  const querySnapshot = await getDocs(articlesQuery);
  articles.value = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
});

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
  height: 70vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 2rem;

  &__btn {
    border: none;
    background-color: white;
    width: 10rem;
    height: 2rem;
    &:hover {
      color: white;
      background-color: red;
    }
  }
}

.main {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
}

h2 {
  font-size: 1.5rem;
}
</style>
