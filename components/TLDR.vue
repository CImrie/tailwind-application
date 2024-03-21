<template>
  <div class="flex flex-col items-center">
    <div class="flex justify-between w-content">
      <div>
        <div class="font-brand font-bold">
          <div class="text-5xl text-red-600">the</div>
          <div class="text-7xl">TL;DR</div>
          <div class="mt-24">
            <h3 class="text-red-600 text-5xl">Full Stack Engineer</h3>
            <div class="text-red-600 text-xl">9 YOE</div>
            <Callout class="ml-8">
              <template v-slot:left>
                <CalloutArrow class="w-6 h-auto"/>
              </template>
              There's a lot packed in here.
            </Callout>
          </div>
        </div>
        <BulletStack class="font-normal mt-20">
          <BulletItem>I like <span class="font-bold">fast</span></BulletItem>
          <BulletItem>I like <span class="font-bold">good</span></BulletItem>
          <BulletItem>I dive deep into <span class="font-bold">everything</span></BulletItem>
          <BulletItem>I work comfortably in <span class="font-bold">uncharted waters</span> every day</BulletItem>
          <BulletItem>I have led and delivered <span class="font-bold">complex projects</span> in every role</BulletItem>
          <BulletItem>Currently Principal Full Stack Engineer / Architect @ <a href="https://datatecnics.com" class="border-b hover:border-b-2 transition-all ease-in-out duration-75 border-red-600 font-bold">Datatecnics</a></BulletItem>
        </BulletStack>
      </div>
      <div class="mt-20 font-semibold">
        <div class="flex justify-center items-center polygon-cloud w-[599px] h-[372px]">
          <div>
            <div class="text-3xl text-red-800 opacity-75 -mt-6 mb-6">Product</div>
            <div class="absolute -mt-32 -ml-32 grid grid-cols-2 grid-rows-3 grid-flow-col gap-x-20 gap-y-12 text-gray-500 text-xl">
              <div class="ml-4 mt-4">Frontend</div>
              <div class="mr-4">Backend</div>
              <div class="ml-4">Design</div>
              <div class="">Infrastructure</div>
              <div class="ml-16 -mt-4">Business</div>
              <div class="-mt-8">Strategy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {toRefs} from "vue";
import CalloutArrow from "~/assets/images/callout_arrow.svg";
import BulletItem from "~/components/BulletItem.vue";
import Callout from "~/components/Callout.vue";

const props = defineProps<{
}>();

const {} = toRefs(props);
</script>

<style>
  .polygon-cloud {
    width: 599px;
    background-image: url('~/assets/images/polygon_cloud.svg');
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>