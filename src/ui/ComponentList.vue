<template>
  <Tree
    :value="tree"
    v-model:selectionKeys="selectedKey"
    selection-mode="single"
    @node-select="handleNodeSelect"
    :expanded-keys="extractExpandedKeys(tree[0])"
  />
</template>
<script setup>
import { ref } from 'vue'
import componentFiles from 'virtual:components'
import Tree from 'primevue/tree'
import { useComponentStore } from '@stores/componentStore.js'

const componentStore = useComponentStore()

const tree = ref(buildTreeNode(componentFiles))
const selectedKey = ref(null)

function buildTreeNode(paths) {
  const root = {}

  paths.forEach((path) => {
    const parts = path.replace(/^\.\//, '').split('/')
    let current = root

    parts.forEach((part, index) => {
      if (!current[part]) {
        const isFile = /\.[a-zA-Z0-9]+$/.test(part) // Check if it's a file based on extension
        current[part] = {
          key: parts.slice(0, index + 1).join('/'),
          label: part,
          children: {},
          selectable: isFile,
          expanded: true,
        }
      }
      current = current[part].children
    })
  })

  function formatToTreeNode(obj) {
    return Object.values(obj).map((node) => {
      const extensionMatch = node.key.match(/\.(\w+)$/)
      const extension = extensionMatch ? extensionMatch[1] : null

      const hasChildren = Object.keys(node.children).length > 0
      return {
        key: node.key,
        label: node.label,
        selectable: node.selectable || false,
        children: hasChildren ? formatToTreeNode(node.children) : null,
        leaf: !hasChildren,
        expanded: node.expanded || false,
        extension: extension,
      }
    })
  }

  return formatToTreeNode(root)
}

function extractExpandedKeys(node, result = {}) {
  // Check if the current node has the `expanded` property
  if (node.expanded) {
    result[node.key] = true
  }

  // If the node has children, recursively process them
  if (node.children && Array.isArray(node.children)) {
    node.children.forEach((child) => extractExpandedKeys(child, result))
  }

  return result
}

const handleNodeSelect = (node) => {
  componentStore.selectComponent(node)
}
</script>
