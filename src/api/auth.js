
const baseUrl = "https://strangers-things.herokuapp.com/api";
const cohort = "/2211-FTB-ET-WEB-FT"; 


// (5)Below is what is used when we click the register button. the username and password are sent to the api
// The function below fetches the token created by the api for a new register from 'Login.jsx'
export const registerUser = async (username, password) => {
    try {
        const response = await fetch(`${baseUrl}${cohort}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username,
                    password,
                    }
        })
    });                    
        const token = ( await response.json()).data.token

    //     const { data: { token },
    // } = await response.json();
        //  console.log("hey", token)
         return token
        // const data = await response.json();
        // console.log("my Response ", data)
    } catch(error) {
        console.error(error); 
    }
} 

// Once the above token is received by user register with username and password, below takes that token in order to grab the data from the new user from the API
// Below shows data of new registered user data from the API
export const fetchMe = async (token)  => {
    try { 
        const response = await fetch(`${baseUrl}${cohort}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
        const { data }  = await response.json(); 
        // console.log("user data on api", data)
        return data
    } catch (error) {
        console.error(error); 
    }
}



export const createNewPost = async (sameToken, title, description, price, location, willDeliver ) => {
    try {
       const response = await fetch(`${baseUrl}${cohort}/posts`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${sameToken}`
  },
  body: JSON.stringify({
    post: {
      title, 
      description, 
      price, 
      willDeliver, 
      location,
    }
  })
})
    const data  = await response.json();
    console.log("Post data from api ", data)
    return data
    } catch (error) {
        console.error(error); 
    }
}

export const loginUser = async (username,password) => {
    try {
        const response = await fetch(`${baseUrl}${cohort}/users/login`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username,
      password,
    }
    })
})
    const usertoken  = (await response.json()).data.token;
    console.log("userToken ", usertoken);
    return usertoken;
    } catch (error) {
        console.error(error); 
    }
}

export const deletePost = async (token, postIdToDelete) => {
    try {
        const response = await fetch(`${baseUrl}${cohort}/posts/${postIdToDelete}`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            }
          })
          const reply = await response.json()
          console.log("delete reply ", reply)
    } catch (error) {
        console.error(error); 
    }
    

}

