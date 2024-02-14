import { useState } from 'react'

function TestPage() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-7xl font-bold underline">
      Hello world02202020!
    </h1>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default TestPage
