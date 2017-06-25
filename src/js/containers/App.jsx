import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../../css/components/Nav.css';
import '../../css/containers/App.css';
import Nav from '../components/Nav';
import Ribbon from '../components/Ribbon';
import Home from './Home';
import Watch from './Watch';
import Upload from './Upload';
import ClipPage from './ClipPage';

class App extends Component {
  render() {
    return (
      <Router>
        <main className="App">
          <Ribbon />
          <Nav />
          <Route exact path="/" component={ Home } />
          <Route exact path="/watch" component={ Watch } />
          <Route exact path="/watch/:id" component={ ClipPage } />
          <Route exact path="/upload" component={ Upload } />
        </main>
      </Router>
    );
  }
}

export default App;
