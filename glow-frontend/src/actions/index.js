import { API_ROOT } from '../constants';
import { fetchConversations } from '../adapters/conversationAdapter'


export const loadActiveConversation = (id, conversations) => {
  const activeConversation = conversations.find(
    conversation => conversation.id === id
  )
  return {type: "ACTIVE_CONVERSATION", payload: activeConversation}
}


export const addMessage = (message, conversations)=> {

  const conversation = conversations.find(
    conversation => conversation.id === message.conversation_id
  );
  const foundMessage = conversation.messages.find(findMessage => findMessage.id === message.id)

  if(foundMessage){
    conversation.messages = findAndReplace(message, conversation.messages)
  } else {
    conversation.messages = [...conversation.messages, message]
  }
  return {type: "ADD_MESSAGE", payload: conversations}
}



export const addConversation = (prevConvo, conversation) =>{
  return {type: "ADD_CONVERSATION", payload: [...prevConvo,conversation]}
}

export const loadConversations = () => {
  return (dispatch) => {
    fetchConversations()
    .then(conversations=> {
      dispatch(setConversations(conversations))
    })
  }
}

const setConversations = (conversations) => {
  return {
    type: "LOAD_CONVERSATION",
    payload: {
      conversations
    }
  }
}

const loadGroupChat = (messages) => {
  return {
    type: "LOAD_GROUPCHAT",
    payload: {
      messages
    }
  }
}

const findAndReplace = (message, conversation_messages) => {
  let newConvo = conversation_messages.map(convoMessage => {
    if (convoMessage.id === message.id){
      convoMessage.emojis = message.emojis
      return convoMessage
    }
    return convoMessage
  })
  return newConvo
}
