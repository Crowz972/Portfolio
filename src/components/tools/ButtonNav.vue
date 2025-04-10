<template>
  <router-link
    :to="url || '/'"
    class="shadow-glow flex items-center justify-center rounded-lg w-fit px-5 py-2 hover:opacity-80 hover:scale-105 transition-transform duration-200 font-medium"
    v-bind:class="type ? 'bg-[--secondary-color]' : 'bg-[--primary-color]'"
  >
    <p v-bind:class="type ? 'text-white ' : 'text-black '">{{ name }}</p>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  url?: string
  type?: boolean
}>()
</script>
