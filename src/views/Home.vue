<template>
    Admin Home
    <a-button type="primary" @click="logout">退出登录</a-button>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';


const userStore = useUserStore()
const router = useRouter()
const logout = () => {
    userStore.logout()
    router.push({name: "Login"})
}
</script>