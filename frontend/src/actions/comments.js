import uuid from "uuid";
import * as API from "../utils/api";
import { GET_COMMENTS, GET_COMMENT } from "../utils/consts";

export const fetchComments = id => {
  return dispatch => {
    return API.getComments(id).then(comments =>
      dispatch({
        type: GET_COMMENTS,
        comments
      })
    );
  };
};

export const fetchComment = id => {
  return dispatch => {
    return API.getComment(id).then(comment =>
      dispatch({
        type: GET_COMMENT,
        comment
      })
    );
  };
};

export const voteComment = (id, option) => {
  return dispatch => {
    return API.voteComment(id, option).then(comment =>
      API.getComments(comment.parentId).then(comments =>
        dispatch({
          type: GET_COMMENTS,
          comments
        })
      )
    );
  };
};

export const addComment = comment => {
  comment = {
    ...comment,
    id: uuid.v4(),
    timestamp: Date.now()
  };

  return dispatch => {
    return API.addComment(comment).then(comment =>
      API.getComments(comment.parentId).then(comments =>
        dispatch({
          type: GET_COMMENTS,
          comments
        })
      )
    );
  };
};

export const deleteComment = comment => {
  return dispatch => {
    return API.deleteComment(comment).then(comment =>
      API.getComments(comment.parentId).then(comments =>
        dispatch({
          type: GET_COMMENTS,
          comments
        })
      )
    );
  };
};

export const updateComment = comment => {
  return dispatch => {
    return API.updateComment(comment).then(comment =>
      API.getComments(comment.parentId).then(comments =>
        dispatch({
          type: GET_COMMENTS,
          comments
        })
      )
    );
  };
};
