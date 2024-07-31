<template>
  <div class="list-item-component q-pa-md">
    <div class="title">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string,
}

const props = withDefaults(defineProps<Props>(), {
  title: 'title',
})

</script>

<style lang="scss">
.list-item-component {
  background: white;
  border-radius: 16px;
  width: 240px;
  height: 180px;
  .title {
    color: $grey-6;
    font-weight: 500;
    font-size: 16px;
  }
}
</style>