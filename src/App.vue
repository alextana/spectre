<template>
  <div class="flex">
    <div class="w-[350px] h-screen">
      <router-view name="LeftSidebar" />
    </div>
    <div class="main h-screen w-full bg-gray-400">
      <router-view />
    </div>
  </div>
</template>
