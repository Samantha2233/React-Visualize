import React from 'react';
import Task from '../Task/Task'

const AllTasks = (props) => (
    <div className="component">
        AllTasks

        {props.tasks.map((task, idx) =>
            <Task
                task={task}
                rowIdx={idx}
                key={idx}
            />
        )}




    </div>
);

export default AllTasks;