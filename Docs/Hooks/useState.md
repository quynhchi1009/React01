# useState 
= trang thai cua du lieu

### Dung khi nao?
Khi muon du lieu thay doi thi giao dien tu dong cap nhat (render lai theo du lieu)

### Cach dung
import { useState } from "react";
function Component {
    const [state, setState] = useState(initState)
    ....
}

VD: 
import { useState } from "react";

function App() {
    const [counter, setCounter] = useState(1);
    const handleIncrease = () => {
        setCounter(counter + 1)
    }
    return (
        <div className="App" style={{ padding: 20 }}>
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
}

export default App;

### Luu y
- initial Value chi duoc dung cho lan dau tien
- Component duoc rerender sau khi setState

- setState voi callback
const handleIncrease = () => {
    setCounter(prevState => prevState+1)
    setCounter(prevState => prevState+1)    
    setCounter(prevState => prevState+1)    
}

- initial State voi callback
const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total+ cur);
    return total;
});

- set State bang gia tri moi
const [info, setInfo] = useState({
    name: "Nguyen Van A",
    age: 17;
    address: "Ha No, Vietnam"
})
const handleUpdate = () => {
    setInfo({
        ...info,
        bio: "xxx"
    })
}
console.log(info) //Output?
return (
    <div className="App" style={{ padding: 20 }}>
        <h1>{JSON.stringify(info)}</h1>            
        <button onClick={handleUpdate}>Update</button>
    </div>
)