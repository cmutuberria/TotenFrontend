import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import timezone from './components/timezone';
import Navigation from './components/navigation';
import Login from './components/Login';
import {Provider} from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">      
            <Router>
              <Navigation/>  
              <div className="container">
                <Route exact path="/" component={timezone}/>        
                <Route exact path="/time" component={timezone}/>                                
                <Route exact path="/login" component={Login}/>                                
              </div>                              
            </Router>  
      </div>
    </Provider>
  );
}

export default App;
