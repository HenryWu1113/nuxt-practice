import TestModule from '~/components/Mycomponent.vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('MyComponent', TestModule)
})
