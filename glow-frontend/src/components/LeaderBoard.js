import React, { Component } from 'react'
import { connect } from 'react-redux';
import LeaderSlot from './LeaderSlot'


class LeaderBoard extends React.Component {

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

const mapStateToProps = state =>({
    conversations: state.conversations,
    activeConversation: state.activeConversation,
    leaderboard: state.leaderboard
})

export default connect(mapStateToProps, null)(LeaderBoard)
