# Tac dung
1. Update DOM (tab title)
2. Call API
3. Listen DOM events (scroll to top, resize)
4. Cleanup (remove listener/ unsubscribe), clear timers) 


## useEffect(callback)
- Goi callback moi khi component re-render 
- Goi call back sau khi them component vao DOM

## useEffect(callback, [])
- Chi goi callback sau khi component mounted (1 lan duy nhat)

## useEffect(callback, [dependencies])
- callback se duoc goi lai moi khi dependencies thay doi

------------------------------------------------
### Chu y
- Callback luon duoc goi sau khi component mounted
- Thu tu chay: return() => useEffect()
    Callback trong useEffect chỉ được gọi sau khi element đã được render vào DOM.
- cleanup function luon duoc goi truoc khi component unmounted
- cleanup function luon duoc goi truoc khi callback duoc goi

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
    const [showGoToTop, setShowGoToTop] = useState(false)

    //Call API
    useEffect(() => {
        //Change title in Tab
        document.title = title

        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [title, type])

    useEffect(() => {
        const handleScroll = () => {
            // if (window.scrollY >= 200) { 
            //     setShowGoToTop(true)
            // } else {
            //     setShowGoToTop(false)
            // }
            setShowGoToTop(window.scrollY >= 200)
        }
        window.addEventListener('scroll', handleScroll)
    }, [])


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
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}>
                    Go to top
                </button>
            )}
        </div>
    )
}

export default Content