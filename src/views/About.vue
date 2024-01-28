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
    <ArticlesList
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />
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

// .box {
//   height: 100vh;
// }
</style>
