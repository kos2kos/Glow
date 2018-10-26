import React, { Component } from 'react'
import EmojiList from './EmojiList'
import '../App.css'
import {connect} from 'react-redux'

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
    console.log(this.props.activeConversation.messages)
    console.log("Props for Message,", this.props);
    return(

      <div>
        <div className={this.props.cssProps[1]}>
          <strong>{this.props.thisMessage.user.username}</strong>
        </div>

        {this.props.thisMessage.image_url ?
          <img src={`${this.props.thisMessage.image_url}`}
            className={this.props.cssProps[3]}
            alt=""
            height="200"
            width="200"
            background-color="white"
            /> :
            <div className={this.props.cssProps[0]}>
            {"      " + this.props.thisMessage.text}

                <div>  <strong>Emojis:  </strong>
                {this.props.thisMessage.emojis.map(
                  emoji => (<img src={require(`../../public/images/${emoji.img}`)} alt=""
                  height="18"
                  width="18"
                  />)
                )}
              </div>
            </div>
            }

            {this.state.clicked === this.props.thisMessage.id ? <div className={'flex'}>
             <EmojiList
              handleClick={this.handleClick}
              message={this.props.thisMessage} submitEmoji={this.props.submitEmoji}/>
            </div> : <img
              className={this.props.cssProps[2]}
              onClick={this.handleClick}
              src={require("../emojiPlus.svg")}
              alt=""
              height="10"
              width="10"
              />}

      </div>

    )
  }





}

const mapStateToProps = state => ({
  activeUser: state.activeUser,
  activeConversation: state.activeConversation
})

export default connect(mapStateToProps,null) (Message)
