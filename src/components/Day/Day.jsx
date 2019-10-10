//    R E A C T
import React, { Component } from 'react';
import { Switch, Link } from 'react-router-dom'
import tasksService from '../../utils/tasksService';
// import CreateTaskForm from '../CreateTaskForm/CreateTaskForm';
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
        // editReminder: {
        //     id: null
        // }
        tasks: [],
    };


    handleCreateTask = async  newTaskData => {
        const newTask = await tasksService.create(newTaskData);
        this.setState(state => ({
            tasks: [...state.tasks, newTask]
        }), () => this.props.history.push('/month'));
    }

    async componentDidMount() {
        const tasks = await tasksService.index();
        this.setState({ tasks });
    }

    render() {
        const cssClasses = this.props.firstDayIndex
            ? `day first-index-${this.props.firstDayIndex}`
            : "day"

        return (
            <article className={cssClasses} >
                <Switch>
                    {/* <Route exact to='/create-task' render={() =>
                        <CreateTaskForm handleCreateTask={this.handleCreateTask} />
                    } /> */}
                </Switch>
                <Link to='/create-task' className="addTaskButton">+</Link>
                <header>{this.props.day}</header>
            </article>
        )
    }
}

export default Day;