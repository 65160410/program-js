<script setup>
import { ref } from 'vue'
const todo = ref('')
const todoInput = ref('')

function add() {
    todo.value.push({
        text: todoInput.value


    })
    todoInput.value = ''

}
</script>

<template>
    <div>
        Login: <input type="text" /><br>
        name: <input type="text" /><br>
        password: <input type="password" /><br>
        Gender: <input type="text" /><br>
        Age: <input type="number" />

        <button @click="add">Add User</button>
        <ul>
            <li v-for="(item, index) in todo" :key="index">
                {{ index }} :{{ item.text }}</li>
        </ul>
    </div>
</template>