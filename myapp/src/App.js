import React, { Component } from 'react';
<<<<<<< HEAD
import FirstComponent from './firstComponent';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Login from './Todo/Login';
=======

import logo from './logo.svg';
import './App.css';
import Login from './FinalProject/Login';
>>>>>>> front end comm
import './bootstrap.css'
 
class App extends Component {
  render() {
    return (
      <div className="App">
       
       <Login/>
      {/*<Counter/>*/}
             </div>
      
    );
  }
}



function SecondComponent()
{
  return (
    <div className="secondComponent">
     My Second Component
    </div>
  );
}
export default App;

