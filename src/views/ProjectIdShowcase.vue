<template>
  <div
    class="container mx-auto !px-0 md:!px-[2%] lg:!px-[5%] text-white"
    v-if="selectedProject && projectData[0]"
  >
    <div class="w-full justify-center text-5xl font-semibold pt-8 mb-16">
      <p class="border-b border-[--hover-blue] w-fit">{{ selectedProject.text }}</p>
    </div>
    <div class="flex px-8 pb-16 justify-around">
      <img
        :src="selectedProject.src"
        :alt="selectedProject.text"
        class="aspect-square w-[300px] h-[300px] shadow-glow"
      />
      <div class="flex gap-16">
        <div class="flex flex-col justify-between">
          <div
            class="flex flex-col items-center justify-center gap-4 py-5 px-5 rounded border border-neutral-300 shadow-glow"
          >
            <p class="text-2xl font-medium">Teams</p>
            <p class="text-2xl">{{ projectData[0].collaborator }}</p>
          </div>
          <div
            class="flex flex-col items-center justify-center gap-4 py-5 px-5 rounded shadow-glow border border-neutral-300"
          >
            <p class="text-2xl font-medium">State</p>
            <p class="text-2xl">{{ projectData[0].state }}</p>
          </div>
        </div>
        <div
          class="flex flex-col gap-2 pt-4 items-center shadow-glow px-8 rounded border border-neutral-300"
        >
          <p class="text-3xl font-medium">Languages</p>
          <div class="grid grid-cols-2 gap-6 mt-4 overflow-y">
            <img
              v-for="(lang, index) in selectedProject.language || []"
              :key="index"
              :src="'/img/icons/skill/' + lang.toLowerCase() + '.svg'"
              :alt="lang"
              class="w-[64px] aspect-square"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-2 pt-4 px-8 py-8 pb-16 rounded">
      <h3 class="text-3xl font-medium mb-4">Contexte</h3>
      <p class="text-lg font-light">{{ projectData[0].text.context }}</p>

      <h3 class="text-3xl font-medium mt-4 mb-4">Travail effectué</h3>
      <p class="text-lg font-light">{{ projectData[0].text.work }}</p>

      <h3 class="text-3xl font-medium mt-4 mb-4">Conclusion</h3>
      <p class="text-lg font-light">{{ projectData[0].text.conclusion }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { showcaseImages } from '@/interface/showcase.ts'
import { useRoute } from 'vue-router'
import { computed, ref, watchEffect } from 'vue'

const route = useRoute()
const projectName = computed(() => route.params.name || route.path.split('/').pop())

const selectedProject = computed(() =>
  showcaseImages.find((img) => img?.name?.toLowerCase() === projectName.value?.toLowerCase()),
)

const projectData = ref<any>(null)
const projectModules = import.meta.glob('@/interface/project/*.ts', { eager: true })

watchEffect(() => {
  if (projectName.value) {
    const matchedKey = Object.keys(projectModules).find((key) =>
      key.toLowerCase().includes(`/interface/project/${projectName.value.toLowerCase()}.ts`),
    )
    if (matchedKey) {
      const module = projectModules[matchedKey]
      projectData.value = module?.[projectName.value]
    }
  }
})
</script>

<style scoped></style>
