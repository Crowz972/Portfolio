<template>
  <div class="flex items-center justify-center">
    <select
      v-model="selectedValue"
      @change="emitFilterChange"
      class="w-full h-min flex bg-white z-10 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease hover:border-slate-400 appearance-none cursor-pointer !outline-[--primary-color]"
    >
      <option value="">Select {{ label }}</option>
      <option v-for="(option, index) in options" :key="index" :value="option">{{ option }}</option>
    </select>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.2"
      stroke="currentColor"
      class="w-7 relative right-8 text-slate-700 z-10"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const emit = defineEmits<{
  (event: 'update-filter', filter: string): void
}>()

defineProps({
  options: Array,
  label: String,
})

const selectedValue = ref('')

const emitFilterChange = () => {
  emit('update-filter', selectedValue.value)
}
</script>

<style scoped></style>
