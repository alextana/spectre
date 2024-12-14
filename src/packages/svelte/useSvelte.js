import { mount } from 'svelte'

export const useSvelte = (SvelteComponent, rootValue) => {

  const el = document.createElement('div')

  el.setAttribute('id', 'svelte-root')

  const app = mount(SvelteComponent, {
    target: el,
    props: { some: 'property' }
  })

  rootValue.appendChild(el)
}