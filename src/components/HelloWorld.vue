<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{msg: string}>()
</script>

<template>
  <h1 class="p-4 text-2xl font-bold">{{ msg }}</h1>

  <ul>
    <div class="p-4 text-xl">利用技術</div>
    <li>
      <a
        href="https://v3.vuejs.org/"
        target="_blank"
      >
        Vue3
      </a>
    </li>

    <li>
      <a
        href="https://vitejs.dev/guide/features.html"
        target="_blank"
      >
        Vite
      </a>
    </li>

    <li>
      <a
        href="https://pinia.vuejs.org/"
        target="_blank"
      >
        Pinia
      </a>
    </li>
    <li>
      <a
        href="https://router.vuejs.org/"
        target="_blank"
      >
        Vue Router
      </a>
    </li>
    <li>
      <a
        href="https://tailwindcss.com/"
        target="_blank"
      >
        tailwindcss
      </a>
    </li>
  </ul>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
