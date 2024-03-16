<template>
  <div class="lg:flex lg:justify-between lg:gap-2">
    <label for="new-todo-input" class="sr-only">Neuer Eintrag</label>
    <BaseInput
      id="new-todo-input"
      v-model="newTodo"
      placeholder="Neuer Eintrag..."
      class="px-4 py-4 h-12 w-full placeholder:text-black placeholder:pl-1 text-black text-sm font-medium flex-auto mt-8 block rounded-md border shadow border-gray-300 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-indigo-500"
      @keyup.enter="emitAddTodo"
    />
    <BaseButton
      :disabled="!newTodo"
      class="h-12 mt-4 lg:mt-8 mb-3 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
      @click="emitAddTodo"
    >
      Hinzufügen
      <ArrowLongRightIcon class="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
    </BaseButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ArrowLongRightIcon from '@heroicons/vue/20/solid/ArrowLongRightIcon'
import BaseInput from './helpers/BaseInput.vue'
import BaseButton from './helpers/BaseButton.vue'

export default defineComponent({
  name: 'TodoInput',
  components: {
    BaseButton,
    BaseInput,
    ArrowLongRightIcon,
  },

  emits: ['add-todo'],
  setup(_, { emit }) {
    const newTodo = ref('')

    const emitAddTodo = () => {
      if (newTodo.value.trim()) {
        emit('add-todo', newTodo.value.trim())
        newTodo.value = ''
      }
    }

    return {
      newTodo,
      emitAddTodo,
    }
  },
})
</script>
