import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import UserView from "./views/UserView.vue";
import Article from "./views/Article.vue";

import "./assets/css/main.css";

import "@fortawesome/fontawesome-free/css/all.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "Home", path: "/", component: Home },
    { name: "About", path: "/about", component: About },
    { name: "UserView", path: "/user-view", component: UserView },
    { name: "Article", path: "/article/:id(\\d+)", component: Article },
  ],
});

createApp(App).use(router).mount("#app");
