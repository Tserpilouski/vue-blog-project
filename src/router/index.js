import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Article from "../views/Article.vue";
import User from "../views/User.vue";
import { getAuth } from "firebase/auth";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/about",
        name: "about",
        component: About,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/article/:id?",
        name: "article",
        component: Article,
      },
      {
        path: "/user/:id?",
        name: "user",
        component: User,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (getAuth().currentUser) {
      next();
    } else {
      alert("You dont have access!");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
