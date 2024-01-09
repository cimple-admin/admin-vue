<template>
    <a-layout class="layout">
        <a-layout-sider breakpoint="lg" v-model:collapsed="collapsed" :trigger="null" collapsible>
            <div class="title">Cimple Admin</div>
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
            <a-layout-content class="content">
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
.layout {
    height: 100vh;
}
.content {
    margin: 0px;
    padding: 24px;
    background: #fff;
}
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

.title {
    height: 32px;
    margin: 16px;
    font-size: 24px;
    color: #f2f2f2;
    overflow: hidden;
}

.site-layout .site-layout-background {
    background: #fff;
}
</style>
