import { Link } from "react-router-dom"

export default function PostCard({ post }) {
    return (

        <li key={post.id}>
            <h3>{post.title}</h3>
            <Link to={`/lista-post/${post.id}`}>'Clicca qui per il post completo'</Link>
        </li>

    )
}