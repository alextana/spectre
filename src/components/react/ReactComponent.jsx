import { useState } from 'react'

const ReactComponent = ({ message = 'hello', initialCount = 5 }) => {
  const [count, setCount] = useState(initialCount)
  return (
    <div className='component bg-blue-400 p-4 rounded-md shadow-lg border border-blue-300'>
      <h2>I am a react component</h2>
      <p>props are, message: {message}</p>
      <p>and initialCount = {initialCount}</p>
      <button
        type='button'
        className='p-2 rounded-md bg-blue-500 my-2 shadow-md hover:bg-blue-600'
        onClick={() => setCount(count + 1)}
      >
        count is {count}
      </button>
    </div>
  )
}

export default ReactComponent
