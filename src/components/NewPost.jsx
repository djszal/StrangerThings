import "./NewPost.css"


const CreateNewPost = () => {
    
    return (
        <>
        <h1>New Post</h1>
        <form className="new-post">
            <label> 
                Title: 
                <input type="text" name="title"/>
            </label>
            <label> 
                Description: 
                <input type="text" name="description"/>
            </label>
            <label> 
                Price: 
                <input type="text" name="price"/>
            </label>
            <label> 
                Location: 
                <input type="text" name="location"/>
            </label>
            <label> 
                Willing to Deliver? 
                <input type="checkbox" name="name"/>
            </label>
            <button type="submit">Create New Post</button>


        </form>
        </>

    )



}

export default CreateNewPost; 