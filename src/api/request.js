import axios from "axios";
import { useUserStore } from "@/stores/user";

export const instance = axios.create({
  baseURL: "http://127.0.0.1:3000",
  timeout: 1000,
});

export function withAuthHeader(axiosInstance) {
  const userStore = useUserStore();

  return axiosInstance.create({
    headers: {
        Authorization: "Bearer " + userStore.token,
    }
  })
}