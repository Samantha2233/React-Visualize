//    R E A C T
import React from 'react';

//    S A S S 
import "./HeaderWeekDays.scss";

const HeaderWeekDays = props => (
    <header className="weekdays">
        {props.days.map((weekday, i) => (
            <strong key={i}>{weekday}</strong>
        ))}
    </header>
);

export default HeaderWeekDays;