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

// objectの各プロパティや変数には基本的にプリミティブ型を付与していくことになる
// プリミティブには, 文字列, 真偽値, BigInt, null, undefined, Symbolの七種類が存在する(Symbol型は複雑なためMDNのドキュメントを参照してほしい https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

// 現状Typescriptには少数も整数もnumber型で表現しないといけない
// 一応v2.3.4からBigInt型が追加されたが、数値型についてはnumber型で表現するのが主流となっている

// number型にstring型を代入しようとしてもエラーになる
// let num: number = 1
// num = '1'


// 逆も又然り
// let str: string = 'aaa'
// str = 1

// type SampleJson = {
//   data: {
//     status: 'success' | 'progress'
//   }
// } | undefined

// const sampleJson: SampleJson = undefined
// error! sampleJsonはundefinedの可能性があるため、エラーが発生する
// undefinedのオブジェクトに対して下記のように"."記法でプロパティアクセスしようとするとコンパイルエラーが発生する
// typescriptを導入しているから、未然に防げる！！
// console.log(sampleJson.data)

// エラーが出るなら、どうやって`data`プロパティにアクセスすればいいのか

// function accessProperty() {
//   // if文を使用して、sampleJsonがundefinedではないことを"証明"すればいい！typescriptの型推論が働いて、sampleJsonには値が入っていると解釈される
//   if (sampleJson) {
//     // エラーが発生しない
//     console.log(sampleJson.data)
//   }
// }

// 上記はundefinedだけでなく、nullやNaN(falsyな値)なら使用することができる
// falsyな値とはなんなのか知りたいのであれば、下記を参照してみてほしい
// https://developer.mozilla.org/ja/docs/Glossary/Falsy
