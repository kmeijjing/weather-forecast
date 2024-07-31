<template>
  <div class="humidity-component flex column no-wrap justify-between">
    <div class="flex no-wrap items-end">
      <div class="value">
        {{ props.humidity }}
      </div>
      <div class="unit">%</div>
    </div>
    <div class="level flex no-wrap items-center">
      <div>
        {{ humidityLevel }}
      </div>
      <q-icon name="sym_o_humidity_high" :color="humidityLevelColor[humidityLevel]" size="20px" class="q-ml-xs" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  humidity: number,
}

const props = withDefaults(defineProps<Props>(), {
  humidity: 0,
})

const humidityLevelColor = {
  'Very High': 'orange-14',
  'High': 'amber-13',
  'Moderate': 'yellow-5',
  'Low': 'lime-12',
  'Very Low': 'light-green-5',
}

const humidityLevel = computed(() => {
  const hum:number = props.humidity;
  return hum >= 80 ? 'Very High' : hum >= 60 ? 'High' : hum >= 40 ? 'Moderate' : hum >= 20 ? 'Low' : 'Very Low';
})
</script>

<style lang="scss">
.humidity-component {
  height: calc(100% - 30px);
  padding-top: 30px;
  .value {
    font-size: 48px;
    line-height: 40px;
  }
  .unit {
    font-size: 16px;
    margin-left: 8px;
    color: $grey-7;
  }
  .level {
    font-size: 16px;
  }
}
</style>