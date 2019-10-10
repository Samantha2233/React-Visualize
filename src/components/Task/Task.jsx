import React from 'react';
import { Link } from 'react-router-dom';
import './Task.scss';

function Task({ task, handleDeleteTask }) {
    return (

        <div className={`task-card ${task.color} ${task.size}`}>
            <input type='checkbox' value='completed' className='check-box' />
            <h3 className='task-name'>{task.name}</h3>
            <div className='task-body'>
                <div>{task.completed}</div>
            </div>
            <div className-="task-footer">
                <Link
                    className="btn btn-xs"
                    to={{
                        pathname: '/update',
                        state: { task }
                    }}
                >
                    <i class="fas fa-pencil-alt"></i>
                </Link>
                <button
                    className="btn btn-xs btn-danger"
                    onClick={() => handleDeleteTask(task._id)}
                >
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )
}

export default Task;