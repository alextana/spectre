<template>
  <div ref="svelte-component"></div>
</template>

<script setup>
import { useTemplateRef, onMounted, onUnmounted } from 'vue'
import { useSvelte, unmountSvelte } from '../../../packages/svelte/useSvelte'

const props = defineProps({
  Component: {
    type: String,
    default: null,
  },
})
const root = useTemplateRef('svelte-component')

onMounted(async () => {
  if (root && props.Component) {
    const svelteComponent = await import(
      /* @vite-ignore */ `/${props.Component}`
    )

    useSvelte(svelteComponent.default, root.value)
  }
})

onUnmounted(() => {
  unmountSvelte()
})
</script>
