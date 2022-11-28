<script setup>
const emit = defineEmits(["searchContent"]);
let state = reactive({ searchContent: "" });
function newData() {
  emit("searchContent", state.searchContent);
}
</script>

<template>
  <div class="relative h-60px w-screen xl:w-760px mb-12 mx-auto">
    <input
      v-model="state.searchContent"
      @input="newData"
      style="direction: rtl"
      placeholder="جست و جو کنید ..."
      class="h-60px xl:w-760px w-screen shadow-search rounded-2xl pr-12"
      type="search" />
    <Icons-Searchicon />
  </div>
</template>
