import { GET_COMMENTS, GET_COMMENT } from "../utils/consts";

const comments = (state = {}, action) => {
  const { comments, comment } = action;
  switch (action.type) {
    case GET_COMMENTS:
      return comments;
    case GET_COMMENT:
      return comment;
    default:
      return state;
  }
};

export default comments;
