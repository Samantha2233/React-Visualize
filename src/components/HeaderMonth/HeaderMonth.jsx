//    R E A C T
import React from 'react';
import { Link } from 'react-router-dom';

//    S A S S 
import "./HeaderMonth.scss";


const HeaderMonth = props => (
    <div>
        <header className="month-header">
            <h1 className="logo">VISUALIZER</h1>
            <div className="calendar-nav">
                <div className="row">
                    <Link to={"/" + props.prevMonth.slug}>
                        <i className="fas fa-chevron-circle-left" />
                    </Link>
                </div>
                <div className="row">
                    <p className="current-date">{props.curMonth.name}</p>
                </div>
                <div className="row">
                    <Link to={"/" + props.nextMonth.slug}>
                        <i className="fas fa-chevron-circle-right" />
                    </Link>
                </div>
            </div>
            <div className="nav-links">
                <Link to='/login' className="nav-link">Log In</Link>
                <p className="nav-link">   |   </p>
                <Link to='/singup' className="nav-link">Sign In</Link>
                <i class="far fa-user"></i>
            </div>
        </header>
        <div className="color-bars">
            <div className="red"></div>
            <div className="orange"></div>
            <div className='seafoam'></div>
            <div className="salmon"></div>
            <div className="black"></div>
        </div>
    </div>
)

export default HeaderMonth;