import { API_ROOT } from '../constants';
import { fetchConversations } from '../adapters/conversationAdapter'


export const loadActiveConversation = (id, conversations) => {
  const activeConversation = conversations.find(
    conversation => conversation.id === id
  )
  return {type: "ACTIVE_CONVERSATION", payload: activeConversation}
}


export const handleReceivedMessage = (response)=> {
  return " "
}

export const addConversation = (prevConvo, conversation) =>{
  console.log("addConversation", prevConvo);
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
