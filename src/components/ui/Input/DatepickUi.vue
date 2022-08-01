<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue'

interface DatepickProps {
	modelValue: string
  errorMessage?: string
}

const props = defineProps<DatepickProps>()
const emits = defineEmits(['update:modelValue'])

const inputState = computed({
  get: () => props.modelValue,
  set: (value: string) => emits('update:modelValue', value)
})

const errorClass = computed(() => props.errorMessage ? 'border-red-500' : '')
</script>

<template>
  <div class="flex flex-col">
    <input
      v-model="inputState"
      type="date"
      :class="`h-7 w-full select-none border border-solid border-gray-500 py-1 pl-2 text-sm outline-gray-800 ${errorClass}`"
    >
    <span
      v-show="errorMessage"
      class="text-sm text-red-500"
    >
      {{ errorMessage }}
    </span>
  </div>
</template>