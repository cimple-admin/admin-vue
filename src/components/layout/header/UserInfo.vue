<template>
    <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>
            {{ userStore.name }}
            <DownOutlined />
        </a>
        <template #overlay>
            <a-menu>
                <a-menu-item @click="logout">退出登录</a-menu-item>
            </a-menu>
        </template>
    </a-dropdown>
</template>
<script setup>
import { DownOutlined} from '@ant-design/icons-vue';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';
import { info } from '@/api/user'
const userStore = useUserStore()

info().then(resp => {
    const data = resp.data.data
    userStore.setInfo(data.id, data.email, data.name, data.cover)
}).catch(e => {
    console.log(e)
})


const router = useRouter()
const logout = () => {
    userStore.logout()
    router.push({ name: "Login" })
}
</script>