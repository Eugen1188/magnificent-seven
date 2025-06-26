<script setup>
import { ref, onMounted } from 'vue';
import headerComponent from './components/header.vue';
import stockService from './services/stockService.js';

const stockData = ref([]);
const loading = ref(true);



const stocks = [
  { name: 'Apple', symbol: 'AAPL' },
  { name: 'Microsoft', symbol: 'MSFT' },
  { name: 'Alphabet', symbol: 'GOOG' },
  { name: 'Amazon', symbol: 'AMZN' },
  { name: 'Tesla', symbol: 'TSLA' },
  { name: 'Meta Platforms', symbol: 'META' },
  { name: 'NVIDIA', symbol: 'NVDA' }
];

onMounted(async () => {
  const results = [];
  for (const stock of stocks) {
    try {
      const daten = await stockService.getData(stock.symbol);
      results.push({ symbol: stock.symbol, daten });
    } catch (e) {
      console.error(`Fehler beim Laden für ${stock.symbol}:`, e);
    }
  }
  stockData.value = results;
  console.log(stockData.value);
  loading.value = false;
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
