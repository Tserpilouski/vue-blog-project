<script setup>
import Header from "./components/Header.vue";
import datas from "./data/data";
// import VoteBTN from "./components/VoteBTN.vue";
// import SlotComponent from "./components/Sloty.vue";
import { ref } from "vue";
const count = ref(0);
const dataArticle = ref(datas);

function increaseCount(n, parentId) {
  count.value += n;
  const item = dataArticle.value.find((data) => data.id === parentId);
  if (item) {
    item.vote += n;
  } else {
    console.error("Объект с ID", parentId, "не найден");
  }
  console.log(item);
}
</script>

<template>
  <div class="app">
    <Header></Header>
    <div class="boxArt">
      <div
        v-for="data in dataArticle"
        :key="data.id"
        class="boxArt__article article"
      >
        <div class="article__header">
          <span class="article__title">{{ data.title }}</span>
          <Votebtn
            class="article__header_vote"
            @increase-by="increaseCount"
            :count="data.vote"
            :parentId="data.id"
          ></Votebtn>
        </div>
        <div class="article__tags">
          <span v-for="tags in data.tags" class="article__tags_tag">{{
            tags
          }}</span>
        </div>
        <p class="article__summary">{{ data.summary }}</p>
        <div class="article__footer">
          <span>{{ data.author }}</span>
          <span>{{ data.date }}</span>
        </div>
      </div>
      <SlotComponent>
        <template #default>
          <span>Header Content</span>
        </template>
      </SlotComponent>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
}
.boxArt {
  display: flex;

  &__article {
    display: flex;
    flex-direction: column;
    margin: 2rem;
    border: 2px black solid;
  }
}

.article {
  &__header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    &_vote {
      display: flex;
      flex-direction: row;
      margin: 1rem;
      padding: 5px;
      border: 2px white solid;
      cursor: pointer;
    }
    &_vote:hover {
      border: 2px black solid;
    }
  }
  &__title {
    margin: 0.5rem;
    font-size: 2rem;
  }

  &__tags {
    display: flex;
    flex-direction: row;

    &_tag {
      margin: 0.5rem;
      padding: 0.5rem;
      background-color: aqua;
      border-radius: 0.8rem;
      border: 2px aqua solid;
      cursor: pointer;
    }
    :hover {
      border: 2px black solid;
    }
  }

  &__summary {
    margin: 0.5rem;
  }

  &__footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem;
  }
}
</style>
