import React, { Component } from 'react'
import NewConversationForm from './NewConversationForm'


class StartPage extends Component{
  handleSubmit = e =>{
    this.props.history.push("/search")
  }
  render(){
    return(
      <div>
        <h1>
          Let's Get Started
        </h1>
        <h3>
          Start Competition
        </h3>
        <NewConversationForm history={this.props.history}/>

        <button onClick={this.handleSubmit}> Join Competition </button>
      </div>
    )
  }
}


export default StartPage
