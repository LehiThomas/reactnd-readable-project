import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  Panel,
  FormGroup,
  FormControl,
  Button,
  Glyphicon,
  ControlLabel
} from "react-bootstrap";

import { fetchPost, deletePost, updatePost } from "../actions/posts";
import { fetchComments, addComment } from "../actions/comments";

import Post from "../components/Post";
import Comment from "../components/Comment";
import Vote from "../components/Vote";
import AddPostComment from "../components/addPostComment";

class PostContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: "",
      body: this.props.post.body,
      title: this.props.post.title,
      redirect: false,
      canEdit: false
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchPost(id).then(function() {
      if (this.props) {
        return <Redirect to="/404" />;
      }
    });
    this.props.fetchComments(id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      const id = nextProps.match.params.id;
      this.props.fetchPost(id);
      this.props.fetchComments(id);
    }
  }

  renderComments = comments => {
    if (comments !== undefined && comments.length > 0) {
      return comments.map((comment, key) => (
        <Comment comment={comment} key={key} />
      ));
    }
  };

  postComment = form => {
    const postId = this.props.match.params.id;
    const comment = {
      author: form.author,
      body: form.body,
      parentId: postId
    };

    this.props.addComment(comment);
  };

  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleBodyChange = e => {
    this.setState({
      body: e.target.value
    });
  };

  editPost = () => {
    let canEdit = this.state.canEdit ? false : true;
    this.setState({
      canEdit
    });
  };

  delete = post => {
    this.props.deletePost(post);
    this.setState({
      redirect: true
    });
  };

  savePost = post => {
    post = {
      ...post,
      title: this.state.title,
      body: this.state.body
    };

    this.props.updatePost(post);
    this.setState({
      canEdit: this.state.canEdit ? false : true
    });
  };

  renderPost = () => {
    const { post, comments } = this.props;
    if (this.state.canEdit) {
      return (
        <form>
          <FormGroup controlId="body">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
            <ControlLabel>Post</ControlLabel>
            <FormControl
              componentClass="textarea"
              value={this.state.body}
              onChange={this.handleBodyChange}
            />
          </FormGroup>
          <Button
            bsStyle="success"
            bsSize="xsmall"
            onClick={() => this.savePost(post)}
          >
            <Glyphicon glyph="ok" /> Save
          </Button>
          <Button bsStyle="danger" bsSize="xsmall" onClick={this.editPost}>
            <Glyphicon glyph="trash" /> Cancel
          </Button>
        </form>
      );
    } else {
      return (
        <div>
          <Panel.Body>
            <Post post={post} />
            <Vote item={post} />
            <div>
              <Button bsStyle="primary" bsSize="small" onClick={this.editPost}>
                <Glyphicon glyph="pencil" /> Edit Post
              </Button>
              <Button
                bsStyle="danger"
                bsSize="small"
                onClick={() => this.delete(post)}
              >
                <Glyphicon glyph="remove" /> Delete Post
              </Button>
            </div>
          </Panel.Body>
          <Panel.Body>{this.renderComments(comments)}</Panel.Body>
          <Panel.Body>
            <div>Add a new comment</div>
            <AddPostComment
              type="comment"
              submitPostComment={this.postComment}
            />
          </Panel.Body>
        </div>
      );
    }
  };

  render() {
    const { post } = this.props;

    // if (Object.keys(post).length === 0) {
    //   return <Redirect to="/404" />;
    // }

    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    return <Panel>{this.renderPost(post)}</Panel>;
  }
}

const mapStateToProps = ({ posts, comments }) => ({
  post: posts,
  comments: comments
});

const mapDispatchToProps = dispatch => ({
  fetchPost: id => dispatch(fetchPost(id)),
  fetchComments: id => dispatch(fetchComments(id)),
  addComment: comment => dispatch(addComment(comment)),
  deletePost: post => dispatch(deletePost(post)),
  updatePost: post => dispatch(updatePost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
