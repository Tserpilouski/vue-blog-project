<script setup>
import { ref, onMounted } from "vue";
import { app } from "../firebase/index";
import datas from "../data/data.json";
import MainCard from "../components/MainCard.vue";
import CardWithFoto from "../components/card/CardWithFoto.vue";
import ArticlesList from "../components/card/ArticlesList.vue";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const articles = ref([]);
const db = getFirestore(app);
onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "articles"));
  articles.value = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
});
</script>

<template>
  <div class="bgr">
    <div class="container">
      <div class="newsbox">
        <MainCard
          v-for="card in datas.sort((a, b) => b.vote - a.vote).slice(0, 1)"
          :key="card.id"
          :cardData="card"
          @click="$router.push({ name: 'article', params: { id: card.id } })"
        ></MainCard>
        <div class="cardcolumn">
          <MainCard
            v-for="card in datas.sort((a, b) => b.vote - a.vote).slice(1, 3)"
            :key="card.id"
            :cardData="card"
            @click="$router.push({ name: 'article', params: { id: card.id } })"
          ></MainCard>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <h2 class="container__title">Lutest articles</h2>
    <div class="anothernews">
      <CardWithFoto
        v-for="card in datas.sort((a, b) => b.vote - a.vote).slice(3)"
        :key="card.id"
        :cardData="card"
        @click="$router.push({ name: 'article', params: { id: card.id } })"
      ></CardWithFoto>
    </div>
    <h2 class="container__title">Articles from anather users</h2>
    <div class="anothernews">
      <ArticlesList
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </div>
  </div>
</template>

<style lang="scss">
.container {
  width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__title {
    font-size: 2rem;
  }
}

.newsbox {
  display: flex;
  flex-direction: row;
  margin-bottom: 4rem;
}
.newsbox > :first-child {
  flex-basis: 100%;
}

.anothernews {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0 0 1rem;
}

.bgr {
  background-color: black;
}
</style>
