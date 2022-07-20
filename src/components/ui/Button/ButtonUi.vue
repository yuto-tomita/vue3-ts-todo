<script setup lang="ts">
import { defineEmits } from 'vue'

// emitしたいイベントをstring[]形式で記述する
const emits = defineEmits(['click'])

const onClick = () => {
  emits('click')
}
</script>

<template>
  <button
    type="button"
    class="py-1 px-5 hover:text-white hover:bg-black rounded border border-black border-solid"
    @click="onClick"
  >
    <slot />
  </button>
</template>