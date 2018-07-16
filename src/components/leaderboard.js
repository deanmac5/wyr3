import { Container, Header, Image, Table } from 'semantic-ui-react';
import React, { Component } from 'react';

import { connect } from 'react-redux';

class Leaderboard extends Component {
  render() {
    const { users } = this.props
    return (
      <Container>
      <Table basic='very' celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Rank</Table.HeaderCell>
          <Table.HeaderCell>Pic</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Asked</Table.HeaderCell>
          <Table.HeaderCell>Answered</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
      {users.map(user =>
      <Table.Row>
        <Table.Cell>
          <Header as='h4'>
            <Header.Content>
            {users.indexOf(user) + 1}
          
            </Header.Content>
    
        
          </Header>
        </Table.Cell>
        <Table.Cell>  <Image src={user.avatarURL} rounded size='mini' /></Table.Cell>
        <Table.Cell> {user.name}</Table.Cell>
        <Table.Cell> {user.questions.length}</Table.Cell>
        <Table.Cell>{Object.keys(user.answers).length}</Table.Cell>
      </Table.Row>)}
      </Table.Body>
  </Table>
  </Container>

    )
  }
}

function mapStateToProps ({ users, questions }) {
  const usersDisplay = Object.values(users)

  return {
    users: usersDisplay.sort((a, b) =>
      (Object.keys(b.answers).length + b.questions.length) -
      (Object.keys(a.answers).length + a.questions.length)
    ),
    questions,
  }
}

export default connect(mapStateToProps)(Leaderboard);