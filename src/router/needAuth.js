import AdminLayoutVue from "@/components/AdminLayout.vue";
import Home from "@/views/Home.vue";

export default [
  {
    path: "/",
    component: AdminLayoutVue,
    children: [
      {
        path: "/",
        component: Home,
        meta: {title: "首页"}
      },
    ],
    // 只有经过身份验证的用户才能登录后台
    meta: { requiresAuth: true },
  },
];
