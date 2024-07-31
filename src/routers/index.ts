import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(""), 
  routes: [
    { 
      path: "/", 
      name: "MainPage",
      component: () => import("../views/MainPage.vue"),
    },
    { 
      path: "/:city", 
      name: "SearchCityPage",
      component: () => import("../views/MainPage.vue"),
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('../views/ErrorNotFound.vue')
    }
  ],
});

export default router;
