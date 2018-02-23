import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { fetchCategories } from '../actions/categories';

class Header extends Component {

    componentDidMount() {
        this.props.getCategories()
      }

    render() {
        const { categories } = this.props
        console.log(categories)
        // const list = categories.map((category, index) => {
        //     return (
        //         <MenuItem key={index} >
        //             category.name
        //             {/* <Link to={`/${category.name}`}>{category.name}</Link> */}
        //         </MenuItem>
        //     )
        // })

        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#home">React Readables</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        Home
                    </NavItem>
                    <NavDropdown eventKey={2} title="Dropdown" id="basic-nav-dropdown">
                        {/* { list } */}
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
        categories: categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: () => dispatch(fetchCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);