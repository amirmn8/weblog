<script setup>
const state = reactive({
  accessToken: "",
  username: "",
  password: "",
  errorMsg: "",
  displayLogin: "h-0",
});
const props = defineProps(["displayMenu"]);
try {
  state.accessToken = localStorage.getItem("accessToken")
    ? localStorage.getItem("accessToken")
    : "";
  console.log(state.accessToken);
} catch (error) {
  console.log(error);
}
const doLogIn = async () => {
  const logInResponse = await useFetch(
    "https://challenge.webjar.ir/auth/login",
    {
      method: "POST",
      body: {
        userName: state.username,
        password: state.password,
      },
    }
  );
  if (!logInResponse.data.value) {
    if (logInResponse.error.value.status === 401) {
      // رمز یا نام کاربری اشتباه است
      state.errorMsg = "نام کاربری یا رمز عبور اشتباه است";
    } else if (logInResponse.error.value.status === 400) {
      // یکی از فرم ها خالی است
      state.errorMsg = "یکی از فرم ها خالی است";
    }
  } else {
    state.accessToken = logInResponse.data.value.token.accessToken;
    window.localStorage.setItem("accessToken", state.accessToken);
  }
};
const doLogOut = () => {
  localStorage.removeItem("accessToken");
  state.accessToken = "";
  state.displayLogin = "h-0";
};
</script>
<template>
  <div class="divCountainer4">
    <ul class="divCountainer5">
      <div>
        <li class="liMenu">
          <exitbutton v-if="state.accessToken" @click="doLogOut" title="خروج" />
          <!-- دکمه -->
          <outlinebutton
            v-if="!state.accessToken"
            @click="state.displayLogin = 'h-screen'"
            title="ورود" />
          <!-- دکمه -->
        </li>
      </div>
      <div class="flex items-center gap-x-5vw h-full">
        <li class="liMenu h-full items-center flex px-1vw activeMenu">
          <p>وبلاگ</p>
        </li>
        <li class="liMenu"><p>خدمات</p></li>
        <li class="liMenu"><p>محصولات</p></li>
        <li class="liMenu"><p>خانه</p></li>
        <li>
          <Icons-iconlogo />
        </li>
      </div>
    </ul>
  </div>
  <div class="flex lg:hidden items-center justify-between p-4">
    <Icons-menuIcon
      @click="displayMenu = 'flex'"
      class="w-12 h-12 stroke-my-green" />
    <div
      style="direction: rtl"
      class="w-screen h-max z-20 fixed top-0 left-0 bg-white flex-col items-center"
      :class="displayMenu">
      <Icons-iconlogo />
      <ul class="flex flex-col gap-4 mx-4 my-4 text-xl">
        <li class="py-4 text-center">خانه</li>
        <li class="py-4 text-center">محصولات</li>
        <li class="py-4 text-center">خدمات</li>
        <li class="activeMenu py-4 text-center">وبلاگ</li>
        <li class="py-4 text-center">
          <!-- دکمه -->
          <exitbutton v-if="state.accessToken" @click="doLogOut" title="خروج" />

          <outlinebutton
            v-if="!state.accessToken"
            @click="(state.displayLogin = 'h-screen'), (displayMenu = 'hidden')"
            title="ورود" />
          <!-- دکمه -->
        </li>
      </ul>
      <Icons-closeIcon
        @click="displayMenu = 'hidden'"
        class="fixed top-3 right-5 stroke-my-green" />
    </div>
  </div>
  <div
    v-if="!state.accessToken"
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    :class="state.displayLogin"
    aria-modal="true">
    <div
      :class="state.displayLogin"
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div :class="state.displayLogin" class="fixed inset-0 z-10 overflow-y-auto">
      <div class="modalBig">
        <div class="modalCountainer">
          <div class="bg-white">
            <h2 class="text-center text-5xl mb-20">ورود به حساب کاربری</h2>
            <inputUser
              @changeUserName="(username) => (state.username = username)"
              class="mb-16" />
            <inputPassword
              @changePassword="(password) => (state.password = password)"
              class="mb-12" />
            <fillbutton @click="doLogIn" class="w-full h-14" title="ورود" />
            <p class="text-center mt-6 text-my-red">{{ state.errorMsg }}</p>
          </div>
          <Icons-closeIcon
            @click="state.displayLogin = 'h-0'"
            class="absolute top-8 left-8 z-20 stroke-my-green" />
        </div>
      </div>
    </div>
  </div>
</template>
