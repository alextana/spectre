import { mount, unmount } from 'svelte'

let app = null

export const useSvelte = (SvelteComponent, rootValue) => {

  const el = document.createElement('div')

  el.setAttribute('id', 'svelte-root')

  app = mount(SvelteComponent, {
    target: el,
    props: { some: 'property' }
  })

  rootValue.appendChild(el)
}

export const unmountSvelte = () => {
  unmount(app)
}