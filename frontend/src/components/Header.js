import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { getCategories, fetchCategories } from '../actions/categories';

class Header extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#home">React Readables</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">
                    Link
                    </NavItem>
                    <NavDropdown eventKey={2} title="Dropdown" id="basic-nav-dropdown">
                        {/* { getCategories.map(category => (){
                            <MenuItem eventKey={2.1}></MenuItem>
                        })} */}
                        <MenuItem eventKey={2.1}>Action</MenuItem>
                        <MenuItem eventKey={2.2}>Another action</MenuItem>
                        <MenuItem eventKey={2.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={2.4}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
                </Navbar>
        )
    }

}

const mapStateToProps = ({ categories }) => {
    return {
        categories: categories.categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: () => dispatch(fetchCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);