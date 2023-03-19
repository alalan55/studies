const SmsTemplateRoutes = {
    component: () => import("../../layouts/templateLayout.vue"),
    path: "/sms-template",
    children: [
      {
        path: "",
        name: "smsTemplate",
        component: () => import("./smsTemplave.vue"),
      },
    ],
  };
  
  export default SmsTemplateRoutes;
  