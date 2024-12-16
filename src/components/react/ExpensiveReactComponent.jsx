import { useState } from 'react'
import { VList } from 'virtua'
const ExpensiveReactComponent = () => {
  return (
    <div className='block w-[800px]'>
      <VList style={{ height: '80vh' }}>
        <div className='grid gap-2 grid-cols-10'>
          {Array.from({ length: 8000 }).map((_, i) => (
            <MyDiv key={i} index={i} />
          ))}
        </div>
      </VList>
    </div>
  )
}

const MyDiv = ({ index }) => {
  const [count, setCount] = useState(0)
  return (
    <div className='bg-blue-400 hover:bg-blue-500 p-4 rounded-md shadow-lg border border-blue-300 w-max'>
      <h1>{index + 1}</h1>
      <button className='bg-blue-600 p-2' onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </div>
  )
}

export default ExpensiveReactComponent
