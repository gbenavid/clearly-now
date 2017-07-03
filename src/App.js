import React, { Component } from 'react';
import './App.css';
import ResultGoal from './ResultGoal'
import ProgressGoal from './ProgressGoal'

class App extends Component {
  render() {
    return (
      <div>
        <ResultGoal/>
        <ProgressGoal/>
      </div>
    );
  }
}

export default App;
