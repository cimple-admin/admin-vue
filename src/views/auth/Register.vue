<template>
    <a-layout>
        <a-layout-content style="background-color: #fff;margin-top: -50px;">
            <a-row align="middle" class="full-height">
                <a-col span="6" offset="9">
                    <a-typography>
                        <a-typography-title class="text-center">注册</a-typography-title>
                    </a-typography>
                    <a-form :rules="rules" layout="vertical" :model="formState" name="basic" autocomplete="off"
                        @finish="onFinish">
                        <a-form-item label="邮箱" name="email">
                            <a-input v-model:value="formState.email" placeholder="请输入邮箱" />
                        </a-form-item>

                        <a-form-item label="密码" name="password">
                            <a-input-password v-model:value="formState.password" placeholder="请输入密码" />
                        </a-form-item>

                        <a-form-item label="确认密码" name="confirm_password">
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
import { useUserStore } from '@/stores/user';
import { useRouter, useRoute } from 'vue-router';

const userStore = useUserStore();

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



const validatePass = async (_rule, value) => {
    if (!value.match(/[A-Z]+/)) {
        return Promise.reject('密码至少包含一个大写字母');
    }
    if (!value.match(/[a-z]+/)) {
        return Promise.reject('密码至少包含一个小写字母');
    }
    if (!value.match(/[0-9]+/)) {
        return Promise.reject('密码至少包含一个数字');
    }
    if (!value.match(/[-#!$@£%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]+/)) {
        return Promise.reject('密码至少包含一个特殊符号');
    }
    return Promise.resolve();
};

const validateConfirmPass = async (_rule, value) => {
    if (value !== formState.password) {
        return Promise.reject("确认密码必须和密码相同!");
    }
    return Promise.resolve();
}

const rules = {
    email: [
        {
            required: true,
            message: '邮箱必须填写',
            trigger: 'change',
        },
        {
            type: 'email',
            message: '请输入正确的邮箱',
            trigger: 'change',
        },
    ],
    password: [
        {
            required: true,
            message: '请输入密码',
            trigger: 'change',
        },
        {
            min: 5,
            max: 20,
            message: '密码长度在5-20位',
            trigger: 'change',
        },
        {
            validator: validatePass,
            trigger: 'change',
        },
    ],
    confirm_password: [
        {
            required: true,
            message: '请输入确认密码',
            trigger: 'change',
        },
        {
            validator: validateConfirmPass,
            trigger: 'change',
        },
    ],
};

const router = useRouter();
const route = useRoute();

const onFinish = values => {
    register(values).then(resp => {
        console.log(resp)
        if (resp.data.status < 0) {
            showRegError(resp.data.message)
        } else {
            // TODO 注册成功后的提示和跳转
            userStore.login(resp.data.data)
            notification.success({
                message: '注册成功',
                description: '恭喜您注册成功',
                duration: 3,
                onClose: () => {
                    router.push({path: route.query.redirect})
                }
            });
        }
    }).catch(function (error) {
        showRegError(error)
    });;
};
</script>