<template>
  <KinesisContainer class="kc">
    <KinesisElement class="ke st circle" type="depth" :strength="20" />
    <KinesisElement class="ke nd" type="depth" :strength="20" />
    <KinesisElement class="ke rd" type="depth" :strength="20" />
    <KinesisElement class="ke th" type="depth" :strength="20" />
  </KinesisContainer>
</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

export default {
  components: { KinesisContainer, KinesisElement },
}
</script>

<style lang="postcss" scoped>
.kc {
  @apply -z-10 fixed top-0 left-0 w-screen h-screen opacity-20;
}

.ke {
  @apply absolute bg-transparent;
}

.ke.circle {
  @apply rounded-full;
}

.ke.st {
  @apply top-8 left-8 w-32 h-32 border-8 border-gray-600;
}

.ke.nd {
  @apply top-4 right-4 w-20 h-20 border-4 border-gray-900;
}

.ke.rd {
  @apply bottom-4 left-4;
}

.ke.th {
  @apply bottom-4 right-4;
}
</style>