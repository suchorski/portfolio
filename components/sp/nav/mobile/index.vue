<template>
  <nav>
    <SpNavMobileLink v-for="i in items" :key="i.link" :to="i.link" :icon="i.icon" />
  </nav>
</template>

<script>
export default {
  props: {
    items: { type: Array, required: true },
  },
}
</script>

<style lang="postcss" scoped>
nav {
  @apply fixed bottom-0 w-full h-12 px-4 flex flex-row justify-around items-center text-text-light bg-bg-light-dark bg-opacity-95;
  @apply dark:text-text-dark dark:bg-bg-dark-dark;
  @apply lg:hidden;
}
</style>