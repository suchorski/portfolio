<template>
  <div class="info">
    <slot name="left" />
    <slot name="right" />
  </div>
</template>

<script>
export default {
  props: {
    inverse: { type: Boolean, default: false },
  },
}
</script>

<style lang="postcss" scoped>
.info {
  @apply mx-10 p-4 flex flex-col-reverse items-center text-text-light bg-bg-light rounded-lg;
  @apply dark:text-text-dark dark:bg-bg-dark;
  @apply lg:flex-row lg:justify-between lg:items-stretch lg:space-x-10;
}
</style>