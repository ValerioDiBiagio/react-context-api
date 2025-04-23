import { Link } from "react-router-dom";
import { useContext } from "react";
import { PostsContext } from "../contexts/PostsContext";
import PostCard from "../components/PostCard";

export default function PostList() {

    const { postList } = useContext(PostsContext);

    return (
        <ul>
            {postList.map(post => <PostCard key={post.id} post={post} />)}

        </ul>
    )
}