import React from 'react';
import { Link } from 'react-router-dom';


const DayPage = (props) => {
    return (
        <div>DayPage
            <Link to='/week'>Week View</Link>
            <Link to='/month'>Month View</Link>
        </div>
    )
}

export default DayPage