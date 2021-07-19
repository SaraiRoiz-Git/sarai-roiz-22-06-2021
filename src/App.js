import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import AppNavbar from './component/AppNavbar/AppNavbar';
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites.js';

function App() {

  return (
    <div className="App">
      <AppNavbar />
      <HashRouter>
        <Route exact path={'/'}>
          <Home />
        </Route>
        <Route exact path={'/favorites'}>
          <Favorites />
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
