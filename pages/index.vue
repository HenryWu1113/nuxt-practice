<template>
  <div class="bg-gray-900 h-screen">
    <div class="container py-5 mx-auto flex flex-col gap-5 items-center justify-center">
      <h1 class="text-white text-3xl">
        這是首頁 (index.vue)
      </h1>
      <div class="flex gap-3 items-center">
        <button class="text-white border p-2 rounded">
          <NuxtLink to="/about-us">
            前往 about-us
          </NuxtLink>
        </button>
        <button class="text-blue-600 border border-blue-600 p-2 rounded hover:bg-blue-900 hover:text-white transition">
          <NuxtLink :to="`/users/id_0005`">
            前往 random user page
          </NuxtLink>
        </button>
        <button class="text-red-600 border border-red-600 p-2 rounded hover:bg-red-900 hover:text-white transition">
          <NuxtLink to="/not-exist">
            前往 not exist page
          </NuxtLink>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
