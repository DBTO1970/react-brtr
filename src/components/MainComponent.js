import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Directory from './DirectoryComponent';


const mapStateToProps = state => {
  return {
    listings: state.listings,
    members: state.members,
   
  }
}
class Main extends Component {

  

  
  render() {

    return (
      <div>
        <Header />
        <Switch>
          {/* <Route path='/home' component={HomePage} /> */}
          <Route exact path='/directory' render={() => <Directory listings = { this.props.listings } />} />
          {/* <Route path='/directory/:listingId' component={ListingWithId} /> */}
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
