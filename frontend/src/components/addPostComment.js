import React, { Component } from "react";
import { connect } from "react-redux";
import {
  FormGroup,
  FormControl,
  Button,
  Glyphicon,
  DropdownButton,
  MenuItem
} from "react-bootstrap";

import { fetchCategories } from "../actions/categories";

class AddPostComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      body: "",
      category: "",
      categories: []
    };
  }

  componentDidMount() {
    this.setState({
      categories: this.props.getCategories()
    });
  }

  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleAuthorChange = e => {
    this.setState({
      author: e.target.value
    });
  };

  handleBodyChange = e => {
    this.setState({
      body: e.target.value
    });
  };

  setCategory = e => {
    this.setState({
      category: e
    });
  };

  clearForm = () => {
    console.log("HI");
    this.setState({
      title: "",
      author: "",
      body: ""
    });
  };

  submit = () => {
    const { title, author, body, category } = this.state;
    if (author === "" || body === "") {
      alert("Please fill in all fields before submitting");
    } else if (
      (this.props.type === "post" && title === "") ||
      category === ""
    ) {
      alert("Please fill in all fields before submitting");
    } else {
      this.props.submitPostComment(this.state);
      this.clearForm();
    }
  };

  render() {
    const { categories } = this.props;
    return (
      <form>
        <FormGroup controlId="body">
          {this.props.type === "post" && (
            <div>
              <DropdownButton
                title="Category"
                placeholder="Category"
                id="category"
                value={this.state.category}
                onSelect={this.setCategory}
              >
                <MenuItem value="Category">Category</MenuItem>
                {Array.isArray(categories) &&
                  categories.map((category, index) => (
                    <MenuItem key={category + index} eventKey={category.name}>
                      {category.name}
                    </MenuItem>
                  ))}
              </DropdownButton>
              <FormControl
                type="text"
                value={this.state.title}
                placeholder="Title"
                onChange={this.handleTitleChange}
              />
            </div>
          )}
          <FormControl
            type="text"
            value={this.state.author}
            placeholder="Author"
            onChange={this.handleAuthorChange}
          />
          <FormControl
            componentClass="textarea"
            value={this.state.body}
            placeholder="Write message here..."
            onChange={this.handleBodyChange}
          />
        </FormGroup>
        <Button bsStyle="success" bsSize="xsmall" onClick={this.submit}>
          <Glyphicon glyph="ok" /> Submit
        </Button>
        <Button bsStyle="danger" bsSize="xsmall" onClick={this.clearForm}>
          <Glyphicon glyph="trash" /> Cancel
        </Button>
      </form>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories: categories.categories
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(fetchCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPostComment);
