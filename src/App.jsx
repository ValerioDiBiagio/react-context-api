import { BrowserRouter, Routes, Route } from "react-router-dom"
import ChiSiamo from "./pages/Chi-siamo"
import Homepage from "./pages/Homepage"
import DefaultLayout from "./layouts/DefaultLayout"
import SinglePost from "./pages/Single-post"
import NotFound from "./pages/NotFound"
import PostsPage from "./pages/PostsPage"
import { PostsProvider } from "./contexts/PostsContext"
import { Alert } from "./contexts/AlertContext"

function App() {

  return (
    <Alert>
      <PostsProvider>
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
      </PostsProvider>
    </Alert>
  )
}

export default App
