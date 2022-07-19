const DataProviderRoutes = {
  component: () => import("../../layouts/templateLayout.vue"),
  path: "/data-provider",
  children: [
    {
      path: "",
      name: "dataProvider",
      component: () => import("./dataProvider.vue"),
    },
  ],
};

export default DataProviderRoutes;
