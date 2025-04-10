<template>
  <div class="bg-[--bg-black-color]">
    <NavHeader />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavHeader from '@/components/partials/NavHeader.vue'
</script>

<style>
.shadow-glow {
  box-shadow:
    0 4px 20px rgba(255, 255, 255, 0.15),
    0 0 10px rgba(255, 255, 255, 0.2);
  border-radius: 12px;
}

@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  100% {
    opacity: 1;
    transform: translateY(20px);
  }
}

@keyframes fade-bottom {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-left {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-right {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fade-up {
  animation: fade-up 1s ease-out forwards;
}

.fade-bottom {
  animation: fade-bottom 1s ease-out forwards;
}

.fade-left {
  animation: fade-left 1s ease-out forwards;
}

.fade-right {
  animation: fade-right 1s ease-out forwards;
}
</style>
