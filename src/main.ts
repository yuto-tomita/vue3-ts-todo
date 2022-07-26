import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import router from './modules/router'
import { createPinia } from 'pinia'

// アプリケーションインスタンスの作成
// グローバルに使いたいコンポーネントやプラグインを登録できる

// createApp(rootComponent)を使用することで、rootComponentをレンダリングの起点としてアプリケーションを作成していくことができる
// /index.htmlの`#app`の配下にVueがDOMをマウントさせる

// createAppでApp.vueを起点としたDOMが生成され、mount('#app')で登録しているルートコンポーネントのインスタンスを返す(画面にアプリケーションが表示される　)
createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app')
