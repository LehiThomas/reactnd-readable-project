import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { getDate } from "../utils/helpers";

const Post = props => {
  const { post } = props;
  return (
    <li className="list-group-item">
      <Grid>
        <Row className="show-grid">
          <Col md={11}>
            <h3>{post.title}</h3>
            <h5>By: {post.author}</h5>
            <p>
              Category: {post.category} | Date Posted: {getDate(post.timestamp)}{" "}
              | Votes: {post.voteScore}
            </p>
            <p>{post.body}</p>
          </Col>
        </Row>
      </Grid>
    </li>
  );
};

export default Post;
