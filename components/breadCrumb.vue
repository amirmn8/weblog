<script setup>
const props = defineProps(["page1", "page2"]);
</script>
<template>
  <div class="flex justify-end my-10 mx-200px">
    <span class="text-my-green">{{ page2 }}</span>
    <span class="px-1">&lt;</span>
    <span>{{ page1 }}</span>
  </div>
</template>
