//    R E A C T
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
//    S A S S 
import './Day.scss';

//    C O M P O N E N T
class Day extends Component {
    state = {
        tasks: [],
        showModal: false
    };

    render() {
        const cssClasses = this.props.firstDayIndex
            ? `day first-index-${this.props.firstDayIndex}`
            : "day"

        const tasks = this.props.tasks;
        const taskLinks = tasks
            ? tasks.map((t) =>
                <div className={`taskLink ${t.color}`}>
                    <div className='container'>
                        <input type='checkbox' defaultChecked={t.completed} className='check-box' onClick={() => this.props.handleCompleteTask(t._id, !t.completed, this.props.match)} />
                        <span class='check-box-cal'></span>
                        <p className={`${t.color}`}>{t.completed}{t.name}</p>
                    </div>
                </div>)
            : null;

        return (
            <article className={cssClasses} >
                <div className="addTaskButton">
                    <Link to='/create-task' >+</Link>
                </div>
                <header>{this.props.day}</header>
                {taskLinks}
            </article>
        )
    }
}

export default Day;