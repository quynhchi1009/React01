# useEffect
1. Cap nhat lai state
2. Cap nhat DOM (mutated)
3. Render lai UI
4. Goi cleanup neu deps thay doi
5. goi useEffect callback

# useLayoutEffect
1. Cap nhat lai state
2. Cap nhat DOM (mutated)
4. Goi cleanup neu deps thay doi (sync)
5. goi useEffect callback (sync)
3. Render lai UI

VD: Click button so dem, den so 3 thi quay tro ve 0, 1, 2, 3, 0, 1, 2, 3... -> useEffect

import { useLayoutEffect } from "react";
import { useState } from "react";

function Content() {
    const [count, setCount] = useState(0)

    useLayoutEffect(() => {
        if (count > 3)
            setCount(0)
    }, [count])

    const handleRun = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    )
}

export default Content