import { GET_COMMENTS } from "../utils/consts";

const comments = (state = {}, action) => {
  const { comments } = action;
  switch (action.type) {
    case GET_COMMENTS:
      return comments;
    default:
      return state;
  }
};

export default comments;
