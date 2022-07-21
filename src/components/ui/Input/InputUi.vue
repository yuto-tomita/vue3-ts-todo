<script setup lang="ts">
import { computed, defineProps } from 'vue'

interface InputProps {
	modelValue: string
}
const props = defineProps<InputProps>()
const emits = defineEmits(['update:modelValue'])

// propsで受け取った値を直接変更してはいけないルールがあるため、propsの値を初期値にして、変更を検知したらemitする
const inputState = computed({
  get: () => props.modelValue,
  set: () => emits('update:modelValue')
})
</script>

<template>
  <input
    v-model="inputState"
    type="text"
    class="h-7 w-full border border-solid border-black py-1 pl-2 text-sm outline-gray-600"
  >
</template>