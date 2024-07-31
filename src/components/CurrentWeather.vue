<template>
  <div class="current-weather">
    <div class="location-containter flex no-wrap items-center q-mb-lg">
      <q-icon name="fas fa-map-marker-alt" size="20px" color="grey-8" />
      <div class="location-name">
        <div class="city">
          <div class="q-my-md">
            {{ weatherData.city }}
          </div>
          <div class="country">{{ weatherData.country }}</div>
        </div>
      </div>
    </div>

    <div class="date">
      Today,
      {{
        new Date().toLocaleDateString("en-IN", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      }}
    </div>
    <div class="weather-desc flex column flex-center">
      <q-img
        class="weather-icon q-my-md"
        :src="weatherData.icon"
        fit="fill"
        width="200px"
      />
      <div class="temp">{{ weatherData.temp }}°C</div>
      <div class="condition">{{ weatherData.condition }}</div>
    </div>

    <q-separator color="grey-3" class="q-my-lg" />

    <div
      class="weather-info flex row no-wrap items-center justify-between"
    >
      <div class="flex no-wrap items-center">
        <q-icon name="sym_o_device_thermostat" color="orange-5" size="20px" />
        <div class="q-ml-sm">Feels Like</div>
      </div>
      <div>{{ weatherData.feels_like }}°C</div>
    </div>

    <div
      class="weather-info flex row no-wrap items-center justify-between"
    >
      <div class="flex no-wrap items-center">
        <q-icon name="sym_o_cloud" color="grey-5" size="20px" />
        <div class="q-ml-sm">Cloud</div>
      </div>
      <div>{{ weatherData.cloud }}%</div>
    </div>

    <div
      class="rain weather-info flex row no-wrap items-center justify-between"
    >
      <div class="flex no-wrap items-center">
        <q-icon name="sym_o_rainy_heavy" color="blue-5" size="20px" />
        <div class="q-ml-sm">Rain</div>
      </div>
      <div>{{ weatherData.rain }}%</div>
    </div>

    <div class="text-right">
      last_updated : 
      {{ weatherData.last_updated }}
    </div>
  </div>
</template>


<script setup lang="ts">
import { Ref, ref, computed } from 'vue';
import { useWeatherStore } from '../stores/weather';
import { storeToRefs } from 'pinia';

const weatherStore = useWeatherStore();
const { currentWeather } = storeToRefs(weatherStore);

const weatherData = computed(() => currentWeather.value) 
</script>


<style lang="scss">
.current-weather {
  .date {
    margin-top: 12px;
  }
  .weather-icon {
  }
  .temp {
    font-size: 62px;
    line-height: 62px;
  }
  .condition {
    font-size: 18px;
    line-height: 18px;
    margin: 8px 0 16px;

  }
  .weather-info {
    padding: 12px 16px;
    background: rgba($color: white, $alpha: 0.1);
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.1);
    border-radius: 16px;
    margin: 8px 0;
  }
}
</style>
