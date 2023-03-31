SAMPLE Project with useEffect

import { useEffect } from "react";
import { useState } from "react";

function Content() {

    const [count, setCount] = useState(1)

    // useEffect(() => {
    //     console.log(`Mounted or rerender ${count}`)
    //     return () => {
    //         console.log(`cleanup ${count}`)
    //     }
    // }, [count])

    const [avatar, setAvatar] = useState()

    //Khi avatar thay doi, xoa review anh khoi storage
    useEffect(() => { 
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => { 
        const file = e.target.files[0]; //object
        console.log(URL.createObjectURL(file)); //luu anh duoi dang url
        
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }

    return (
        <div>
            <h1>{count}</h1>

            {/* Khi nut clicke me! duoc an, setCount = count+ 1, rerender lai component, callback useEffect se duoc goi lai
            <button onClick={() => setCount(count + 1)}>
                Click me!
            </button> */}

            <input
                type="file"
                // multiple
                onChange={handlePreviewAvatar}
            /> {avatar && (
                <img src={avatar.preview} alt="" width="80%"/>
            )}
        </div>
    )
}

export default Content