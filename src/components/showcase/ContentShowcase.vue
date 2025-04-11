<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4 sm:px-8 md:px-12 py-12 opacity-90"
  >
    <div
      v-for="(image, index) in filteredImages"
      :key="index"
      class="relative group shadow-xl hover:scale-105 transition-all"
    >
      <router-link :to="'/showcase/project/' + image.name">
        <div class="flex absolute gap-3 top-0 m-2 z-10">
          <div v-for="(lang, index) in image.language.slice(0, 2)" :key="index" class="w-fit">
            <p class="bg-white text-black px-2 py-0.5 rounded-md font-medium">
              {{ lang }}
            </p>
          </div>

          <div v-if="image.language.length > 2" class="relative w-fit">
            <p class="bg-white text-black px-2 py-0.5 rounded-md font-medium cursor-pointer peer">
              ...
            </p>

            <div
              class="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white border text-black text-sm shadow-lg rounded-md px-3 py-2 opacity-0 peer-hover:opacity-100 transition-opacity z-20 whitespace-nowrap"
            >
              <span v-for="(extraLang, i) in image.language.slice(3)" :key="i" class="block">
                {{ extraLang }}
              </span>
            </div>
          </div>
        </div>

        <img
          :src="resolveImagePath(image.src)"
          :alt="image.text"
          class="rounded-md h-full w-full"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-50 rounded-md flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {{ image.text }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ShowcaseImage } from '@/interface/type/ShowcaseImage.ts'
import { resolveImagePath } from '@/utils/imagePath.ts'

defineProps<{
  filteredImages: ShowcaseImage[]
}>()
</script>

<style scoped></style>
