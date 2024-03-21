<template>
  <div class="w-full md:w-2/3 lg:w-full max-w-content px-6 lg:px-0">
    <Heading3>Interests</Heading3>
    <div class="mt-8 flex flex-col gap-y-12">
      <Interest subject="DIY">
        <img class="max-w-32 lg:max-w-full aspect-auto h-32" src="~/assets/images/diy/1.jpg" alt="Digging up the floor">
        <img class="max-w-32 lg:max-w-full aspect-auto h-32" src="~/assets/images/diy/2.jpg" alt="Finished digging up the floor and all loose plaster chipped off">
        <img class="max-w-32 lg:max-w-full aspect-auto h-32" src="~/assets/images/diy/3.jpg" alt="Filling in the shower drain trench">
        <img class="max-w-32 lg:max-w-full aspect-auto h-32" src="~/assets/images/diy/4.jpg" alt="Tiled floor after self-leveling with screed">
        <img class="max-w-32 lg:max-w-full aspect-auto h-32" src="~/assets/images/diy/5.jpg" alt="Fitted bathroom with floor grouted and sanitaryware in place">
        <img class="max-w-32 lg:max-w-full aspect-auto h-32" src="~/assets/images/diy/6.jpg" alt="New shower and bath fitted with new metro-style tiled wall.">
      </Interest>
      <Interest subject="Reading">
        <img class="max-w-32 lg:max-w-full aspect-auto h-32" src="~/assets/images/books/obviously-awesome.png" alt="Obviously Awesome - April Dunford">
        <img class="max-w-32 lg:max-w-full aspect-auto h-32" src="~/assets/images/books/on-writing-well.png" alt="On Writing Well - William Zinsser">
        <img class="max-w-32 lg:max-w-full aspect-auto h-32" src="~/assets/images/books/start-small-stay-small.png" alt="Start Small, Stay Small - Rob Walling">
        <img class="max-w-32 lg:max-w-full aspect-auto h-32" src="~/assets/images/books/the-mom-test.png" alt="The Mom Test - Rob Fitzpatrick">
        <img class="max-w-32 lg:max-w-full aspect-auto h-32" src="~/assets/images/books/atomic-habits.png" alt="Atomic Habits - James Clear">
        <img class="max-w-32 lg:max-w-full aspect-auto h-32" src="~/assets/images/books/crazy-at-work.png" alt="It Doesn't Have to Be Crazy at Work - Jason Fried & DHH">
      </Interest>
      <div>
        <Interest subject="Running"></Interest>
        <Interest subject="Gym"></Interest>
        <Interest subject="Favourite TV Shows: Battlestar Galactica 2004, Breaking Bad"></Interest>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Heading3 from "~/components/Heading3.vue";
import Interest from "~/components/Interest.vue";
</script>