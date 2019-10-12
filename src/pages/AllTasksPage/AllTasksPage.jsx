import React, { Component } from 'react';
import Task from '../../components/Task/Task';
import './AllTasksPage.scss';

class AllTasksPage extends Component {
    render() {



        // const tasks = this.props.tasks;
        // const completeTasks = tasks.filter(task => task.completed === true);
        // const incompleteTasks = tasks.filter(task => task.completed === false);

        return (
            <>
                <div className="background">
                    <div className='all-tasks-header'>
                        <h1>All Tasks</h1>
                        <p class="task-link">All</p>
                        <p class="task-link">Completed</p>
                        <p class="task-link">Incomplete</p>
                    </div>
                    <div className='AllTasksPage'>
                        {this.props.tasks.map(task =>
                            <Task
                                key='task._id'
                                task={task}
                                handleDeleteTask={this.props.handleDeleteTask}
                                handleCompleteTaskOnHome={this.props.handleCompleteTaskOnHome}
                                // completeTasks={completeTasks}
                                // incompleteTasks={incompleteTasks}
                                match={this.props.match}
                            />
                        )}
                    </div>




                </div>
            </>
        )
    }
}


export default AllTasksPage;