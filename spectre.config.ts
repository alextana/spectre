interface SpectreConfig {
  jsxFramework?: 'react' | 'solid'
  componentFolders: string[]
}

export const config: SpectreConfig = {
  jsxFramework: 'react',
  componentFolders: ['./src/components/**/*.{jsx,tsx,svelte,vue}'],
}
