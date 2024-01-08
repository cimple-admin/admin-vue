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
                        <a-dropdown>
                            <a class="ant-dropdown-link" @click.prevent>
                                Hover me
                                <DownOutlined />
                            </a>
                            <template #overlay>
                                <a-menu>
                                    <a-menu-item>
                                        <a href="javascript:;">1st menu item</a>
                                    </a-menu-item>
                                    <a-menu-item>
                                        <a href="javascript:;">2nd menu item</a>
                                    </a-menu-item>
                                    <a-menu-item>
                                        <a href="javascript:;">3rd menu item</a>
                                    </a-menu-item>
                                </a-menu>
                            </template>
                        </a-dropdown>
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
import { MenuUnfoldOutlined, MenuFoldOutlined, DownOutlined} from '@ant-design/icons-vue';

import { ref } from 'vue';
import SliderMenus from './SliderMenus.vue';
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
