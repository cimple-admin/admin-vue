import { useUserStore } from "@/stores/user";

export default function registerGuard(router) {
  router.beforeEach((to, from) => {
    const store = useUserStore();
    if (to.meta.requiresAuth && !store.isLogin) {
      return {
        path: "/login",
        // 保存我们所在的位置，以便以后再来
        query: { redirect: to.fullPath },
      };
    }
    const prefixTitle = to.meta.title ?? to.name;
    console.log(prefixTitle);
    document.title = prefixTitle + "-" + import.meta.env.VITE_APP_TITLE;
    // ...
    // 返回 false 以取消导航
    return true;
  });
}
