<template>
  <NuxtLink :to="to" exact>
    <slot />
  </NuxtLink>
</template>

<script>
export default {
  props: {
    to: { type: String, required: true },
    exact: { type: Boolean, default: false },
  },
}
</script>