<script setup>
const { data: categories } = await useFetch(
  "https://challenge.webjar.ir/post-categories"
);
</script>
<template>
  <div
    style="direction: rtl"
    class="w-screen xl:w-18vw shadow-cardshadow px-2.5 py-7 rounded-l-2xl justify-self-center xl:ml-16">
    <h3 class="mb-7 text-xl">دسته بندی ها</h3>
    <div class="flex flex-col">
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="categoryLi">
        <label for="">{{ category.name }}</label>
        <input class="w-30px h-30px" type="checkbox" name="" id="" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
