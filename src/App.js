import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';

import './App.css';
import AppNavbar from './component/AppNavbar';
import Home from './pages/home';
import Favorits from './pages/Favorits';

function App() {

  return (
    <div className="App">
      <AppNavbar />
      <HashRouter>
        <Route exact path={'/'}>
          <Home />
        </Route>
        <Route exact path={'/favorites'}>
          <Favorits/>
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
