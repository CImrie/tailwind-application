<template>
  <div>
    <div class="font-bold uppercase">{{ subject }}</div>
    <div class="flex flex-wrap gap-x-2 gap-y-2" v-if="$slots.default">
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