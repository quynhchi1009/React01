import {useState} from 'react'
import Content from "./Content"
import './App.css'

export const ThemeContext = createContext()
 
function App() {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <ThemeContext.Provider value = {theme}>
            <div>
                <button onClick={toggleTheme}>
                    Toggle Theme
                </button>
                <Content/>
            </div>
        </ThemeContext.Provider>
    )
}

function Content() {
    return (
        <div>
            <Paragraph/> 
        </div>
    )
}

function Paragraph() {
    const theme = useContext(ThemeContext)
    return (
        <p className={theme}>Lorem ipsum .... </p>
    )
}