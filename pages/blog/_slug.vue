<template>
  <article class="flex flex-col items-strech space-y-4">
    <SpTitle>
      {{ article.title }}
      <p class="text-sm font-thin">
        <span>{{ $t('blog.at.created', createdAt) }}</span>
        <span v-if="article.updatedAt !== article.createdAt">{{ $t('blog.at.updated', updatedAt) }}</span>
      </p>
    </SpTitle>
    <NuxtContent class="prose" :document="article" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, i18n, params }) {
    const article = await $content(`${i18n.locale}/blog`, params.slug).fetch()
    return {
      article,
    }
  },
  methods: {
    formatDate(date) {
      const { $moment } = this
      return {
        cardinalDay: $moment(date).format('DD'),
        ordinalDay: $moment(date).format('Do'),
        month: $moment(date).format('MMMM'),
        year: $moment(date).format('YYYY'),
      }
    },
  },
  computed: {
    createdAt() {
      return this.formatDate(this.article.createdAt)
    },
    updatedAt() {
      return this.formatDate(this.article.updatedAt)
    },
  },
}
</script>

<style lang="postcss">
.prose {
  @apply mx-auto text-justify dark:text-text-dark;
}
</style>