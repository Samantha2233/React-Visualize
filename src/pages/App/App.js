//    R E A C T   I M P O R T S
import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

//   C O M P O N E N T S
import Calendar from '../../hoc/Calendar/Calendar';

//   S T Y L E
import './App.css';

//   P A G E S 
import Month from '../Month/Month';
import Week from '../Week/Week';
import DayPage from '../DayPage/DayPage';
import AllTasksPage from '../AllTasksPage/AllTasksPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LogInPage from '../LogInPage/LogInPage';

class App extends Component {
  state = {
    tasks: [
      {
        task: 'Build a React App',
        time: 'Now',
        importance: 5
      },
    ],
    newTask: {
      task: '',
      time: '',
      level: 0
    },
    pastTasks: [],
    // formInvalid: true
  }

  // formRef = React.createRef();

  addTask = e => {
    // e.preventDefault();
    // if (!this.formRef.current.checkValidity()) return;
    // use function syntax because we're relying on existing state
    this.setState(state => ({
      tasks: [...state.tasks, state.newtask],
      newTask: {
        task: '',
        time: '',
        importance: 2
      }
    }));
  };

  //   H A N D L E R   F U N C T I O N S
  handleChange = e => {
    // console.log(e.target.checkValidity());
    const newTask = { ...this.state.newTask };
    newTask[e.target.name] = e.target.value;
    this.setState({
      newTask,
      // formInvalid: !this.formRef.current.checkValidity()
    })
  }

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/signup' render={({ history }) =>
            <SignUpPage
              history={history}
            />
          } />

          <Route exact path='/login' render={() =>
            <LogInPage />
          } />

          <Route exact path='/all-tasks' render={props =>
            <AllTasksPage />
          } />

          <Route exact path='/day' render={props =>
            <DayPage />
          } />

          <Route exact path='/week' render={props =>
            <Calendar>
              <HashRouter>
                <Switch>
                  <Route path="/:year/:month/:week" component={Week} />
                  <Route path="/" exact component={Week} />
                </Switch>
              </HashRouter>
            </Calendar>
          } />

          <Route exact path='/month' render={props =>
            <Calendar>
              <HashRouter>
                <Switch>
                  <Route path="/:year/:month" component={Month} />
                  <Route path="/" exact component={Month} />
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
