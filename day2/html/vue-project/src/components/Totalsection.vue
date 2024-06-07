<script setup>
import { ref, computed } from 'vue'
const todoList = ref([
    {
        id: 1,
        text: 'Work1',
        status: true
    },
    {
        id: 2,
        text: 'Work2',
        status: true
    },
    {
        id: 3,
        text: 'Work3',
        status: true
    }
])
let lastID = 4
const todo = ref('')
function addTodo() {
    todoList.value.push({
        id: lastID,
        text: todo.value,
        status: true
    })
    todo.value = ''
    lastID++
}

function finished(index) {
    todoList.value[index].status = !todoList.value[index].status
}
function del(index) {
    todoList.value.splice(index, 1);
}
</script>

<template>
    <div>
        <input type="text" v-model="todo" /> <button @click="addTodo">Add Todo</button>
        <ul>
            <li v-for="(item, index) in todoList" :key="index" @click="finished(index)"
                :class="{ finished: !item.status }">
                {{ index }} {{ item.id }} .{{
                    item.text }} {{ item.status }}
                <button @click="del(index)">del</button>

            </li>

        </ul>
    </div>
</template>
<style scoped>
.finished {
    text-decoration: line-through;
}
</style>