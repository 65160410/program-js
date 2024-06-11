<script setup>
import { useLoginStore } from '../stores/login.js';
const loginStore = useLoginStore()
</script>

<template>
    <div class="container">
        <h1>User Management</h1>
        <div v-if="loginStore.isLogin()">
            {{ loginStore.currentUser.login }} is login.
            <button @click="loginStore.logout">Logout</button>
        </div>
    </div>
</template>
