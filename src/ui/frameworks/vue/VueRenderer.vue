<template v-if="VueComponent">
  <VueComponent />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  Component: {
    type: String,
    default: null,
  },
})

const VueComponent = defineAsyncComponent(() => import('/' + props.Component))
</script>
