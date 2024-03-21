<template>
  <div class="w-content flex gap-x-24">
    <div class="flex flex-col gap-y-4">
      <Heading3>How I Work</Heading3>
      <BulletStack>
        <BulletItem>JIT Scoping that prioritises the customer experience</BulletItem>
        <BulletItem>De-risk by going after the core problem first</BulletItem>
        <BulletItem>Written and detailed communication for everything</BulletItem>
        <BulletItem>Sketches and drawings communicate A LOT</BulletItem>
        <BulletItem>Deep Work</BulletItem>
        <div class="relative">
          <BulletItem>
            <div class="relative">
              An eye for Design
            </div>
          </BulletItem>
          <div class="right-0 -mr-24 mt-2 absolute w-96 flex gap-x-4 items-center">
            <Callout class="ml-16">
              <template v-slot:left>
                <CalloutArrow class="w-6 h-auto"/>
              </template>
              See, look at that visual balance!
              <template v-slot:right>
                <CalloutArrowRight class="w-6 h-auto"/>
              </template>
            </Callout>
          </div>
        </div>
      </BulletStack>
    </div>
    <div class="flex flex-col gap-y-4">
      <Heading3>Tech Stack</Heading3>
      <BulletStack>
        <BulletItem>Best in PHP / Laravel with Vue, <span class="font-bold border-b-2 border-red-600">Tailwind</span> , and JavaScript/TypeScript</BulletItem>
        <BulletItem>Comfortable with React and Svelte</BulletItem>
        <BulletItem>Interested in languages like Rust</BulletItem>
        <BulletItem>Polyglot Developer - Love tinkering with new languages</BulletItem>
        <BulletItem>OOP & Functional Programming</BulletItem>
        <BulletItem>I write tests</BulletItem>
      </BulletStack>
    </div>
  </div>
</template>

<script setup lang="ts">
import Heading3 from "~/components/Heading3.vue";
import BulletStack from "~/components/BulletStack.vue";
import Callout from "~/components/Callout.vue";
import CalloutArrow from "~/assets/images/callout_arrow.svg";
import CalloutArrowRight from "~/assets/images/callout_arrow_right.svg";
</script>