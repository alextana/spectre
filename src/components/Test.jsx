import { createSignal } from 'solid-js'

const Test = () => {
  const [count, setCount] = createSignal(0)

  return (
    <button onClick={() => setCount((n) => n + 1)}>count is {count()}</button>
  )
}
export default Test
