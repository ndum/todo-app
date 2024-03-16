import { reactive } from 'vue'
import { Todo, TodoState } from '/@/models'

export const state: TodoState = reactive({
  todos: [] as Todo[],
  id: 1,
})
