import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Panel, PanelBody } from "react-bootstrap";

import { fetchPost } from "../actions/posts";
import { fetchComments } from "../actions/comments";

class PostContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchPost(id);
    this.props.fetchComments(id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      const id = nextProps.match.params.id;
      this.props.fetchPost(id);
      this.props.fetchComments(id);
    }
  }
  render() {
    const { post, comments } = this.props;
    return (
      <Panel>
        <Panel.Body>Basic panel example</Panel.Body>
      </Panel>
    );
  }
}
const mapStateToProps = ({ posts, comments }) => ({
  post: posts,
  comments: comments
});

const mapDispatchToProps = dispatch => ({
  fetchPost: id => dispatch(fetchPost(id)),
  fetchComments: id => dispatch(fetchComments(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
