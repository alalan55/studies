const DragAndDropRoutes = {
  component: () => import("../../layouts/templateLayout.vue"),
  path: "/drag-and-drop",
  children: [
    {
      path: "",
      name: "dragAndDropPage",
      component: () => import("./dragADrop.vue"),
    },
  ],
};

export default DragAndDropRoutes;
