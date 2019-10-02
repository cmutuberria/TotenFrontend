import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import timezone from './components/timezone';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="App">      
          <Router>
            <Navigation/>  
            <div className="container">
              <Route exact path="/" component={timezone}/>        
              <Route exact path="/time" component={timezone}/>                                
            </div>                              
          </Router>  
    </div>
  );
}

export default App;
