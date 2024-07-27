import { defineNuxtModule } from 'nuxt/kit'

export default defineNuxtModule(
  {
    meta: {
      name: 'test-module-comp',
      version: '1.0.0',
      configKey: 'test001'
    },
    defaults: {
      readyContent: 'test-module-comp 準備好了唷'
    },
    setup (options, nuxt) {
      nuxt.hook('modules:done', () => {
        console.log(options.readyContent)
        console.log('compomem', nuxt.options.components)
      })

      console.log(nuxt.options.build.transpile)

      // nuxt.options.components.push({
      //   name: 'MyComponent',
      //   filePath: require.resolve('../components/TestModule.vue')
      // })
    }
  }
)
