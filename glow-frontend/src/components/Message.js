import React, { Component } from 'react'
import EmojiList from './EmojiList'

class Message extends Component{
  constructor() {
    super()
    this.state = {
      clicked: 0
    }
  }

  handleClick = () =>{
    this.setState({clicked: this.props.thisMessage.id})
  }

  render(){
    return(
      <div onClick={this.handleClick}>
        <strong>{"Message " + this.props.thisMessage.id + ":"}</strong>{"      " + this.props.thisMessage.text}
        <div>  <strong>Emojis:  </strong>
          {this.props.thisMessage.emojis.map(
            emoji => (<img src={require(`../../public/images/${emoji.img}`)} alt=""
              height="18"
              width="18"
              />)
          )}
        </div>
        {this.state.clicked === this.props.thisMessage.id ? <div className={'flex'}> <EmojiList
        updateConversation={this.props.updateConversation}
        message={this.props.thisMessage} submitEmoji={this.props.submitEmoji}/></div> : null}

      </div>
    )
  }





}

export default Message
