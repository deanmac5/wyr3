import React, { Component } from 'react'

import { connect } from 'react-redux'

class Leaderboard extends Component {
  render() {
    return (
     <h2>Leaderboard</h2>
    )
  }
}

// function mapStateToProps ({ tweets }) {
//   return {
//     tweetIds: Object.keys(tweets)
//       .sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
//   }
// }

// export default connect(mapStateToProps)(Leaderboard)
export default Leaderboard;