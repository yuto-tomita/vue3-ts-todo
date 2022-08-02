<script setup lang="ts">
import { defineProps } from 'vue'
import type { Todo } from '@/components/todo/types'

interface TodoListProps {
	todoList: Todo[]
}
defineProps<TodoListProps>()
</script>

<template>
  <!-- "in"または"of"でもv-forディレクティブを使用できる -->
  <!-- 左辺の"todo"は配列の要素、"index"は配列の添字, 右辺は表示させる配列のソースデータ -->
  <div
    v-for="(todo, index) in todoList"
    :key="index"
  >
    {{ todo.todo }}
  </div>
</template>