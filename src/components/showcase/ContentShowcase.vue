<template>
  <div class="grid grid-cols-4 gap-12 px-12 my-12 opacity-90">
    <div
      v-for="(image, index) in showcaseImages"
      :key="index"
      class="relative group shadow-xl hover:scale-105 transition-all"
    >
      <div class="flex absolute gap-3 top-0 m-2">
        <div v-for="(lang, index) in image.language" :key="index" class="w-fit">
          <p
            v-if="index <= 1 ? 'flex' : ''"
            class="bg-white text-black px-2 py-0.5 rounded-md font-medium"
          >
            {{ lang }}
          </p>
        </div>
        <p class="bg-white text-black px-2 py-0.5 rounded-md font-medium">...</p>
      </div>
      <img :src="image.src" :alt="image.text" class="rounded-md h-full w-full" />
      <div
        class="absolute cursor-pointer inset-0 bg-black bg-opacity-60 rounded-md flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        {{ image.text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { showcaseImages } from '@/interface/showcase.ts'
</script>
