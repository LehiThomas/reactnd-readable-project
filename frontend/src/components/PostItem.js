import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

const PostItem = props => {
  const { post } = props;
  return (
    <li className="list-group-item" onClick={() => {}}>
      <Grid>
        <Row className="show-grid">
          <Col md={1} className="text-center">
            <h1>{post.voteScore}</h1>
          </Col>
          <Col md={11}>
            <h3>{post.title}</h3>
            <p>
              Category: {post.category} | Date Posted: {post.timestamp}
            </p>
            <p>{post.body}</p>
            <p>
              <em>Comments: {post.commentCount}</em>
            </p>
          </Col>
        </Row>
      </Grid>
    </li>
  );
};

export default PostItem;
