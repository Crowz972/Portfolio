<template>
  <header
    class="container mx-auto flex w-full justify-between items-center h-[7vh] py-8 font-medium"
  >
    <img src="/img/logo/logoV1.png" alt="Nathan Perrelet" class="h-full mr-12 py-1" />
    <nav class="flex justify-between w-full items-center lg:text-lg text-base">
      <ul class="flex gap-6 text-white">
        <li class="hover:-translate-y-0.5 transition-all duration-500">
          <router-link
            to="/"
            class="relative inline-block border-2 border-transparent rounded-md group font-medium"
            :class="{
              'text-[--primary-color]': route.path === '/',
            }"
          >
            About me
            <span
              class="absolute top-8 left-0 w-full h-0.5 bg-[--hover-blue] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
            />
          </router-link>
        </li>
        <li class="hover:-translate-y-0.5 transition-all duration-500">
          <router-link
            to="/showcase"
            class="relative inline-block border-2 border-transparent rounded-md group font-medium"
            :class="{
              'text-[--primary-color]': route.path === '/showcase',
            }"
            >Showcase
            <span
              class="absolute top-8 left-0 w-full h-0.5 bg-[--hover-blue] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
          /></router-link>
        </li>
        <li class="hover:-translate-y-0.5 transition-all duration-500">
          <router-link
            to=""
            class="relative inline-block border-2 border-transparent rounded-md group font-medium"
            :class="{
              'text-[--primary-color]': route.path === '',
            }"
            >Component
            <span
              class="absolute top-8 left-0 w-full h-0.5 bg-[--hover-blue] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
          /></router-link>
        </li>
        <li class="hover:-translate-y-0.5 transition-all duration-500">
          <router-link
            to=""
            class="relative inline-block border-2 border-transparent rounded-md group font-medium"
            :class="{
              'text-[--primary-color]': route.path === '',
            }"
            >Docs
            <span
              class="absolute top-8 left-0 w-full h-0.5 bg-[--hover-blue] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
          /></router-link>
        </li>
      </ul>
      <div class="flex justify-between items-center">
        <ul class="flex gap-8 items-center">
          <li>
            <img src="/img/icons/linkedin.svg" alt="Linkedin" class="lg:w-[24px] w-[18px]" />
          </li>
          <li>
            <img src="/img/icons/github.svg" alt="Github" class="lg:w-[24px] w-[18px]" />
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
