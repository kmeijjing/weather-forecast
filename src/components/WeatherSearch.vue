<template>
  <div class="weather-search flex no-wrap justify-between items-center">
    <div class="location-containter flex no-wrap items-center">
      <q-icon name="fas fa-map-marker-alt" size="20px" color="grey-8" />
      <div class="location-name">
        {{ weatherData.city }}, {{ weatherData.country }}
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
    <q-form @submit="onSubmit">
      <q-input
        standout
        v-model="searchText"
        placeholder="Search..."
        class="search-input"
      >
        <template v-slot:prepend>
          <q-icon name="search" color="indigo-2" />
        </template>

        <template v-slot:append>
          <q-btn round unelevated size="10px" icon="my_location" color="indigo-2" />
        </template>
      </q-input>
    </q-form>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, computed } from 'vue';
import { useWeatherStore } from '../stores/weather';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router'

const weatherStore = useWeatherStore();
const { fetchWeather } = weatherStore;
const { currentWeather } = storeToRefs(weatherStore);


const weatherData = computed(() => currentWeather.value);

const searchText: Ref<string> = ref('');

const router = useRouter();

function onSubmit() {
  router.push({
    name: 'SearchCityPage',
    params: { city: searchText.value }
  }).then(() => {
    fetchWeather();
  })

}
</script>

<style lang="scss">
.weather-search {
  .location-name {
    font-size: 20px;
    font-weight: 500;
    margin-left: 8px;
    padding-top: 4px;
  }
  .q-form {
      .search-input {
        max-width: 300px;
        margin-left: auto;
        .q-field__inner {
          .q-field__control {
            height: 40px !important;
            min-height: 0 !important;
            border-radius: 16px;
            // background: rgba(232, 234, 246, 0.7) !important;
            .q-field__control-container {
              .q-field__native {
                // color: $indigo-3 !important;
              }
            }
            .q-field__prepend {
              height: 40px !important;
            }
            .q-field__append {
              height: 40px !important;
              .q-btn {
                font-size: 9px !important;
              }
            }
          }
        }
      }
    }
}
</style>