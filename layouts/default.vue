<template>
  <div class="flex flex-col items-stretch">
    <header>
      <SpNavDesktop :items="menu.items" />
    </header>
    <main class="m-2 pb-12 lg:pb-0">
      <Nuxt />
    </main>
    <footer>
      <SpNavMobile :items="menu.items" />
    </footer>
  </div>
</template>

<script>
import { HomeIcon, ChipIcon, MailIcon, BookOpenIcon } from '@vue-hero-icons/outline'

export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    }
  },
  data() {
    return {
      menu: {
        items: [],
      },
    }
  },
  created() {
    this.updateItems()
  },
  methods: {
    updateItems() {
      this.menu.items = [
        { text: this.$t('titles.home'), link: this.localePath('/'), icon: HomeIcon },
        { text: this.$t('titles.works'), link: this.localePath('/works'), icon: ChipIcon },
        { text: this.$t('titles.contact'), link: this.localePath('/contact'), icon: MailIcon },
        { text: this.$t('titles.blog'), link: this.localePath('/blog'), icon: BookOpenIcon },
      ]
    },
  },
  watch: {
    $route() {
      this.updateItems()
    },
  },
}
</script>