<template>
  <div
    class="flex bg-[--bg-black-color] text-white flex-col items-center border border-neutral-400 shadow-md aspect-square rounded-lg p-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
  >
    <h2 class="font-medium text-xl leading-tight h-[20%]">{{ name }}</h2>
    <img :src="resolveImagePath(`img/icons/${img}.svg`)" :alt="name" class="h-[50%] p-4" />
    <p class="h-[30%] flex text-center items-center font-light text-sm">{{ content }}</p>
  </div>
</template>

<script setup lang="ts">
import { resolveImagePath } from '@/utils/imagePath.ts'

defineProps<{
  name: string
  img: string
  content: string
}>()
</script>
