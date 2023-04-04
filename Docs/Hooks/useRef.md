# Luu cac gia tri qua 1 tham chieu ben ngoai function component

## App dem nguoc
import { useEffect, useLayoutEffect, useRef } from "react";
import { useState } from "react";

function Content() {
    const  [count, setCount] = useState(60)

    const timerId = useRef() //Object with value "current"
    const prev = useRef()
    const h1Ref = useRef()

    useEffect(() => {
        prev.current = count
    }, [count])

    useEffect(() => {
        console.log(h1Ref.current.getBoundingClientRect())
    })
    
    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prev => prev - 1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current)
    }

    console.log(count, prev.current)

    return (
        <div> 
            <h1 ref = {h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>

        </div>
    )
}

export default Content