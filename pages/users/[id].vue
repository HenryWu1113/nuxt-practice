<template>
  <div class="bg-gray-900 h-screen p-10">
    <NavbarCustomTitle />
    <button class="text-white border border-white p-2 rounded hover:bg-gray-300 hover:text-white transition" @click="failReq()">
      Always fail api btn
    </button>
    <div class="text-white">
      <p>
        toRefAge{{ toRefAge }}
      </p>
      <p>
        obj.age{{ obj.obj1.obj2.obj3 }}
      </p>
    </div>
    <button class="text-white border border-white p-2 rounded hover:bg-gray-300 hover:text-white transition" @click="obj.age++">
      obj.age++
    </button>
    <button class="text-white border border-white p-2 rounded hover:bg-gray-300 hover:text-white transition" @click="toRefAge++">
      toRefAge++
    </button>
    <hr class="my-3">
    <MyComponent />
    <p class="text-white text-4xl h-full flex justify-center items-center">
      {{ hello.data.title }}
      {{ hello.data.content }}
    </p>
  </div>
</template>

<script setup lang="ts">

const route = useRoute()

const obj = ref({
  name: 'Henry',
  age: 25,
  obj1: {
    obj2: {
      obj3: 100
    }
  }
})

const toRefAge = toRef(obj.value.obj1.obj2, 'obj3')

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
