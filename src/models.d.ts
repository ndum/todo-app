export interface Todo {
  id: number
  content: string
  created_at: string
  completed: boolean
}

export interface TodoState {
  todos: Array<Todo>
  id: number
}
