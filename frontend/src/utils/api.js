const api = "http://localhost:3001";

let token = window.localStorage.token;
if (!token)
  token = window.localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
  "Content-Type": "application/json"
};

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

//Posts
export const getPosts = category => {
  const url = category ? `${api}/${category}/posts` : `${api}/posts`;
  return fetch(url, { headers })
    .then(res => res.json())
    .then(data => data);
};

export const getPost = id =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));

export const addPost = post =>
  fetch(`${api}/posts/`, {
    method: "POST",
    headers,
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));

export const updatePost = post =>
  fetch(`${api}/posts/${post.id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));

export const deletePost = post =>
  fetch(`${api}/posts/${post.id}`, {
    method: "DELETE",
    headers
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));

export const votePost = (id, option) =>
  fetch(`${api}/posts/${id}`, {
    method: "POST",
    headers,
    body: JSON.stringify({ option })
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));

// Comments
export const getComments = id =>
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));

export const getComment = id =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));

export const addComment = comment => {
  const data = {
    ...comment,
    timeStamp: Date.now()
  };

  return fetch(`${api}/comments`, {
    method: "POST",
    headers,
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));
};

export const updateComment = comment => {
  return fetch(`${api}/comments/${comment.id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(comment)
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));
};

export const deleteComment = comment =>
  fetch(`${api}/comments/${comment.id}`, {
    method: "DELETE",
    headers
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));

export const voteComment = (id, option) =>
  fetch(`${api}/comments/${id}`, {
    method: "POST",
    headers,
    body: JSON.stringify({ option })
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));
