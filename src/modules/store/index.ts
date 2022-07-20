import { defineStore } from 'pinia'

interface Todo {
	id: number,
	title: string
}

export const useStore = defineStore({
  id: 'todos',
  state: (): {
		todos: Todo[]
	} => {
    return {
      todos: [
        {
          id: 0,
          title: 'pinia'
        },
        {
          id: 1,
          title: 'vue-router'
        },
        {
          id: 2,
          title: 'tailwindcss'
        },
        {
          id: 3,
          title: 'vite'
        },
        {
          id: 4,
          title: 'Vitest'
        }
      ]
    }
  },
  getters: {
    getTodos: (state) => state.todos
  },
  actions: {
  }
})