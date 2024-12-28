import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("@/views/Layout/Index.vue"),
    children: [
      {
        path: "/home",
        component: () => import("@/views/Layout/Home.vue"),
      },

      {
        path: "/category",
        component: () => import("@/views/Layout/Category.vue"),
      },
      {
        path: "/cart",
        component: () => import("@/views/Layout//Cart.vue"),
      },
      {
        path: "/user",
        component: () => import("@/views/Layout/User.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/login/LoginIndex.vue"),
  },
  {
    path: "/search",
    component: () => import("@/views/search/Index.vue"),
  },
  {
    path: "/searchList",
    component: () => import("@/views/login/LoginIndex.vue"),
  },
  {
    path: "/prodetail/:id",
    component: () => import("@/views/prodetail/Index.vue"),
  },
  {
    path: "/pay",
    component: () => import("@/views/pay/Index.vue"),
  },
  {
    path: "/myorder",
    component: () => import("@/views/myorder/Index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
