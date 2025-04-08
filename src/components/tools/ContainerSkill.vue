<template>
  <div
    class="flex flex-col w-full border border-gray-200 rounded skill-container hover:opacity-75 hover:scale-105 transition-all cursor-pointer"
  >
    <div>
      <h2 class="font-bold border-b border-r border-gray-200 rounded-br-md px-4 py-2 w-fit">
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
        <p class="text-sm font-medium text-center mt-2">{{ skill }}</p>
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

<style scoped>
.skill-container {
  box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;
}
</style>
