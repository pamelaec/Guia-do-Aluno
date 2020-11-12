import React from 'react';
import {Link} from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = (props) => {
    return (
        <nav className="navbar  navbar-expand-md navbar-light" >           
            <Link to='/' className="navbar-brand">{props.logo}</Link>                      
        </nav>
    );
}

export default NavBar;