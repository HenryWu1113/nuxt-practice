import TestModule from '~/components/MyComponent.vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('MyComponent', TestModule)
})
