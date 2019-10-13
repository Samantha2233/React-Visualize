import React, { Component } from 'react';
import Task from '../../components/Task/Task';
import './AllTasksPage.scss';

class AllTasksPage extends Component {
    render() {
        return (
            <>
                <div className="background">
                    <div className='all-tasks-header'>
                        <h1>All Tasks</h1>
                    </div>
                    <div className='AllTasksPage'>
                        {this.props.tasks.map(task =>
                            <Task
                                key='task._id'
                                task={task}
                                handleDeleteTask={this.props.handleDeleteTask}
                                handleCompleteTaskOnHome={this.props.handleCompleteTaskOnHome}
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