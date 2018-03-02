import { GET_POSTS, GET_POST } from "../utils/consts";

const posts = (state = {}, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        posts: action.posts
      };
    case GET_POST:
      return action.post;
    default:
      return state;
  }
};

export default posts;
