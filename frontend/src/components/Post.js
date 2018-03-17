import React from "react";
import { Panel, Well } from "react-bootstrap";
import { getDate } from "../utils/helpers";

import Vote from "./Vote";

const Post = props => {
  const { post } = props;
  return (
    <Panel>
      <h3>{post.title}</h3>
      <Well>{post.body}</Well>
      <p>
        By: {post.author} | Category: {post.category} | Date Posted:{" "}
        {getDate(post.timestamp)} | Votes: <Vote item={post} />
      </p>
    </Panel>
  );
};

export default Post;
