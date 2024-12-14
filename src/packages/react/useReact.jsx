import { createRoot } from 'react-dom/client'

export const useReact = (ReactComponent, rootValue) => {
  const el = document.createElement('div')
  el.setAttribute('id', 'react-root')

  const root = createRoot(el)

  root.render(<ReactComponent />)

  rootValue.appendChild(el)
}
