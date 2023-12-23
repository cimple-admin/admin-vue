export default function registerGuard(router) {
  router.beforeEach((to, from) => {
    document.title = import.meta.env.VITE_APP_TITLE
    // ...
    // 返回 false 以取消导航
    return true;
  });
}
