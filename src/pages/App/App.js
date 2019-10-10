//    R E A C T   I M P O R T S
import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

//   C O M P O N E N T S
import Nav from '../../components/Nav/Nav';
import Calendar from '../../hoc/Calendar/Calendar';

//   P A G E S 
import Month from '../Month/Month';
import SignUpPage from '../SignUpPage/SignUpPage';
import LogInPage from '../LogInPage/LogInPage';
import CreateTaskForm from '../../components/CreateTaskForm/CreateTaskForm';
import AllTasksPage from '../AllTasksPage/AllTasksPage';
import UpdateTaskPage from '../UpdateTaskPage/UpdateTaskPage';


//   S E R V I C E S
import userService from '../../utils/userService';
import tasksService from '../../utils/tasksService';


import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      user: userService.getUser()
    };
  }

  //   H A N D L E R   F U N C T I O N S
  handleLogOut = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignUpOrLogIn = () => {
    this.setState({ user: userService.getUser() });
  }

  handleCreateTask = async  newTaskData => {
    const newTask = await tasksService.create(newTaskData);
    this.setState(state => ({
      tasks: [...state.tasks, newTask]
    }), () => this.props.history.push('/'));
  }

  handleUpdateTask = async updatedTaskData => {
    const updatedTask = await tasksService.update(updatedTaskData);
    const newTasksArray = this.state.tasks.map(task =>
      task._id === updatedTask._id ? updatedTask : task
    );
    this.setState(
      { tasks: newTasksArray },
      // Using cb to wait for state to update before rerouting
      () => this.props.history.push('/')
    );
  }

  handleDeleteTask = async id => {
    await tasksService.deleteOne(id);
    this.setState(state => ({
      // Yay, filter returns a NEW array
      tasks: state.tasks.filter(task => task._id !== id)
    }), () => this.props.history.push('/'));
  }

  async componentDidMount() {
    const tasks = await tasksService.index();
    this.setState({ tasks });
  }

  render() {
    return (
      <div className='App'>
        <Nav
          user={this.state.user}
          handleLogOut={this.handleLogOut}
        />
        <Switch>
          <Route exact path="/" render={({ history }) =>
            <AllTasksPage
              tasks={this.state.tasks}
              handleDeleteTask={this.handleDeleteTask}
            />
          } />
          <Route exact path='/create-task' render={() =>
            <CreateTaskForm
              handleCreateTask={this.handleCreateTask}
            />
          } />
          <Route exact path='/update' render={({ history, location }) =>
            <UpdateTaskPage
              handleUpdateTask={this.handleUpdateTask}
              location={location}
            />
          } />
          <Route exact path='/signup' render={({ history }) =>
            <SignUpPage
              history={history}
              handleSignUpOrLogIn={this.handleSignUpOrLogIn}
            />
          } />

          <Route exact path='/login' render={({ history }) =>
            <LogInPage
              history={history}
              handleSignUpOrLogIn={this.handleSignUpOrLogIn}
            />
          } />

          <Route exact path='/create-task' render={props =>
            <CreateTaskForm
              handleCreateTask={this.handleCreateTask}
            />
          } />



          <Route exact path='/month' render={props =>
            <Calendar>
              <HashRouter>
                <Switch>
                  <Route exact path="/" component={Month} />
                  <Route path="/:year/:month" component={Month} />
                </Switch>
              </HashRouter>
            </Calendar>
          } />
        </Switch>
      </div >
    );
  };
}



export default App;
