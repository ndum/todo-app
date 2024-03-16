<template>
  <input
    :value="modelValue"
    @input="updateInput"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseInput',
  props: {
    modelValue: String,
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const updateInput = (event: Event) => {
      const target = event.target as HTMLInputElement
      emit('update:modelValue', target.value)
    }

    return {
      updateInput,
    }
  },
})
</script>
