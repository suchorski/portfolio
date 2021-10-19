<template>
  <div class="entry">
    <h2 class="title">{{ article.title }}</h2>
    <p>{{ article.description }}</p>
    <SpLink :to="article.path">{{ $t('blog.read') }}</SpLink>
  </div>
</template>

<script>
export default {
  props: {
    article: { type: Object, required: true },
  },
}
</script>

<style lang="postcss" scoped>
.entry {
  @apply p-4 flex flex-col space-y-4 rounded border-2 bg-bg-light text-text-light border-border-light;
  @apply dark:text-text-dark dark:bg-bg-dark dark:border-border-dark;
}

.title {
  @apply text-xl font-bold;
}
</style>