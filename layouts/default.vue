<template>
  <div>
    <h1 class="bg-gray-500 p-5 text-white text-5xl flex justify-start items-center gap-3">
      <p class="mr-auto">
        Default Layout
      </p>
      <p class="text-white text-lg">
        isLogin : {{ isLogin }}
      </p>
      <button class="text-white text-lg border border-white p-2 rounded hover:bg-gray-300 hover:text-white transition" @click="isLogin?logout():login()">
        {{ isLogin?'登出':'登入' }}
      </button>

      <button v-if="$route.path!=='/'" class="text-white text-lg border border-white p-2 rounded hover:bg-gray-300 hover:text-white transition">
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </button>
    </h1>
    <slot />
  </div>
</template>

<script setup lang="ts">
const { isLogin } = storeToRefs(useCounterStore())
const { login, logout } = useCounterStore()
</script>
