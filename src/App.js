import React, { Component } from 'react';
import {
    Route,
    BrowserRouter as Router,
} from 'react-router-dom';

import AddQuestion from './components/addquestion';
import Dashboard from './components/dashboard';
import Leaderboard from './components/leaderboard';
import Login from './components/login';
import Navbar from './components/navbar';
import Question from './components/question';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
            <div>
                {this.props.authenticated !== true
                    ? <div><Login /> </div>
                    : <div>
                        <Navbar />
                      <Route path='/' exact component={Dashboard} />
                      <Route path='/question/:id' component={Question} />
                      <Route path='/new' component={AddQuestion} />
                      <Route path='/leaderboard' component={Leaderboard} />
                    </div>
                }
            </div>
            </ Router>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authenticated: authedUser !== ""
    }
}


export default connect(mapStateToProps)(App);