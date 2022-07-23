// interfaceでオブジェクトの型定義ができる
// typeでもオブジェクトの型定義ができる。どっちを使うのかは個人の好みかプロジェクト内のルールが必要。
// type分はinterfaceよりもより多くの場面で使用することができるため、type分のみを使うのが良いらしい。
// 2014年以前のtypescriptでは、intefaceでしかobjectの型定義ができなかったため、手癖でinterfaceを使っている人もいるらしい
// type Todo = {
// 	id: number
// 	todo: string
// 	deadline: string
// 	status: 'progress'
// }
export interface Todo {
	id: number
  todo: string
  deadline: string
  status: 'progress'
}

// Omitはオブジェクト型から特定のプロパティを除外した型を生成する
// 下記はTodo型からidプロパティを除外したもの(idは入力して管理したくないため)
export type TodoForm = Omit<Todo, 'id'>