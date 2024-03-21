<template>
  <div>
    <div class="uppercase text-gray-400 text-sm font-semibold">
      {{ title }}
    </div>
    <div class="text-base">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {toRefs} from "vue";

const props = defineProps<{
  title: string,
}>();

const {title} = toRefs(props);
</script>