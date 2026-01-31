<script setup lang="ts">
import { ref } from 'vue'
import Menubar from 'primevue/menubar'

const items = ref([
  { label: 'Sobre Mí', icon: 'pi pi-user', route: '/' },
  { label: 'Proyectos', icon: 'pi pi-folder', route: '/proyectos' },
  { label: 'Habilidades', icon: 'pi pi-cog', route: '/habilidades' },
  { label: 'Experiencia', icon: 'pi pi-briefcase', route: '/experiencia' },
  { label: 'Contacto', icon: 'pi pi-envelope', route: '/contacto' },
])
</script>

<template>
  <div class="min-h-screen flex flex-column">
    <div class="fixed w-full z-5 top-0 left-0 p-3 flex justify-content-center">
      <Menubar :model="items" class="aurora-menubar border-none">
        <template #item="{ item, props }">
          <router-link
            v-if="item.route"
            v-slot="{ href, navigate, isActive }"
            :to="item.route"
            custom
          >
            <a
              :href="href"
              v-bind="props.action"
              @click="navigate"
              class="nav-link flex align-items-center"
              :class="{ 'active-link': isActive }"
            >
              <span :class="item.icon" class="mr-2" />
              <span class="font-medium">{{ item.label }}</span>
            </a>
          </router-link>
        </template>
      </Menubar>
    </div>

    <main class="flex-grow-1 w-full md:w-10 lg:w-8 mx-auto content-spacer">
      <RouterView />
    </main>

    <footer class="text-center p-4 text-sm text-gray-500 relative z-1 mt-auto">
      &copy; 2026 Portfolio Personal
    </footer>
  </div>
</template>

<style>
/* Espaciado superior para evitar solapamiento con la barra fija */
.content-spacer {
  padding-top: 8rem;
  padding-bottom: 2rem;
}

/* Estilos visuales de la barra flotante */
.aurora-menubar.p-menubar {
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 0.5rem 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  min-width: fit-content;
}

/* Estilos base de los enlaces de navegación */
.aurora-menubar .nav-link {
  color: #94a3b8;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  text-decoration: none;
  background: transparent;
  outline: none;
}

/* Efecto visual al pasar el ratón por los enlaces */
.aurora-menubar .nav-link:hover {
  color: white;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
  background: transparent;
}

/* Estilos para el enlace de la sección activa actual */
.aurora-menubar .active-link {
  color: #22d3ee;
  font-weight: 700;
  text-shadow: 0 0 12px rgba(34, 211, 238, 0.6);
  background: transparent;
}

/* Eliminación de fondos por defecto de PrimeVue en focus y hover */
.aurora-menubar .p-menuitem-content:hover,
.aurora-menubar .p-menuitem-link:focus,
.aurora-menubar .nav-link:focus,
.aurora-menubar .nav-link:active {
  background: transparent;
  box-shadow: none;
}

/* Ajustes de tamaño para dispositivos móviles */
@media screen and (max-width: 960px) {
  .aurora-menubar.p-menubar {
    width: 95%;
    border-radius: 16px;
  }
  .content-spacer {
    padding-top: 7rem;
  }
}
</style>
