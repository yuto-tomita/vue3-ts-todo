<script setup lang="ts">
import { defineEmits } from 'vue'
import './index.css'

interface ButtonUiProps {
  // 'primary' | 'danger'と記載することで'primary'か'danger'という値しか渡せないようになる
  variant?: 'primary' | 'danger'
}

withDefaults(defineProps<ButtonUiProps>(), {
  variant: 'primary'
})

// emitしたいイベントをstring[]形式で記述する
const emits = defineEmits(['click'])

const onClick = () => {
  emits('click')
}
</script>

<template>
  <button
    type="button"
    :class="`${variant} rounded border border-solid py-1 px-5`"
    @click="onClick"
  >
    <slot />
  </button>
</template>