//    R E A C T
import React from 'react';
import { Link } from 'react-router-dom';

//    S A S S 
import "./HeaderWeek.scss";


const HeaderWeek = props => (
    <header className="week-header">
        <div className="row">
            <Link to={"/" + props.prevWeek.slug}>
                <i className="fas fa-chevron-circle-left" />
            </Link>
        </div>
        <div className="row">
            <h1>{props.curWeek.name}</h1>
        </div>
        <div className="row">
            <Link to={"/" + props.nextWeek.slug}>
                <i className="fas fa-chevron-circle-right" />
            </Link>
        </div>
    </header>
)

export default HeaderWeek;