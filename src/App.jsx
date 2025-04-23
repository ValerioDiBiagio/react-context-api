import { BrowserRouter, Routes, Route } from "react-router-dom"
import ChiSiamo from "./pages/Chi-siamo"
import Homepage from "./pages/Homepage"
import DefaultLayout from "./layouts/DefaultLayout"
import SinglePost from "./pages/Single-post"
import NotFound from "./pages/NotFound"
import PostsPage from "./pages/PostsPage"
import { PostsContext } from "./contexts/PostsContext"
import { useEffect, useState } from "react"
import axios from "axios"

function App() {

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
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route path="/" element={<Homepage />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/lista-post" element={<PostsPage />} />
            <Route path="/lista-post/:id" element={<SinglePost />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </PostsContext.Provider>
  )
}

export default App
