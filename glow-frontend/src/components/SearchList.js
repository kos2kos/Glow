import React, { Component } from 'react'
import {connect} from 'react-redux'
import { API_ROOT, HEADERS } from '../constants';
import {updateActiveConversation, updateActiveUser} from '../actions'


class SearchList extends Component {
  joinGlow = (id) => {
    fetch(`${API_ROOT}/conversations/${id}`,{
      method: "PATCH",
      headers: HEADERS,
      body: JSON.stringify({
        id: id,
        user_id: this.props.activeUser.id
      })
    })
    .then(res => res.json())
    .then(conversation => {
      this.props.updateActiveUser(this.props.activeUser)
      this.props.updateActiveConversation(conversation)
    })
    .then(() => {
      this.props.history.push("/glowchat/:id")
    })
  }
  render(){
    console.log("These are the props ", this.props.conversation);
    return(
      <div>
        <h1>
          {this.props.conversation.title}
        </h1>
        <h3>
          <button onClick={()=>this.joinGlow(this.props.conversation.id)}> Join </button>
        </h3>

      </div>
    )
  }
}

const mapStateToProps = state =>({
  activeUser: state.activeUser
})
export default connect(mapStateToProps, {updateActiveConversation, updateActiveUser}) (SearchList)
