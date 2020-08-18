import React, { Component } from 'react';
import './App.css';
import NavBar from './ui/NavBar';


class App extends Component {
  render() {
    
    const logo = 
    <nav className="navbar navbar-dark bg-primary">
    <h1><b>GUIA DO ALUNO</b></h1>
    </nav>
    return (
      
      
      <div className="container">
        <NavBar logo={logo} />
          {this.props.children}
      </div>
     
      
    );
  }
}

export default App;
