<template>
  <header
    class="container mx-auto flex w-full justify-between items-center h-[7vh] my-2 font-medium"
  >
    <img src="/img/logo/logoV1.png" alt="Nathan Perrelet" class="h-full mr-12 py-1" />
    <nav class="flex justify-between w-full items-center lg:text-lg text-base">
      <ul class="flex gap-6">
        <li><router-link to="/">About me</router-link></li>
        <li><router-link to="/showcase">Showcase</router-link></li>
        <li><router-link to="">Component</router-link></li>
        <li><router-link to="">Docs</router-link></li>
      </ul>
      <div class="flex justify-between items-center">
        <div class="mr-24">
          <label class="items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div
              class="relative w-11 h-6 bg-black peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
            ></div>
          </label>
        </div>
        <ul class="flex gap-8 items-center">
          <li>
            <img src="/img/icons/discord.svg" alt="Discord" class="lg:w-[24px] w-[18px]" />
          </li>
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

<script setup lang="ts"></script>
