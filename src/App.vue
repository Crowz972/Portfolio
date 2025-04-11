<template>
  <div class="bg-[--bg-black-color] min-h-screen">
    <NavHeader />
    <RouterView />
    <button
      v-show="showScroll"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 p-3 bg-[--primary-color] text-white rounded-full shadow-md hover:scale-110 transition-transform duration-300 shadow-glow"
    >
      <svg
        width="24px"
        height="24px  "
        viewBox="0 0 16 16"
        fill="#FFFFFF"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M6 8L2 8L2 6L8 5.24536e-07L14 6L14 8L10 8L10 16L6 16L6 8Z" fill="#FFFFFF"></path>
        </g>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavHeader from '@/components/partials/NavHeader.vue'
import { onMounted, onUnmounted, ref } from 'vue'

const showScroll = ref(false)

const handleScroll = () => {
  showScroll.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
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
