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
    console.log(this.state.clicked === this.props.thisMessage.id);
    return(
      <div onClick={this.handleClick}>
        <br/>

        <strong>{"Message " + this.props.thisMessage.id + ":"}</strong>{"      " + this.props.thisMessage.text}
          <br/>
          <br/>

        {this.props.thisMessage.image_url ?
          <img src={`${this.props.thisMessage.image_url}`}
            alt=""
            height="500"
            width="500"
            /> : null}

        <div>  <strong>Emojis:  </strong>
          {this.props.thisMessage.emojis.map(
            emoji => (<img src={require(`../../public/images/${emoji.img}`)} alt=""
              height="18"
              width="18"
              />)
          )}
        </div>
        {this.state.clicked === this.props.thisMessage.id ? <div className={'flex'}>
         <EmojiList
          updateConversation={this.props.updateConversation}
          message={this.props.thisMessage} submitEmoji={this.props.submitEmoji}/>
        </div> : null}


      <br/>
      </div>
    )
  }





}

export default Message
