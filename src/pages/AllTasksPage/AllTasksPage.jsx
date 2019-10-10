import React from 'react';
import { Link } from 'react-router-dom'
import Task from '../../components/Task/Task';
import './AllTasksPage.scss';

function AllTasksPage(props) {
    return (
        <>
            <div className="background">
                <div className='all-tasks-header'>
                    <h1>All Tasks</h1>
                    <Link to='/create-task'><button> + </button></Link>
                </div>
                <div className='AllTasksPage'>
                    {props.tasks.map(task =>
                        <Task
                            key='task._id'
                            task={task}
                            handleDeleteTask={props.handleDeleteTask}
                            handleCompleteTask={props.handleCompleteTask}
                        />
                    )}
                </div>
            </div>
        </>
    )
}

export default AllTasksPage;