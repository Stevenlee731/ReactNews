// This component handles the App template used on every page.
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Header from './common/Header';
import HomePage from './home/HomePage';
import SourcesPage from './news/SourcesPage'
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <Route exact path="/" component={HomePage}/>
          <Route path="/sources" component={SourcesPage}/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
