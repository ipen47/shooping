import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";
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
    component: () => import("@/views/search/List.vue"),
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
  {
    path: "/address",
    component: () => import("@/views/pay/Address.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});
//全局前置导航
const authUrls = ["/pay", "/myorder"];
router.beforeEach((to, from, next) => {
  if (!authUrls.includes(to.path)) {
    //非权限页面，直接放行
    next();
    return;
  }
  //权限页面，判断token
  const token = store.getters.token;
  if (token) {
    next();
  } else {
    next("/login");
  }
});
export default router;
