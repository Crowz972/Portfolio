<template>
  <div
    class="bg-[#282828] shadow-glow flex flex-col w-full rounded skill-container hover:opacity-75 hover:scale-105 transition-all duration-300"
  >
    <div>
      <h2
        class="font-bold border-b border-r border-gray-200 rounded-tl-md rounded-br-md px-4 py-2 w-fit bg-white text-black"
      >
        {{ category.toUpperCase() }}
      </h2>
    </div>
    <div class="flex gap-8 mt-4 px-6 py-4">
      <div
        v-for="(skill, index) in skillList"
        :key="index"
        class="w-full flex flex-col items-center justify-center"
      >
        <img :src="`/img/icons/skill/${skill}.svg`" :alt="skill" width="48px" />
        <p class="text-sm font-medium text-center mt-2 text-white">{{ skill }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  category: string
}>()

const skillImages: Record<string, string[]> = {
  frontend: ['typescript', 'html', 'css', 'vuejs', 'nuxt', 'angular'],
  database: ['appwrite', 'phpmyadmin', 'postgresql'],
  backend: ['symfony', 'java'],
  manage: ['clickup', 'jira', 'trello'],
  model: ['figma', 'dribbble'],
  other: ['salesforce'],
}

const skillList = computed(() => skillImages[props.category.toLowerCase()] || [])
</script>

<style scoped></style>
