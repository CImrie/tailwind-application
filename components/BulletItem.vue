<template>
  <div class="flex items-center gap-x-4">
    <Bullet class="w-3 h-3"/>
    <div class="flex-shrink-0">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Bullet from "~/assets/images/bullet.svg";
</script>