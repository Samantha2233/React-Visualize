//    R E A C T   I M P O R T S
import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

//   C O M P O N E N T S
import Nav from '../../components/Nav/Nav';
import Calendar from '../../hoc/Calendar/Calendar';

//   P A G E S 
import Month from '../Month/Month';
import AllTasksPage from '../AllTasksPage/AllTasksPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LogInPage from '../LogInPage/LogInPage';
// import Week from '../Week/Week';
// import DayPage from '../DayPage/DayPage';

//   S E R V I C E S
import userService from '../../utils/userService';
import tasksService from '../../utils/tasksService';


import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      user: userService.getUser(),
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

  render() {
    return (
      <div className='App'>
        <Nav
          user={this.state.user}
          handleLogOut={this.handleLogOut}
        />
        <Switch>
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

          <Route exact path='/all-tasks' render={props =>
            <AllTasksPage
              tasks={this.state.tasks}
              handleUpdateTasks={this.handleUpdateTasks}
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
      </div>
    );
  };
}



export default App;
