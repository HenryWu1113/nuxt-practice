<template>
  <div>
    <NavbarTitle />
    <ClientOnly>
      <h1>關於我的測試</h1>
      <ul>
        <li>路由</li>
        <li>功能</li>
      </ul>
    </ClientOnly>
    <button @click="counter.increment">+1</button>
    &nbsp;
    <button @click="counter.decrement">-1</button>
    <p>count : {{ count }}</p>
    <p>doubleCount : {{ doubleCount }}</p>
    <hr />
    <ClientOnly>
      <ul>
        <!-- <li v-for="d in list.entry" :key="d.title">{{ d.title }}</li> -->
        <li v-for="d in titleList.entry" :key="d.title">{{ d.title }}</li>
      </ul>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const counter = useCouterStore()
const { count, doubleCount } = storeToRefs(counter)

const list = ref<any>({})

// definePageMeta({
//   ssr: false
// })

onMounted(async () => {
  // query()
})

const { data: titleList }: { data: any } = await useFetch(
  'https://kktix.com/events.json',
  {
    method: 'get',
    headers: {
      Authorization: `Bearer testetstetsttokentoekn`
    },
    onRequest({ request, options }) {
      console.log(request)
      // console.log(options)
    }
  }
)

// const { data }: { data: any } = await $fetch('https://kktix.com/events.json')
// const { data: titleList }: any = useAsyncData('kktix', () =>
//   $fetch('https://kktix.com/events.json')
// )

const query = async () => {
  const data: any = await $fetch('https://kktix.com/events.json', {
    method: 'get',
    // headers: {
    //   Authorization: `Bearer testetstetsttokentoekn`
    // },
    onRequest({ request, options }) {
      console.log(request)
      // console.log(options)
    }
  })

  console.log(data)
  list.value = data
}
</script>
