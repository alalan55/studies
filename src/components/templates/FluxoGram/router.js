const FluxoGramRoutes = {
    component: () => import("../../layouts/templateLayout.vue"),
    path: "/fluxogram",
    children: [
      {
        path: "",
        name: "fluxoGramPage",
        component: () => import("./index.vue"),
      },
    ],
  };
  
  export default FluxoGramRoutes;
  