import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import Home from './components/Home/Home';
import About from './components/About';
import { PageContext } from './PageContext';

function App() {

  const userStatus = {
    isLoggedIn: true,
    lastLogin: '4/Dec/2020'
  }

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
        {/* Step 2 of useContext: providing the data to home and about comp's */}
        <PageContext.Provider value={userStatus}>
          <Route path='/' component={Home} exact/>
          <Route path='/about' component={About} />
        </PageContext.Provider>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
