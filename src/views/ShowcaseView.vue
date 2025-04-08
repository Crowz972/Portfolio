<template>
  <main class="container mx-auto">
    <top-showcase class="mt-12" />
    <content-showcase class="mt-12"></content-showcase>
  </main>
</template>

<script setup lang="ts">
import TopShowcase from '@/components/showcase/TopShowcase.vue'
import ContentShowcase from '@/components/showcase/ContentShowcase.vue'
</script>

<style scoped></style>
