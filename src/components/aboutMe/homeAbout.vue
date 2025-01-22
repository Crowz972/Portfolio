<template>
  <section class="flex mt-36">
    <div class="w-1/2">
      <h1 class="text-5xl font-bold my-2">Hi! I am</h1>
      <h1 class="text-5xl font-bold my-2">Nathan Perrelet</h1>
      <p class="text-gray-600 my-8">
        Junior web developer specializing in the creation of dynamic web applications, responsive
        designs, and seamless graphic integration. Passionate about crafting user-friendly
        interfaces and ensuring clean, efficient code, I thrive on turning ideas into functional and
        visually appealing digital experiences.
      </p>
      <div class="flex mt-4 gap-8">
        <button-nav name="My skill"></button-nav>
        <button-nav name="My work" :type="true"></button-nav>
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
