import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import { fetchCategories } from "../actions/categories";

class Header extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">React Readable</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavDropdown eventKey={2} title="Categories" id="basic-nav-dropdown">
            {Array.isArray(categories) &&
              categories.map((category, index) => (
                <MenuItem key={category + index} eventKey={index}>
                  <Link to={`/${category.name}`}>{category.name}</Link>
                </MenuItem>
              ))}
            <MenuItem divider />
            <MenuItem eventKey={2.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories: categories.categories
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(fetchCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
