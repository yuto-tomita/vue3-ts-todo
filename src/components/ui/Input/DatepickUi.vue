<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue'

interface DatepickProps {
	modelValue: string
}

const props = defineProps<DatepickProps>()
const emits = defineEmits(['update:modelValue'])

const inputState = computed({
  get: () => props.modelValue,
  set: () => emits('update:modelValue')
})
</script>

<template>
  <input
    v-model="inputState"
    type="date"
    class="h-7 w-full select-none border border-solid border-gray-500 py-1 pl-2 text-sm outline-gray-800"
  >
</template>