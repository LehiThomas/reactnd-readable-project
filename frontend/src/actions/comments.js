import * as API from "../utils/api";
import { GET_COMMENTS } from "../utils/consts";

export const getComments = comments => {
  return {
    type: GET_COMMENTS,
    comments
  };
};

export const fetchComments = id => {
  return dispatch => {
    return API.getComments(id).then(comments =>
      dispatch(getComments(comments))
    );
  };
};
