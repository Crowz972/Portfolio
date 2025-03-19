<template>
  <section class="mt-24 flex flex-col items-center justify-center w-full">
    <h2 class="text-4xl font-bold">My Skills</h2>
    <div class="grid grid-cols-12 gap-8 mt-8">
      <div class="col-span-1" />
      <ContainerSkill class="col-span-7" category="frontend" />
      <div class="col-span-1" />
      <ContainerSkill class="col-span-3" category="backend" />
      <ContainerSkill class="col-span-4" category="database" />
      <div class="col-span-1" />
      <ContainerSkill class="col-span-4" category="model" />
      <div class="col-span-1" />
      <ContainerSkill class="col-span-2" category="other" />
      <div class="col-span-2" />
      <ContainerSkill class="col-span-5" category="manage" />
      <div class="col-span-2" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ContainerSkill from '@/components/tools/ContainerSkill.vue'
</script>
