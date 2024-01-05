import { instance } from "./request";



export function register(userForm) {
    return instance.post('/register', userForm)
}

export function login(userForm) {
  return instance.post('/login', userForm)
}