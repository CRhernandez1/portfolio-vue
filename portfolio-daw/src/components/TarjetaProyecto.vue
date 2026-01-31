<script setup lang="ts">
import type { IProject } from '@/interfaces/types'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Tag from 'primevue/tag'

defineProps<{ project: IProject }>()
</script>

<template>
  <div class="card-wrapper h-full">
    <Card class="cyber-card h-full flex flex-column overflow-hidden relative">
      <template #title>
        <div class="flex align-items-center gap-3 mb-2">
          <div class="icon-box">
            <i class="pi pi-code text-xl"></i>
          </div>
          <h3 class="text-2xl font-bold m-0 text-white project-title">
            {{ project.title }}
          </h3>
        </div>
      </template>

      <template #content>
        <div class="flex flex-column h-full justify-content-between">
          <p class="text-gray-300 text-lg line-height-3 mb-5 flex-grow-1" style="opacity: 0.9">
            {{ project.description }}
          </p>

          <div class="flex gap-2 flex-wrap">
            <Tag
              v-for="tag in project.tags"
              :key="tag"
              :value="tag"
              rounded
              class="tech-tag px-3 py-2"
            />
          </div>
        </div>
      </template>

      <template #footer>
        <div class="mt-auto pt-4 relative z-2">
          <a :href="project.link" target="_blank" rel="noopener">
            <Button
              label="Ver Código Fuente"
              icon="pi pi-github"
              class="w-full p-button-primary text-lg font-bold shadow-4 button-glow"
            />
          </a>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
/* 1. Wrapper para el efecto de luz trasera */
.card-wrapper {
  position: relative;
  z-index: 1;
}

/* Efecto Backglow (Luz trasera) */
.card-wrapper::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%) scale(0.9);
  background: linear-gradient(135deg, #22d3ee, #c084fc);
  filter: blur(35px);
  opacity: 0;
  z-index: -1;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 24px;
}

/* 2. ESTILOS DE LA TARJETA  */
/* Usamos :deep(.p-card.cyber-card) para aumentar la especificidad y ganar al estilo por defecto */

.card-wrapper :deep(.p-card.cyber-card) {
  background: linear-gradient(160deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 58, 138, 0.5) 100%);
  backdrop-filter: blur(25px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.6);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Estilos internos de PrimeVue (Body y Content) */
.card-wrapper :deep(.p-card-body) {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
}

.card-wrapper :deep(.p-card-content) {
  flex-grow: 1;
  padding: 1rem 0;
}

/* 3. ELEMENTOS INTERNOS */

/* Cajita del icono */
.icon-box {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  color: #22d3ee;
  border: 1px solid rgba(34, 211, 238, 0.2);
}

/* Estilo de los Tags */
.tech-tag {
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(34, 211, 238, 0.3);
  color: #22d3ee;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 10px -2px rgba(34, 211, 238, 0.1);
}

/* Estilo del Botón */
.button-glow {
  border-radius: 12px;
  background: linear-gradient(135deg, #22d3ee, #818cf8, #c084fc);
  border: none;
  color: #0f172a;
}

/* 4. ANIMACIONES HOVER */

.card-wrapper:hover :deep(.p-card.cyber-card) {
  transform: translateY(-12px) scale(1.02);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.8);
}

/* Activar luz trasera */
.card-wrapper:hover::before {
  opacity: 0.4;
  transform: translate(-50%, -50%) scale(1.05);
}

.card-wrapper:hover .project-title {
  background: linear-gradient(to right, #fff, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
