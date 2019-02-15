import React, { Component } from 'react';
import './App.css';

import Counter from './components/counter';
import EffectCounter from './components/effectHookCounter/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Demo - Counter</h2>
        <Counter />
        <h2>Demo - Effect Counter</h2>
        <EffectCounter />
      </div>
    );
  }
}

export default App;
