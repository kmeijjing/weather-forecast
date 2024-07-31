<template>
  <div class="wind-status-component">
    <div class="wind-kph">
      <span class="data">
        {{ wind_kph }} 
      </span>
      <span class="unit">
        km/h
      </span>
    </div>
    <div class="wind-direction flex no-wrap items-center">
      <q-avatar color="whtie" text-color="blue-13" icon="location_on" size="36px" />
      <span>
        {{ wind_direction }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  wind_kph: number,
  wind_direction: string,
}

const props = withDefaults(defineProps<Props>(), {
  wind_kph: 0,
  wind_direction: '',
})
</script>

<style lang="scss">
.wind-status-component {
  padding-top: 20px;
  .wind-kph {
    .data {
      font-size: 48px;
      line-height: 48px;
      font-weight: 500;
    }
    .unit {
      font-size: 16px;
      line-height: 38px;
      vertical-align: bottom;
      font-weight: 500;
      margin-left: 4px;
    }
  }
  .wind-direction {
    margin-top: 16px;
    padding-left: 4px;
    .q-avatar {
      &:before {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 2px solid $grey-3;
        animation: rotate 2s linear infinite;
      }
    }
    >span {
      font-size: 18px;
      font-weight: 500;
      margin-left: 10px;
    }
  }
}
</style>