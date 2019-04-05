import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Homepage from './components/Homepage.js';
import Demo from './components/Authors.js';
import Info from './components/Info.js';
import AuthorInfo from './components/AuthorInfo.js';
import NavBarContainer from './components/Navbar.js';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { articleAction } from './actions/actions.js';
import { resultsAction } from './actions/actions.js';
import { authorAction } from './actions/actions.js';


class App extends Component {
  render() {
    return (
        <Router>
        <div>
        <NavBarContainer />
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Info" component={Info} />
        <Route exact path="/Authors" component={Demo} />
        <Route exact path="/AuthorInfo" component={AuthorInfo} />
        < /Switch>
	< /div>
	< /Router>
    );
  }
}

const mapStateToProps = (state) => {
    return {
	    article : state.articleReducer,
            results : state.resultsReducer, 
	    author : state.authorReducer
  }
}

const mapDispatchToProps = (dispatch) =>{
	  //...bindActionCreators({ articleAction, resultsAction}, dispatch);
  return bindActionCreators({ articleAction, resultsAction, authorAction}, dispatch);
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
