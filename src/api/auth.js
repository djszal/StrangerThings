
const baseUrl = "https://strangers-things.herokuapp.com/api";
const cohort = "/2211-FTB-ET-WEB-FT"; 

// export registerUser and fetchUser

export const fetchUser = async (username, password) => {
    try {
        const response = await fetch(`${baseUrl}${cohort}/posts`, {
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
        console.log(response)
    } catch(error) {
        console.error(error); 
    }
} 

fetchUser()

