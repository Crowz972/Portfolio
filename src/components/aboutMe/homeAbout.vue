<template>
  <section class="flex">
    <div class="w-1/2">
      <h1 class="text-5xl font-bold my-2">Hi! I am</h1>
      <h1 class="text-5xl font-bold my-2">Nathan Perrelet</h1>
      <p class="text-gray-600 my-8">
        Web developer junior, specialise in web application development and graphic integration and
        layout
      </p>
      <div class="flex mt-4 gap-8">
        <button-nav name="My skill"></button-nav>
        <button-nav name="My work" type="true"></button-nav>
      </div>
    </div>
    <div class="w-1/2">
      <img src="" alt="me" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonNav from '@/components/tools/buttonNav.vue'
</script>
