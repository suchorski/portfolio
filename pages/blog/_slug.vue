<template>
  <article class="flex flex-col space-y-4">
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
  data() {
    return {
      article: {},
    }
  },
  created() {
    this.$content(`${this.$i18n.locale}/blog`, this.$route.params.slug)
      .fetch()
      .then((res) => {
        this.article = res
      })
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
  @apply text-justify dark:text-text-dark;
}
</style>