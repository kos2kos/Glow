import React from 'react';
import NewMessageForm from './NewMessageForm';
import Message from './Message'
import EmojiList from './EmojiList'
import {connect} from 'react-redux'

const MessagesArea = (props) => {



  const orderedMessages = messages => {
    const sortedMessages = messages.sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );
    const messageCss = (message) =>{
      // debugger
      console.log("message user ", message.user);
      console.log("props.activeUser");
      if (message.user.username === props.activeUser.username){

        return ["message to", "display-left", "display-button-right", "img-display-left"]
      } else {
        return ["message from", "display-right", "display-button-left", "img-display-right"]
      }
    }
    return sortedMessages.map(message => {
      return <ul> <Message
        cssProps={messageCss(message)}
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

const mapStateToProps = state => ({
  activeUser: state.activeUser
})

export default connect(mapStateToProps,null)(MessagesArea);

// helpers
