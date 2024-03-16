<template>
  <section>
    <RouterLink to="/">
      <BaseButton
        color="indigo"
        class="mb-3 inline-flex justify-center items-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        <ArrowLongLeftIcon class="h-5 w-5 mr-2" aria-hidden="true" />
        Zurück
      </BaseButton>
    </RouterLink>
    <div class="overflow-hidden shadow sm:rounded-md">
      <div class="bg-white px-4 py-5 sm:p-6">
        <TodoStatusDisplay
          v-if="todo"
          :completed="todo.completed"
          :created-at="todo.created_at"
        />
        <TodoEditForm
          v-if="todo"
          :todo="todo"
          @update-todo="updateTodo"
          @remove-todo="removeTodo"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'
import ArrowLongLeftIcon from '@heroicons/vue/20/solid/ArrowLongLeftIcon'
import TodoStatusDisplay from '../components/TodoStatusDisplay.vue'
import TodoEditForm from '../components/TodoEditForm.vue'
import { Todo } from '/@/models'
import { useTodos } from '../composables/useTodos'
import BaseButton from '../components/helpers/BaseButton.vue'

export default defineComponent({
  components: {
    BaseButton,
    ArrowLongLeftIcon,
    TodoStatusDisplay,
    TodoEditForm,
  },

  props: {
    todoId: { type: Number, required: true },
  },

  setup(props) {
    const router = useRouter()
    const { getTodoById, updateTodo, deleteTodo } = useTodos()

    const todo = computed((): Todo | undefined => {
      return getTodoById(props.todoId)
    })

    const handleUpdateTodo = (updatedTodo: Todo): void => {
      if (todo.value) {
        updateTodo(todo.value.id, updatedTodo)
        navigateHome()
      }
    }

    const handleRemoveTodo = (): void => {
      if (todo.value) {
        deleteTodo(todo.value.id)
        navigateHome()
      }
    }

    const navigateHome = (): void => {
      router.push('/')
    }

    return {
      todo,
      updateTodo: handleUpdateTodo,
      removeTodo: handleRemoveTodo,
    }
  },
})
</script>
