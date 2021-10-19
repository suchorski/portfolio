<template>
  <div class="flex flex-col items-stretch space-y-8">
    <SpTitle>{{ $t('titles.works') }}</SpTitle>
    <SpCard v-for="w in works" :key="w.mockup" :title="w.title" :subtitle="w.subtitle" :text="w.text" :asset="w.mockup">
      <div class="links">
        <a v-for="(l, i) in w.links" :key="l.href" :href="l.href" :class="{ 'lg:pl-4': i !== 0 }" target="_blank">{{ l.text }}</a>
      </div>
    </SpCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      works: [...this.$t('works')].map((w) => {
        if (!w.mockup.startsWith('/')) {
          w.mockup = require(`~/assets/images/mockups/${w.mockup}.jpg`)
        }
        return w
      }),
    }
  },
}
</script>

<style lang="postcss" scoped>
.links {
  @apply flex flex-col space-y-1;
  @apply lg:flex-row lg:space-y-0 lg:space-x-4 lg:divide-x-2 lg:divide-dotted lg:divide-border-light-light lg:dark:divide-border-dark-light;
}
</style>