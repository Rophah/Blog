import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data , setData] = useState(null);

    const [isPending, setIsPending] = useState(true);

    const [error, setError] = useState(null);
    // const [name, setName] = useState('Seyi');

    // const handleDelete = (id) => {
    //     const del = blogs.filter(blog => blog.id !== id );
    //     setBlogs(del);
    // }
    
    useEffect(() => {
        setTimeout(() => {fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('Could not find data for the resource');
                }
                return res.json();
            })
            .then(data => {
                setError(null);
                setData(data);
                setIsPending(false);    
            })
            .catch((err) => {
                
                setError(err.message);
                setIsPending(false); 
            })    
        }, 1000);
        
    }, [url]);

    return  {data, isPending, error};
}
 
export default useFetch;