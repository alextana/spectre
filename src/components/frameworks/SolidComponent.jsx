import { onMount } from 'solid-js'
import { render } from 'solid-js/web'
import { lazy } from 'solid-js'

const SolidComponent = (props) => {
  let root

  const Component = lazy(() => import(props.path))

  onMount(() => {
    render(() => <Component />, root)
  })

  return (
    <div>
      {props.path}
      <div ref={root} />
    </div>
  )
}

export default SolidComponent
