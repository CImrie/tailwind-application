<template>
  <div class="h-full">
    <div class="flex h-full items-center justify-center py-48 px-20 -ml-8">
      <div class="relative">
        <WallOfText class="h-full -ml-24" :rows="15" :columns="20" :me-position="11">
          <template v-slot:row_1>
            <div class="relative">
              <div class="leading-[100px] mt-28 ml-36 uppercase text-9xl font-brand font-bold text-gray-800 z-10">Hire</div>
              <HireMeArrow class="absolute z-10 -mt-20 ml-32 left-[310px] fill-current text-red-500 w-[186px] h-[490px]"/>
            </div>
          </template>
        </WallOfText>
        <div class="absolute ml-[695px] -mt-[260px]">
          <img alt="Connor Forsyth with his son on his shoulders" src="~/assets/images/connor.png" class="h-[336px]"/>
          <div class="flex flex-col items-center">
            <h2 class="text-2xl font-brand font-bold uppercase">Connor Forsyth</h2>
            <p class="font-light text-gray-500 uppercase">Wearing a small child</p>
          </div>
        </div>
        <div class="absolute">
          <Wave class="-ml-72 -mt-40 w-[1690px]"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {toRefs} from "vue";
import WallOfText from "~/components/WallOfText.vue";
import HireMeArrow from "~/assets/images/hire_me_arrow.svg";
import Wave from "~/assets/images/combined_all.svg";

const props = defineProps<{
  modelValue: any,
}>();

const {modelValue} = toRefs(props);
</script>