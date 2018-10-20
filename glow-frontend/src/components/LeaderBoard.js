import React, { Component } from 'react'
import { connect } from 'react-redux';
import LeaderSlot from './LeaderSlot'

class LeaderBoard extends React.Component {
  mapLeaderBoard = (messages) => {
    const playersAndPoints = {}
    messages.forEach( message => {
      if (!playersAndPoints[message.user.username]){
        playersAndPoints[message.user.username] = 0
      }
      if (playersAndPoints[message.user.username] && message.image_url){
        console.log(message.image_url);
        playersAndPoints[message.user.username]++
      }
    })
    return playersAndPoints
  }

    render(){
        return(
            <div>
                <h1>LeaderBoard: {this.props.activeConversation.title}</h1>
                {Object.keys(this.props.leaderboard).map(
                  player => {
                    return <LeaderSlot player={player} points={this.props.leaderboard[player]}/>
                  }
                )}
            </div>
        )
    }
}

const mapLeaderBoard = (messages) => {
  console.log(messages);
  messages.forEach(message => {
    if (!playersAndPoints[message.user.username]){
      playersAndPoints[message.user.username] = 0
    }
    if (playersAndPoints[message.user.username] && message.image_url){
      console.log(message.image_url);
      playersAndPoints[message.user.username]++
    }
  })
  debugger

  playersAndPoints.map(player => (<LeaderSlot  player={player}/>))
  return playersAndPoints.map(player => (<LeaderSlot  player={player}/>))
}

const playersAndPoints = {}
// const leaderboard = this.props.activeConversation.messages.each( message => {
//   if (!playersAndPoints[message.user.username]){
//     playersAndPoints[message.user.username] = 0
//   }
//   if (playersAndPoints[message.user.username] && message.image_url){
//     console.log(message.image_url);
//     playersAndPoints[message.user.username]++
//   }
// })
const mapStateToProps = state =>({
    conversations: state.conversations,
    activeConversation: state.activeConversation,
    leaderboard: state.leaderboard
})

export default connect(mapStateToProps, null)(LeaderBoard)
