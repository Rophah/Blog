import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:7000/blogs');
    //The empty [] allows the useEffect to be rendered only in the initial run of the program i.e it is ran only once on the first render 

        //     useEffect() -- accepts the second argument which is an empty array and is called dependency. When you leave dependency array empty, the callback in useEffect is invoked only once when component renders to the DOM but never again invoked even if component re-renders.

        // Proviging state data
        // - When you provide state value/data as dependency to the dependency array, callback fires each time that value changes
    return ( 
 
        <div className="home">
            {error && <div>Could not find data for this resource</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs= { blogs } title = 'All blogs!' />}
            

            {/* 
            {blogs && <BlogList blogs= {blogs} title = 'All blogs!' handle={handleDelete} />}
            <BlogList blogs= {blogs.filter((blog) => blog.author === 'mario' )} title = "Mario's blogs!" handleDelete={handleDelete}/> */}

            {/* <button onClick={ () => setName('Lase')}>Change name</button>
            <p>{ name }</p> */}
        </div>
    );
}
 
export default Home;