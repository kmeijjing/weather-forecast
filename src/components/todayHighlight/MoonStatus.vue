<template>
  <div class="moon-status-component flex column no-wrap justify-between">
    <div class="flex no-wrap items-end">
      <div class="value">
        {{ props.moon_phase }}
      </div>
    </div>
    <div class="level flex no-wrap items-center">
      <div>
        illumination : {{ moon_illumination }}%
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

interface Props {
  moon_phase: string,
  moon_illumination: number,
}

const props = withDefaults(defineProps<Props>(), {
  moon_phase: '',
  moon_illumination: 0,
})

</script>

<style lang="scss">
.moon-status-component {
  height: calc(100% - 30px);
  padding-top: 30px;
  .value {
    font-size: 24px;
  }
  .level {
    font-size: 16px;
  }
}
</style>