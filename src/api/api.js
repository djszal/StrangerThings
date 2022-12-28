const baseUrl = "https://strangers-things.herokuapp.com/api";
const cohort = "/2211-FTB-ET-WEB-FT";

export const getPosts = async (setPosts) => {
  try {
    const response = await fetch(`${baseUrl}${cohort}/posts`);
    const data = await response.json();
    // console.log(`getPosts API Call `, data);
    setPosts(data.data.posts);
  } catch (error) {
    console.error(error);
  }
};
