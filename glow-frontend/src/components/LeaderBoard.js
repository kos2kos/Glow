import React, { Component } from 'react'
import { connect } from 'react-redux';
import LeaderSlot from './LeaderSlot'
import '../App.css'


class LeaderBoard extends React.Component {
    render(){
        return(
            <div>
                <h1 style={{"text-algin": "center",
                "margin-left": "75px"}}>LeaderBoard: {this.props.activeConversation.title}</h1>
                  <table class="ui  celled table"
                    style={{"width": "455px",
                      "margin-left": "5px"}}>
                    <thead>
                      <tr><th>Player</th>
                      <th>Total Points</th>
                    </tr></thead>
                    <tbody
                      >
                      {Object.keys(this.props.leaderboard).map(
                            player => {
                              return <LeaderSlot player={player} points={this.props.leaderboard[player]}/>
                            }
                          )}
                    </tbody>
                  </table>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    conversations: state.conversations,
    activeConversation: state.activeConversation,
    leaderboard: state.leaderboard
})

export default connect(mapStateToProps, null)(LeaderBoard)
