<template>
  <section class="flex my-36 fade-left">
    <div class="w-3/5 text-white">
      <h1 class="text-5xl font-bold my-2">Hi! I am</h1>
      <h1 class="text-5xl font-bold my-2 text-[--primary-color]">Nathan Perrelet</h1>
      <p class="text-white my-8">
        Junior web developer specializing in the creation of dynamic web applications, responsive
        designs, and seamless graphic integration. Passionate about crafting user-friendly
        interfaces and ensuring clean, efficient code, I thrive on turning ideas into functional and
        visually appealing digital experiences.
      </p>
      <div class="flex mt-4 gap-8">
        <button-nav name="My skills" url="/"></button-nav>
        <button-nav name="My projects" :type="true" url="/showcase"></button-nav>
      </div>
    </div>
    <div class="w-2/5 flex items-center justify-center">
      <img
        src="/img/logo/logoV1.png"
        alt="logo NP crow"
        class="animate-fade-up-down h-auto shadow-glow"
        style="--tw-shadow-color: rgba(255, 255, 255, 0.25)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonNav from '@/components/tools/ButtonNav.vue'
</script>

<style scoped>
@keyframes fadeUpDown {
  0%,
  100% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-fade-up-down {
  animation: fadeUpDown 2s ease-in-out infinite;
}
</style>
