<script setup lang="ts">
import { computed, defineProps } from 'vue'

interface InputProps {
	modelValue: string
  errorMessage?: string
}
const props = defineProps<InputProps>()
const emits = defineEmits(['update:modelValue'])

// propsで受け取った値を直接変更してはいけないルールがあるため、propsの値を初期値にして、変更を検知したらemitする
const inputState = computed({
  get: () => props.modelValue,
  // v-modelはv-bind:modelValueと@update:modelValueの糖衣構文なので、'@update:modelValue'という値でemitする
  set: (value: string) => emits('update:modelValue', value)
})

const errorClass = computed(() => props.errorMessage ? 'border-red-500' : '')
</script>

<template>
  <div class="flex flex-col">
    <input
      v-model="inputState"
      type="text"
      :class="`h-7 w-full rounded-md border border-solid border-gray-500 py-1 pl-2 text-sm outline-gray-800 ${errorClass}`"
    >
    <span
      v-show="errorMessage"
      class="text-sm text-red-500"
    >
      {{ errorMessage }}
    </span>

  </div>
</template>