<script setup lang="ts">
import Timeline from 'primevue/timeline'
import Card from 'primevue/card'
import Button from 'primevue/button'
import cvData from '@/data/cv.json'
</script>
<template>
  <div class="flex justify-content-between align-items-center mb-5">
    <h2>Experiencia / Formación</h2>
    <Button label="Descargar PDF" icon="pi pi-file-pdf" severity="help" />
  </div>
  <Timeline :value="cvData.experience" align="alternate">
    <template #content="slotProps">
      <Card class="mb-3">
        <template #title>{{ slotProps.item.role }}</template>
        <template #subtitle>{{ slotProps.item.date }} @ {{ slotProps.item.company }}</template>
        <template #content
          ><p>{{ slotProps.item.description }}</p></template
        >
      </Card>
    </template>
  </Timeline>
</template>
