<script setup>
const emit = defineEmits("changePassword");
const changePassword = (e) => {
  emit("changePassword", e.target.value);
};
</script>
<template>
  <div class="relative border border-inputBorder rounded-2xl">
    <input
      @input="changePassword"
      style="direction: rtl"
      placeholder=" رمز عبور خود را وارد کنید"
      class="inputBtn peer"
      type="password" />
    <Icons-inputPass class="inputIcon" />
    <label class="inputLable">رمز عبور </label>
  </div>
</template>
