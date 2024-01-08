<template>
    <AdminLayout>
        Content
                Admin Home
                Admin Home
                Admin Home
                Admin Home
                Admin Home
                Admin Home
                Admin Home
                Admin Home
                Admin Home
                Admin Home
                Admin Home
                Admin Home
                Admin Home
                Admin Home
                Admin Home
                Admin Home
                Admin Home
                Admin Home
                Admin Home
                Admin Home
                <a-button type="primary" @click="logout">退出登录</a-button>
    </AdminLayout>
</template>
<script setup>
import AdminLayout from "@/components/AdminLayout.vue"
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';
import { info } from '@/api/user'

const userStore = useUserStore()
const router = useRouter()
const logout = () => {
    userStore.logout()
    router.push({ name: "Login" })
}

info().then(resp => {
    console.log(resp)
}).catch(e => {
    console.log(e)
})

</script>
