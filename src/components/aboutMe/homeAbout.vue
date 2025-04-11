<template>
  <section
    class="flex flex-col-reverse md:flex-row items-center justify-between gap-12 my-24 md:my-36 px-4 md:px-12 fade-left"
  >
    <div class="w-full md:w-3/5 text-white text-center md:text-left">
      <h1 class="text-4xl md:text-5xl font-bold my-2">Bonjour! Je suis</h1>
      <h1 class="text-4xl md:text-5xl font-bold my-2 text-[--primary-color]">Nathan Perrelet</h1>
      <p class="my-6 md:my-8 text-base md:text-lg leading-relaxed">
        Développeur web junior spécialisé dans la création d’applications web dynamiques, de designs
        réactifs et d’intégration graphique transparente. Passionné par la création d’interfaces
        conviviales et l’assurance d’un code propre et efficace, je me passionne pour transformer
        les idées en expériences numériques fonctionnelles et visuellement attrayantes.
      </p>
      <div class="flex flex-col sm:flex-row justify-center md:justify-start mt-6 gap-4 sm:gap-8">
        <a
          href="public/CV-Nathan-Perrelet.pdf"
          download="CV-Nathan-Perrelet.pdf"
          class="relative inline-block border-2 border-transparent rounded-md group font-medium"
        >
          <button
            class="bg-[--primary-color] text-black py-2 px-6 rounded-md hover:bg-[--hover-blue] transition duration-300 shadow-glow"
          >
            Télécharger mon CV
          </button>
        </a>
        <button-nav name="Mes projets" :type="true" url="/showcase" />
      </div>
    </div>

    <div class="w-full md:w-2/5 flex items-center justify-center">
      <img
        src="/img/logo/logoV1.png"
        alt="logo NP crow"
        class="animate-fade-up-down h-[180px] sm:h-[220px] md:h-[280px] shadow-glow"
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
