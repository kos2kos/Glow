import React from 'react';
import { API_ROOT, HEADERS } from '../constants';
import EmojiList from './EmojiList'
import { DirectUpload } from "activestorage"
import {  connect } from 'react-redux';
import { submitMessage } from '../actions'
class NewMessageForm extends React.Component {
  state = {
    text: '',
    image: "no image",
    conversation_id: this.props.conversation_id
  };

  componentWillReceiveProps = nextProps => {
    this.setState({ conversation_id: nextProps.conversation_id });
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleFile = (event) =>{
    const imageData = new FormData()
    imageData.append("jpg", event.target.files[0])
    console.log(imageData);
    console.log(this.state);
    this.setState({image: event.target.files[0]}, )
    // debugger

  }

  handleSubmit = e => {
    e.preventDefault();
    const imageData = new FormData()

    imageData.append('user_id', this.props.activeUser.id)
    imageData.append("image",this.state.image)
    imageData.append("text", this.state.text)
    imageData.append("conversation_id", this.props.conversation_id)
    this.props.submitMessage(imageData, this.props.activeUser.id)
    this.setState({ text: '' });

  };


  render = () => {
    return (
      <div className="newMessageForm">
        <form onSubmit={this.handleSubmit}>
          <label>New Message:</label>
          <br />
        <input type="file"
          onChange={this.handleFile}
          accept="image/*"
          capture
          />
          <br />

        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  };
}

  const mapStateToProps = state => ({
    activeUser: state.activeUser
  })

export default connect(mapStateToProps, {submitMessage})(NewMessageForm)
