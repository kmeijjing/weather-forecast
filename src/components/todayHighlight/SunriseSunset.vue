<template>
  <div class="sunrise-sunset-component">
    <div class="sunrize">
      <q-avatar color="amber-6" text-color="white" icon="arrow_upward" size="34px" />
      <span class="time">
        {{ sunrise }}
      </span>
    </div>

    <div class="sunset q-mt-lg">
      <q-avatar color="amber-6" text-color="white" icon="arrow_downward" size="34px" />
      <span class="time">
        {{ sunset }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  sunrise: string,
  sunset: string,
}

const props = withDefaults(defineProps<Props>(), {
  sunrise: '',
  sunset: '',
})
</script>

<style lang="scss">
.sunrise-sunset-component {
  padding-top: 24px;
  .q-avatar {
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: 2px solid $orange-5;
      animation: rotate 2s linear infinite;
    }
  }
  .time {
    font-size: 16px;
    font-weight: 500;
    margin-left: 16px;
  }

}
</style>