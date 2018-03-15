import * as API from "../utils/api";
import { GET_POSTS, GET_POST } from "../utils/consts";

export const fetchPosts = category => dispatch => {
  return API.getPosts(category).then(posts =>
    dispatch({
      type: GET_POSTS,
      posts
    })
  );
};

export const fetchPost = id => {
  return dispatch => {
    return API.getPost(id).then(post =>
      dispatch({
        type: GET_POST,
        post
      })
    );
  };
};

export const votePost = (id, option) => {
  return dispatch => {
    return API.votePost(id, option).then(post =>
      API.getPosts().then(posts =>
        dispatch({
          type: GET_POSTS,
          posts
        })
      )
    );
  };
};

export const votePostDetail = (id, option) => {
  return dispatch => {
    return API.votePost(id, option).then(post =>
      API.getPost(post.id).then(post =>
        dispatch({
          type: GET_POST,
          post
        })
      )
    );
  };
};

export const addPost = post => {
  return dispatch => {
    return API.addPost(post).then(post =>
      API.getPosts(post.category).then(posts =>
        dispatch({
          type: GET_POSTS,
          posts
        })
      )
    );
  };
};

export const deletePost = post => {
  return dispatch => {
    return API.deletePost(post).then(post =>
      API.getPosts().then(posts =>
        dispatch({
          type: GET_POSTS,
          posts
        })
      )
    );
  };
};

export const updatePost = post => {
  return dispatch => {
    return API.updatePost(post).then(post =>
      API.getPost(post.id).then(post =>
        dispatch({
          type: GET_POST,
          post
        })
      )
    );
  };
};
