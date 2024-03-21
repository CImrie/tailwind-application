<template>
  <div class="h-full w-full text-cf-gray-500">
      <div class="flex flex-col max-w-full items-center justify-center px-4 lg:px-20 overflow-x-hidden">
        <Hero/>
        <Wave class="hidden lg:block w-full lg:-mt-36 lg:w-[1690px]"/>
        <WaveBare class="lg:hidden w-full mt-72"/>
      </div>
      <div class="flex flex-col items-center">
        <TLDR class="mt-24"/>
        <AboutMe class="mt-32"/>
        <Projects class="mt-32"/>
        <Interests class="mt-40"/>
        <Footer class="mt-20 lg:mt-40"/>
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
import Wave from "assets/images/combined_all.svg";
import WaveBare from "assets/images/wave.svg";
</script>

<style></style>