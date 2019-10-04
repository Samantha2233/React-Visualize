//    R E A C T
import React, { Component } from 'react';

// import { connect } from 'react-redux';
// import * as actions from '../../store/actions';
// import ReminderForm from './ReminderForm';
// import Reminder from './Reminder';
// import _sortBy from 'lodash/sortBy';

//    S A S S 
import './Day.scss';

// const defaultColor = "#000";

class Day extends Component {
    state = {
        editReminder: {
            id: null
        }
    };

    render() {
        const cssClasses = this.props.firstDayIndex
            ? `day first-index-${this.props.firstDayIndex}`
            : "day"

        return (
            <arcticle className={cssClasses}>
                <button>+</button>
                <header>{this.props.day}</header>
            </arcticle>
        )
    }
}

export default Day;