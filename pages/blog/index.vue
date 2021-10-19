<template>
  <div class="flex flex-col justify-center items-stretch space-y-8">
    <SpTitle key="title">{{ $t('titles.blog') }}</SpTitle>
    <transition name="page" mode="out-in">
      <div v-if="!loaded" key="loading">
        <p>{{ $t('blog.loading') }}</p>
      </div>
      <div v-else ke="loaded">
        <transition name="page" mode="out-in">
          <p v-if="articles.length === 0">{{ $t('blog.none') }}</p>
          <div v-else class="flex flex-col space-y-4">
            <SpBlogEntry v-for="a in articles" :key="a.title" :article="a" />
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaded: false,
      articles: [],
    }
  },
  async created() {
    this.$content(`${this.$i18n.locale}/blog`)
      .where({ language: this.$i18n.locale })
      .only(['slug', 'title', 'description', 'path', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()
      .then((res) => {
        this.loaded = true
        this.articles = res
      })
  },
}
</script>