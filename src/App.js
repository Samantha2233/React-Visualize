import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import AllTasks from './components/AllTasks/AllTasks';
import InputBox from './components/InputBox/InputBox';


class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [{ task: 'Build a React App', time: 'Now', importance: 5 }],
      newTask: {
        task: '',
        time: '',
        level: 0
      },
      pastTasks: []
    }
  }




  render() {
    return (
      <div className='App'>
        <Header />
        <AllTasks
          tasks={this.state.tasks}
        />
        <InputBox
          tasks={this.state.tasks}
        />
      </div>
    );
  };
}



export default App;
