const baseUrl = "https://strangers-things.herokuapp.com/api";
const cohort = "/2211-FTB-ET-WEB-FT";

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${baseUrl}${cohort}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const token = (await response.json()).data.token;
    return token;
  } catch (error) {
    console.error(error);
  }
};



export const fetchMe = async (token) => {
  try {
    const response = await fetch(`${baseUrl}${cohort}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = await response.json();
    console.log("userssss datazzz", data.messages);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createNewPost = async (
  sameToken,
  title,
  description,
  price,
  location,
  willDeliver
) => {
  try {
    const response = await fetch(`${baseUrl}${cohort}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sameToken}`,
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          location,
          willDeliver,
        },
      }),
    });
    const data = await response.json();
    console.log("new post", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${baseUrl}${cohort}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const usertoken = (await response.json()).data.token;
    return usertoken;
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = async (token, postIdToDelete) => {
  try {
    const response = await fetch(
      `${baseUrl}${cohort}/posts/${postIdToDelete}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const reply = await response.json();
    return reply;
  } catch (error) {
    console.error(error);
  }
};

export const messageUser = async (postId, content, token) => {
  try {
    const response = await fetch(
      `${baseUrl}${cohort}/posts/${postId}/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          message: {
            content: content,
          },
        }),
      }
    );
    const reply = await response.json();
    console.log("message response", reply);
    return reply;
  } catch (error) {
    console.error(error);
  }
};
