import React, { Component } from 'react'
class EmojiButton extends Component {
  constructor() {
    super()
    this.state ={}
  }

  render(){
    const {emoji} = this.props

    console.log(emoji);
    return(
        <button onClick={() => this.props.postEmojiToMessage(emoji)}> <img src={require(`../../public/images/${emoji.img}`)} alt=""
          height="18"
          width="18"
          /> </button>

    )
  }
}

export default EmojiButton
