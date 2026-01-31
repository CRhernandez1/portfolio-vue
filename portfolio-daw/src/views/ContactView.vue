<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import { ref } from 'vue'

const form = ref({ name: '', email: '', message: '' })

const enviar = () => {
  alert('¡Mensaje enviado correctamente! (Simulación)')
  form.value = { name: '', email: '', message: '' }
}
</script>

<template>
  <div class="flex justify-content-center align-items-center min-h-screen -mt-8 px-4">
    <div class="glass-panel grid w-full max-w-6xl shadow-8 overflow-hidden">
      <div
        class="col-12 md:col-5 p-6 flex flex-column justify-content-between info-side relative overflow-hidden"
      >
        <div class="absolute top-0 left-0 w-full h-full bg-cyan-900 opacity-40 z-0"></div>

        <div class="relative z-1">
          <h2 class="text-4xl font-bold mb-4 holo-title">Conectemos</h2>
          <p class="text-gray-200 text-lg line-height-3 mb-6">
            ¿Tienes una idea en mente o quieres colaborar en un proyecto? Estoy disponible para
            charlar sobre código, diseño y nuevas oportunidades.
          </p>

          <div class="flex flex-column gap-4">
            <div class="flex align-items-center gap-3">
              <div class="icon-box"><i class="pi pi-envelope text-xl"></i></div>
              <span class="text-lg">cristianreyesh01@gmail.com</span>
            </div>
            <div class="flex align-items-center gap-3">
              <div class="icon-box"><i class="pi pi-github text-xl"></i></div>
              <span class="text-lg">github.com/CRhernandez1</span>
            </div>
            <div class="flex align-items-center gap-3">
              <div class="icon-box"><i class="pi pi-linkedin text-xl"></i></div>
              <span class="text-lg">linkedin.com/in/cristianrh01/</span>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 md:col-7 p-6 bg-white-alpha-5">
        <form @submit.prevent="enviar" class="flex flex-column gap-4">
          <div class="flex flex-column gap-2">
            <label for="name" class="text-gray-300 font-medium ml-1">Nombre</label>
            <InputText
              id="name"
              v-model="form.name"
              placeholder="Tu nombre..."
              class="p-3 w-full"
              required
            />
          </div>

          <div class="flex flex-column gap-2">
            <label for="email" class="text-gray-300 font-medium ml-1">Email</label>
            <InputText
              id="email"
              type="email"
              v-model="form.email"
              placeholder="tu@email.com"
              class="p-3 w-full"
              required
            />
          </div>

          <div class="flex flex-column gap-2">
            <label for="message" class="text-gray-300 font-medium ml-1">Mensaje</label>
            <Textarea
              id="message"
              v-model="form.message"
              rows="5"
              placeholder="¿En qué puedo ayudarte?"
              class="p-3 w-full"
              required
            />
          </div>

          <Button
            label="Enviar Mensaje"
            icon="pi pi-send"
            type="submit"
            class="w-full p-3 text-lg mt-2"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glass-panel {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
}

.icon-box {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #22d3ee;
  transition: all 0.3s ease;
}

.icon-box:hover {
  background: var(--holo-gradient);
  color: #0f172a;
  transform: scale(1.1);
}
</style>
