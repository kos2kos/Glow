import React from 'react';
import NewMessageForm from './NewMessageForm';
import Message from './Message'
import EmojiList from './EmojiList'

const MessagesArea = ({
  conversation: { id, title, messages },
}) => {
  return (
    <div className="messagesArea" style={{textAlign: "center"}}>
      <h2>{title}</h2>
      <ul>{orderedMessages(messages)}</ul>
      <NewMessageForm conversation_id={id} />
    </div>
  );
};

export default MessagesArea;

// helpers

const orderedMessages = messages => {
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );
  return sortedMessages.map(message => {
    return <ul> <Message key={message.id} thisMessage={message}/></ul>
  });
};
