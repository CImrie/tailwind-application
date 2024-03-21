<template>
  <div>
    <div class="font-bold uppercase">{{ subject }}</div>
    <div class="flex gap-x-2 h-32 mb-10" v-if="$slots.default">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {toRefs} from "vue";

const props = defineProps<{
  subject: string,
}>();

const {subject} = toRefs(props);
</script>