import React, { Component } from 'react'
import { connect } from 'react-redux'
import WorkoutCard from './WorkoutCard'
import '../App.css'

class ProfileCard extends Component {
  render(){
    return(
      <div >
        {this.props.activeUser.username}'s Total Points:
        {this.props.activeUser.points}
        {this.props.activeUser.workouts.map(workout => {
          return <WorkoutCard workout={workout}/>
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  activeUser: state.activeUser
})

export default connect(mapStateToProps, null)(ProfileCard)
