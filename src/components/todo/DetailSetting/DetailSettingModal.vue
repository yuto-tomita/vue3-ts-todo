<script setup lang="ts">
import { Modal } from '@/components/common'
import { Input, Datepick, Button } from '@/components/ui'
import { reactive, computed, defineEmits } from 'vue'
import type { Todo, TodoForm } from '@/components/todo/types'

interface DetailSettingModalProps {
  todo: TodoForm
}

const props = defineProps<DetailSettingModalProps>()
const emits = defineEmits(['update:modelValue'])

const detailTodo = reactive<TodoForm>({
  todo: props.todo.todo,
  deadline: props.todo.deadline,
  status: props.todo.status
})
</script>

<template>
  <Modal>
    <h1 class="my-4 text-2xl font-bold">
      詳細設定
    </h1>

    <div class="ml-5 flex content-center">
      <div class="w-1/4 text-sm">
        やること
      </div>
      <Input
        v-model="detailTodo.todo"
        class="w-3/5"
      />
    </div>

    <div class="ml-5 mt-8 flex content-center">
      <div class="w-1/4 text-sm">
        期限
      </div>
      <Datepick
        v-model="detailTodo.deadline"
        class="w-3/5"
      />
    </div>

    <div class="ml-5 mt-8 flex content-center">
      <div class=" w-1/4 text-sm">
        重要度
      </div>
      <Input
        v-model="detailTodo.status"
        class="w-3/5"
      />
    </div>

    <!-- フォームとの位置を統一させるために、calcを使ってlabelのwidth + フォームのwidthの合計値をwidthに設定 -->
    <div class="mt-8 w-[calc(60%_+_25%)] text-right">
      <Button>
        決定
      </Button>
      <Button
        variant="danger"
        class="ml-4"
      >
        キャンセル
      </Button>
    </div>
  </Modal>
</template>