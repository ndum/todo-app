<template>
  <section>
    <div class="flex justify-end p-2">
      <div class="flex">
        <p class="text-sm pr-3 font-medium">
          Abgeschlossene Einträge verbergen:
        </p>
      </div>
      <ToggleSwitch v-model:checked="showCompleted" />
    </div>
    <h1 class="text-4xl lg:text-6xl text-center pt-2">Simple ToDo App</h1>
    <TodoInput @add-todo="handleAddTodo" />
    <TodoList v-if="filteredTodos.length" :todos="filteredTodos" />
  </section>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import TodoInput from '../components/TodoInput.vue'
import TodoList from '../components/TodoList.vue'
import ToggleSwitch from '../components/ToggleSwitch.vue'
import { useTodos } from '../composables/useTodos'
import { Todo } from '/@/models'

export default defineComponent({
  name: 'Dashboard',
  components: {
    TodoInput,
    TodoList,
    ToggleSwitch,
  },

  setup() {
    const { getTodos, createNewTodo } = useTodos()
    const showCompleted = ref(true)

    const filteredTodos = computed((): Todo[] => {
      const todos = getTodos()
      return showCompleted.value
        ? todos.filter((todo: Todo) => !todo.completed)
        : todos
    })

    const handleAddTodo = (newTodoContent: string): void => {
      createNewTodo(newTodoContent)
    }

    return {
      showCompleted,
      filteredTodos,
      handleAddTodo,
    }
  },
})
</script>
