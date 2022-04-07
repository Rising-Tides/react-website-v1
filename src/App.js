import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FAQ from './components/pages/FAQ';
import Watch from './components/pages/Watch';
import Donate from './components/pages/Donate';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/FAQ' component={FAQ} />
          <Route path='/watch' component={Watch} />
          <Route path='/donate' component={Donate} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
