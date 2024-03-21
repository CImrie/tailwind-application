<template>
  <div class="h-full w-full text-cf-gray-500">
    <div class="h-full">
      <div class="flex flex-col h-full items-center justify-center pt-48 px-20 -ml-8">
        <Hero/>
      </div>
      <div class="flex flex-col items-center">
        <TLDR class="mt-80"/>
        <AboutMe class="mt-32"/>
        <Projects class="mt-40"/>
        <Interests class="mt-40"/>
        <Footer class="mt-40"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Hero from "~/components/Hero.vue";
import TLDR from "~/components/TLDR.vue";
import AboutMe from "~/components/AboutMe.vue";
import Projects from "~/components/Projects.vue";
import Interests from "~/components/Interests.vue";
import Footer from "~/components/Footer.vue";
</script>

<style></style>