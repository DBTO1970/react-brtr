import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import BrtrInfo from './BrtrInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { postComment, fetchTrades, fetchComments, fetchPromotions } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    trades: state.trades,
    comments: state.comments,
    partners: state.partners,
    promotions: state.promotions
  }
}

const mapDispatchToProps = {
  postComment: (tradeId, rating, author, text) => (postComment(tradeId, rating, author, text)),
  fetchTrades: () => (fetchTrades()),
  resetFeedbackForm: () => (actions.reset('feedbackForm')),
  fetchComments: () => (fetchComments()),
  fetchPromotions: () => (fetchPromotions())
};

class Main extends Component {

  componentDidMount() {
    this.props.fetchTrades();
    this.props.fetchComments();
    this.props.fetchPromotions();
  }

  
  render() {

    const HomePage = () => {
      return (
        <Home 
          trade={this.props.trades.trades.filter(trade => trade.featured)[0]}
          tradesLoading={this.props.trades.isLoading}
          tradesErrMess={this.props.trades.errMess}
          promotion={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
          promotionLoading={this.props.promotions.isLoading}
          promotionsErrMess={this.props.promotions.errMess}
          partner={this.props.partners.filter(partner => partner.featured)[0]}



        />
      );
    }

    const TradeWithId = ({match}) => {
      return (
        <tradeInfo 
          trade={this.props.trades.trades.filter(trade => trade.id === +match.params.tradeId)[0]}
          isLoading={this.props.trades.isLoading}
          errMess={this.props.trades.errMess}
          comments={this.props.comments.comments.filter(comment => comment.tradeId === +match.params.tradeId)}
          commentsErrMess={this.props.comments.errMess}
          postComment = {this.props.postComment} 
        />
      );
    }

    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/directory' render={() => <Directory trades = { this.props.trades } />} />
              <Route path='/directory/:tradeId' component={TradeWithId} />
              <Route path='/aboutus' render= { () => <About partners = { this.props.partners } />} />
              <Route path = '/contactus' render={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
