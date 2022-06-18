
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yoshi');
    const [isPending, setIsPending] = useState(false);
    const History = useHistory();

    const formsub = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
  
        setIsPending(true);
        fetch('http://localhost:7000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New post added');
            setIsPending(false);
        });
        History.push('/');
    }

    return ( 
        <div className="create">
            <form onSubmit={ formsub }>
            <h2>Create a new blog</h2>
            <label>Blog title:</label>
            <input 
                type= "text"
                value= {title }
                onChange = {(e) => setTitle(e.target.value)} />
            <label>Blog body</label>
            <textarea 
                required
                onChange={ (e) => setBody(e.target.value)}
            />
            <label>Blog author</label>
            <select value= {author}  onChange = {(e) => setAuthor(e.target.value)}>
                <option value="mario">Mario</option>
                <option value="yoshi">Yoshi</option>
            </select>
            
            {isPending && <button>Add blog</button>}
            {!isPending && <button>Adding blog</button>}
            {/* <p>{ title }</p>
            <p>{ body }</p>
            <p>{author}</p> */}
            </form>
        </div>
     );
}
 
export default Create;