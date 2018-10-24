import React from 'react';
import { API_ROOT, HEADERS } from '../constants';
import { connect } from 'react-redux'
import { loadActiveConversation, loadConversations, loadActiveUser, updateActiveUser, updateActiveConversation } from '../actions'

class NewConversationForm extends React.Component {
  state = {
    title: ''
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault()

    return fetch(`${API_ROOT}/conversations`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({
        title: this.state.title,
        user_id: this.props.activeUser.id,
        user: this.props.activeUser
      })
    })
      .then(res => res.json())
      .then(conversation =>{
        console.log("props within loading conversations ",this.props);
        console.log("The returned conversation ", conversation);
        this.props.loadConversations()
        this.props.updateActiveConversation(conversation)
        this.props.updateActiveUser(conversation.users[0])
      })
      .then(()=> {
        this.props.history.push("/glowchat/:id")
      })
  };

  render = () => {
    return (
      <div className="newConversationForm">
        <form onSubmit={this.handleSubmit}>
          <label>New Competition:</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  };
}

const mapStateToProps = state =>({
  activeUser: state.activeUser,
  conversations: state.conversations
})

export default connect(mapStateToProps, {loadActiveConversation, loadConversations, loadActiveUser, updateActiveUser, updateActiveConversation})(NewConversationForm);
