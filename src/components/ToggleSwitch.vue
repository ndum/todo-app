<template>
  <div
    class="relative w-12 align-middle select-none transition duration-200 ease-in"
  >
    <input
      id="checked"
      :checked="checked"
      type="checkbox"
      class="completed-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
      aria-label="Toggle Completed"
      @change="emitChange"
    />
    <label
      for="checked"
      class="completed-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ToggleSwitch',
  props: {
    checked: {
      type: Boolean,
      required: true,
    },
  },

  emits: ['update:checked'],
  setup(props, { emit }) {
    const emitChange = () => {
      emit('update:checked', !props.checked)
    }

    return {
      emitChange,
    }
  },
})
</script>

<style lang="sass" scoped>
.disabled
    opacity: 0.6
    pointer-events: none
    cursor: not-allowed

.completed-checkbox:checked
    @apply right-0 border-green-400

.completed-checkbox:checked + .completed-label
    @apply bg-green-500
</style>
