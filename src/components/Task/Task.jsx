import React from 'react';
import './Task.css';

const Task = (props) => (
    <div
        className="task"
    >
        {props.tasks.map((task, idx) => (
            <li className="task-item" key={'task' + idx}>
                <div>{task.task}</div>
                <div>{task.time}</div>
                <div>{task.importance}</div>
            </li>
        ))}
    </div>
);

export default Task;