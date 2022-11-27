<script setup>
const props = defineProps(["title"]);
</script>
<template>
  <button class="outlineBtn">
    <p class="px-3vw py-.5vw text-center">{{ title }}</p>
  </button>
</template>
