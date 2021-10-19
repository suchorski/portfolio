<template>
  <div class="relative">
    <div class="w-8 h-8 flex flex-row justify-center items-center">
      <button type="button" class="focus:outline-none" id="user-menu-button" aria-expanded="false" aria-haspopup="true" @click="change">
        <GlobeIcon class="text-text-light dark:text-text-dark" />
      </button>
    </div>
    <transition name="page">
      <div v-if="showing" v-on-clickaway="close" class="origin-top-right absolute right-0 mt-4 w-48 rounded-md shadow-lg py-1 bg-bg-light ring-1 ring-border-light ring-opacity-30 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
        <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">{{ locale.name }}</NuxtLink>
      </div>
    </transition>
  </div>
</template>

<script>
import { GlobeIcon } from '@vue-hero-icons/outline'

export default {
  components: { GlobeIcon },
  data() {
    return {
      showing: false,
    }
  },
  created() {
    if (process.client) {
      window.addEventListener('click', (e) => {
        if (!this.$el.contains(e.target)) {
          this.showing = false
        }
      })
    }
  },
  methods: {
    change() {
      this.showing = !this.showing
    },
    close() {
      this.showing = false
    },
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  watch: {
    $route() {
      this.showing = false
    },
  },
}
</script>