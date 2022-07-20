<script setup lang="ts">
import { ref } from 'vue'
import { Input, Button, Datepick } from './components/ui'

// interfaceで
interface Todo {
  id: number
  todo: string
  deadline: string
  status: 'progress'
}

// ジェネリクスに型を指定することができる
// 当然stringで指定しているため、string以外の型を代入することができない
// const test = ref<string>('')

// 型を記述しなくても簡単な型ならtypescriptの型推論が働いてstring型が振られる
// const test = ref('')

// test.value = 1
// test.value = {}
// test.value = 'sample'

// setupにする利点
// - setup関数で必要なプロパティのreturnがいらない
// - componentのimport時にcomponentsプロパティが必要ない
// definePropsでpropsの定義ができる。interfaceの定義でpropsが登録できる等々たくさん
</script>

<template>
  <h1 class="my-8 text-3xl font-bold text-center">
    PL Vue + TS Study TODO App
  </h1>

  <div class="flex justify-center items-center">
    <div class="flex mr-2 w-4/12 whitespace-nowrap">
      <span class="mr-1">やること</span>
      <Input v-model="todo" />
    </div>

    <div class="flex ml-1 w-4/12 whitespace-nowrap">
      <span class="mr-1">期限</span>
      <Datepick v-model="todoDeadline" />
    </div>

    <div class="ml-2">
      <Button>
        投稿
      </Button>
    </div>
  </div>
</template>