import React, {useState, useEffect} from 'react';

const Clock = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        setInterval(() => {
            setCount(count => count + 1)
        }, 1000)

        // return <h1>{new Date().toLocaleTimeString()}</h1>
    })

    return <h1>{count}</h1>
    // const element = <Welcome></Welcome>

    // setInterval(Welcome, 1000)

    // return element
}

export default Clock