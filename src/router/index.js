import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DataProviderRoutes from "../components/templates/DataProvider/router";
const layout = () => import("../components/layouts/templateLayout.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/data-provider",
      ...DataProviderRoutes,
    },
    {
      component: layout,
      path: "/",
      children: [
        {
          path: "",
          component: HomeView,
          name: "home",
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
