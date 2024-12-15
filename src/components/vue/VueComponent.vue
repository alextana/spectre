<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div
    class="component bg-green-400 p-3 rounded-md shadow-lg border border-green-200"
  >
    <h2>I am a vue component</h2>
    <button
      type="button"
      class="p-2 rounded-md bg-green-500 my-2 shadow-md hover:bg-green-600"
      @click="() => count++"
    >
      count is {{ count }}
    </button>
  </div>
</template>
