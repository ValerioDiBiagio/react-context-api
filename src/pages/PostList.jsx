import PostCard from "../components/PostCard";
import { usePosts } from "../contexts/PostsContext";

export default function PostList() {

    const { postList } = usePosts();

    return (

        <ul>
            {postList.map(post => <PostCard key={post.id} post={post} />)}

        </ul>
    )
}