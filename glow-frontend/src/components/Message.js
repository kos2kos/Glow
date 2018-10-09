import React, { Component } from 'react'
import EmojiList from './EmojiList'

class Message extends Component{
  constructor() {
    super()
    this.state = {
      clicked: false
    }
  }

  render(){
    return(
      <div>
        <strong>{"Message " + this.props.thisMessage.id + ":"}</strong>{"      " + this.props.thisMessage.text}
      </div>
    )
  }





}

export default Message
