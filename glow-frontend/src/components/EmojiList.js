import React, {Component} from 'react'
import EmojiButton from './EmojiButton'
class EmojiList extends Component{
  constructor() {
    super()
    this.state = {
      emojis: []
    }
  }

    componentDidMount() {
      fetch("http://localhost:3000/emojis")
      .then(res => res.json())
      .then(allEmojis => this.setState({emojis: allEmojis}, () => {
      }))
    }

    postEmojiToMessage = (emoji) =>{
      console.log("This a message from ",this.props.message, "with this emoji ", emoji.img);
      fetch(`http://localhost:3000/messages/${this.props.message.id}`,{
        method: "PATCH",
        mode: "cors",
        body: JSON.stringify({
          emojis: [this.props.emojis,emoji]
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      })
    }

    render(){
      const {emojis} = this.state
      return(
        <div className="flex-container row">
          {
            emojis.map(emoji => <EmojiButton
              postEmojiToMessage={this.postEmojiToMessage}
              key={emoji.id} emoji={emoji}/>)
          }
        </div>
      )
    }























































































}
export default EmojiList
