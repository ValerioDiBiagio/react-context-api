import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const PostsContext = createContext()

export function PostsProvider({ children }) {

    const endpoint = ' https://jsonplaceholder.typicode.com/posts'

    const [postList, setPostList] = useState([]);

    useEffect(() => {
        axios.get(endpoint)
            .then(res => setPostList(res.data))
            .catch(err => {
                alert('Indirizzo errato')
            })
    }, [])

    return (
        <PostsContext.Provider value={{ postList, setPostList }}>
            {children}

        </PostsContext.Provider>
    )
}

export function usePosts() {
    const context = useContext(PostsContext);
    return context;
}