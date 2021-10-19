<template>
  <NuxtLink class="group link" :to="to">
    <slot />
    <div class="neon">&nbsp;</div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    to: { type: String, required: true },
  },
}
</script>

<style lang="postcss" scoped>
.link {
  @apply transition duration-300;
  @apply relative pb-1 text-text-light;
  @apply dark:text-text-dark;
  @apply hover:text-text-light-dark dark:hover:text-text-dark-dark;
}
.neon {
  @apply transition duration-300;
  @apply absolute h-1 left-px -bottom-px w-full rounded-full bg-gradient-radial from-green-700 to-green-500 opacity-0;
  @apply group-hover:opacity-100 group-hover:from-green-500 group-hover:to-green-700;
}
</style>