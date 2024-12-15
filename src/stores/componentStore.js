import { defineStore } from "pinia"
import { ref } from 'vue'

export const useComponentStore = defineStore('componentStore', () => {
  const selectedComponent = ref(null)

  const selectComponent = (payload) => {
    selectedComponent.value = payload
  }

  return {
    selectedComponent,
    selectComponent
  }
})