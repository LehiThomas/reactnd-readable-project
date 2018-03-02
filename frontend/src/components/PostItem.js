import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";

const PostItem = props => {
  const { post } = props;
  return (
    <li className="list-group-item" onClick={() => {}}>
      <Grid>
        <Row className="show-grid">
          <Col md={11}>
            <h3>
              <Link
                to={`/${post.category}/${post.id}`}
                style={{ color: "#1890ff" }}
              >
                {post.title}
              </Link>
            </h3>
            <h5>By: {post.author}</h5>
            <p>
              Category: {post.category} | Date Posted: {post.timestamp} | Votes:{" "}
              {post.voteScore}
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
