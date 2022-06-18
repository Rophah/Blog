import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const {data: blog, isPending, error} = useFetch(`http://localhost:7000/blogs/${id}`);

    const handleClick = () =>{
        fetch('http://localhost:7000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-preview">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {blog && (
                <article>
                    <h2>{blog && blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p>{blog.body}</p>
                    <button onClick={handleClick}>Delete blog </button>
                </article>
            )}        
        </div>
        
     );
}
 
export default BlogDetails;