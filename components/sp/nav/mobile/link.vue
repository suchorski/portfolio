<template>
  <NuxtLink class="link" :to="to">
    <component :is="icon" class="icon" />
  </NuxtLink>
</template>

<script>
export default {
  props: {
    to: { type: String, required: true },
    icon: { type: Object, required: true },
  },
}
</script>

<style lang="postcss" scoped>
.link {
  @apply transition duration-300;
  @apply text-text-light flex flex-col justify-between items-center;
  @apply dark:text-text-dark;
  @apply focus:text-text-light-dark dark:focus:text-text-dark-dark;
}
.icon {
  @apply w-8 h-8;
}
</style>