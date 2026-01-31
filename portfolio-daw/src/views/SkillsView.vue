<script setup lang="ts">
import TarjetaHabilidad from '@/components/TarjetaHabilidad.vue'
import cvData from '@/data/cv.json'
</script>

<template>
  <div class="fadein animation-duration-1000">
    <div class="text-center mb-6">
      <h2 class="text-4xl md:text-5xl mb-2 holo-title">Stack Tecnológico</h2>
      <p class="text-gray-300 mt-0">Herramientas y tecnologías que domino</p>
    </div>

    <div class="grid justify-content-center">
      <div
        class="col-12 md:col-6 lg:col-4 p-3"
        v-for="(skill, index) in cvData.skills"
        :key="index"
      >
        <TarjetaHabilidad :skill="skill" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.holo-title {
  background: var(--holo-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
}
</style>
