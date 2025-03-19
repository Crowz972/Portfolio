<template>
  <section class="flex items-center gap-12 mt-24">
    <div class="w-1/2">
      <div class="flex flex-col gap-2 mb-6">
        <h2 class="text-5xl font-bold">Modulable</h2>
        <h2 class="text-3xl font-bold">Components</h2>
      </div>
      <p class="text text-neutral-600">
        This section provides an overview of my work: personal projects, reusable components, and
        helpful resources. It's a space to document my progress, share useful tools, and showcase
        what I’ve built while exploring the world of development.
      </p>
      <div class="w-full flex justify-end pr-8">
        <button-nav name="More..." class="mt-8" />
      </div>
    </div>
    <div class="w-1/2 flex items-center justify-center">
      <img src="/img/component-modulable.png" alt="component modulable" class="w-[75%]" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonNav from '@/components/tools/ButtonNav.vue'
</script>

<style scoped></style>
