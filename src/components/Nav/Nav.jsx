import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Nav.scss';

const Nav = props => {
    let userNav = props.user ?
        <div className="nav-links">
            <p className="nav-link">Hi, {props.user.name}<i class="fas fa-smile"></i></p>
            <p className="nav-link"></p>
            <NavLink exact to='/' className='nav-link'>View All Tasks</NavLink>
            <p className="nav-link"></p>
            <NavLink exact to='/create-task' className='nav-link'>+ Task</NavLink>
            <p className="nav-link"></p>

            <p className="nav-link"></p>

            <Link to='/login' onClick={props.handleLogOut}>Log Out</Link>
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
                <div className="logo-link">
                    {/* <Link to='/'><h1 className="logo">VISUALIZE</h1></Link> */}
                    <Link to='/'><img className="logo" src="../../../images/VISUALIZE-white.png" alt="Logo" /></Link>
                </div>
                <div className="dropdown">
                    <div className="nav-icon-box">
                        <Link to='/create-task'><i class="fas fa-plus"></i></Link>
                    </div>
                    <div className="nav-icon-box">
                        <Link to='/'><i class="fas fa-list"></i></Link>
                    </div>
                    <div className="nav-icon-box">
                        <Link exact to='/month' className='nav-icon-box calendar-icon'><i class="far fa-calendar-alt"></i></Link>
                    </div>
                    <div className="nav-icon-box">
                        <button className="btn user-dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="nav-icon-box"><i className="far fa-user"></i></div>
                        </button>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <button className="dropdown-item">{userNav}</button>
                        </div>
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