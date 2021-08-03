import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppWrapper from './AppWrapper';


function App() {
  return (
    <Router>
      <AppWrapper/>
    </Router>
  );
}

export default App;


      
