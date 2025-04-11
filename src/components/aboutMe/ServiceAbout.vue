<template>
  <section
    v-fade-in-on-scroll
    class="flex flex-col-reverse md:flex-row items-center gap-12 mt-24 px-4 md:px-12"
  >
    <div
      class="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 p-6 md:p-8 rounded-md bg-[--secondary-color] shadow-glow"
    >
      <BlockService
        content="Je suis un développeur web junior passionné par le codage et la conception."
        name="Moi"
        img="me"
      />
      <BlockService
        content="Découvrez les projets que j’ai créés avec Vue, Tailwind et d’autres outils."
        name="Showcase"
        img="showcase"
      />
      <BlockService
        content="Découvrez les composants réutilisables Tailwind que j’ai conçus pour les applications web modernes."
        name="Composant"
        img="component"
      />
      <BlockService
        content="Jetez un coup d’œil à mes fiches de programmation pour accélérer votre flux de travail."
        name="Documentation "
        img="docs"
      />
    </div>

    <div class="w-full md:w-1/2">
      <div class="flex flex-col gap-2 mb-6 text-white text-center md:text-left">
        <h2 class="text-4xl md:text-6xl font-bold">Tout sur</h2>
        <h2 class="text-3xl md:text-5xl font-bold text-[--primary-color]">mes projets</h2>
      </div>
      <p class="text text-white mb-4 text-center md:text-left">
        Une collection de compétences, de projets, de composants et de ressources créés à travers
        mon parcours de développement.
      </p>
      <p class="text text-white text-center md:text-left">
        Cette section donne un aperçu de mon travail : projets personnels, composants réutilisables,
        et des ressources utiles. C’est un espace pour documenter mes progrès, partager des outils
        utiles et ce que j’ai construit en explorant le monde du développement.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import BlockService from '@/components/tools/BlockService.vue'
</script>
