<script setup>
import { ref } from 'vue'

// Define the form object with default values
const form = ref({
    id: -1,
    login: '',
    name: '',
    password: '',
    gender: '',
    age: 0
})

// Define the users array with some initial users
const users = ref([
    {
        id: 1,
        login: 'user01',
        name: 'User 1',
        password: 'password',
        gender: 'Male',
        age: 18
    },
    {
        id: 2,
        login: 'user02',
        name: 'User 2',
        password: 'password',
        gender: 'Female',
        age: 40
    }
])

// Function to delete a user by index
function del(index) {
    users.value.splice(index, 1)
}

// Initialize the last user ID to be used for new users
let lastId = 3

// Function to handle form submission
function handleSubmit() {
    if (form.value.id === -1) {
        form.value.id = lastId++
        users.value.push({ ...form.value })
    } else {
        const index = users.value.findIndex(user => user.id === form.value.id)
        if (index !== -1) {
            users.value[index] = { ...form.value }
        }
    }
    clearForm()
}

// Function to clear the form
function clearForm() {
    form.value = {
        id: -1,
        login: '',
        name: '',
        password: '',
        gender: '',
        age: 0
    }
}

// Function to load a user into the form for editing
function edit(user) {
    form.value = { ...user }
}
</script>

<template>
    <div>
        <h1>User</h1>
        <form @submit.prevent="handleSubmit">
            <div>
                <strong>Login:</strong><br>
                <input type="text" id="login" v-model="form.login" required>
            </div>
            <div>
                <strong>Name:</strong><br>
                <input type="text" id="name" v-model="form.name" required>
            </div>
            <div>
                <strong>Password:</strong><br>
                <input type="password" id="password" v-model="form.password" required>
            </div>
            <div>
                <strong>Gender:</strong><br>
                <select name="gender" id="gender" v-model="form.gender" required>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div>
                <strong>Age:</strong><br>
                <input type="number" id="age" v-model="form.age" required>
            </div>
            <button type="submit" v-if="form.id === -1">Add</button>
            <button type="submit" v-if="form.id !== -1">Update</button>
            <button type="button" @click="clearForm">Cancel</button>
        </form>
        <ul>
            <li v-for="(item, index) in users" :key="item.id">
                {{ item.login }} - {{ item.name }} ({{ item.gender }} , {{ item.age }} years old)
                <button @click="edit(item)">Edit</button>
                <button @click="del(index)">Delete</button>
            </li>
        </ul>
        <pre>{{ form }}</pre>
    </div>
</template>

<style scoped>
div {
    text-align: center;
    margin: 20px auto;
    max-width: 600px;
    font-family: Arial, sans-serif;
}

h1 {
    color: #333;
    margin-bottom: 20px;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

form div {
    margin-bottom: 10px;
    width: 100%;
}

strong {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
}

input,
select {
    width: calc(100% - 20px);
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    margin: 5px;
    cursor: pointer;
    background-color: #007BFF;
    color: #fff;
    font-size: 16px;
}

button[type="button"] {
    background-color: #6c757d;
}

button:hover {
    opacity: 0.9;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
    background-color: #f9f9f9;
}

li button {
    margin-left: 10px;
    padding: 5px 10px;
    font-size: 14px;
}

pre {
    text-align: left;
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    overflow: auto;
}
</style>
