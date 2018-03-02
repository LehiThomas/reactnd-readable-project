import * as API from "../utils/api";
import { GET_POSTS, GET_POST } from "../utils/consts";

export const fetchPosts = category => dispatch => {
  console.log(API.getPosts(category));
  API.getPosts(category).then(posts =>
    dispatch({
      type: GET_POSTS,
      posts
    })
  );
};

export const getPost = post => {
  return {
    type: GET_POST,
    post
  };
};

export const fetchPost = id => {
  return dispatch => {
    return API.getPost(id).then(post => dispatch(getPost(post)));
  };
};
