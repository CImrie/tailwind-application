<template>
  <div class="flex w-full flex-col items-center justify-center">
    <div class="relative max-w-full flex justify-center">
      <div class="absolute">
        <FooterBg class="h-96 w-auto"/>
      </div>
    </div>
    <div class="text-center lg:text-left flex flex-col lg:flex-row items-center justify-center w-full max-w-content px-6 lg:px-0 z-10 mt-32 lg:gap-x-48 gap-y-4">
      <div class="text-3xl lg:text-5xl font-bold lg:mt-50 font-brand lg:leading-[3.5rem] lg:tracking-wider lg:max-w-[44rem]">Ready to work with someone who pushes themselves to do the best every day?</div>
      <div class="flex items-center flex-shrink-0">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="bg-red-600 text-white text-xl font-bold py-4 px-8 rounded-lg shadow hover:bg-red-700 transition-all duration-75">
          Let's do it
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FooterBg from '~/assets/images/footer_with_arrow.svg';
</script>