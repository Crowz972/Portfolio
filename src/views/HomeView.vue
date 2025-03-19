<template>
  <main class="container mx-auto">
    <home-about />
    <service-about />
    <component-about />
    <skill-about />
    <show-case-about />
  </main>
</template>

<script setup lang="ts">
import HomeAbout from '@/components/aboutMe/homeAbout.vue'
import ServiceAbout from '@/components/aboutMe/ServiceAbout.vue'
import SkillAbout from '@/components/aboutMe/SkillAbout.vue'
import ShowCaseAbout from '@/components/aboutMe/ShowCaseAbout.vue'
import ComponentAbout from '@/components/aboutMe/ComponentAbout.vue'
</script>
