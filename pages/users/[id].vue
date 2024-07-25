<template>
  <div class="bg-gray-900 h-screen p-10">
    <NavbarCustomTitle />
    <button class="text-white border border-white p-2 rounded hover:bg-gray-300 hover:text-white transition" @click="failReq()">
      Always fail api btn
    </button>
    <p class="text-white text-4xl h-full flex justify-center items-center">
      {{ hello.data.title }}
      {{ hello.data.content }}
    </p>
  </div>
</template>

<script setup lang="ts">

const route = useRoute()

const { data: hello }: { data: any } = await useFetch(
  '/api/hello',
  {
    method: 'get',
    query: {
      name: route.params.id
    },
    // headers: {
    //   Authorization: 'Bearer testetstetsttokentoekn'
    // },
    onRequest ({ request }) {
      console.log(request)
      // console.log(options)
    },
    onResponse ({ response }) {
      console.log(response)
    }
  }
)

const failReq = async () => {
  try {
    const data = await $fetch('/api/alwayswrong')
    console.log(data)
  } catch (error:any) {
    console.log(error.data)
    console.log(error.data.message)
  }
}

</script>
