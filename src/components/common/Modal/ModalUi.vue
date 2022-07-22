<template>
  <!-- Vue3から追加された、teleportを使用することで指定したセレクタの直下にDOM生成することができる。 -->
  <teleport to='#app'>
    <div class="fixed top-0 left-0 z-10 box-border flex h-full w-screen bg-black/20 align-middle">
      <div class="m-auto h-3/6 w-3/6 rounded-lg bg-white">
        <div class="my-3 ml-3 text-2xl">
          <slot />
        </div>
      </div>
    </div>
  </teleport>
</template>