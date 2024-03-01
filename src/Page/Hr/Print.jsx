import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';


function Print() {
    const location = useLocation();
    const [count, setCount] = useState(0)
    const { yourData } = location.state || {};
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
        console.log(yourData)
      },[]);

    return (
        <>
            <div className="bg-[#ffffff] h-screen w-screen text-black">
                <h1 className="text-5xl font-bold underline">
                    This is HR Print Page
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

export default Print
