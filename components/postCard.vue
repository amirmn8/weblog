<script setup>
const props = defineProps([
  "title",
  "body",
  "createDate",
  "coments",
  "creator",
  "image",
]);
</script>
<template>
  <div
    style="direction: rtl"
    class="flex xl:flex-row flex-col shadow-cardshadow rounded-xl mb-100px xl:w-56vw">
    <div class="xl:ml-16">
      <img class="object-cover w-full h-full rounded-r-xl" :src="image" />
    </div>
    <div class="flex flex-col flex-start px-6 2xl:px-0">
      <h2 class="mt-8 text-lg">{{ title }}</h2>
      <p class="mt-38px md:w-4/6 mb-10 text-miniText">
        {{ body.split(" ").slice(0, 25).join(" ") }}
      </p>
      <div
        style="direction: rtl"
        class="flex md:flex-row justify-start items-start md:justify-center md:items-center flex-col md:gap-x-14 sm:gap-x-4 gap-6 mb-6">
        <div class="flex justify-center items-center gap-1">
          <Icons-calendericon />
          <p class="text-sm">{{ createDate }}</p>
        </div>
        <div class="flex justify-center items-center gap-1">
          <Icons-commenticon />
          <p class="text-sm">{{ coments }}</p>
        </div>
        <div class="flex justify-center items-center gap-1">
          <Icons-usericon />
          <p class="text-sm">{{ creator }}</p>
        </div>
        <div class="mr-auto ml-6">
          <fillbutton title="بیشتر" />
        </div>
      </div>
    </div>
  </div>
</template>
