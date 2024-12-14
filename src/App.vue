<script setup>
import { useReact } from './packages/react/useReact'
import { useSvelte } from './packages/svelte/useSvelte'
import ReactComponent from './components/react/ReactComponent.jsx'
import SvelteComponent from './components/svelte/SvelteComponent.svelte'
import VueComponent from './components/vue/VueComponent.vue'

import { onMounted, useTemplateRef } from 'vue'

const root = useTemplateRef('root')
const svelteRoot = useTemplateRef('svelte-root')

onMounted(() => {
  if (root) {
    useReact(ReactComponent, root.value)
  }

  if (svelteRoot) {
    useSvelte(SvelteComponent, svelteRoot.value)
  }
})
</script>

<template>
  <h1>This is a vue app!</h1>

  <VueComponent />
  <div ref="root"></div>
  <div ref="svelte-root"></div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
