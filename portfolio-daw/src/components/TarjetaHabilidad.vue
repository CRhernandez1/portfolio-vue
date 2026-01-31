<script setup lang="ts">
import type { ISkill } from '@/interfaces/types'
import { computed } from 'vue'

const props = defineProps<{ skill: ISkill }>()

// --- CÁLCULOS MATEMÁTICOS PARA EL SVG ---
// Radio del círculo (determina el tamaño relativo dentro del SVG de 120x120)
const radius = 50
// Fórmula de la circunferencia (2 * pi * r) para saber la longitud total del borde
const circumference = 2 * Math.PI * radius

// --- CÁLCULO DINÁMICO DEL PROGRESO ---
// Calculamos cuánto "espacio vacío"  dejar en el borde para representar el porcentaje.
// Si el nivel es 100%, el offset es 0 (círculo completo). Si es 0%, el offset es igual a la circunferencia.
const dashOffset = computed(() => {
  return circumference - (props.skill.level / 100) * circumference
})
</script>

<template>
  <div
    class="skill-capsule p-4 flex flex-column align-items-center justify-content-center text-center"
  >
    <div class="ring-container relative mb-3">
      <svg width="120" height="120" viewBox="0 0 120 120" class="rotate-neg-90">
        <defs>
          <linearGradient id="auroraGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#22d3ee" />
            <stop offset="100%" stop-color="#c084fc" />
          </linearGradient>
        </defs>

        <circle
          cx="60"
          cy="60"
          r="50"
          stroke="rgba(255,255,255,0.1)"
          stroke-width="8"
          fill="none"
        />

        <circle
          cx="60"
          cy="60"
          r="50"
          stroke="url(#auroraGradient)"
          stroke-width="8"
          fill="none"
          stroke-linecap="round"
          class="progress-ring"
          :style="{ strokeDasharray: circumference, strokeDashoffset: dashOffset }"
        />
      </svg>

      <div
        class="absolute top-0 left-0 w-full h-full flex align-items-center justify-content-center"
      >
        <i :class="props.skill.icon" class="text-4xl text-white opacity-90 drop-shadow-lg"></i>
      </div>
    </div>

    <h3 class="text-xl font-bold m-0 mb-2 text-white">{{ skill.name }}</h3>
    <p class="text-sm text-gray-300 m-0 px-2 line-height-3">{{ skill.description }}</p>

    <div
      class="mt-3 px-3 py-1 border-round-2xl text-xs font-bold bg-white-alpha-10 text-cyan-300 border-1 border-white-alpha-20"
    >
      Nivel {{ skill.level }}%
    </div>
  </div>
</template>

<style scoped>
/* Estilo de la tarjeta estilo cristal (Glassmorphism) */
.skill-capsule {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  transition: all 0.4s ease;
  height: 100%;
}

/* Efectos al pasar el ratón (Hover) */
.skill-capsule:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(34, 211, 238, 0.4);
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.5);
}

/* Rotación para que el progreso empiece arriba (por defecto SVG empieza a la derecha) */
.rotate-neg-90 {
  transform: rotate(-90deg);
}

/* Suavizado de la animación cuando cambia el nivel */
.progress-ring {
  transition: stroke-dashoffset 1.5s ease-out;
  filter: drop-shadow(0 0 4px rgba(34, 211, 238, 0.5)); /* Pequeño resplandor neón en la línea */
}

/* Sombra para el icono central */
.drop-shadow-lg {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
}
</style>
