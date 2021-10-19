<template>
  <h1>
    <slot />
  </h1>
</template>

<style lang="postcss" scoped>
h1 {
  @apply px-3 py-2 text-3xl font-bold rounded text-text-light bg-gradient-to-r from-bg-light-light to-bg-light-dark;
  @apply dark:text-text-dark dark:from-bg-dark-light dark:to-bg-dark-dark;
}
</style>