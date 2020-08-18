import React from 'react';
import {Link} from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = (props) => {
    return (
        <nav className="navbar  navbar-expand-md navbar-light" >
            <button className="navbar-toggler navbar-toggler-center" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link to='/' className="navbar-brand">{props.logo}</Link>
             <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
                <ul className="navbar-nav mr-auto">                    
                </ul>                    
            </div> 
        </nav>
    );
}

export default NavBar;