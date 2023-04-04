# useCallback
-> tranh tao ra function moi, khong can thiet

## Vi du
import { memo } from "react";

function Content({ onIncrease }) {
    
    return (
        <> 
            <h2>Hello</h2>
            <button onClick={onIncrease}>Click me!</button>
        </>
    )
}

export default memo(Content)  

import { useState } from "react";
import Content from "./Content";

function App() {
    const [count, setCount] = useState(0)

    const handleIncrease = useCallback(() => {
        setCount(prev => prev + 1)
    }, [])

    return (
        <div>
            <Content onIncrease={handleIncrease} />
            <h1 >{count}</h1>
        </div>
    )
}

export default App;
