# 2 inputs, 1 button "Add"
Click button -> gia tri cua 2 inputs & total price se hien ra o FE.

Fill in inputs without clicking the Add button -> total van bi rerender 
-> Su dung useMemo(() => {...}, [])


import { useState, useMemo, useRef } from "react";

function App() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [products, setProducts] = useState([])

    const nameRef = useRef()

    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: parseInt(price)
        }])
        setName("")
        setPrice("")

        //sau khi delete Name, set focus vao input
        nameRef.current.focus()
    }

    // console.log(products);

    const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            return result + prod.price
        }, 0)
        return result
    }, [products])

    return (
        <div style={{ padding: `10px 32px` }}>
            <input
                ref={nameRef}
                value={name}
                placeholder="Enter name..."
                onChange={e => setName(e.target.value)}
            />
            <input
                value={price}
                placeholder="Enter price..."
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>Add</button>
            <br />
            Total: {total}
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - {product.price}
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default App;