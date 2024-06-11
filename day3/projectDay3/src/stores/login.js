import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', () => {
  const form = ref({
    login: '',
    password: ''
  })
  const users = ref([
    {
      id: 1,
      login: 'user01',
      name: 'User 1',
      password: 'password',
      gender: 'male',
      age: 18
    },
    {
      id: 2,
      login: 'user02',
      name: 'User 2',
      password: 'password',
      gender: 'female',
      age: 40
    }
  ])
  const currentUser = ref(null)
  const message = ref('')
  const error = ref('')
  function handleSubmit() {
    const loginUser = users.value.find((item) => item.login === form.value.login)
    if (!loginUser) {
      console.log('Not found!!!')
      error.value = 'Not found!!!'
      message.value = ''
      return
    }
    if (loginUser.password === form.value.password) {
      console.log('Login Sucess')
      message.value = 'Login Sucess'
      error.value = ''
      currentUser.value = loginUser
    } else {
      console.log('Login Fail!!!')
      error.value = 'Login Fail!!!'
      message.value = ''
    }
  }
  function cancel() {
    form.value = {
      login: '',
      password: ''
    }
    message.value = ''
    error.value = ''
  }
  function logout() {
    currentUser.value = null
  }
  function isLogin() {
    return currentUser.value !== null
  }
  return { form, users, currentUser, message, error, handleSubmit, cancel, logout, isLogin }
})
