<template>
  <NavHeader/>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavHeader from '@/components/partials/NavHeader.vue'
</script>
