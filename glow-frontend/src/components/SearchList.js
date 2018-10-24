import React, { Component } from 'react'

class SearchList extends Component {
  render(){
    console.log("These are the props ", this.props.conversation);
    return(
      <div>
        <h1>
          {this.props.conversation.title}
        </h1>
        <h3>
          {this.props.conversation.users.map(user => <div> {user.username}</div>)}
        </h3>

      </div>
    )
  }
}

export default SearchList
