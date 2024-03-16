<template>
  <time :datetime="rawDate">{{ formattedDate }}</time>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'FormattedDate',
  props: {
    rawDate: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const formattedDate = computed(() => {
      return props.rawDate
    })

    return {
      formattedDate,
    }
  },
})
</script>