import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css'


class WorkoutCard extends Component {

  render(){
    console.log("the props are...",this.props.workout);
    return(

      <div class="column">
        <div class="ui fluid card">
          <div class="image">
            <img src={this.props.workout.image_url}/>
          </div>
          <div class="content">
            <a class="header">October {Math.floor(Math.random() * Math.floor(24)) + 1}</a>
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  activeUser: state.activeUser
})

export default WorkoutCard
