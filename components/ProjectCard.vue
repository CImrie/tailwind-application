<template>
  <div class="w-full max-w-lg border border-gray-300 rounded-md px-8 py-8">
    <h4 class="font-bold">{{ name }}</h4>
    <p>{{ description }}</p>
    <slot/>
  </div>
</template>

<script setup lang="ts">
import {toRefs} from "vue";
import ProjectCardSection from "~/components/ProjectCardSection.vue";
import ProjectCardSectionStack from "~/components/ProjectCardSectionStack.vue";

const props = defineProps<{
  name: string,
  description: string,
}>();

const {name, description} = toRefs(props);
</script>