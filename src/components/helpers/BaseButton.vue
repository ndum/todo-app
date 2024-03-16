<template>
  <button :class="[buttonClass]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'BaseButton',
  props: {
    color: {
      type: String,
      default: 'green',
    },
  },

  emits: ['click'],
  setup(props) {
    const buttonClass = computed(() => {
      switch (props.color) {
        case 'red':
          return 'bg-red-600 hover:bg-red-700 focus:ring-red-500'
        case 'indigo':
          return 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
        case 'green':
        default:
          return 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
      }
    });

    return {
      buttonClass,
    }
  },
});
</script>
