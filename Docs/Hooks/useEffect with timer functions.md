# Timers
setInterval, setTimeout, clearInterval, clearTimeout

-> Khi unmount component luon luon cleanup function

import { useEffect } from "react";
import { useState } from "react";

function Content() {

    const [countdown, setCountdown] = useState(200)

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(prevState => prevState - 1)
        }, 1000)
        
        return () => clearInterval(timerId)
    }, [])

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCountdown(countdown -  1)
    //     }, 1000)
    // }, [countdown])

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default Content