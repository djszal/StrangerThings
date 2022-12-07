
const baseUrl = "https://strangers-things.herokuapp.com/api";
const cohort = "/2211-FTB-ET-WEB-FT"; 



export const getPosts = async (setPosts) => {
    try {
        const response = await fetch(`${baseUrl}${cohort}/posts`); 
        const data = await response.json(); 
        // console.log(`getPosts API Call `, data);
        setPosts(data.data.posts);
        // Above. setPosts sets its parameter as the 'data' from the API. To pass along the API data without other objects ('see the console.log of the data in the console), we dot notation to move to the 'data' object and then the 'posts' object to pass along to App.jsx with the 'array' object only. Makes calling the objects within the array easier.  
    } catch(error) {
        console.error(error); 
    }
}

