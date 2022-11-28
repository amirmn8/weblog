<script setup>
const emit = defineEmits(["searchContent"]);
let state = reactive({ searchContent: "" });
function newData() {
  emit("searchContent", state.searchContent);
}
</script>

<template>
  <div class="relative h-60px w-full lg:w-760px mb-12">
    <input
      v-model="state.searchContent"
      @input="newData"
      style="direction: rtl"
      placeholder="جست و جو کنید ..."
      class="peer searchInput"
      type="text" />
    <Icons-Searchicon class="searchInputIcon" />
  </div>
</template>
