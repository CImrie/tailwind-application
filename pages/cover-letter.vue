<template>
  <div class="h-full w-full flex justify-center md:mt-24">
    <div class="prose lg:prose-xl container">
      <ContentDoc/>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { onMounted } from 'vue';

  onMounted(() => {
    import('~/assets/js/global.js');
  })
</script>

<style>
  .prose > * {
    @apply py-8 px-4;
  }
</style>