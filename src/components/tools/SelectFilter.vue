<template>
  <div class="flex items-center justify-center">
    <select
      class="w-full h-min flex bg-transparent z-10 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease hover:border-slate-400 appearance-none cursor-pointer"
    >
      <option value="brazil">Brazil</option>
      <option value="bucharest">Bucharest</option>
      <option value="london">London</option>
      <option value="washington">Washington</option>
    </select>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.2"
      stroke="currentColor"
      class="w-7 relative right-8 text-slate-700"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
      />
    </svg>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
