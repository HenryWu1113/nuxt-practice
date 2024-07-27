<template>
  <div class="bg-gray-900 h-auto p-10">
    <NavbarCustomTitle>
      <div>
        <h1>預設插槽</h1>
        <div>
          <p>title</p>
          <p>content</p>
        </div>
      </div>
      <template #slot1>
        具名插槽
      </template>
      <template #slot2="{a}">
        作用域插槽 {{ a }}
      </template>
    </NavbarCustomTitle>
    <ClientOnly>
      <div class="flex items-center gap-3 flex-col p-5">
        <h1 class="text-white">
          這是被 ClientOnly 標籤包住的部分
        </h1>
        <ul class="text-white flex items-center gap-2">
          <li>路由</li>
          <li>功能</li>
        </ul>
        <div class="flex items-center gap-2">
          <button class="w-[50px] text-blue-600 border border-blue-600 p-2 rounded hover:bg-blue-900 hover:text-white transition" @click="counter.increment">
            +1
          </button>
          <button class="w-[50px] text-blue-600 border border-blue-600 p-2 rounded hover:bg-blue-900 hover:text-white transition" @click="counter.decrement">
            -1
          </button>
        </div>
        <p class="text-white">
          count : {{ count }}
        </p>
        <p class="text-white">
          doubleCount : {{ doubleCount }}
        </p>
      </div>
      <template #fallback>
        <p class="flex justify-center text-white text-5xl p-10">
          Loading comments...(this will be rendered on server side)
        </p>
      </template>
    </ClientOnly>

    <hr>
    <p class="text-white mt-10">
      {{ formInfo?.data?.body }}
    </p>
    <ul class="flex flex-col items-center gap-2 mt-10">
      <li v-for="d in titleList?.entry" :key="d.title" class="underline text-xl text-green-300">
        {{ d.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const counter = useCounterStore()
const { count, doubleCount } = storeToRefs(counter)

// const list = ref<any>({})

definePageMeta({
  layout: 'default'
})

onMounted(async () => {
  // query()
})

const { data: titleList }: { data: any } = await useFetch(
  'https://kktix.com/events.json',
  {
    method: 'get',
    // headers: {
    //   Authorization: 'Bearer testetstetsttokentoekn'
    // },
    onRequest ({ request, options }) {
      console.log(request)
      // console.log(options)
    }
  }
)

const { data: formInfo }: { data: any } = await useFetch(
  '/api/form',
  {
    method: 'post',
    body: { content: '我船過去的body' },
    // headers: {
    //   Authorization: 'Bearer testetstetsttokentoekn'
    // },
    onRequest ({ request, options }) {
      console.log(request)
      // console.log(options)
    }
  }
)

// const { data }: { data: any } = await $fetch('https://kktix.com/events.json')
// const { data: titleList }: any = useAsyncData('kktix', () =>
//   $fetch('https://kktix.com/events.json')
// )

// const query = async () => {
//   const data: any = await $fetch('https://kktix.com/events.json', {
//     method: 'get',
//     // headers: {
//     //   Authorization: `Bearer testetstetsttokentoekn`
//     // },
//     onRequest ({ request, options }) {
//       console.log(request)
//       // console.log(options)
//     }
//   })

//   console.log(data)
//   list.value = data
// }
</script>
