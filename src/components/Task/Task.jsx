import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Task.scss';

class Task extends Component {
    render() {
        const task = this.props.task;
        const handleDeleteTask = this.props.handleDeleteTask;
        const handleCompleteTaskOnHome = this.props.handleCompleteTaskOnHome;

        return (
            <div className={`task-card ${task.color} ${task.size}`}>
                <div className="task-header">
                    <div>
                        <div className='container'>
                            <input type='checkbox' defaultChecked={task.completed} className='check-box' onClick={() => handleCompleteTaskOnHome(task._id, !task.completed)} />
                            <span class='check-box'></span>
                            <label> Complete?</label>
                        </div>
                    </div>
                    <div>
                        <Link className="btn btn-xs" to={{ pathname: '/update', state: { task } }}>
                            <i class="fas fa-pencil-alt task-icon"></i>
                        </Link>
                        <button className="btn btn-xs" onClick={() => handleDeleteTask(task._id)}>
                            <i class="fas fa-trash-alt task-icon"></i>
                        </button>
                    </div>
                </div>
                <h2 className='task-name'>{task.name}</h2>


                <div className='task-body'>
                    <div>{task.completed}</div>
                </div>

            </div>
        )
    }
}

export default Task;