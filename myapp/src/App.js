import React, { Component } from 'react';
import FirstComponent from './firstComponent';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Login from './Todo/Login';
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

