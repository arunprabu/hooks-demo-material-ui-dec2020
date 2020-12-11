import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import Home from './components/Home';
import About from './components/About';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/about' component={About} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
