<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Input, Button, Card } from '@/components/ui'
import { Modal } from '@/components/common'
import { DetailSettingModal } from '@/components/todo'
import type { Todo, TodoForm } from '@/components/todo/types'

const isModalOpen = ref(false)

// reactiveを使用することでリアクティブに動作するようになる、refと違う点はvue2のdataプロパティのように記述できる点と、分割代入をすることでリアクティブ性が失われる点()
const todoForm = reactive<TodoForm>({
  todo: 'aaa',
  deadline: '',
  status: 'progress'
})
// refを使用した値はリアクティブに動作するようになる。`.value`にアクセスすることで`todos`の値にアクセスすることができる。
const todos = ref<Todo[]>([])

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

// ジェネリクスに型を指定することができる
// 当然stringで指定しているため、string以外の型を代入することができない
// const test = ref<string>('')

// 型を記述しなくても簡単な型ならtypescriptの型推論が働いてstring型が自動的に割り振られる
// const test = ref('')

// test.value = 1
// test.value = {}
// test.value = 'sample'

// setupにする利点
// - setup関数で必要なプロパティのreturnがいらない
// - componentのimport時にcomponentsプロパティが必要ない
// definePropsでpropsの定義ができる。interfaceの定義でpropsが登録できる等々たくさん

/** 詳細Modalから送られてくるTodoの内容をもとにformTodo変数を更新する */
const addTodo = (value: TodoForm) => {
  console.log(value)
  todoForm.deadline = value.deadline
  todoForm.status = value.status
  todoForm.todo = value.todo

  saveTodo()

  closeModal()
}

/** ユーザーが入力したTodoをrefに保存する */
const saveTodo = () => {
  // refでtodosの値を管理しているため、todosの変更を検知したら連動してtodosの内容が画面に描画される
  todos.value.push({
    id: todos.value.length + 1,
    todo: todoForm.todo,
    deadline: todoForm.deadline,
    status: todoForm.status
  })

  todoForm.todo = ''
  todoForm.deadline = ''
}
</script>

<!-- templateに記述されているHTMLはVueのRender関数によってVNode(Virtual Node(仮想DOM))を生成し、DOMに変換される -->
<template>
  <Modal v-if="isModalOpen">
    <DetailSettingModal
      :todo="todoForm"
      @post-todo="addTodo"
      @modal-close="closeModal"
    />
  </Modal>

  <h1 class="my-8 text-center text-3xl font-bold">
    PL Vue + TS Study TODO App
  </h1>

  <div class="flex items-center justify-center">
    <div class="mr-2 flex w-4/12 whitespace-nowrap">
      <span class="mr-1">やること</span>

      <!-- 子コンポーネントでmodelValueという値を受け取るように記述しているため、親コンポーネントでv-modelで管理できるようになる -->
      <!-- 親コンポーネントでv-model管理のメリットとして、データフローが追いやすくなる、データ管理の容易さ、簡潔にかけると言ったメリットがある -->
      <Input v-model="todoForm.todo" />
    </div>

    <div class="ml-2">
      <Button @click="openModal">
        詳細設定
      </Button>
    </div>

    <div class="ml-2">
      <Button @click="saveTodo">
        投稿
      </Button>
    </div>
  </div>

  <div class="flex w-full flex-wrap pl-40">
    <div
      v-for="(todo, index) in todos"
      :key="index"
      class="my-3 mx-4"
    >
      <Card>
        <template #title>
          <!-- コンポーネントインスタンスをバインドさせる構文であるMustache(マスタッシュ)構文 -->
          <!-- todoインスタンスが書き変わるたびに、新しい値に起き変わる -->
          <!-- マスタッシュ構文によって出力されるHTMLは"ただのテキスト"として出力される -->
          {{ todo.todo }}
          <!-- HTMLとして出力したい場合は `v-htmlディレクティブ` を使用する -->
          <!-- <span v-html="todo.todo" /> -->
        </template>
      </Card>
    </div>
  </div>
</template>

<!-- Vueでtemplateを書いていく上でのアンチパターン -->

<!-- ① -->
<!-- 危険性を理解しないでv-htmlを使用すること(XSS攻撃を起こされる可能性がある) -->

<!-- XSS攻撃とは： 攻撃者が悪意のあるスクリプトをアプリケーションに埋め込み、何も知らないユーザーにそのスクリプトを実行させ攻撃の標的となるWebサイトに誘導するという攻撃 -->
<!-- 仮にユーザーの入力内容をそのまま画面に表示するといった仕様を実装するとなった時に、v-htmlを使用すると悪意のあるスクリプトをそのままHTMLとして表示することになるため、攻撃される的になってしまう -->

<!-- ② -->
<!-- 複雑な式をマスタッシュ構文で実行させる -->

<!-- {{ isAdmin ? '管理者' : '一般ユーザー' }} ユーザーがAdminユーザーかどうかを表示しています。こういった式はcomputedを使用してバインドさせてほうがいい -->
<!-- なぜなら仮想DOMのコンセプトとなる宣言的UIの思想にはずれてしまうから。宣言的UIとはあるべき状態を記述してUIを構築するという考え方だが、上記の例はあるべき姿が想像しづらいですよね。 -->
<!-- そのためcomputedプロパティを使用して、式の意味を命名してあげると宣言的UIの思想に近づけるようにしましょう。マスタッシュ構文で記述するとデバッグがしづらいです。同じ式のマスタッシュ構文が複数記述されていると尚更です。 -->

<!-- JavaScript式を何でもかんでもMethodsプロパティで実行させる -->

<!-- 確かにComputedもMethodsも式が同じなら同じ値を返します。しかし、何でもかんでもMethodsで実行させるのではなく、computedを使用しましょう。使える場面ならばcomputedを極力使えるようにしましょう -->
<!-- computedは結果をキャッシュするという特性を持っています。一回実行して、算出された値が同じならば関数を再実行しないでそのまま値を返します。 -->
<!-- 対してMethodsは呼ばれるごとに関数を実行させてしまいます。これはパフォーマンス上良くないです。実行する必要がないのに実行させてるわけですから。 -->

