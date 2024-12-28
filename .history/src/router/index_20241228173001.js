import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/Layout/Index.vue"),
  },
  {
    path: "login",
    component: () => import("@/views/login/LoginIndex.vue"),
  },
  {
    path: "search",
    component: () => import("@/views/Layout/Index.vue"),
  },
  {
    path: "login",
    component: () => import("@/views/login/LoginIndex.vue"),
  },
  {
    path: "/",
    component: () => import("@/views/Layout/Index.vue"),
  },
  {
    path: "login",
    component: () => import("@/views/login/LoginIndex.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
