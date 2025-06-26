<script setup>
import { ref, onMounted } from 'vue';
import headerComponent from './components/header.vue';
import stockService from './services/stockService.js';

const eintraege = ref([]);
const loading = ref(true);

onMounted(async () => {
  console.log('onMounted gestartet');
  try {
    const daten = await stockService.getData();
    console.log('Daten geladen:', daten);
    eintraege.value = daten;
  } catch (e) {
    console.error('Fehler beim Laden:', e);
  } finally {
    loading.value = false;
  }
});
</script>

<template>

<headerComponent>

</headerComponent>


</template>

<style scoped>

</style>

<style>

body {
  background: radial-gradient(71.11% 100% at 50% 0%, #020204 14.6%, #011F35 100%);
  margin: 0;
  padding: 0;
}
</style>
