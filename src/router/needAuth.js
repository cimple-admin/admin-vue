import Home from "@/views/Home.vue";

export default [
  {
    path: "/",
    children: [
      {
        path: "/",
        component: Home,
      },
    ],
    // 只有经过身份验证的用户才能登录后台
    meta: { requiresAuth: true },
  },
];
