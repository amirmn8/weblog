<template>
  <div
    class="h-6vw bg-white shadow-mine hidden xl:flex flex-row-reverse items-center justify-center">
    <ul
      class="flex justify-between items-center text-xl h-full w-full xl:mx-200px mx-8">
      <div>
        <li class="liMenu">
          <!-- دکمه -->
          <outlinebutton title="ورود" />
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
</template>
