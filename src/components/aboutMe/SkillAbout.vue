<template>
  <section v-fade-in-on-scroll class="mt-24 flex flex-col items-center justify-center w-full px-4">
    <h2 class="text-3xl md:text-4xl font-bold text-white text-center">Mes Compétences</h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 mt-8 w-full max-w-[1440px]"
    >
      <div class="lg:col-start-2 lg:col-span-7 col-span-1">
        <ContainerSkill category="frontend" />
      </div>
      <div class="lg:col-span-3 col-span-1">
        <ContainerSkill category="backend" />
      </div>
      <div class="lg:col-start-2 lg:col-span-4 col-span-1">
        <ContainerSkill category="database" />
      </div>
      <div class="lg:col-span-4 col-span-1">
        <ContainerSkill category="maquette" />
      </div>
      <div class="lg:col-span-2 col-span-1">
        <ContainerSkill category="autre" />
      </div>
      <div class="lg:col-start-4 lg:col-span-5 col-span-1">
        <ContainerSkill category="gestion" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContainerSkill from '@/components/tools/ContainerSkill.vue'
</script>
