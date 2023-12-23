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
  },
];
