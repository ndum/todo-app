<template>
  <div class="bg-indigo-300">
    <div class="flex flex-col justify-between min-h-screen">
      <div class="lg:w-1/2 mx-auto lg:p-12">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>
