import React, { Component } from 'react'
import EmojiList from './EmojiList'

class Message extends Component{
  constructor() {
    super()
    this.state = {
      clicked: false
    }
  }

  handleClick = () =>{
    this.setState({clicked: true})
  }

  render(){
    return(
      <div onClick={this.handleClick}>
        <strong>{"Message " + this.props.thisMessage.id + ":"}</strong>{"      " + this.props.thisMessage.text}
        <div>  <strong>Emojis:  </strong> </div>
        {this.state.clicked ? <div className={'flex'}> <EmojiList message={this.props.thisMessage} submitEmoji={this.props.submitEmoji}/></div> : null}

      </div>
    )
  }





}

export default Message
