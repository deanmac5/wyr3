import { Container, Message } from 'semantic-ui-react';
import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <Container>
            <Message error>
            <Message.Header>An error has occured</Message.Header>
            <p>
              We cannot find the page you're looking for. 
            </p>
          </Message>
          </Container>
        )
    }
}

    export default NotFound;