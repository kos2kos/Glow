import React from 'react';
import { API_ROOT, HEADERS } from '../constants';

class NewConversationForm extends React.Component {
  state = {
    title: '',
    username: ""
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleUserName = e => {
    this.setState({username: e.target.value})
  }


  handleSubmit = e => {
    e.preventDefault()
    fetch(`${API_ROOT}/conversations`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({
        title: this.state.title,
        username: this.state.username
      })
    });
    this.setState({ title: '' });
  };

  render = () => {
    console.log(this.state);
    return (
      <div className="newConversationForm">
        <form onSubmit={this.handleSubmit}>
          <label>New Conversation:</label>
            <br/>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
        <br/>
        <br/>
        <label>UserName:</label>
          <br/>
          <br/>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUserName}
          />
          <input type="submit" />
        </form>
      </div>
    );
  };
}

export default NewConversationForm;
