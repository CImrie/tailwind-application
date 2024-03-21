<template>
  <div class="flex lg:items-center gap-x-4">
    <Bullet class="w-3 h-3 flex-shrink-0 mt-2.5 lg:mt-0"/>
    <div class="">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Bullet from "~/assets/images/bullet.svg";
</script>