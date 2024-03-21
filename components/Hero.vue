<template>
      <div class="max-w-full mt-48">
        <WallOfText :rows="15" :columns="20" :me-position="11">
          <template v-slot:row_1>
            <div class="relative">
              <div class="leading-[64px] lg:leading-[100px] lg:mt-28 lg:ml-36 uppercase text-7xl lg:text-9xl font-brand font-bold text-cf-gray-500 z-10">Hire</div>
              <HireMeArrow class="absolute z-10 left-40 -top-2 lg:top-4 lg:left-[400px] fill-current text-red-500 w-[186px] h-[490px]"/>
            </div>
          </template>
        </WallOfText>
        <div class="relative left-[335px] lg:left-[575px]">
          <svg class="absolute -mt-20 -ml-32 fill-current text-white">
            <circle r="50px" cx="50%" cy="50%"/>
          </svg>
          <div class="text-red-500 font-bold text-4xl absolute -mt-10">
            me
          </div>
        </div>
        <div class="lg:block absolute ml-16 lg:ml-[695px] -mt-24 lg:-mt-[260px]">
          <div class="flex flex-col items-center">
            <img alt="Connor Forsyth with his son on his shoulders" src="~/assets/images/connor.png" class="h-60 lg:h-[336px]"/>
            <div class="flex flex-col items-center">
              <h2 class="text-2xl font-brand font-bold uppercase text-cf-gray-500">Connor Forsyth</h2>
              <p class="text-sm font-medium text-gray-400 uppercase -mt-1">Wearing a small child</p>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup lang="ts">
import {toRefs} from "vue";
import WallOfText from "~/components/WallOfText.vue";
import HireMeArrow from "~/assets/images/hire_me_arrow.svg";

const props = defineProps<{
  modelValue: any,
}>();

const {modelValue} = toRefs(props);
</script>