<template>
  <main class="container mx-auto !px-0 md:!px-[2%] lg:!px-[5%]">
    <home-about />
    <service-about />
    <skill-about />
    <show-case-about />
  </main>
</template>

<script setup lang="ts">
import HomeAbout from '@/components/aboutMe/homeAbout.vue'
import ServiceAbout from '@/components/aboutMe/ServiceAbout.vue'
import SkillAbout from '@/components/aboutMe/SkillAbout.vue'
import ShowCaseAbout from '@/components/aboutMe/ShowCaseAbout.vue'
</script>
