<template>
  <section v-fade-in-on-scroll class="flex items-center gap-12 mt-24">
    <div class="w-1/2 grid grid-cols-2 gap-12 p-8 rounded-md bg-[--secondary-color] shadow-glow">
      <BlockService
        content="I am a junior web developer passionate about coding and design."
        name="Me"
        img="me"
      />
      <BlockService
        content="Discover the projects I’ve created with Vue, Tailwind, and other tools."
        name="Showcase"
        img="showcase"
      />
      <BlockService
        content="Discover reusable Tailwind components I crafted for modern web apps."
        name="Component"
        img="component"
      />
      <BlockService
        content="Check out my coding cheat sheets to speed up your workflow."
        name="Docs"
        img="docs"
      />
    </div>
    <div class="w-1/2">
      <div class="flex flex-col gap-2 mb-6 text-white">
        <h2 class="text-6xl font-bold">All About</h2>
        <h2 class="text-5xl font-bold text-[--primary-color]">My Work</h2>
      </div>
      <p class="text mb-6 text-white">
        A collection of skills, projects, components, and resources crafted throughout my
        development journey.
      </p>
      <p class="text text-white">
        This section provides an overview of my work: personal projects, reusable components, and
        helpful resources. It's a space to document my progress, share useful tools, and showcase
        what I’ve built while exploring the world of development.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import BlockService from '@/components/tools/BlockService.vue'
</script>
