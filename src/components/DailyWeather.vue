<template>
  <section class="daily-weather flex no-wrap item-center justify-between">
    <div
      v-for="item in weatherData" :key="item"
      dense
      class="weather bg-white"
    >
      <div class="day">
        {{ item.day }}
      </div>
      <q-img
        class="weather-icon"
        :src="item.icon"
        fit="fill"
        width="40px"
      />
      <div class="temp flex no-wrap flex-center">
        <div class="text-grey-7">
          {{ item.min_temp }}°
        </div>
        <div>
          {{ item.max_temp }}°
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, Ref, computed } from 'vue';
import { useWeatherStore } from '../stores/weather';
import { storeToRefs } from 'pinia';

const weatherStore = useWeatherStore();
const { dailyWeather } = storeToRefs(weatherStore);
const weatherData = computed(() => dailyWeather.value);
</script>

<style lang="scss">
.daily-weather {
  .weather {
    width: 100%;
    max-width: 140px !important;
    text-align: center;
    border-radius: 16px;
    padding: 20px;
    transition: background-color 0.3s ease;
    .day {
      font-size: 16px;
      color: $grey-7;
      font-weight: 500;
    }
    .weather-icon {
      margin: 10px 0;
    }
    .temp {
      font-size: 14px;
      font-weight: 700;
      color: $grey-10;
      gap:16px
    }
  }

}
</style>