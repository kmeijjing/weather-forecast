<template>
  <div class="weather-detail">
    <DailyWeather />
    <q-separator class="q-my-md" color="blue-grey-1" />
    <TodayHighlight />
  </div>
</template>

<script setup lang="ts">
import DailyWeather from '../components/DailyWeather.vue';
import TodayHighlight from '../components/TodayHighlight.vue';

import { Ref, ref, computed } from 'vue';
import { useWeatherStore } from '../stores/weather';
import { storeToRefs } from 'pinia';

const weatherStore = useWeatherStore();
const { currentWeather } = storeToRefs(weatherStore);

const weatherData = computed(() => currentWeather.value);


</script>

<style lang="scss">
.weather-detail {
}
</style>
