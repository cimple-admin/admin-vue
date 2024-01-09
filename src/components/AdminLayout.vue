<template>
    <a-layout style="height: 100vh;">
        <a-layout-sider breakpoint="lg" v-model:collapsed="collapsed" :trigger="null" collapsible>
            <div class="logo" />
            <SliderMenus></SliderMenus>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0; border-bottom: 1px solid #f2f2f2;">
                <a-flex justify="space-between">
                    <div>
                        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
                        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
                    </div>
                    <div style="padding-right: 24px;">
                        <UserInfo />
                    </div>
                </a-flex>

            </a-layout-header>
            <a-layout-content :style="{ margin: '0px', padding: '24px', background: '#fff', minHeight: '280px' }">
                <RouterView />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script setup>
import { MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons-vue';
import UserInfo from './layout/header/UserInfo.vue';
import SliderMenus from './layout/slider/SliderMenus.vue';
import { ref } from 'vue';
const collapsed = ref(false);




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
