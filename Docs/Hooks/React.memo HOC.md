# memo() -> higher order Component (HOC)
## export default memo(App)
-> ghi nho prop cua component => quyet dinh co phai rerender component hay khong

## nhan 1 component 
-> check props cua component.
-> neu 1 prop bi thay doi, so sanh voi === -> rerender
-> neu khong prop nao bi thay doi -> khong rerender lai component

## Vi du
import { memo } from "react";

function Content({ count }) {
    
    return (
        <div> 
            <h2>Hello { count }</h2>
        </div>
    )
}

export default memo(Content)

import { useState } from "react";
import Content from "./Content";

function App() {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(increase + 1)
    }

    return (
        <div>
            <Content count={ count } />
            <h1 >{count}</h1>
            <button onClick={increase}>Click me!</button>
        </div>
    )
}

export default App;
 
 
# useCallback()