<template>
  <div class="flex flex-col justify-center items-stretch space-y-8">
    <SpTitle key="title">{{ $t('titles.blog') }}</SpTitle>
    <transition name="page" mode="out-in">
      <p v-if="articles.length === 0">{{ $t('blog.none') }}</p>
      <div v-else class="flex flex-col space-y-4">
        <SpBlogEntry v-for="a in articles" :key="a.title" :article="a" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, i18n }) {
    const articles = await $content(`${i18n.locale}/blog`).where({ language: i18n.locale }).only(['slug', 'title', 'description', 'path', 'createdAt']).sortBy('createdAt', 'desc').fetch()
    return {
      articles,
    }
  },
}
</script>