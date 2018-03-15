import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";
import { getDate } from "../utils/helpers";

const PostItem = props => {
  const { post } = props;
  return (
    <li className="list-group-item">
      <Grid>
        <Link to={`/${post.category}/${post.id}`} style={{ color: "#000" }}>
          <Row className="show-grid">
            <Col md={11}>
              <h3>{post.title}</h3>
              <h5>By: {post.author}</h5>
              <p>
                Date Posted: {getDate(post.timestamp)} | Comments:{" "}
                {post.commentCount} | Votes: {post.voteScore}
              </p>
            </Col>
          </Row>
        </Link>
      </Grid>
    </li>
  );
};

export default PostItem;
