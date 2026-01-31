<script setup lang="ts">
import cvData from '@/data/cv.json'
import Button from 'primevue/button'
</script>

<template>
  <div class="flex align-items-center justify-content-center w-full">
    <div class="grid w-full max-w-7xl align-items-center fadein animation-duration-1000 p-4">
      <div class="col-12 md:col-7 text-center md:text-left order-2 md:order-1 relative z-2">
        <h2 class="text-xl text-cyan-300 font-medium mb-3 uppercase tracking-widest">
          {{ cvData.about.title }}
        </h2>

        <h1 class="text-7xl lg:text-8xl m-0 holo-title line-height-1 mb-4">
          {{ cvData.about.name }}
        </h1>

        <p class="text-xl text-gray-300 line-height-3 mb-6 max-w-30rem md:mx-0 mx-auto">
          {{ cvData.about.summary }}
        </p>

        <div class="flex gap-4 justify-content-center md:justify-content-start">
          <router-link to="/proyectos" custom v-slot="{ navigate }">
            <Button
              label="Ver mi Trabajo"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="navigate"
              class="px-5 py-3 text-lg p-button-primary p-button-rounded"
            />
          </router-link>
        </div>
      </div>

      <div
        class="col-12 md:col-5 flex justify-content-center order-1 md:order-2 mb-5 md:mb-0 relative z-1"
      >
        <div class="image-wrapper">
          <div
            class="absolute w-full h-full bg-cyan-500 opacity-20 blur-3xl border-circle -z-1 top-0 left-0"
          ></div>
          <img
            :src="cvData.about.image"
            class="relative border-circle w-20rem md:w-24rem shadow-8 image-ring"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tracking-widest {
  letter-spacing: 0.1em;
}

.holo-title {
  background: linear-gradient(135deg, #22d3ee, #818cf8, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.image-ring {
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
}

.image-wrapper img {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
