<script setup lang="ts">
import { defineProps, defineEmits, computed, ref } from 'vue'
import { Todo, Status } from '@/components/todo/types'
import { CheckIcon, XIcon } from '@heroicons/vue/solid'
import { Input } from '@/components/ui'

interface TodoListProps {
	todoList: Todo[]
}

const props = defineProps<TodoListProps>()
// emitsの型指定
// onDeleteイベントを発火するにはnumber型のidプロパティが必要になる
// eslint-disable-next-line func-call-spacing
const emits = defineEmits<{
  (e: 'onDelete', id: number): void,
  (e: 'onComplete', id: number): void,
  (e: 'onUpdate', event: { todo: string, id: number }): void
}>()

const findTodo = (id: number) => {
  return props.todoList.find(val => val.id === id)
}

/** TodoのStatusがCompleteならば、チェックのスタイルを返す */
const checkBackground = computed(() => {
  return (id: number) => {
    return findTodo(id)?.status === Status.COMPLETE ? 'bg-slate-900' : ''
  }
})

/** TODOのStatusがCompleteならば、斜線を引く */
const checkLine = computed(() => {
  return (id: number) => {
    return findTodo(id)?.status === Status.COMPLETE ? 'line-through' : ''
  }
})

const isDisplayUpdateForm = ref<Record<number, boolean>>({})
const showUpdateForm = (id: number) => {
  isDisplayUpdateForm.value = {
    [id]: true
  }
}
const onEnter = (id: number) => {
  isDisplayUpdateForm.value[id] = false
}

const onClickDeleteIcon = (id: number) => {
  // error!
  // emits('onDelete')

  // emitすることで親コンポーネント側にイベントを発火させることができる
  emits('onDelete', id)
}

const onClickCompleteIcon = (id: number) => {
  emits('onComplete', id)
}

const onUpdateTodo = (value: string, id: number) => {
  if (value) {
    emits('onUpdate', {
      todo: value,
      id
    })
  }
}
</script>

<template>
  <div class="m-auto mt-12 w-4/6">
    <!-- "in"または"of"でもv-forディレクティブを使用できる -->
    <!-- 左辺の"todo"は配列の要素、"index"は配列の添字, 右辺は表示させる配列のソースデータ -->
    <div
      v-for="(todo) in todoList"
      :key="todo.id"
      class="relative m-auto mb-4 border border-slate-400 py-4 px-20"
    >
      <!-- v-bindとclassを組み合わせることにより、動的にclassを切り替えることができる -->
      <div
        :class="`absolute left-5 top-7 h-7 w-7 cursor-pointer rounded-full border border-slate-500 ${checkBackground(todo.id)}`"
        @click="onClickCompleteIcon(todo.id)"
      >
        <CheckIcon class="m-auto h-full w-5 text-white" />
      </div>

      <!-- v-if と v-showの使い分け -->
      <!-- 頻繁に要素を切り替えるという場合はv-show(v-showはあくまで要素を隠すdisplay: hiddenをしているだけのため、v-ifと比べると、より高い描画性能がある) -->
      <p
        v-show="!isDisplayUpdateForm[todo.id]"
        :class="`select-none text-base overflow-x-auto py-3 ${checkLine(todo.id)}`"
        @dblclick="showUpdateForm(todo.id)"
      >
        {{ todo.todo }}
      </p>

      <Input
        v-show="isDisplayUpdateForm[todo.id]"
        :model-value="todo.todo"
        class="py-3"
        @update:model-value="onUpdateTodo($event, todo.id)"
        @keydown.enter.prevent="onEnter(todo.id)"
      />
      

      <XIcon
        class="absolute right-4 top-7 h-6 cursor-pointer"
        @click="onClickDeleteIcon(todo.id)"
      />
      <!-- error! 引数にidを渡していないから -->
      <!-- @click="onClickDeleteIcon" -->
    </div>
  </div>
</template>