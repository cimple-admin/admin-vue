import Cookies from "js-cookie";
import { defineStore } from "pinia";

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useUserStore = defineStore("user", {
  // 其他配置...
  state: () => ({
    token: '',
    uid: 0,
    name: '',
    email: '',
    cover: '',
  }),
  getters: {
    isLogin() {
      if (this.token.length == 0) {
        // store 本体没有数据的时候读cookie
        const cookieToken = Cookies.get('token');
        if ((cookieToken != undefined)) {
          this.token = cookieToken;
        }
      }

      return this.token.length > 0;
    },
  },
  actions: {
    login(token) {
      this.token = token;
      Cookies.set('token', token);
    },
    logout() {
      this.token = '';
      Cookies.remove('token');
    },
    setInfo(uid, email, name, cover) {
      this.uid = uid;
      this.email = email;
      this.name = name;
      this.cover = cover;
    },
  },
});
