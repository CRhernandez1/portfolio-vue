<script setup lang="ts">
import TarjetaProyecto from '@/components/TarjetaProyecto.vue'
import cvData from '@/data/cv.json'
</script>

<template>
  <div class="fadein animation-duration-1000">
    <h2 class="text-center mb-5 text-4xl holo-title">Proyectos Académicos</h2>
    <div class="grid">
      <div
        class="col-12 md:col-6 lg:col-4 flex"
        v-for="(proj, index) in cvData.projects"
        :key="index"
      >
        <TarjetaProyecto :project="proj" class="h-full w-full" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.holo-title {
  background: linear-gradient(135deg, #22d3ee, #818cf8, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  font-weight: 800;
}
</style>
