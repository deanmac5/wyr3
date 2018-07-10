import React, { Component } from 'react';
import {
    Redirect,
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';

import Dashboard from './components/dashboard';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <div>
                {this.props.loading === true
                    ? null : <Dashboard />}
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        loading: authedUser === null
    }
}


export default connect()(App);