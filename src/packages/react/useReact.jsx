import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

let root = null

export const useReact = (ReactComponent, rootValue) => {
  const el = document.createElement('div')
  el.setAttribute('id', 'react-root')

  root = createRoot(el)

  root.render(
    <StrictMode>
      <ReactComponent />
    </StrictMode>
  )

  rootValue.appendChild(el)
}

export const unmountReact = () => {
  root.unmount()
}
