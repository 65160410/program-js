<template>
    <div>
        <input type="number" v-model="num1" placeholder="Number 1" />
        +
        <input type="number" v-model="num2" placeholder="Number 2" />
        <button @click="plus">=</button>
        <div>Result: {{ result }}</div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const num1 = ref(0)
const num2 = ref(0)
const result = ref(0)

function plus() {
    axios.get('http://localhost:8005', {
        params: {
            num1: num1.value,
            num2: num2.value
        }
    })
        .then(response => {
            result.value = response.data
        })
        .catch(error => {
            console.error('There was an error!', error)
        })
}
</script>

<style scoped>
/* main.css */
body {
    margin: 0;
    font-family: Arial, sans-serif;
}
</style>