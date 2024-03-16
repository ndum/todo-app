<template>
  <div>
    <input
      v-model="localTodo.content"
      type="text"
      class="flex-auto font-medium mt-8 h-12 w-full text-black block rounded-md border shadow border-gray-300 py-2 px-3 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-indigo-500"
    />
    <div class="flex justify-start mt-6">
      <span class="text-sm pr-3 font-medium">Abgeschlossen?</span>
    </div>
    <ToggleSwitch v-model:checked="localTodo.completed" class="mt-2" />
    <div class="ml-5 flex justify-end">
      <BaseButton
        color="red"
        class="ml-2 rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
        @click="removeTodo"
      >
        <XMarkIcon class="h-5 w-5" aria-hidden="true" />
      </BaseButton>
      <BaseButton
        color="green"
        class="ml-2 rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
        @click="updateTodo"
      >
        <CheckIcon class="h-5 w-5" aria-hidden="true" />
      </BaseButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import XMarkIcon from '@heroicons/vue/20/solid/XMarkIcon'
import CheckIcon from '@heroicons/vue/20/solid/CheckIcon'
import ToggleSwitch from './ToggleSwitch.vue'
import { Todo } from '../models'
import BaseButton from './helpers/BaseButton.vue'

export default defineComponent({
  name: 'TodoEditForm',
  components: {
    BaseButton,
    XMarkIcon,
    CheckIcon,
    ToggleSwitch,
  },

  props: {
    todo: {
      type: Object as () => Todo,
      required: true,
    },
  },

  emits: ['update-todo', 'remove-todo'],
  setup(props, { emit }) {
    const localTodo = ref({ ...props.todo })

    const updateTodo = () => {
      emit('update-todo', localTodo.value)
    }

    const removeTodo = () => {
      emit('remove-todo')
    }

    return {
      localTodo,
      updateTodo,
      removeTodo,
    }
  },
})
</script>
