<script setup>
import Header from "./components/Header.vue";
import datas from "./data/data";
import VoteBTN from "./components/VoteBTN.vue";
// import SlotComponent from "./components/Sloty.vue";
import MainCard from "./components/MainCard.vue";
import CardWithFoto from "./components/card/CardWithFoto.vue";
import { ref, computed } from "vue";
</script>

<template>
  <body>
    <div class="container">
      <Header></Header>
      <div class="navmenu">
        <ul>
          <li>Home</li>
          <li>Categories</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
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
      <div class="anothernews">
        <CardWithFoto
          v-for="card in datas
            .sort((a, b) => b.vote - a.vote)
            .slice(3)
            .filter((card) => card && card.imagePath)"
          :key="card.id"
          :cardData="card"
        ></CardWithFoto>
      </div>
    </div>
  </body>
</template>

<style lang="scss">
body {
  background-color: black;
}
.container {
  width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.navmenu {
  padding-top: 3rem;
  background-color: black;
  > ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 2rem;
    list-style-type: none;

    & > *:not(:last-child) {
      margin-right: 4rem;
    }

    li {
      font-size: 1rem;
      color: white;
    }
  }
}

.newsbox {
  display: flex;
  flex-direction: row;
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
</style>
