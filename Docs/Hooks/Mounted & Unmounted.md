Mounted: lap vao
Unmounted: thao ra

function Content() {
    return (
        <h1>Hello</h1>
    )
}

function App() {
    const [show, setShow] = useState(false)

    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <Content/>}
        </div>
    )
}