<template>
  <section class="w-full flex flex-col items-center justify-center mt-24">
    <div class="w-full flex justify-between items-center">
      <h2 class="text-3xl font-bold">Recent Project</h2>
      <ButtonNav name="View All Projects" />
    </div>
    <div class="grid grid-cols-3 gap-24 px-12 my-12 opacity-90">
      <div
        v-for="(image, index) in showcaseImages"
        :key="index"
        class="relative group shadow-xl hover:scale-105 transition-all"
      >
        <img :src="image.src" :alt="image.alt" class="rounded-md h-full w-full" />
        <div
          class="absolute cursor-pointer inset-0 bg-black bg-opacity-60 rounded-md flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {{ image.text }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonNav from '@/components/tools/ButtonNav.vue'

const showcaseImages = [
  { src: '/img/showcase/formbuilder-1.png', alt: 'Form Builder', text: 'Form Builder ' },
  { src: '/img/showcase/phase10-1.png', alt: 'Phase 10', text: 'Phase 10 ' },
  { src: '/img/showcase/spotify-1.png', alt: 'Spotify', text: 'Spotify Clone' },
]
</script>

<style scoped></style>
