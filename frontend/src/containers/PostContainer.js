import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/posts";
import { ListGroup, Button, DropdownButton, MenuItem } from "react-bootstrap";
import { sortByDate, sortByVotes } from "../utils/helpers";

import PostItem from "../components/PostItem";
constructor() {
  super();
  this.state = {
    sortBy: "date"
  };
}

class PostContainer extends Component {
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
    return sortBy === "votes" ? sortByVotes(posts) : sortByDate(posts);
  };

  render() {
    const { posts, match } = this.props;
    const sortedPosts = this.sortPosts(posts, this.state.sortBy);

    return (
      <div>
        <ListGroup>
          {posts === undefined || posts.length < 1 ? (
            <div>
              <h2>
                No posts in {match.params.category && match.params.category}.
              </h2>
              <Button bsStyle="primary">Add a Post</Button>
            </div>
          ) : (
            posts.map((post, key) => <PostItem key={key} post={post} />)
          )}
        </ListGroup>
        <DropdownButton title="Sort By" onChange={this.handleSorting}>
          <MenuItem value="date">Most Recent</MenuItem>
          <MenuItem value="votes">Votes</MenuItem>
        </DropdownButton>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return { posts: posts.posts };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: category => dispatch(fetchPosts(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
