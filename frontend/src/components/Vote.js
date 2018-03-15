import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Glyphicon } from "react-bootstrap";

import { votePost, votePostDetail } from "../actions/posts";
import { voteComment } from "../actions/comments";

class Vote extends Component {
  vote = increment => {
    const { item } = this.props;
    const isPost = "commentCount" in item;
    let vote;
    if (increment > 0) {
      vote = "upVote";
    } else {
      vote = "downVote";
    }
    if (isPost) {
      this.props.votePostDetail(item.id, vote);
    } else {
      this.props.voteComment(item.id, vote);
    }
  };

  render() {
    const { item } = this.props;
    const votes = item.voteScore;
    return (
      <span>
        <Button bsStyle="danger" bsSize="xsmall" onClick={() => this.vote(-1)}>
          <Glyphicon glyph="minus" />
        </Button>
        <span style={{ margin: 5 }}>
          <strong>{votes}</strong>
        </span>
        <Button bsStyle="success" bsSize="xsmall" onClick={() => this.vote(1)}>
          <Glyphicon glyph="plus" />
        </Button>
      </span>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  votePost: (id, option) => dispatch(votePost(id, option)),
  votePostDetail: (id, option) => dispatch(votePostDetail(id, option)),
  voteComment: (id, option) => dispatch(voteComment(id, option))
});

export default connect(null, mapDispatchToProps)(Vote);
