import { useState } from 'react'

function HR() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="bg-[#ffffff] h-screen w-screen text-black">
                <h1 className="text-5xl font-bold underline">
                    This is HR Page
                </h1>
                <h1>Vite + React</h1>
                <div className="card">
                    <button className="bg-orange-300" onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.jsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </div>

        </>
    )
}

export default HR
