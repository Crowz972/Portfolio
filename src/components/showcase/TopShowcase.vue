<template>
  <section class="flex flex-col w-full">
    <h2 class="text-5xl font-bold">This is my Showcase</h2>
    <div class="grid grid-cols-12 gap-2 w-full mt-2 items-end">
      <select-filter class="col-span-2" />
      <select-filter class="col-span-2" />
      <search-filter class="col-span-4" />
      <div class="col-span-2" />
      <div class="col-span-1">
        <div class="flex flex-col justify-end">
          <div class="flex items-end justify-between">
            <img
              src="/img/icons/showcase/progress.svg"
              alt="progress"
              width="24"
              class="bg-gray-200 p-0.5 rounded"
            />
            <p class="text-6xl font-light pr-2">2</p>
          </div>
          <p class="text-sm font-medium">In Progress</p>
        </div>
      </div>
      <div class="col-span-1">
        <div class="flex flex-col justify-end">
          <div class="flex items-end justify-between">
            <img
              src="/img/icons/showcase/project.svg"
              alt="progress"
              width="24"
              class="bg-gray-200 p-0.5 rounded"
            />
            <p class="text-6xl font-light">30</p>
          </div>
          <p class="text-sm font-medium">Results</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SelectFilter from '@/components/tools/SelectFilter.vue'
import SearchFilter from '@/components/tools/SearchFilter.vue'
</script>
