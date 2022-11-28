<script setup>
const emit = defineEmits("changeUserName");
const changeUserName = (e) => {
  emit("changeUserName", e.target.value);
};
</script>
<template>
  <div class="relative border border-inputBorder rounded-2xl">
    <input
      @input="changeUserName"
      style="direction: rtl"
      placeholder="نام کاربری خود را وارد کنید"
      class="inputBtn peer"
      type="text" />
    <Icons-inputuserIcon class="inputIcon" />
    <label class="inputLable">نام کاربری</label>
  </div>
</template>
