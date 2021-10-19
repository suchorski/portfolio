<template>
  <div class="flex flex-col justify-center items-stretch space-y-8 text-xl">
    <SpTitle>{{ $t('titles.contact') }}</SpTitle>
    <p class="mx-8" v-html="$t('contact.message')" />
    <p class="mx-8">{{ $t('contact.selling') }}</p>
    <SpTitle>Redes Sociais</SpTitle>
    <div class="flex flex-row justify-around">
      <a v-for="s in social" :key="s.name" :href="s.link" target="_blank">
        <fa :icon="['fab', s.name]" class="fa-2x" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      social: [
        { name: 'github', link: 'https://github.com/suchorski' },
        { name: 'linkedin', link: 'https://www.linkedin.com/in/thiago-suchorski-2997b370/' },
        { name: 'facebook', link: 'https://www.facebook.com/suchorski' },
        { name: 'instagram', link: 'https://www.instagram.com/thiagosuchorski/' },
        { name: 'steam', link: 'https://steamcommunity.com/id/suchorskitbs' },
      ],
    }
  },
}
</script>