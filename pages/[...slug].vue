<template>
  <div class="bg-black py-24 h-screen">
    <div class="flex flex-col items-center">
      <h1 class="text-8xl font-semibold text-red-500">
        404
      </h1>
      <p class="my-8 text-3xl text-white">
        Not Found
      </p>
      <p class="my-8 text-xl text-white">
        真的是找不到這個頁面啦
      </p>
      <button class="text-white border border-white p-2 rounded hover:bg-gray-300 hover:text-white transition">
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </button>
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">

const timer = setTimeout(() => {
  navigateTo('/')
}, 3000)

onBeforeUnmount(() => {
  clearTimeout(timer)
})
</script>
