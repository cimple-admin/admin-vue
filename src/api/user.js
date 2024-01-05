import { instance, withAuthHeader } from "./request";

export function info() {
  return withAuthHeader(instance).get("/user");
}
