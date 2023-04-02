//in App.js
//Fake comments
function emitComment(id) {
    setInterval(() => {
        //add eventListener, khi su kien xay ra trong DOM, DOM tu phat. Nhung trong truong hop nay, tu phat Event.
        window.dispatchEvent(
            new CustomEvent(`lesson-${id}`, {
                detail: `Noi dung comment cua lesson ${id}`
            })
        )
    }, 2000)
}

emitComment(1)
emitComment(2)
emitComment(3)

//in Content.js
import { useEffect } from "react";
import { useState } from "react";

const lessons = [
    {
        id: 1,
        name: "ReactJS la gi?"
    }, {
        id: 2,
        name: "SPA/MPA la gi?"
    }, {
        id: 3,
        name: "Arrow function"
    }
]

function Content() {
    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail)
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        
        //cleanup function
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])

    return (
        <div>
            {lessons.map(lesson => (
                <li
                    key={lesson.id}
                    style={{
                        color: lessonId === lesson.id ? "red" : "#333"
                    }}
                    onClick={() => setLessonId(lesson.id)}
                >
                    {lesson.name}
                </li>
            ))}
        </div>
    )
}

export default Content

