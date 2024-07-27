<template>
  <div class="bg-blue-900 text-white p-5 flex justify-end rounded text-xl">
    I'm at the top end.
    <component :is="vnode" v-for="vnode in defaultSlot" :key="vnode.el" />
    <component :is="vnode" v-for="vnode in slot1" :key="vnode.el" />
    <component :is="vnode" v-for="vnode in slot2" :key="vnode.el" />
    <component :is="p" />
  </div>
</template>

<script setup lang="ts">

const slots:any = useSlots()

const defaultSlot = (slots?.default && slots.default()) ?? [h('div')]
const slot1 = (slots?.slot1 && slots.slot1()) ?? [h('div')]
const slot2 = (slots?.slot2 && slots.slot2({ a: '544354' })) ?? [h('div')]

console.log(defaultSlot)

const p = h('div', { class: 'text-3xl text-green-400' }, '我是 h 函式創建的 dom')
console.log('p', p)
</script>
