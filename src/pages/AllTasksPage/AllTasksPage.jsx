import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import tasksService from '../../utils/tasksService';


//   C O M P O N E N T S
// import Header from '../../components/Header/Header';
// import AllTasks from '../../components/AllTasks/AllTasks';
// import InputBox from '../../components/InputBox/InputBox';

class AllTasksPage extends Component {
    async componentDidMount() {
        const tasks = await tasksService.index();
        // May not need index on taskCtrl?
        this.props.handleUpdatetasks(tasks);
    }

    render() {
        const taskItems = this.props.tasks.map((task, idx) => (
            <div key={idx}>
                <h3>{task.name}</h3>
                <p>{task.color}</p>
                <p>{task.size}</p>
                <p>{task.time}</p>
                <p>{task.completed}</p>
            </div>
        ));

        return (
            <div>
                <header>All Tasks</header>
                {this.props.tasks.length ?
                    <p>{taskItems}</p>
                    : <h3>You haven't created any tasks yet.</h3>
                }
                <div>
                    <Link to='/month'>Back to Calendar</Link>
                </div>
            </div >
        );
    }
}

export default AllTasksPage;

