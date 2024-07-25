import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const isLogin = ref(true)
  const count = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)
  const increment = () => {
    count.value++
  }
  const decrement = () => {
    count.value--
  }

  const login = () => {
    isLogin.value = true
  }
  const logout = () => {
    isLogin.value = false
  }

  return { isLogin, count, name, doubleCount, increment, decrement, login, logout }
})
