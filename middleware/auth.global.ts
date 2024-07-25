export default defineNuxtRouteMiddleware((to) => {
  const { isLogin } = storeToRefs(useCounterStore())

  if (to.name === 'users-id' && !isLogin.value) {
    console.log(123)
    return navigateTo('/')
  }
})
