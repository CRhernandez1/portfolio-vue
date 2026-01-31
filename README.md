# Documentación del Proyecto: Portfolio Personal

**Módulo:** Diseño de Interfaces (DOR)

**Alumno:** Cristian Reyes Hernández

**Tecnologías:** Vue 3, TypeScript, PrimeVue, PrimeFlex.

## 1. Introducción y Alcance

Este proyecto consiste en el desarrollo de un portfolio web personal enfocado como práctica académica para la asignatura de **DOR**.

**Nota sobre la funcionalidad:**
Cabe destacar que el propósito de este sitio es demostrar capacidades de diseño de interfaces, maquetación y uso de componentes. Por ello, este **no es el portfolio profesional en producción** del alumno. Ciertas funcionalidades son simulaciones visuales (mocks):

- Los enlaces a "Ver Código Fuente" en los proyectos son demostrativos.
- El botón de descarga de CV y formularios de contacto no realizan acciones reales en el servidor.
- El contenido (textos de proyectos) es representativo para ocupar espacio en la interfaz.

## 2. Metodología: Uso de IA Generativa

Para la realización de este proyecto se ha utilizado Inteligencia Artificial como **herramienta de consulta y apoyo puntual**, no como generador total del código. La intervención de la IA se ha limitado a:

1.  **Resolución de dudas específicas** sobre la sintaxis de la librería PrimeVue y PrimeFlex.
2.  **Sugerencias de estilizado avanzado** (CSS) para lograr efectos complejos como _Glassmorphism_ y animaciones de fondo, que hubieran requerido un tiempo excesivo de desarrollo manual.
3.  **Refactorización de código CSS** para mejorar buenas prácticas (eliminación de `!important`).

La lógica estructural, el enrutamiento y la integración de los datos JSON han sido gestionados e implementados por el alumno.

---

## 3. Identidad Visual: Tema "Aurora"

Se ha implementado una paleta de colores personalizada definida en el archivo `base.css`. El diseño busca una estética oscura, moderna y etérea, utilizando luces desenfocadas sobre un fondo profundo.

### Paleta de Colores (Variables CSS)

- **Fondo Base (`--color-bg`):** `#0f172a` (Slate 900). Se evita el negro puro para reducir la fatiga visual.
- **Luces Ambientales (Orbes de fondo):**
  - Verde Azulado (`--color-orb-1`): `#0d9488`
  - Índigo (`--color-orb-2`): `#4f46e5`
- **Acentos Holográficos (`--holo-gradient`):**
  - Un degradado lineal de 135 grados compuesto por:
    1.  Cyan Brillante: `#22d3ee`
    2.  Índigo Suave: `#818cf8`
    3.  Violeta: `#c084fc`
- **Superficies de Cristal:**
  - Fondo: `rgba(255, 255, 255, 0.03)`
  - Bordes: `rgba(255, 255, 255, 0.1)`
  - Efecto: `backdrop-filter: blur(25px) saturate(150%)`

---

## 4. Historial de Prompts (Ingeniería de Peticiones)

A continuación, se documentan los prompts utilizados para resolver problemas puntuales de diseño y estructura durante el desarrollo.

### Fase 1: Consulta sobre Estructura Base

_Objetivo: Entender cómo integrar PrimeFlex con la Composition API de Vue 3._

> **Prompt:**
> "Estoy montando un proyecto en Vue 3 con PrimeVue. Necesito ayuda para estructurar una rejilla responsive usando PrimeFlex para mostrar unas tarjetas de proyectos. Los datos los tengo en un JSON. ¿Cómo sería la sintaxis básica del `<div class="grid">` para que sea responsive en móvil y escritorio?"

### Fase 2: Ayuda con CSS Avanzado (Aurora Theme)

_Objetivo: Generar el CSS para el fondo animado y los gradientes, ya que hacerlo a mano es complejo._

> **Prompt:**
> "Quiero mejorar el diseño visual. Necesito un CSS que cree un fondo oscuro (`#0f172a`) con dos orbes de luz desenfocados moviéndose suavemente detrás. Además, dame una clase `.holo-title` que aplique un gradiente de texto entre Cyan (`#22d3ee`) y Violeta (`#c084fc`). Asegúrate de que las tarjetas tengan efecto cristal (glassmorphism)."

### Fase 3: Personalización de Componentes (Navbar)

_Objetivo: Modificar el comportamiento por defecto del componente Menubar._

> **Prompt:**
> "El componente `Menubar` de PrimeVue ocupa todo el ancho por defecto. Quiero transformarlo en una barra flotante centrada con bordes redondeados, separada del borde superior. Dame el CSS necesario para sobrescribir los estilos por defecto y añadir un efecto de brillo (`glow`) al enlace activo."

### Fase 4: Limpieza y Buenas Prácticas

_Objetivo: Corregir el uso excesivo de `!important` sugerido en iteraciones anteriores._

> **Prompt:**
> "El código CSS actual funciona pero abusa de `!important` para sobrescribir PrimeVue. Refactoriza el siguiente bloque CSS para usar selectores de mayor especificidad (como `body .p-card`) y eliminar los `!important`, manteniendo exactamente el mismo aspecto visual."

---

## 5. Conclusión

El proyecto cumple con los requisitos de la asignatura DOR, demostrando la capacidad de adaptar librerías de componentes (PrimeVue) a un diseño personalizado y moderno. El uso de la IA ha servido para optimizar los tiempos de desarrollo en la capa de presentación (CSS), permitiendo al alumno centrarse en la estructura y maquetación de la aplicación.
