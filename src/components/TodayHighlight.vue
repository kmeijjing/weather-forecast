<template>
  <section class="today-highlight">
    <div class="title q-pl-xs">
      Today's Highlight
    </div>

    <div class="highlights row">
      <div class="col q-mt-md">
        <div class="row q-col-gutter-md">
          <div class="col-4 highlight-container">
            <ListItem title="UV Index">
              <UvIndexChart :uv="weatherData.uv" class="q-mx-auto flex flex-center" />
            </ListItem>
          </div>
      
          <div class="col-4 highlight-container">
            <ListItem title="Wind Status">
              <WindStatus
                :wind_kph="weatherData.wind_kph"
                :wind_direction="weatherData.wind_direction"
              />
            </ListItem>
          </div>

          <div class="col-4 highlight-container">
            <ListItem title="Sunrise & Sunset">
              <SunriseSunset :sunrise="weatherData.sunrise" :sunset="weatherData.sunset" />
            </ListItem>
          </div>

          <div class="col-4 highlight-container">
            <ListItem title="Humidity">
              <Humidity :humidity="weatherData.humidity" />
            </ListItem>
          </div>
      
          <div class="col-4 highlight-container">
            <ListItem title="Visibility">
              <Visibility :visibility="weatherData.visibility" />
            </ListItem>
          </div>

          <div class="col-4 highlight-container">
            <ListItem title="Moon Status">
              <MoonStatus :moon_phase="weatherData.moon_phase" :moon_illumination="weatherData.moon_illumination" />
            </ListItem>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useWeatherStore } from '../stores/weather';
import { storeToRefs } from 'pinia';
import ListItem from '../components/ListItem.vue';
import UvIndexChart from './todayHighlight/UvIndexChart.vue';
import WindStatus from '../components/todayHighlight/WindStatus.vue';
import SunriseSunset from '../components/todayHighlight/SunriseSunset.vue';
import Humidity from '../components/todayHighlight/Humidity.vue';
import Visibility from '../components/todayHighlight/Visibility.vue';
import MoonStatus from './todayHighlight/MoonStatus.vue';

const weatherStore = useWeatherStore();
const { currentWeather } = storeToRefs(weatherStore);

const weatherData = computed(() => currentWeather.value);

</script>

<style lang="scss">
.today-highlight {
  >.title {
     font-size: 20px;
     font-weight: 600;
  }
}
</style>
