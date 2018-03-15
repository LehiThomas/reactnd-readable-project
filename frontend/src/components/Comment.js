import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Panel,
  FormGroup,
  FormControl,
  Button,
  Glyphicon
} from "react-bootstrap";

import { deleteComment, updateComment } from "../actions/comments";
import { calculateDate } from "../utils/helpers";

import Vote from "./Vote";

class Comment extends Component {
  state = {
    comment: this.props.comment.body || "",
    canEdit: false
  };

  handleChange = e => {
    this.setState({
      comment: e.target.value
    });
  };

  editComment = () => {
    let canEdit = this.state.canEdit ? false : true;
    this.setState({
      canEdit
    });
  };

  saveComment = comment => {
    comment = {
      ...comment,
      author: comment.author,
      body: this.state.comment,
      parentId: comment.parentId
    };

    this.props.updateComment(comment);
    this.setState({
      canEdit: this.state.canEdit ? false : true
    });
  };

  renderComment = comment => {
    if (this.state.canEdit) {
      return (
        <form>
          <FormGroup controlId="body">
            <FormControl
              componentClass="textarea"
              value={this.state.comment}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button
            bsStyle="success"
            bsSize="xsmall"
            onClick={() => this.saveComment(comment)}
          >
            <Glyphicon glyph="ok" /> Save
          </Button>
          <Button bsStyle="danger" bsSize="xsmall" onClick={this.editComment}>
            <Glyphicon glyph="trash" /> Cancel
          </Button>
        </form>
      );
    } else {
      return (
        <div>
          <h4>{comment.title}</h4>
          <h6>
            {comment.author} | Date Posted: {calculateDate(comment.timestamp)}
          </h6>
          <p>{comment.body}</p>
          <Vote item={comment} />
        </div>
      );
    }
  };

  render() {
    const { comment } = this.props;
    return (
      <Panel>
        {this.renderComment(comment)}
        {!this.state.canEdit && (
          <div>
            <Button bsStyle="primary" bsSize="small" onClick={this.editComment}>
              <Glyphicon glyph="pencil" /> Edit Comment
            </Button>
            <Button
              bsStyle="danger"
              bsSize="small"
              onClick={() => this.props.deleteComment(comment)}
            >
              <Glyphicon glyph="remove" /> Delete Comment
            </Button>
          </div>
        )}
      </Panel>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteComment: comment => dispatch(deleteComment(comment)),
  updateComment: comment => dispatch(updateComment(comment))
});

export default connect(null, mapDispatchToProps)(Comment);
