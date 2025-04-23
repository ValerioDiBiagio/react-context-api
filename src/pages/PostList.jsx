import { Link } from "react-router-dom";
import { useContext } from "react";
import { PostsContext } from "../contexts/PostsContext";

export default function PostList() {

    const { postList } = useContext(PostsContext);

    return (
        <ul>
            {postList.map(post =>
                <li key={post.id}>
                    <h3>{post.title}</h3>
                    <Link to={`/lista-post/${post.id}`}>'Clicca qui per il post completo'</Link>
                </li>
            )}
        </ul>
    )
}