<template>
    <a-layout class="layout">
        <a-layout-sider breakpoint="lg" v-model:collapsed="collapsed" :trigger="null" collapsible>
            <div class="title">Cimple Admin</div>
            <SliderMenus></SliderMenus>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
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
                <a-tabs v-model:activeKey="activeKey" type="editable-card" @edit="onEdit">
                    <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">
                    </a-tab-pane>
                </a-tabs>
                <RouterView />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script setup>
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import UserInfo from './layout/header/UserInfo.vue';
import SliderMenus from './layout/slider/SliderMenus.vue';
import { ref } from 'vue';
const collapsed = ref(false);

const panes = ref([
    {
        title: 'Tab 1',
        content: 'Content of Tab 1',
        key: '1',
    },
    {
        title: 'Tab 2',
        content: 'Content of Tab 2',
        key: '2',
    },
    {
        title: 'Tab 3',
        content: 'Content of Tab 3',
        key: '3',
        closable: false,
    },
]);
const activeKey = ref(panes.value[0].key);
const newTabIndex = ref(0);
const add = () => {
    activeKey.value = `newTab${++newTabIndex.value}`;
    panes.value.push({
        title: 'New Tab',
        content: 'Content of new Tab',
        key: activeKey.value,
    });
};
const remove = targetKey => {
    let lastIndex = 0;
    panes.value.forEach((pane, i) => {
        if (pane.key === targetKey) {
            lastIndex = i - 1;
        }
    });
    panes.value = panes.value.filter(pane => pane.key !== targetKey);
    if (panes.value.length && activeKey.value === targetKey) {
        if (lastIndex >= 0) {
            activeKey.value = panes.value[lastIndex].key;
        } else {
            activeKey.value = panes.value[0].key;
        }
    }
};
const onEdit = (targetKey, action) => {
    if (action === 'add') {
        add();
    } else {
        remove(targetKey);
    }
};
</script>
<style>
.layout {
    height: 100vh;
}

.content {
    margin: 0px;
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
