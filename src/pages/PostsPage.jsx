import PostList from "./PostList";
import Alert from "../components/Alert";

export default function PostsPage() {
    return (
        <section>
            <Alert />
            <h2>Posts</h2>
            <PostList />
        </section>
    )
} 