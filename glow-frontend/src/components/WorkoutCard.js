import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'


class WorkoutCard extends Component {
  render(){
    console.log("the props are...",this.props.workout);
    return(
      <div >
        <h6> {this.props.workout.created_at}</h6>
          <img src={`${this.props.workout.image_url}`} alt=""
            height="25"
            width="25"
            />
      </div>

    )
  }
}

const mapStateToProps = state => ({
  activeUser: state.activeUser
})

export default WorkoutCard
