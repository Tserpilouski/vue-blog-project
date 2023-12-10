<script setup>
import datas from "../data/data.json";
import MainCard from "../components/MainCard.vue";
import CardWithFoto from "../components/card/CardWithFoto.vue";
</script>

<template>
  <div class="bgr">
    <div class="container">
      <div class="newsbox">
        <MainCard
          v-for="card in datas.sort((a, b) => b.vote - a.vote).slice(0, 1)"
          :key="card.id"
          :cardData="card"
        ></MainCard>
        <div class="cardcolumn">
          <MainCard
            v-for="card in datas.sort((a, b) => b.vote - a.vote).slice(1, 3)"
            :key="card.id"
            :cardData="card"
          ></MainCard>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="anothernews">
      <CardWithFoto
        v-for="card in datas.sort((a, b) => b.vote - a.vote).slice(3)"
        :key="card.id"
        :cardData="card"
        @click="$router.push({ name: 'Article', params: { id: card.id } })"
      ></CardWithFoto>
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
  min-height: 30rem;
  background-color: rgb(255, 255, 255);
}

.bgr {
  background-color: black;
}
</style>
