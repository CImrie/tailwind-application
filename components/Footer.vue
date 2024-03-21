<template>
  <div class="flex flex-col justify-center">
    <div class="relative">
      <div class="absolute -ml-64">
        <FooterBg class="w-[1690px]"/>
      </div>
    </div>
    <div class="w-content z-10 mt-36 flex gap-x-48">
      <div class="text-5xl font-bold mt-50 font-brand leading-[3.5rem] tracking-wider max-w-[50rem]">Ready to work with someone who pushes themselves to do the best every day?</div>
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