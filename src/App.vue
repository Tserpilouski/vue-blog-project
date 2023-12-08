<script setup>
import headerCustom from "./components/Header.vue";
import datas from "./data/data";
import Votebtn from "./components/VoteBTN.vue";
// import SlotComponent from "./components/Sloty.vue";
import maincard from "./components/MainCard.vue";
import { ref } from "vue";

console.log(datas[0].imagePath);

const parentObj = ref(datas);
</script>

<template>
  <body>
    <div class="container">
      <headerCustom></headerCustom>
      <div class="navmenu">
        <ul>
          <li>Home</li>
          <li>Categories</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div class="newsbox">
        <maincard
          v-for="card in datas"
          :key="card.id"
          :cardData="card"
        ></maincard>
      </div>
    </div>
  </body>
</template>

<style lang="scss" scoped>
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
</style>
