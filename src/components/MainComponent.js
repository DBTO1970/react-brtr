import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Listings from './ListingInfoComponent';
import Header from './HeaderComponent';
import Login from './LoginComponent';
import Footer from './FooterComponent';
import { LISTINGS } from '../shared/listings';

// import { Switch, Route, Redirect, withRouter } from 'react-router-dom';



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: LISTINGS
    };
  }
  
  render() {
    return(
    
      <React.Fragment>
        <Header />

        <Login />
        <Directory listings={this.state.listings} />
        <Listings />
        <Footer />
      </React.Fragment>
    
    );

    
  }
}

export default Main;
