import React, { Component } from 'react'
import { connect } from 'react-redux'
import WorkoutCard from './WorkoutCard'
import '../App.css'

class ProfileCard extends Component {
  render(){
    return(
      <div>
        <div class="row"
          style={{
            width: "500px",
            "text-algin": "center",
            "font-size": "12px",
            padding: "16px",
            }}>
          <div class="ui one column grid"
            style={{
              width: "500px",
              "text-algin": "center",
              "font-size": "72px",
              padding: "36px",
              "margin-right": "250px"
              }}
              >
              {this.props.activeUser.points}
          <div class="ui three column grid">
            <div class="ui fluid">
              <div class="content"style={{
                "text-algin": "center",
                "font-size": "24px",
                }}>
                <h6 style={{
                  "text-algin": "center",
                  "font-size": "24px",
                  }}>{this.props.activeUser.username}'s Total Points</h6>
              </div>
            </div>
          </div>
        </div>

        </div>
      <div class="row"
        style={{
          width: "500px",
          height: "380px",
          padding: "24px",
          overflow: "scroll",
          "overflow-x": "hidden"}}
        >
        <div class="ui one column grid"
          style={{"width": "100%"}}
          >
          {this.props.activeUser.workouts.map(workout => {
            return <WorkoutCard workout={workout}/>
          })}
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  activeUser: state.activeUser
})

export default connect(mapStateToProps, null)(ProfileCard)
