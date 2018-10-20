import React from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
import NewConversationForm from './NewConversationForm';
import MessagesArea from './MessagesArea';
import Cable from './Cable';

import { connect } from 'react-redux';
import { loadActiveConversation, addConversation, addMessage } from '../actions'

class ConversationsList extends React.Component {
  // componentDidMount = () => {
  //   fetch(`${API_ROOT}/conversations`)
  //     .then(res => res.json())
  //     .then(conversations => this.setState({ conversations }));
  // };

  // Nkosi, we moved state to redux, now you must use dispatch in place of all the setStates. Good Luck...

  updateConversation = (responseObj) => {
    console.log("update conversation", responseObj);
    console.log("conversation before filter, ", this.state.conversations);

    let updatedConversation = this.state.conversations.map(conversation => {
      if (conversation.id === responseObj.conversation_id) {
        conversation.messages.map(message => {
          if (message.id === responseObj.id) {
            message.emojis = responseObj.emojis
          }
        })
      }
        return conversation
    })
    this.setState({conversations: updatedConversation})
  }


  handleClick = id => {
    this.props.loadActiveConversation(id, this.props.conversations)
    
  };

  handleReceivedConversation = response => {
    const { conversation } = response;
    this.props.addConversation(this.props.conversations, conversation)
  };

  handleReceivedMessage = response => {
    const { message } = response;

    const conversations = [...this.props.conversations];
    const conversation = conversations.find(
      conversation => conversation.id === message.conversation_id
    );

    const foundMessage = conversation.messages.find(findMessage => findMessage.id === message.id)

    if(foundMessage){
      conversation.messages = this.findAndReplace(message, conversation.messages)
    } else {
      conversation.messages = [...conversation.messages, message]
    }
    this.props.addMessage(message, this.props.conversations)
    this.setState({ conversations });
  };

  findAndReplace = (message, conversation_messages) => {
    let newConvo = conversation_messages.map(convoMessage => {
      if (convoMessage.id === message.id){
        convoMessage.emojis = message.emojis
        return convoMessage
      }
      return convoMessage
    })
    return newConvo
  }

  render = () => {
    console.log(this.props)
    console.log("this is state," ,this.state);
    return (
      <div className="conversationsList" style={{textAlign: "center"}}>
        <h1>Current User: {this.props.activeUser.username}</h1>
        <h1>{this.props.activeUser.username}'s Points: {this.props.activeUser.points}</h1>
        <ActionCable
          channel={{ channel: 'ConversationsChannel' }}
          onReceived={this.handleReceivedConversation}
        />
      {this.props.conversations.length ? (
          <Cable
            conversations={this.props.conversations}
            handleReceivedMessage={this.handleReceivedMessage}
          />
        ) : null}
        <h2>Conversations</h2>
        <ul>
          {mapConversations(this.props.conversations, this.handleClick)}
        </ul>
        <NewConversationForm />
        {
          this.props.activeConversation ? (
            <MessagesArea
              updateConversation={this.updateConversation}
              submitEmoji={this.submitEmoji}
              conversation={this.props.activeConversation}
            />
          ) :
            null
        }
      </div>
    );
  };
}


// helpers



const mapConversations = (conversations, handleClick) => {
  return conversations.map(conversation => {
    return (
      <ul key={conversation.id} onClick={() => handleClick(conversation.id)}>
        {conversation.title}
      </ul>
    );
  });
};

const mapStateToProps = state => ({
  conversations: state.conversations,
  activeConversation: state.activeConversation,
  activeUser: state.activeUser
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, {loadActiveConversation, addConversation, addMessage})(ConversationsList);
