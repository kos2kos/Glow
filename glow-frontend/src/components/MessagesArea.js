import React from 'react';
import NewMessageForm from './NewMessageForm';
import Message from './Message'
import EmojiList from './EmojiList'

const MessagesArea = (props) => {

  const orderedMessages = messages => {
    const sortedMessages = messages.sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );
    return sortedMessages.map(message => {
      return <ul> <Message
        updateConversation={props.updateConversation}
        submitEmoji={props.submitEmoji}
        key={message.id} thisMessage={message}/></ul>
    });
  };

  return (
    <div className="messagesArea" style={{textAlign: "center"}}>
      <h2>{props.conversation.title}</h2>
      <ul>{orderedMessages(props.conversation.messages)}</ul>
      <NewMessageForm conversation_id={props.conversation.id} />
    </div>
  );
};

export default MessagesArea;

// helpers
