<script setup>
const state = reactive({ accessToken: "", username: "", password: "" });
const props = defineProps(["displayMenu", "displayLogin"]);
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
      console.log(logInResponse.error.value.status);
    } else if (logInResponse.error.value.status === 400) {
      // یکی از فرم ها خالی است
      console.log(logInResponse.error.value.status);
    }
  } else {
    state.accessToken = logInResponse.data.value.token.accessToken;
    window.localStorage.setItem("accessToken", state.accessToken);
  }
};
const doLogOut = () => {
  localStorage.removeItem("accessToken");
  state.accessToken = "";
};
</script>
<template>
  <div
    class="h-6vw bg-white shadow-mine hidden xl:flex flex-row-reverse items-center justify-center">
    <ul
      class="flex justify-between items-center text-xl h-full w-full xl:mx-200px mx-8">
      <div>
        <li class="liMenu">
          <exitbutton v-if="state.accessToken" @click="doLogOut" title="خروج" />
          <!-- دکمه -->
          <outlinebutton
            v-else
            @click="displayLogin = 'h-screen'"
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
  <div class="flex xl:hidden items-center justify-between p-4">
    <Icons-menuIcon
      @click="displayMenu = 'flex'"
      class="w-12 h-12 stroke-my-green" />
    <div
      style="direction: rtl"
      class="w-screen h-max z-20 fixed top-0 right-0 bg-white flex-col items-center"
      :class="displayMenu">
      <Icons-iconlogo />
      <ul class="flex flex-col gap-4 mx-4 my-4 text-xl">
        <li class="py-4 text-center">خانه</li>
        <li class="py-4 text-center">محصولات</li>
        <li class="py-4 text-center">خدمات</li>
        <li class="activeMenu py-4 text-center">وبلاگ</li>
        <li class="py-4 text-center">
          <!-- دکمه -->
          <exitbutton v-if="state.accessToken" title="خروج" />

          <outlinebutton
            v-if="!state.accessToken"
            @click="(displayLogin = 'h-screen'), (displayMenu = 'hidden')"
            title="ورود" />
          <!-- دکمه -->
        </li>
      </ul>
      <Icons-closeIcon
        @click="displayMenu = 'hidden'"
        class="fixed top-3 right-3 stroke-my-green" />
    </div>
  </div>
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    :class="displayLogin"
    aria-modal="true">
    <div
      :class="displayLogin"
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div :class="displayLogin" class="fixed inset-0 z-10 overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
        <div
          class="relative transform overflow-hidden px-10 sm:px-30vw py-278px max-h-screen rounded-lg bg-white text-left shadow-xl transition-all">
          <div class="bg-white">
            <h2 class="text-center text-5xl mb-20">ورود به حساب کاربری</h2>
            <inputUser
              @changeUserName="(username) => (state.username = username)"
              class="mb-16" />
            <inputPassword
              @changePassword="(password) => (state.password = password)"
              class="mb-12" />
            <fillbutton @click="doLogIn" class="w-full h-14" title="ورود" />
          </div>
          <Icons-closeIcon
            @click="displayLogin = 'h-0'"
            class="fixed top-8 left-1/2 z-20 stroke-my-green" />
        </div>
      </div>
    </div>
  </div>
</template>
