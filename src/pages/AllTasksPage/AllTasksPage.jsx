import React from 'react';
import './AllTasksPage.scss';
import Task from '../../components/Task/Task';

function AllTasksPage(props) {
    return (
        <>
            <div className="background">
                <h1>All Tasks</h1>
                <div className='AllTasksPage'>
                    {props.tasks.map(task =>
                        <Task
                            key='task._id'
                            task={task}
                            handleDeleteTask={props.handleDeleteTask}
                        />
                    )}
                    {/* <div className='col-1'></div>
                    <div className='col-2'></div>
                    <div className='col-3'></div> */}
                </div>
            </div>
        </>
    )
}

export default AllTasksPage;