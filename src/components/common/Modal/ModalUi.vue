<script setup lang="ts">
import { defineEmits } from 'vue'

const emits = defineEmits(['close'])

const emitCloseModal = () => {
  emits('close')
}
</script>

<template>
  <!-- Vue3から追加された、teleportを使用することで指定したセレクタの直下にDOM生成することができる。 -->
  <teleport to='#app'>
    <div
      class="fixed top-0 left-0 z-10 box-border flex h-full w-screen bg-black/20 align-middle"
      @click.="emitCloseModal"
    >
      <div class="m-auto h-4/6 w-5/6 rounded-lg bg-white">
        <div class="m-3">
          <slot />
        </div>
      </div>
    </div>
  </teleport>
</template>