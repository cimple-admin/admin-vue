export default function registerGuard(router) {
  router.beforeEach((to, from) => {
    // ...
    // 返回 false 以取消导航
    return true;
  });
}
