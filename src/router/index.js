import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      lastUpdatedBy: "Ridho",
      lastUpdatedDate: "2020-08-30",
      lastUpdatedMnemonic: "v0.0.1",
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/demo",
    name: "Demo",
    component: () => import("../views/Demo.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  console.log(
    `(Router) Before each guard is running: ${from.fullPath} -> ${to.fullPath}`
  );
  next();
});

// eslint-disable-next-line no-unused-vars
router.beforeResolve((to, from, next) => {
  console.log(
    `(Router) Before resolve guard is running: ${from.fullPath} -> ${to.fullPath}`
  );
  next();
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  console.log(
    `(Router) After each hook is running: ${from.fullPath} -> ${to.fullPath}`
  );
});

export default router;
