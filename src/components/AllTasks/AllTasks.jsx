import React from 'react';
import Task from '../Task/Task'
import './AllTasks.css';

const AllTasks = (props) => (
    <div className="component">
        AllTasks
        <ul>
            <Task tasks={props.tasks} />
        </ul>



    </div>
);

export default AllTasks;