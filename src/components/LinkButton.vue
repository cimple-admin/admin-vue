<template>
<router-link :to="to" v-slot="{ navigate }">
    <a-button type="link" @click="navigate">{{name}}</a-button>
</router-link>
</template>

<script setup>
defineProps(['to', 'name'])
</script>