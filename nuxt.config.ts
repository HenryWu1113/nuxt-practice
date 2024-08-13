// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxt/test-utils/module', '~/modules/test-module-comp.ts'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  plugins: [
    '~/plugins'
  ]
})
