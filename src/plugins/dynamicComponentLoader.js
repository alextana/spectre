import fg from 'fast-glob'
import { config } from '../../spectre.config'

export default function dynamicComponentLoader() {
  let componentFiles = []
  return {
    name: 'dynamic-component-loader',
    configResolved() {
      const patterns = config.componentFolders
      componentFiles = fg.sync(patterns, { absolute: false })

      // Write resolved components to a file or export dynamically
      console.log('Resolved Component Files:', componentFiles)
    },
    resolveId(id) {
      // Define a virtual module with a unique ID
      if (id === 'virtual:components') {
        return id
      }
    },
    load(id) {
      if (id === 'virtual:components') {
        // Export the resolved component file paths as a JavaScript module
        return `export default ${JSON.stringify(componentFiles)};`
      }
    }
  }
}