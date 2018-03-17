import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { getDate } from "../utils/helpers";

const PostItem = props => {
  const { post } = props;
  return (
    <Col xs={6} md={6}>
      <Link to={`/${post.category}/${post.id}`} style={{ color: "#000" }}>
        <h3>{post.title}</h3>
        <h5>By: {post.author}</h5>
        <p>
          Date Posted: {getDate(post.timestamp)} | Comments: {post.commentCount}{" "}
          | Votes: {post.voteScore}
        </p>
      </Link>
    </Col>
  );
};

export default PostItem;
