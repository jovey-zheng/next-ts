import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  const handleUp = () => {
    setCount(count + 1)
  }

  const handleDown = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <button onClick={handleDown}>-</button>
      Count: {count}
      <button onClick={handleUp}>+</button>
    </div>
  )
}
