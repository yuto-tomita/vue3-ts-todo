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
    class="py-1 w-full h-7 text-sm border border-black border-solid outline-gray-600 select-none"
  >
</template>