<template>
  <div class="w-full max-w-content flex flex-col items-center lg:flex-row gap-y-12 gap-x-24 px-6 lg:px-0">
    <div class="flex flex-col gap-y-4 w-full md:w-2/3 lg:w-full">
      <Heading3>How I Work</Heading3>
      <BulletStack>
        <BulletItem>JIT Scoping that prioritises the customer experience</BulletItem>
        <BulletItem>De-risk by going after the <span class="font-bold">core problem first</span></BulletItem>
        <BulletItem>Written and <span class="font-bold">detailed communication</span> for everything</BulletItem>
        <BulletItem><a target="_blank" href="https://drive.google.com/drive/folders/1LP3csnSAOcvrhMYUUTmA1ArU_UwWztah?usp=sharing">Sketches and drawings</a> communicate a lot</BulletItem>
        <BulletItem>Deep Work</BulletItem>
        <div class="relative">
          <BulletItem>
            <div class="relative">
              An eye for design
            </div>
          </BulletItem>
          <div class="right-0 -mr-24 mt-2 absolute w-96 flex gap-x-4 items-center hidden lg:block">
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
    <div class="flex flex-col gap-y-4 w-full md:w-2/3 lg:w-full">
      <Heading3>Tech Stack</Heading3>
      <BulletStack>
        <BulletItem>Best in PHP / Laravel with Vue, <span class="font-bold border-b-2 border-gray-200">Tailwind</span> , and JavaScript/TypeScript</BulletItem>
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