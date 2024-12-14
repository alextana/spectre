import { useState } from 'react'

const ReactComponent = () => {
  const [count, setCount] = useState(0)
  return (
    <div className='component'>
      <h2>I am a react component</h2>
      <button onClick={() => setCount(count + 1)}>count is {count}</button>
    </div>
  )
}

export default ReactComponent
