<script setup>
const emit = defineEmits("changeCategory");
const state = reactive({ selectedCategory: [] });
const { data: categories } = await useFetch(
  "https://challenge.webjar.ir/post-categories"
);
watch(
  () => state.selectedCategory,
  (selectedCategory) => {
    emit("changeCategory", selectedCategory);
  }
);
</script>
<template>
  <div
    style="direction: rtl"
    class="w-screen xl:w-18vw shadow-cardshadow px-2.5 py-7 rounded-l-2xl justify-self-center">
    <h3 class="mb-7 text-xl">دسته بندی ها</h3>
    <div class="flex flex-col">
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="categoryLi">
        <label for="">{{ category.name }}</label>
        <input
          class="w-30px h-30px focus:ring-0 focus:ring-offset-0 border-category rounded border-2 focus:text-my-green checked:text-my-green"
          type="checkbox"
          :value="category._id"
          v-model="state.selectedCategory"
          name=""
          id="" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
