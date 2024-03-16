<template>
  <div
    class="overflow-hidden bg-white shadow sm:rounded-md lg:mt-20 rounded-md border shadow border-gray-300 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-indigo-500"
  >
    <ul role="list" class="divide-y divide-blue-200">
      <li v-for="todo in todos" :key="todo.id" class="block hover:bg-gray-50">
        <RouterLink
          :to="`/todo/show/${todo.id}`"
          class="flex items-center px-4 py-4 sm:flex sm:items-center sm:justify-between"
        >
          <div class="flex-1">
            <p class="text-sm font-medium text-black">{{ todo.content }}</p>
          </div>
          <FormattedDate
            :raw-date="todo.created_at"
            class="text-sm text-black"
          />
          <ChevronRightIcon
            class="ml-5 h-5 w-5 text-black"
            aria-hidden="true"
          />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ChevronRightIcon from '@heroicons/vue/20/solid/ChevronRightIcon'
import { Todo } from '/@/models'
import FormattedDate from './helpers/FormattedDate.vue'

export default defineComponent({
  name: 'TodoList',
  components: {
    FormattedDate,
    ChevronRightIcon,
  },

  props: {
    todos: {
      type: Array as () => Todo[],
      required: true,
    },
  },
})
</script>
