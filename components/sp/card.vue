<template>
  <div class="card">
    <div class="left">
      <img class="image" :src="asset" />
    </div>
    <div class="right">
      <div class="title">
        <div class="name">{{ title }}</div>
        <div class="detail">{{ subtitle }}</div>
      </div>
      <div class="text">{{ text }}</div>
      <div class="links">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    text: { type: String, required: true },
    asset: { type: String, required: true },
  },
}
</script>

<style lang="postcss" scoped>
.card {
  @apply overflow-hidden flex flex-col justify-between items-stretch text-text-light bg-bg-light rounded border-2 border-border-light shadow-lg;
  @apply lg:flex-row;
  @apply dark:text-text-dark dark:bg-bg-dark dark:border-border-dark;
}

.right {
  @apply px-4 pt-2 pb-3 flex-1 flex flex-col justify-between space-y-4;
}

.image {
  @apply w-full h-auto border-b-2 border-r-0 border-border-light;
  @apply lg:w-auto lg:h-40 lg:border-b-0 lg:border-r-2 lg:rounded-none;
  @apply dark:border-border-dark;
}

.title {
  @apply flex flex-col;
}

.name {
  @apply text-lg font-bold;
}

.detail {
  @apply text-sm text-text-light-light;
  @apply dark:text-text-dark-light;
}

.text {
  @apply text-justify;
}

.links {
  @apply text-sm;
}
</style>