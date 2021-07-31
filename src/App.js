import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar dark color ='primary'>
            <div className='container'>
              <NavbarBrand href='/'> | BRTR | </NavbarBrand>
            </div>
          </Navbar>
          
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
