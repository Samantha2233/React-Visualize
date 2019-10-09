import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = props => {
    let nav = props.user ?
        <div className="nav-links">
            <p className="nav-link">{props.user.name}</p>
            <Link to='/' onClick={props.handleLogOut}>Log Out</Link>
        </div>
        :
        <div className="nav-links">
            <Link to='/login' className="nav-link">Log In</Link>
            <p className="nav-link"></p>
            <Link to='/signup' className="nav-link">Sign Up</Link>
        </div>;


    return (
        <div>
            <div className="nav">
                <h1 className="logo">VISUALIZE</h1>
                <div className="dropdown">
                    <button className="btn user-dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div><i className="far fa-user"></i></div>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item">{nav}</button>
                    </div>
                </div>
            </div>
            <div className="color-bars">
                <div className="red"></div>
                <div className="orange"></div>
                <div className='seafoam'></div>
                <div className="salmon"></div>
                <div className="black"></div>
            </div>
        </div>
    )
}

export default Nav;