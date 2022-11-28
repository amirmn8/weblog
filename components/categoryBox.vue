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
  <div style="direction: rtl" class="divCountainer3">
    <h3 class="mb-7 text-xl">دسته بندی ها</h3>
    <div class="flex flex-col">
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="categoryLi">
        <label for="">{{ category.name }}</label>
        <input
          class="checkClass"
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
