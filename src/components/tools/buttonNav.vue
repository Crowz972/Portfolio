<template>
  <router-link
    :to="'/' + url"
    class="flex items-center justify-center rounded-lg w-fit px-5 py-2 hover:opacity-80 hover:scale-105 transition-transform duration-200"
    v-bind:class="type ? 'bg-white border-neutral-300 border' : 'bg-black'"
  >
    <p v-bind:class="type ? 'text-black' : 'text-white'">{{ name }}</p>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  url?: string
  type?: boolean
}>()
</script>

<style scoped></style>
