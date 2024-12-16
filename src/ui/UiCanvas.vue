<script setup>
import { config } from '../../spectre.config'
import VueRenderer from './frameworks/vue/VueRenderer.vue'
import { useComponentStore } from '@stores/componentStore.js'
import ReactRenderer from './frameworks/react/ReactRenderer.vue'
import SvelteRenderer from './frameworks/svelte/SvelteRenderer.vue'

const componentStore = useComponentStore()
</script>

<template v-if="componentStore?.selectedComponent">
  <div class="canvas-ui flex h-full">
    <div class="main-content relative w-full overflow-y-auto p-3">
      <div class="grid place-content-center w-full h-full">
        <template
          v-if="componentStore.selectedComponent?.extension === 'svelte'"
        >
          <SvelteRenderer
            :key="componentStore.selectedComponent"
            :Component="componentStore.selectedComponent.key"
          />
        </template>

        <template
          v-if="
            componentStore.selectedComponent?.extension === 'jsx' ||
            componentStore.selectedComponent?.extension === 'tsx'
          "
        >
          <template v-if="config.jsxFramework === 'react'">
            <ReactRenderer
              :key="componentStore.selectedComponent"
              :Component="componentStore.selectedComponent.key"
            />
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
    </div>
    <div
      v-if="componentStore.selectedComponent"
      class="right-sidebar w-[350px] bg-slate-800 p-3"
    >
      sidebar
    </div>
  </div>
</template>
