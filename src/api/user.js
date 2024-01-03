import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 1000,
  });

export function register(userForm) {
    return instance.post('/register', userForm)
}