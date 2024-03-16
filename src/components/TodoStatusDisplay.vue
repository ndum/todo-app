<template>
  <div class="lg:flex justify-between">
    <span
      :class="completed ? 'bg-green-600' : 'bg-indigo-600'"
      class="rounded p-2 text-xs font-medium text-white"
    >
      {{ completed ? 'ABGESCHLOSSEN' : 'OFFEN' }}
    </span>
    <p class="font-medium text-black mt-4 lg:mt-0">
      <span class="text-sm">
        Eintrag erstellt am:
        <FormattedDate :raw-date="createdAt" class="font-bold" />
      </span>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import FormattedDate from './helpers/FormattedDate.vue'

export default defineComponent({
  name: 'TodoStatusDisplay',
  components: { FormattedDate },
  props: {
    completed: {
      type: Boolean,
      required: true,
    },

    createdAt: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const formattedCreatedAt = computed(() => {
      return props.createdAt
    })

    return {
      formattedCreatedAt,
    }
  },
})
</script>
