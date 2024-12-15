<script setup>
import { useComponentStore } from '@stores/componentStore.js'
import SvelteRenderer from './frameworks/svelte/SvelteRenderer.vue'
import ReactRenderer from './frameworks/react/ReactRenderer.vue'
import { config } from '../../spectre.config'
import VueRenderer from './frameworks/vue/VueRenderer.vue'

const componentStore = useComponentStore()
</script>

<template v-if="componentStore?.selectedComponent">
  <div class="grid place-content-center w-full h-full">
    <template v-if="componentStore.selectedComponent?.extension === 'svelte'">
      <SvelteRenderer :Component="componentStore.selectedComponent.key" />
    </template>

    <template
      v-if="
        componentStore.selectedComponent?.extension === 'jsx' ||
        componentStore.selectedComponent?.extension === 'tsx'
      "
    >
      <template v-if="config.jsxFramework === 'react'">
        <ReactRenderer :Component="componentStore.selectedComponent.key" />
      </template>
      <template v-else> Solid compatibility coming soon! </template>
    </template>

    <template v-if="componentStore.selectedComponent?.extension === 'vue'">
      <VueRenderer
        :key="componentStore.selectedComponent"
        :Component="componentStore.selectedComponent.key"
      />
    </template>
  </div>
</template>
