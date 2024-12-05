import { onMount, createSignal } from 'solid-js' // Or framework of choice

function MainSolid() {
  const [components, setComponents] = createSignal([])

  onMount(() => {
    // const c = import.meta.glob('/src/components/**/*.astro')
    // console.log(c)
    // setComponents(c)
  })

  return (
    <ul>
      Solid js:
      {components().map((component) => (
        <li>{component.name}</li>
      ))}
    </ul>
  )
}

export default MainSolid
