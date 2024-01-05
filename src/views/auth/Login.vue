<template>
    <a-layout>
        <a-layout-content style="background-color: #fff; margin-top: -50px">
            <a-row align="middle" class="full-height">
                <a-col span="6" offset="9">
                    <a-typography>
                        <a-typography-title class="text-center">登录</a-typography-title>
                    </a-typography>
                    <a-form layout="vertical" :model="formState" name="basic" autocomplete="off" @submit="onLogin" >
                        <a-form-item label="邮箱" name="email" :rules="[{ required: true, message: '请输入邮箱!' }]">
                            <a-input v-model:value="formState.email" placeholder="请输入邮箱" />
                        </a-form-item>

                        <a-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入密码!' }]">
                            <a-input-password v-model:value="formState.password" placeholder="请输入密码" />
                        </a-form-item>

                        <a-flex justify="end">
                            <!-- <a-form-item>
                                <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
                            </a-form-item> -->

                            <a-flex gap="small">
                                <link-button :to="{ name: 'Register', query: { redirect: $route.query.redirect } }" name="还没有账号？注册"/>
                                <a-button type="primary" html-type="submit">登录</a-button>
                            </a-flex>
                        </a-flex>
                    </a-form>
                </a-col>
            </a-row>
        </a-layout-content>
    </a-layout>
</template>
<script setup>
import LinkButton from "@/components/LinkButton.vue";
import { reactive } from "vue";
import { login } from '@/api/user';
import { notification } from 'ant-design-vue';
import { useUserStore } from "@/stores/user";
import { useRouter, useRoute } from 'vue-router';

const formState = reactive({
    email: "",
    password: "",
    // remember: true,
});

function showError(message) {
    notification.error({
        message: '登录失败',
        description: message,
    });
}
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

const onLogin = (e) => {
    login({ ...formState }).then(resp => {
        if (resp.data.status < 0) {
            showError(resp.data.message)
        } else {
            console.log(resp.data.data)
            userStore.login(resp.data.data)
            notification.success({
                message: '登录成功',
                description: '登录成功，即将跳转',
                duration: 3,
                onClose: () => {
                    router.push({path: route.query.redirect ?? '/'})
                }
            });
        }
    }).catch(function (error) {
        showError(error)
    });
};
</script>
