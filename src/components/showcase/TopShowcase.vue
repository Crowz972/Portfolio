<template>
  <section class="flex flex-col w-full text-white px-4 md:px-8">
    <div class="mt-8">
      <span class="text-3xl sm:text-4xl md:text-5xl font-bold">Voici mon,</span>
      <span class="text-3xl sm:text-4xl md:text-5xl font-bold text-[--primary-color] ml-2"
        >Showcase</span
      >
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 w-full mt-6 items-end">
      <select-filter
        class="md:col-span-2"
        :options="languages"
        label="Langage"
        @update-filter="updateLanguageFilter"
      />

      <select-filter
        class="md:col-span-2"
        :options="fromOptions"
        label="Lieu"
        @update-filter="updateFromFilter"
      />

      <search-filter class="md:col-span-4" @update-filter="updateSearchQuery" />

      <div class="hidden md:block md:col-span-2" />

      <div class="flex flex-col md:col-span-1">
        <div class="flex items-end justify-between">
          <img
            src="/img/icons/showcase/progress.svg"
            alt="progress"
            width="24"
            class="bg-gray-200 p-0.5 rounded"
          />
          <p class="text-4xl md:text-6xl font-light pr-2">3</p>
        </div>
        <p class="text-sm font-medium">En cours</p>
      </div>

      <div class="flex flex-col md:col-span-1">
        <div class="flex items-end justify-between">
          <img
            src="/img/icons/showcase/project.svg"
            alt="project"
            width="24"
            class="bg-gray-200 p-0.5 rounded"
          />
          <p class="text-4xl md:text-6xl font-light pl-4">{{ filteredImages.length }}</p>
        </div>
        <p class="text-sm font-medium">Résultats</p>
      </div>
    </div>
  </section>

  <content-showcase :filteredImages="filteredImages" />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { showcaseImages } from '@/interface/showcase.ts'
import ContentShowcase from '@/components/showcase/ContentShowcase.vue'
import SearchFilter from '@/components/tools/SearchFilter.vue'
import SelectFilter from '@/components/tools/SelectFilter.vue'

const languages = [
  'Nuxt',
  'html',
  'css',
  'appwrite',
  'socket',
  'phpmyadmin',
  'Symfony',
  'sqlite',
  'twig',
  'vuejs',
  'tailwind',
  'cakephp',
]

const fromOptions = ['entreprise', 'ecole', 'perso']

const languageFilter = ref('')
const fromFilter = ref('')
const searchQuery = ref('')

const filteredImages = computed(() => {
  return showcaseImages.filter((image) => {
    const matchesLanguage = languageFilter.value
      ? image.language.some((lang) =>
          lang.toLowerCase().includes(languageFilter.value.toLowerCase()),
        )
      : true

    const matchesFrom = fromFilter.value ? image.from === fromFilter.value : true

    const matchesSearch = searchQuery.value
      ? image.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      : true

    return matchesLanguage && matchesFrom && matchesSearch
  })
})

const updateLanguageFilter = (newFilter: string) => {
  languageFilter.value = newFilter
}

const updateFromFilter = (newFilter: string) => {
  fromFilter.value = newFilter
}

const updateSearchQuery = (newQuery: string) => {
  searchQuery.value = newQuery
}
</script>
