<template>
  <div class="grid grid-cols-2 h-screen w-full header-section desktop:bg-right bg-cover mobile:bg-center mobile:text-center">
    <div class="col-span-1 p-16 flex items-center mobile:col-span-2">
      <div>
        <img src="/logo.png" alt="logo" class="w-96 mb-4">

        <div class="text-7xl font-semibold text-red-main mb-4 mobile:text-3xl">
          BANGUN ESTUSAE PROPERTINDO
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. ullamco laboris nisi ut aliquip ex ea
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-section {
  background-image: url('/header-img.png');
  @apply bg-fixed bg-no-repeat;
}
</style>
