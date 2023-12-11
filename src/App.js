import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './views/Main';
import Flowers from './views/Flowers';
import Cars from './views/Cars';
import Trees from './views/Trees';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h2>Name: Claudiomar Moreira de Jesus</h2>
          <h3>ID  : 223-0862</h3>
        </header>

        <Route path="/" exact component={Main} />
        <Route path="/flowers" component={Flowers} />
        <Route path="/cars" component={Cars} />
        <Route path="/trees" component={Trees} />
      </div>
    </Router>
  );
}

export default App;