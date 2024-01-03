<template>
    <a-layout>
        <a-layout-content style="background-color: #fff;margin-top: -50px;">
            <a-row align="middle" class="full-height">
                <a-col span="6" offset="9">
                    <a-typography>
                        <a-typography-title class="text-center">注册</a-typography-title>
                    </a-typography>
                    <a-form layout="vertical" :model="formState" name="basic" autocomplete="off" @finish="onFinish">
                        <a-form-item label="邮箱" name="email" :rules="[{ required: true, message: '请输入邮箱!' }]">
                            <a-input v-model:value="formState.email" placeholder="请输入邮箱" />
                        </a-form-item>

                        <a-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入密码!' }]">
                            <a-input-password v-model:value="formState.password" placeholder="请输入密码" />
                        </a-form-item>

                        <a-form-item label="确认密码" name="confirm_password" :rules="[{ required: true, message: '请输入密码!' }]">
                            <a-input-password v-model:value="formState.confirm_password" placeholder="请输入密码" />
                        </a-form-item>

                        <a-flex justify="end">
                            <a-button type="primary" html-type="submit">注册</a-button>
                        </a-flex>
                    </a-form>
                </a-col>
            </a-row>

        </a-layout-content>
    </a-layout>
</template>
<script setup>
import { register } from '@/api/user';
import { reactive } from 'vue';
import { notification } from 'ant-design-vue';

const formState = reactive({
    email: '',
    password: '',
    confirm_password: '',
});

function showRegError(message) {
    notification.error({
        message: '注册失败',
        description: message,
    });
}

const onFinish = values => {
    register(values).then(resp => {
        console.log(resp)
        if (resp.data.status < 0) {
            showRegError(resp.data.message)
        }
    }).catch(function (error) {
        console.log(error)
        showRegError(error)
    });;
};
</script>