import React, { Component } from 'react';

import Answered from './answered';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Result extends Component {
    render() {
        const { id } = this.props;
        return (
            <Container>
                <Answered id={id} />
            </Container>
        )
    }
}

function mapStateToProps({ }, props) {
    const { id } = props.match.params

    return {
        id,
    }
}

export default connect(mapStateToProps)(Result);