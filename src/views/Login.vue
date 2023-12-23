<template>
    <a-layout>
        <a-layout-content style="background-color: #fff;">
            <a-row align="middle" class="full-height">
                <a-col span="6" offset="9">
                    <a-typography>
                        <a-typography-title class="text-center">登录</a-typography-title>
                    </a-typography>
                    <a-form layout="vertical" :model="formState" name="basic" autocomplete="off" @finish="onFinish"
                        @finishFailed="onFinishFailed">
                        <a-form-item label="Username" name="username"
                            :rules="[{ required: true, message: 'Please input your username!' }]">
                            <a-input v-model:value="formState.username" />
                        </a-form-item>

                        <a-form-item label="Password" name="password"
                            :rules="[{ required: true, message: 'Please input your password!' }]">
                            <a-input-password v-model:value="formState.password" />
                        </a-form-item>

                        <a-flex justify="space-between">
                            <a-form-item>
                                <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
                            </a-form-item>

                            <a-form-item>
                                <a-button type="primary" html-type="submit">Submit</a-button>
                            </a-form-item>
                        </a-flex>
                    </a-form>
                </a-col>
            </a-row>

        </a-layout-content>
    </a-layout>
</template>
<script setup>
import { reactive } from 'vue';
const formState = reactive({
    username: '',
    password: '',
    remember: true,
});
const onFinish = values => {
    console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};
</script>