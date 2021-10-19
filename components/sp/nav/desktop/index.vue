<template>
  <nav>
    <div class="left">
      <SpNavDesktopLink v-for="i in items" :key="i.link" :to="i.link">{{ i.text }}</SpNavDesktopLink>
    </div>
    <div class="right">
      <SpSwitcher />
    </div>
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
  @apply hidden z-10 sticky top-0 h-12 px-4 flex-row justify-between items-center text-text-light bg-bg-light-dark;
  @apply dark:text-text-dark dark:bg-bg-dark-dark;
  @apply lg:flex;
}

.left {
  @apply flex flex-row space-x-8;
}
</style>