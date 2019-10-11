//    R E A C T
import React, { Component } from 'react';
import { Switch, Link } from 'react-router-dom'
//    S E R V I C E
// import tasksService from '../../utils/tasksService';
//    S A S S 
import './Day.scss';

class Day extends Component {
    state = {
        tasks: [],
    };

    render() {

        const tasks = this.props.tasks;

        const taskLinks = tasks ? tasks.map((t) => <p>{t.name}</p>) : null;


        const cssClasses = this.props.firstDayIndex
            ? `day first-index-${this.props.firstDayIndex}`
            : "day"

        return (
            <article className={cssClasses} >
                <Switch>
                </Switch>
                {taskLinks}
                <Link to='/create-task' className="addTaskButton">+</Link>
                <header>{this.props.day}</header>
            </article>
        )
    }
}

export default Day;