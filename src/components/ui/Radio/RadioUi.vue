<script setup lang="ts">
import { defineProps, computed } from 'vue'

interface Options {
  value: number | string
  text: string
}

interface RadioProps {
  options: Options[]
  modelValue: Options['value']
}

const props = defineProps<RadioProps>()
const emits = defineEmits(['update:modelValue'])

const radioState = computed({
  get: () => props.modelValue,
  set: (value: RadioProps['modelValue']) => {
    emits('update:modelValue', value)
  }
})
</script>

<template>
  <div
    v-for="(radio, index) in options"
    :key="index"
  >
    <input
      :id="`${radio.text}_${index}`"
      v-model="radioState"
      type="radio"
    >
    <label :for="`${radio.text}_${index}`">
      {{ radio.text }}
    </label>
  </div>
</template>