<template>
  <div class="grid grid-cols-2 h-screen w-full header-section">
    <!-- <div class="bg-overlay" /> -->
    <div class="col-span-1 p-16 flex items-center">
      <div>
        <img src="/logo.png" alt="logo" class="w-96">

        <div class="text-7xl font-semibold text-red-main">
          BANGUN ESTUSAE PROPERTINDO
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. ullamco laboris nisi ut aliquip ex ea
        </div>
      </div>
    </div>
    <!-- <div class="col-span-1 flex items-center">
      <img src="/header-img.png" alt="header" class="object-cover">
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.header-section {
  background: url('/header-img.png');
  @apply bg-fixed bg-cover bg-no-repeat bg-right relative;
}
.bg-overlay {
  background-color: #f5f7fa;
  opacity: 0.97;
  @apply absolute left-0 top-0 h-full w-full;
}
</style>
