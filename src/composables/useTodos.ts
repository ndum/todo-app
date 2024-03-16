import { state } from './state'
import moment from 'moment'
import { Todo } from '/@/models'

export function useTodos() {
  const getTodos = (): Todo[] => {
    return state.todos
  }

  const getTodoById = (id: number): Todo | undefined => {
    return state.todos.find((todo) => todo.id === id)
  }

  const createNewTodo = (content: string): void => {
    const todo: Todo = {
      id: state.id,
      content: content,
      completed: false,
      created_at: moment().format('DD.MM.YYYY - HH:mm'),
    }

    state.todos.push(todo)
    incrementId()
  }

  const updateTodo = (id: number, newTodo: Todo): void => {
    const index = findTodoIndexById(id)
    if (index !== -1) {
      state.todos[index] = newTodo
    }
  }

  const deleteTodo = (id: number): void => {
    const index = findTodoIndexById(id)
    if (index !== -1) {
      state.todos.splice(index, 1)
    }
  }

  const findTodoIndexById = (id: number): number => {
    return state.todos.findIndex((todo) => todo.id === id)
  }

  const incrementId = (): void => {
    state.id++
  }

  return {
    getTodos,
    getTodoById,
    createNewTodo,
    updateTodo,
    deleteTodo,
  }
}
