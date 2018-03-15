import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import { Panel, ListGroup, DropdownButton, MenuItem } from "react-bootstrap";

import { fetchPosts, addPost } from "../actions/posts";
import { sortByDate, sortByVotes } from "../utils/helpers";

import PostItem from "../components/PostItem";
import AddPostComment from "../components/addPostComment";

class PostListContainer extends Component {
  constructor() {
    super();
    this.state = {
      sortBy: "date"
    };
  }

  componentDidMount() {
    const category = this.props.match.params.category;
    this.props.fetchPosts(category);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.category !== this.props.match.params.category) {
      const category = nextProps.match.params.category;
      this.props.fetchPosts(category);
    }
  }

  setSortBy = sortBy => {
    this.setState({ sortBy });
  };

  sortPosts = (posts, sortBy) => {
    if (posts !== undefined) {
      return sortBy === "votes" ? sortByVotes(posts) : sortByDate(posts);
    }
  };

  postPost = form => {
    const post = {
      author: form.author,
      body: form.body,
      category: form.category,
      title: form.title,
      voteScore: 0,
      commentCount: 0,
      timestamp: Date.now(),
      id: uuid.v4()
    };

    this.props.addPost(post);
  };

  render() {
    const { posts, match } = this.props;
    const sortedPosts = this.sortPosts(posts, this.state.sortBy);

    return (
      <div>
        <DropdownButton
          title="Sort By"
          id="sortByDropdown"
          onChange={this.handleSorting}
        >
          <MenuItem value="date">Most Recent</MenuItem>
          <MenuItem value="votes">Votes</MenuItem>
        </DropdownButton>
        <ListGroup>
          {posts === undefined || posts.length < 1 ? (
            <div>
              <h2>
                No posts in {match.params.category && match.params.category}.
              </h2>
            </div>
          ) : (
            sortedPosts.map((post, key) => <PostItem key={key} post={post} />)
          )}
        </ListGroup>
        <Panel.Body>
          <div>Add a new post</div>
          <AddPostComment type="post" submitPostComment={this.postPost} />
        </Panel.Body>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return { posts: posts.posts };
};

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPost(post)),
  fetchPosts: category => dispatch(fetchPosts(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);
