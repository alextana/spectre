<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="component">
    <h2>I am a vue component</h2>
    <button @click="() => count++">count is {{ count }}</button>
  </div>
</template>
