<template>
    <a-layout style="height: 100vh;">
        <a-layout-sider breakpoint="lg" v-model:collapsed="collapsed" :trigger="null" collapsible>
            <div class="logo" />
            <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
                <a-menu-item key="1">
                    <user-outlined />
                    <span>nav 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <video-camera-outlined />
                    <span>nav 2</span>
                </a-menu-item>
                <a-menu-item key="3">
                    <upload-outlined />
                    <span>nav 3</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
                <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
            </a-layout-header>
            <a-layout-content :style="{ margin: '1px', padding: '24px', background: '#fff', minHeight: '280px' }">
                Content
                Admin Home
                <a-button type="primary" @click="logout">退出登录</a-button>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script setup>
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue';

import { ref } from 'vue';
const selectedKeys = ref(['1']);
const collapsed = ref(false);

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
<style>
.trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

.trigger:hover {
    color: #1890ff;
}

.logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
}

.site-layout .site-layout-background {
    background: #fff;
}
</style>
