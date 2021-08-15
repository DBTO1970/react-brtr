import React, { Component } from 'react';
import Header from './HeaderComponent';
import Listings from './ListingComponent';

// import { Switch, Route, Redirect, withRouter } from 'react-router-dom';



class Main extends Component {

  
  render() {
    return(
    <div>
      <Header />
      <Listings />
    </div>
    );

    
  }
}

export default Main;
