<template>
  <div class="visibility-component flex column no-wrap justify-between">
    <div class="flex no-wrap items-end">
      <div class="value">
        {{ props.visibility }}
      </div>
      <div class="unit">km</div>
    </div>
    <div class="level flex no-wrap items-center">
      <div>
        {{ visibilityLevel }}
      </div>
      <div class="q-ml-xs">
        {{ visibilityLevelColor[visibilityLevel] }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  visibility: number,
}

const props = withDefaults(defineProps<Props>(), {
  visibility: 0,
})

const visibilityLevelColor = {
  'Good': '😊',
  'Average': '🙂',
  'Bad': '☹️',
}

const visibilityLevel = computed(() => {
  const visibility:number = props.visibility;
  return visibility >= 20 ? 'Good' : visibility >= 10 ? 'Average' : 'Bad';
})
</script>

<style lang="scss">
.visibility-component {
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