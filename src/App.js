import React, { Component } from 'react';
import {
    Route,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';

import AddQuestion from './components/addquestion';
import Dashboard from './components/dashboard';
import Detail from './components/detail';
import Leaderboard from './components/leaderboard';
import Login from './components/login';
import Navbar from './components/navbar';
import NotFound from './components/notfound';
import Result from './components/result';
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
                        <Switch>
                      <Route path='/' exact component={Dashboard} />
                      <Route path='/questions/:id'  component={Detail} /> 
                      <Route path='/result/:id'  component={Result} /> 
                      <Route path='/add' component={AddQuestion} />
                      <Route path='/leaderboard'  component={Leaderboard} />
                      <Route component={NotFound} />
                      </Switch>
                      
                    </div>
                }
            </div>
            </ Router>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authenticated: authedUser !== null
    }
}


export default connect(mapStateToProps)(App);