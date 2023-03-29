# Vi du

### Random gift

const gifts = ["CPU 19", "RAM 32GB RGB", "RGB Keyboard"]

function App() {
    const [gift, setGift] = useState()
    const randomGift = () => {
        const index = Math.floor(Math.random() * gifts.length)
        setGift(gifts[index]);
    }
    return (
        <div className="App" style={{ padding: 20 }}>
            <h1>{gift || "Chua co phan thuong"}</h1>
            <button onClick={randomGift}>Lay thuong</button>
        </div>
    )
}

### Two-way binding

function App() {
    const [name, setName] = useState("")
    return (
        <div className="App" style={{ padding: 32 }}>
            <input
                value={name}
            onChange = {e => setName(e.target.value)}/>
            <button onClick={() => setName("Chi")}> Change </button>
        </div>
    )
}

//Response from API
const courses = [{
    id: 1,
    name: "HTML, CSS"
}, {
    id: 2,
    name: "JavaScript"
}, {
    id: 3,
    name: "ReactJS"
}]
function App() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [checked, setChecked] = useState(2)
    const [checked2, setChecked2] = useState([])

    const handleSubmit = () => {
        console.log({ id: checked })
        console.log({ ids: checked2 })
    }

    const handleCheck = (id) => {
        setChecked2(prev => {
            const isChecked = checked2.includes(id)
            if (isChecked) {
                //unchecked
                return checked2.filter(item => item !== id)
            } else {
                return [...prev, id]
            }
        })
    }

    return (
        <div className="App" style={{ padding: 32 }}>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                value={email}
                onChange={e => setEmail(e.target.value)}
            />

            {courses.map(course => (
                <div key={course.id}>
                    <input
                        type="radio"
                        checked={checked === course.id}
                        onChange={() => setChecked(course.id)}
                    />
                    {course.name}
                </div>
            ))}

            {courses.map(course => (
                <div key={course.id}>
                    <input
                        type="checkbox"
                        checked={checked2.includes(course.id)}
                        onChange={() => handleCheck(course.id)}
                    />
                    {course.name}
                </div>
            ))}

            <button onClick={() => handleSubmit()}> Register </button>
        </div>
    )
}
### Todo list

function App() {
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem("jobs")) //JSON type
        console.log(storageJobs)
        return storageJobs ?? []
    })
    const [job, setJob] = useState("")

    const handleSubmit = () => {
        setJobs(prev => {
            const newJobs = [...prev, job]

            //Save to local storage
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem("jobs, ", jsonJobs)

            return newJobs
        })
        setJob("")
    }

    return (
        <div className="App" style={{ padding: 32 }}>
            <input
                value={job}
                onChange={e => setJob(e.target.value)}
            />

            <button onClick={handleSubmit}>Add</button>

            <ul>
                {/* {console.log(jobs)} */}
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    )
}

export default App;
