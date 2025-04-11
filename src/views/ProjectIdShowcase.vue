<template>
  <div
    class="container mx-auto !px-0 md:!px-[2%] lg:!px-[5%] text-white"
    v-if="selectedProject && projectData"
  >
    <div class="w-full flex justify-center text-5xl font-semibold pt-8 mb-16 items-center">
      <p class="border-b-4 border-[--primary-color] w-fit pb-3">{{ selectedProject.text }}</p>
      <a
        v-if="projectData.git"
        :href="projectData.git"
        class="ml-8 bg-white rounded-xl p-2 shadow-glow hover:scale-105 transition-all"
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 16 16"
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M14 2H5.50003L4.00003 3.5L6.83581 6.33579L0.585815 12.5858L3.41424 15.4142L9.66424 9.16421L12.5 12L14 10.5L14 2Z"
              fill="#000000"
            ></path>
          </g>
        </svg>
      </a>
    </div>

    <div class="flex flex-col md:flex-row px-8 pb-16 justify-between items-center">
      <img
        :src="resolveImagePath(selectedProject.src)"
        :alt="selectedProject.text"
        class="aspect-square w-[300px] h-[300px] shadow-glow mb-8 md:mb-0"
      />

      <div class="flex flex-col md:flex-row gap-16 w-full md:w-2/3">
        <div class="flex flex-col w-full md:w-1/3 gap-8">
          <div
            class="flex flex-col items-center justify-center gap-4 py-5 px-5 rounded border border-neutral-300 shadow-glow"
          >
            <p class="text-2xl font-medium">Equipe(s)</p>
            <p class="text-2xl">{{ projectData.collaborator }}</p>
          </div>
          <div
            class="flex flex-col items-center justify-center gap-4 py-5 px-5 rounded shadow-glow border border-neutral-300"
          >
            <p class="text-2xl font-medium">Etat</p>
            <p class="text-2xl">{{ projectData.state }}</p>
          </div>
        </div>

        <div
          class="flex flex-col gap-2 pt-4 items-center shadow-glow px-8 rounded border border-neutral-300 md:w-2/3"
        >
          <p class="text-3xl font-medium">Languages</p>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 overflow-y pb-4">
            <img
              v-for="(lang, index) in selectedProject.language || []"
              :key="index"
              :src="resolveImagePath('/img/icons/skill/' + lang.toLowerCase() + '.svg')"
              :alt="lang"
              class="w-[64px] aspect-square"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-4 pt-4 px-8 py-8 pb-16 rounded">
      <h3 class="text-3xl font-medium mb-4">Contexte</h3>
      <p class="text-lg font-light">{{ projectData.text.context }}</p>

      <h3 class="text-3xl font-medium mt-4 mb-4">Travail effectué</h3>
      <p class="text-lg font-light">{{ projectData.text.work }}</p>

      <h3 class="text-3xl font-medium mt-4 mb-4">Conclusion</h3>
      <p class="text-lg font-light">{{ projectData.text.conclusion }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { showcaseImages } from '@/interface/showcase.ts'
import type { Project } from '@/interface/type/project.ts'
import { useRoute } from 'vue-router'
import { computed, ref, watchEffect } from 'vue'
import { resolveImagePath } from '@/utils/imagePath.ts'

const route = useRoute()
const projectName = computed(() =>
  typeof route.params.name === 'string'
    ? route.params.name
    : Array.isArray(route.params.name)
      ? route.params.name[0]
      : route.path.split('/').pop() || '',
)

const selectedProject = computed(() =>
  showcaseImages.find((img) => img?.name?.toLowerCase() === projectName.value?.toLowerCase()),
)

const projectData = ref<Project | null>(null)
const projectModules = import.meta.glob('@/interface/project/*.ts', { eager: true })

watchEffect(() => {
  if (projectName.value) {
    const matchedKey = Object.keys(projectModules).find((key) =>
      key.toLowerCase().includes(`/interface/project/${projectName.value!.toLowerCase()}.ts`),
    )
    if (matchedKey) {
      const module = projectModules[matchedKey] as Record<string, Project[]>
      projectData.value = module[projectName.value as string][0]
    }
  }
})
</script>

<style scoped></style>
