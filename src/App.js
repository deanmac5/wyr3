import React, { Component, Fragment } from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import AddQuestion from './components/addquestion';
import Dashboard from './components/dashboard';
import LeaderBoard from './components/leaderboard';
import Login from './components/login';
import Navbar from './components/navbar';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';

const PrivateRoute = ({component: Component, isLoggedIn, ...rest}) => (
  <Route
      {...rest}
      render={(props) => (
          isLoggedIn === true
          ? <Component {...props} />
          : <Redirect to={{
              pathname: '/'
          }}/>
  )}/>
);

class App extends Component {
  componentDidMount() {
      this.props.dispatch(handleInitialData())
  }

  render() {
      return (
          <Router>
              <Fragment>
                  
                  {this.props.isLoggedIn
                      ? <Navbar />
                      : null
                  }
                  <div>
                      <Switch>
                          {/* <PrivateRoute path="/answeredquestions" component={AnsweredQuestions} isLoggedIn={this.props.isLoggedIn}/> */}
                          <PrivateRoute path="/dashboard" component={Dashboard} />
                          <PrivateRoute path="/add" component={AddQuestion} />
                          <PrivateRoute path="/leaderboard" component={LeaderBoard} />
                          {/* <PrivateRoute path="/questions/:id" component={QuestionDetails} isLoggedIn={this.props.isLoggedIn}/> */}
                          {/* <PrivateRoute exact path="/logout" component={Logout} isLoggedIn={this.props.isLoggedIn}/> */}
                          <Route exact path="/" component={Login}/>
                          {/* <Route path="/" component={Page404}/> */}
                      </Switch>
                  </div>
              </Fragment>
          </Router>
      );
  }
}

function mapStateToProps({users, authedUser}) {
  return {
      loading: users === {},
      isLoggedIn: authedUser !== null
  }
}

export default connect(mapStateToProps)(App)