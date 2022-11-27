<template>
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true">
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
        <div
          class="relative transform overflow-hidden px-30vw py-278px max-h-screen rounded-lg bg-white text-left shadow-xl transition-all">
          <div class="bg-white">
            <h2 class="text-center text-5xl mb-20">ورود به حساب کاربری</h2>
            <inputUser class="mb-16" />
            <inputPassword class="mb-12" />
            <fillbutton class="w-full h-14" title="ورود" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
