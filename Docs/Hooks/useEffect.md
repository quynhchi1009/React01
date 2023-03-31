# Tac dung
1. Update DOM (tab title)
2. Call API
3. Listen DOM events (scroll to top, resize)
4. Cleanup (remove listener/ unsubscribe), clear timers) 


## useEffect(callback)
- Goi callback moi khi component re-render 
- Goi call back sau khi them component vao DOM

## useEffect(callback, [])
- Chi goi callback sau khi component mounted

## useEffect(callback, [dependencies])
- callback se duoc goi lai moi khi dependencies thay doi

------------------------------------------------
### Chu y
- Callback luon duoc goi sau khi component mounted
- Thu tu chay: return() => useEffect()
    Callback trong useEffect chỉ được gọi sau khi element đã được render vào DOM.
- cleanup function luon duoc goi truoc khi component unmounted

useEffect(callback)
useEffect(callback, [])
useEffect(callback, [deps])

import { useEffect } from "react";
import { useState } from "react";

const tabs = ["posts", "comments", "albums"]

function Content() {
    const [title, setTitle] = useState("")
    const [posts, setPosts] = useState([])
    const [type, setType] = useState("posts")

    useEffect(() => {
        //Change title in Tab
        document.title = title

        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [title, type])


    return (
        <div>
            {tabs.map(tab => (
                <button
                    key="tab"
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}

            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            {/* { console.log("render")} */}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content
