<template>
  <q-page class="main-page flex flex-center bg-grey-5">
    <div class="inner-containter flex no-wrap bg-white">
      <div class="summary">
        <CurrentWeather />
      </div>
      <div class="dashboard bg-grey-3">
        <WeatherSearch />
        <WeatherDetail class="q-mt-lg" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import WeatherSearch from "@/components/WeatherSearch.vue";
import CurrentWeather from "../components/CurrentWeather.vue"
import WeatherDetail from "../components/WeatherDetail.vue"
import { useWeatherStore } from '../stores/weather';
import { storeToRefs } from 'pinia';

const weatherStore = useWeatherStore();
const { fetchWeather } = weatherStore;

fetchWeather();
</script>

<style lang="scss">
.main-page {
  .inner-containter {
    border-radius: 44px;
    overflow: hidden;
    box-shadow: 0px 0px 9px 0px rgb(0 0 0 / 30%);
    .summary {
      width: 100%;
      max-width: 300px;
      padding: 32px 28px;
    }
    .dashboard {
      padding: 32px 28px;
      width: 830px;
    }
  }
}
</style>
