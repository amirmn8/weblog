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
  <div style="direction: rtl" class="cardContainer">
    <div class="2xl:ml-16">
      <img class="cardImage" :src="image" />
    </div>
    <div class="flex flex-col flex-start px-6 2xl:px-0">
      <h2 class="mt-8 text-lg text-miniText font-medium">{{ title }}</h2>
      <p class="splitText">
        {{ body.split(" ").slice(0, 25).join(" ") }}
      </p>
      <div style="direction: rtl" class="postDetail">
        <div class="postDetailLi">
          <Icons-calendericon />
          <p class="text-sm font-light">{{ createDate }}</p>
        </div>
        <div class="postDetailLi">
          <Icons-commenticon />
          <p class="text-sm font-light">{{ coments }} نظر</p>
        </div>
        <div class="postDetailLi">
          <Icons-usericon />
          <p class="text-sm font-light">{{ creator }}</p>
        </div>
        <div class="mr-auto ml-6">
          <fillbutton title="بیشتر" />
        </div>
      </div>
    </div>
  </div>
</template>
