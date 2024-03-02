import { useState } from 'react'
import Home from '../components/Homepage/Home';
import Credit from '../components/Homepage/Credit';

function HomePage() {
    const [count, setCount] = useState(0)

    return (
        <div className='h-screen w-screen bg-white'>
            <Home />
            <Credit />
        </div>
    )
}

export default HomePage
