<template>
  <section class="flex flex-col w-full text-white">
    <div class="mt-8">
      <span class="text-5xl font-bold">This is my</span>
      <span class="text-5xl font-bold text-[--primary-color] ml-3">Showcase</span>
    </div>
    <div class="grid grid-cols-12 gap-2 w-full mt-2 items-end">
      <select-filter
        class="col-span-2"
        :options="languages"
        label="Language"
        @update-filter="updateLanguageFilter"
      />
      <select-filter
        class="col-span-2"
        :options="fromOptions"
        label="From"
        @update-filter="updateFromFilter"
      />
      <search-filter class="col-span-4" @update-filter="updateSearchQuery" />
      <div class="col-span-2" />
      <div class="col-span-1">
        <div class="flex flex-col justify-end">
          <div class="flex items-end justify-between">
            <img
              src="/img/icons/showcase/progress.svg"
              alt="progress"
              width="24"
              class="bg-gray-200 p-0.5 rounded"
            />
            <p class="text-6xl font-light pr-2">2</p>
          </div>
          <p class="text-sm font-medium">In Progress</p>
        </div>
      </div>
      <div class="col-span-1">
        <div class="flex flex-col justify-end">
          <div class="flex items-end justify-between">
            <img
              src="/img/icons/showcase/project.svg"
              alt="progress"
              width="24"
              class="bg-gray-200 p-0.5 rounded"
            />
            <p class="text-6xl font-light pl-4">30</p>
          </div>
          <p class="text-sm font-medium">Results</p>
        </div>
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

const languages = ['JavaScript', 'TypeScript', 'Vue', 'React', 'Angular']
const fromOptions = ['company', 'school', 'home']

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
