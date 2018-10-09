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
      .then(allEmojis => this.setState({emojis: allEmojis}))
    }

    render(){
      const {emojis} = this.state
      console.log(emojis);
      return(
        <div>
          {
            emojis.map(emoji => <EmojiButton
              key={emoji.id} emoji={emoji}/>)
          }
        </div>
      )
    }























































































}
export default EmojiList
