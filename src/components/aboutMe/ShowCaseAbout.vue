<template>
  <section v-fade-in-on-scroll class="w-full flex flex-col items-center justify-center mt-24 px-4">
    <div class="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <span class="text-3xl md:text-4xl font-bold text-white">Projets</span>
        <span class="text-3xl md:text-4xl font-bold text-[--primary-color] pl-2">Récent</span>
      </div>
      <ButtonNav name="Voir tous les projets" url="/showcase" />
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-24 px-2 md:px-6 lg:px-12 my-12 opacity-90 w-full max-w-[1440px]"
    >
      <div
        v-for="(image, index) in showcaseImages"
        :key="index"
        class="relative group hover:scale-[1.02] shadow-glow transition-all"
      >
        <router-link :to="'/showcase/project/' + image.to">
          <img
            :src="resolveImagePath(image.src)"
            :alt="image.alt"
            class="rounded-md h-full w-full object-cover"
          />
          <div
            class="absolute cursor-pointer inset-0 bg-black bg-opacity-50 rounded-md flex items-center justify-center text-white text-lg md:text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {{ image.text }}
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonNav from '@/components/tools/ButtonNav.vue'
import { resolveImagePath } from '@/utils/imagePath.ts'

const showcaseImages = [
  {
    src: '/img/showcase/formbuilder-1.png',
    alt: 'Form Builder',
    text: 'Form Builder ',
    to: 'formbuilder',
  },
  { src: '/img/showcase/phase10-1.png', alt: 'Phase 10', text: 'Phase 10 ', to: 'phase10' },
  { src: '/img/showcase/spotify-1.png', alt: 'Spotify', text: 'Spotify Clone', to: 'spotify' },
]
</script>

<style scoped></style>
