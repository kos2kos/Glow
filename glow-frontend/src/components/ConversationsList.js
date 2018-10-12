import React from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
import NewConversationForm from './NewConversationForm';
import MessagesArea from './MessagesArea';
import Cable from './Cable';

class ConversationsList extends React.Component {
  state = {
    conversations: [],
    activeConversation: null
  };

  componentDidMount = () => {
    fetch(`${API_ROOT}/conversations`)
      .then(res => res.json())
      .then(conversations => this.setState({ conversations }));
  };

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


  checkActionCable = (conversation) => {
    console.log("Action Cable conversation is...", conversation);
  }

  handleClick = id => {
    this.setState({ activeConversation: id });
  };

  handleReceivedConversation = response => {
    const { conversation } = response;
    this.setState({
      conversations: [...this.state.conversations, conversation]
    });
  };

  handleReceivedMessage = response => {
    const { message } = response;
    console.log(message);
    const conversations = [...this.state.conversations];
    const conversation = conversations.find(
      conversation => conversation.id === message.conversation_id
    );
    const foundMessage = conversation.messages.find(findMessage => findMessage.id === message.id)
    // console.log(this.findAndReplace(message, conversation.messages));
    console.log("Finding message  ", foundMessage);
    if(foundMessage){
      conversation.messages = this.findAndReplace(message, conversation.messages)
    } else {
      conversation.messages = [...conversation.messages, message]
    }

    this.setState({ conversations });
  };

  findAndReplace = (message, conversation_messages) => {
    console.log(conversation_messages);

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
    const { conversations, activeConversation } = this.state;
    return (
      <div className="conversationsList" style={{textAlign: "center"}}>
        <ActionCable
          checkActionCable={this.checkActionCable(this.state)}
          channel={{ channel: 'ConversationsChannel' }}
          onReceived={this.handleReceivedConversation}
        />
        {this.state.conversations.length ? (
          <Cable
            conversations={conversations}
            handleReceivedMessage={this.handleReceivedMessage}
          />
        ) : null}
        <h2>Conversations</h2>
        <ul>{mapConversations(conversations, this.handleClick)}</ul>
        <NewConversationForm />
        {activeConversation ? (

          <MessagesArea
            updateConversation={this.updateConversation}
            submitEmoji={this.submitEmoji}
            conversation={findActiveConversation(
              conversations,
              activeConversation
            )}
          />
        ) : null}
      </div>
    );
  };
}

export default ConversationsList;

// helpers

const findActiveConversation = (conversations, activeConversation) => {
  return conversations.find(
    conversation => conversation.id === activeConversation
  );
};

const mapConversations = (conversations, handleClick) => {
  return conversations.map(conversation => {
    return (
      <ul key={conversation.id} onClick={() => handleClick(conversation.id)}>
        {conversation.title}
      </ul>
    );
  });
};
