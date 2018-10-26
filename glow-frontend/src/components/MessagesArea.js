import React from 'react';
import NewMessageForm from './NewMessageForm';
import Message from './Message'
import EmojiList from './EmojiList'
import {connect} from 'react-redux'

const MessagesArea = (props) => {



  const orderedMessages = messages => {
    console.log("messages", messages);
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
      console.log("Sorted message:", message);
      return <ul style={{padding: "8px"}}>
        <Message
          test={props.activeConversation}
        cssProps={messageCss(message)}
        submitEmoji={props.submitEmoji}
        key={message.id} thisMessage={message}/> </ul>
    })
  }
    console.log("Props from Message Area,", props.activeConversation);
  return (
    <div className="messagesArea" style={{textAlign: "center"}}>
      <h2>{props.conversation.title}</h2>
      <ul style={{
        width: "500px",
        height: "380px",
        padding: "0px",
        overflow: "scroll",
        "overflow-x": "hidden"}}>
        {orderedMessages(props.activeConversation.messages)}</ul>
      <NewMessageForm conversation_id={props.conversation.id} />
    </div>
  );
};

const mapStateToProps = state => ({
  activeUser: state.activeUser,
  activeConversation: state.activeConversation,
  messages: state.activeConversation.messages
})

export default connect(mapStateToProps,null)(MessagesArea);

// helpers
