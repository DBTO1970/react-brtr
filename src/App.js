import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar dark color ='primary'>
            <div className='container'>
              <NavbarBrand href='/'> | BRTR | </NavbarBrand>
              <img src="assets/img/brtr_logoArtboard1.png" alt='BRTR Logo' height="30" width="30" />
            </div>
          </Navbar>
          <Button color='primary'>Welcome to | BRTR |</Button>
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
