<template>
  <div ref="react-component"></div>
</template>

<script setup>
import { useTemplateRef, onMounted } from 'vue'
import { useReact } from '../../../packages/react/useReact'

const props = defineProps({
  Component: {
    type: String,
    default: null,
  },
})

const root = useTemplateRef('react-component')

onMounted(async () => {
  if (root && props.Component) {
    const reactComponent = await import(
      /* @vite-ignore */ `/${props.Component}`
    )

    useReact(reactComponent.default, root.value)
  }
})
</script>
